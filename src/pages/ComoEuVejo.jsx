import { useEffect, useRef, useState } from "react";
import "../styles/comoEuVejo.css";

const frases = [
  "olha você vei",
  "eu amo te ver assim",
  "esse seu sorriso acaba comigo",
  "e não é só pq você é linda",
  "eu admiro tanto a pessoa que você é",
  "queria que você conseguisse ver isso pelos meus olhos",
];

function ComoEuVejo({ onContinuar }) {
  const [fraseAtual, setFraseAtual] = useState(0);
  const [bloqueado, setBloqueado] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = false;
    video.volume = 1;

    const iniciarVideo = async () => {
      try {
        await video.play();
      } catch {
        setBloqueado(true);
      }
    };

    iniciarVideo();
  }, []);

  function continuar() {
    if (fraseAtual < frases.length - 1) {
      setFraseAtual((atual) => atual + 1);
    } else {
      onContinuar();
    }
  }

  async function liberarVideo() {
    const video = videoRef.current;

    if (!video) return;

    video.muted = false;
    video.volume = 1;

    try {
      await video.play();
      setBloqueado(false);
    } catch {
      setBloqueado(true);
    }
  }

  return (
    <main className="como-eu-vejo">
      <video
        ref={videoRef}
        className="como-eu-vejo-video"
        src="/videos/como-eu-vejo.mp4"
        playsInline
        preload="auto"
      />

      <div className="como-eu-vejo-overlay" />

      {bloqueado && (
        <button
          className="liberar-video"
          onClick={liberarVideo}
        >
          toca aqui rapidinho
        </button>
      )}

      <section className="como-eu-vejo-conteudo">
        <p className="como-eu-vejo-mini">
          uma coisa que eu queria que você soubesse
        </p>

        <p
          key={fraseAtual}
          className="como-eu-vejo-frase"
        >
          {frases[fraseAtual]}
        </p>

        <button onClick={continuar}>
          {fraseAtual === frases.length - 1
            ? "continua →"
            : "vai →"}
        </button>
      </section>
    </main>
  );
}

export default ComoEuVejo;
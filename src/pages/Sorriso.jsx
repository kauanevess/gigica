import { useState } from "react";
import "../styles/sorriso.css";

const momentos = [
  {
    foto: "/fotos/sorriso-1.jpg",
    pequeno: "tá, primeiro uma coisa",
    texto: "seu sorriso.",
  },
  {
    foto: "/fotos/sorriso-2.jpg",
    texto: "cara, olha esse sorriso",
  },
  {
    foto: "/fotos/sorriso-3.jpg",
    texto: "é impossível eu não amar ver você assim",
  },
];

function Sorriso({ onContinuar }) {
  const [fotoAtual, setFotoAtual] = useState(0);

  const momento = momentos[fotoAtual];
  const ultima = fotoAtual === momentos.length - 1;

  function proxima() {
    if (!ultima) {
      setFotoAtual((atual) => atual + 1);
    } else {
      onContinuar();
    }
  }

  return (
    <main className="sorriso">
      <div className="foto-container">
        <img
          key={momento.foto}
          src={momento.foto}
          alt=""
          className="foto-sorriso"
        />

        <div className="sorriso-overlay" />

        <section
          key={fotoAtual}
          className="sorriso-conteudo"
        >
          {momento.pequeno && (
            <p className="sorriso-pequeno">
              {momento.pequeno}
            </p>
          )}

          <h1 className={fotoAtual === 0 ? "titulo-sorriso" : "frase-sorriso"}>
            {momento.texto}
          </h1>

          <button onClick={proxima}>
            {ultima ? "próxima →" : "continua →"}
          </button>
        </section>
      </div>
    </main>
  );
}

export default Sorriso;
import { useState } from "react";
import "../styles/orgulho.css";

const momentos = [
  {
    foto: "/fotos/orgulho-1.jpg",
    texto: "eu lembro desse dia até hoje",
  },
  {
    foto: "/fotos/orgulho-2.jpg",
    texto: "eu olhava pra você e só conseguia sentir orgulho",
  },
  {
    foto: "/fotos/orgulho-3.jpg",
    texto: "pq eu sei que não foi fácil chegar até aqui",
  },
  {
    foto: "/fotos/orgulho-4.jpg",
    texto: "e eu sei que você ainda vai conquistar mt coisa",
  },
];

function Orgulho({ onContinuar }) {
  const [momento, setMomento] = useState(0);

  const ultimo = momento === momentos.length - 1;

  function proximo() {
    if (!ultimo) {
      setMomento((atual) => atual + 1);
    } else {
      onContinuar();
    }
  }

  return (
    <main className="orgulho">
      <img
        key={momentos[momento].foto}
        src={momentos[momento].foto}
        alt=""
        className="orgulho-foto"
      />

      <div className="orgulho-overlay" />

      <section className="orgulho-conteudo">
        <span>
          {String(momento + 1).padStart(2, "0")} / 04
        </span>

        <p key={momentos[momento].texto}>
          {momentos[momento].texto}
        </p>

        {ultimo && (
          <small>
            e eu quero estar aqui vendo tudo.
          </small>
        )}

        <button onClick={proximo}>
          {ultimo ? "continua →" : "→"}
        </button>
      </section>
    </main>
  );
}

export default Orgulho;
import { useState } from "react";
import "../styles/porqueVoce.css";

const respostas = [
  {
    numero: "01",
    texto:
      "pq eu amo o jeito que você consegue ser séria e 2 minutos depois tá fazendo alguma palhaçada",
  },
  {
    numero: "02",
    texto:
      "pq você se importa de verdade com as pessoas que ama",
  },
  {
    numero: "03",
    texto:
      "pq eu admiro o tanto que você corre atrás das suas coisas",
  },
  {
    numero: "04",
    texto:
      "pq eu sou completamente apaixonado nesse seu sorriso",
  },
  {
    numero: "05",
    texto:
      "pq eu amo até essas suas manias que você acha que eu nem percebo",
  },
  {
    numero: "06",
    texto:
      "e pq quanto mais eu te conheço, mais coisa eu encontro pra amar em você",
  },
];

function PorqueVoce({ onContinuar }) {
  const [abertas, setAbertas] = useState([]);

  function abrir(index) {
    if (!abertas.includes(index)) {
      setAbertas((atuais) => [...atuais, index]);
    }
  }

  const terminou = abertas.length === respostas.length;

  return (
    <main className="porque-voce">
      <section className="porque-topo">
        <p>você vive me perguntando</p>

        <h1>
          “mas pq
          <br />
          você me
          <br />
          escolheu?”
        </h1>

        <p className="porque-sub">
          então vou tentar responder
        </p>
      </section>

      <section className="respostas">
        {respostas.map((resposta, index) => {
          const aberta = abertas.includes(index);

          return (
            <button
              className={`resposta ${aberta ? "aberta" : ""}`}
              key={resposta.numero}
              onClick={() => abrir(index)}
            >
              <span className="resposta-numero">
                {resposta.numero}
              </span>

              <span className="resposta-texto">
                {aberta ? resposta.texto : "toca aqui"}
              </span>

              <span className="resposta-sinal">
                {aberta ? "✓" : "+"}
              </span>
            </button>
          );
        })}
      </section>

      {terminou && (
        <div className="porque-final">
          <p>
            acho que é por isso que eu nunca sei responder
            quando você pergunta.
            <br />
            <br />
            não tem uma coisa só.
          </p>

          <button onClick={onContinuar}>
            continua →
          </button>
        </div>
      )}
    </main>
  );
}

export default PorqueVoce;
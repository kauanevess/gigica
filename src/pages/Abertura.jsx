import "../styles/abertura.css";

function Abertura({ onContinuar }) {
  return (
    <main className="abertura">
      <div className="escurecer" />

      <section className="conteudo">
        <p className="oi">oi meu amor</p>

        <h1>
          eu sei que você
          <br />
          deve tá pensando
        </h1>

        <p className="pensamento">
          “oq esse menino inventou agora”
        </p>

        <div className="mensagem">
          <p>e sim, eu inventei outra coisa</p>
          <p>mas vai vendo primeiro</p>
        </div>

        <button onClick={onContinuar}>
          vai logo <span>→</span>
        </button>
      </section>
    </main>
  );
}

export default Abertura;
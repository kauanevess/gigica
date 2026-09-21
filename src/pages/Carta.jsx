import "../styles/carta.css";

function Carta() {
  function abrirCarta() {
    window.open("/carta.pdf", "_blank");
  }

  return (
    <main className="carta">
      <div className="carta-conteudo">
        <p className="carta-mini">
          tá, só falta uma coisa
        </p>

        <h1>
          eu deixei uma
          <br />
          coisa pra
          <br />
          você.
        </h1>

        <p className="carta-texto">
          essa eu queria te falar com mais calma
        </p>

        <div className="carta-botoes">
          <button
            className="abrir-carta"
            onClick={abrirCarta}
          >
            abre quando quiser →
          </button>
        </div>
      </div>

      <span className="carta-assinatura">
        do seu kauã
      </span>
    </main>
  );
}

export default Carta;
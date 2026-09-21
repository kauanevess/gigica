import "../styles/jeitinho.css";

function Jeitinho({ onContinuar }) {
  return (
    <main className="jeitinho">
      <div className="jeitinho-topo">
        <p>agora infelizmente temos que falar disso</p>
        <h1>suas palhaçadas</h1>
      </div>

      <div className="mural">
        <img
          className="foto foto-1"
          src="/fotos/jeito-1.jpg"
          alt=""
        />

        <img
          className="foto foto-2"
          src="/fotos/jeito-2.jpg"
          alt=""
        />

        <div className="video-box">
          <video
            className="video-fundo"
            src="/videos/giovanna.mp4"
            muted
            playsInline
            preload="metadata"
          />

          <video
            className="video-principal"
            src="/videos/giovanna.mp4"
            controls
            playsInline
            preload="metadata"
          />
        </div>

        <img
          className="foto foto-3"
          src="/fotos/jeito-3.jpg"
          alt=""
        />
      </div>

      <div className="coisas-dela">
        <span>pica-pau</span>
        <span>“oq é isso?”</span>
        <span>ai ai...</span>
        <span>“vai cagar kauã neves”</span>
      </div>

      <button
        className="jeitinho-proximo"
        onClick={onContinuar}
      >
        chega disso →
      </button>
    </main>
  );
}

export default Jeitinho;
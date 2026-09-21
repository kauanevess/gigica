import "../styles/jeitos.css";

const fotos = [
  "/fotos/jeitos-1.jpg",
  "/fotos/jeitos-2.jpg",
  "/fotos/jeitos-3.jpg",
  "/fotos/jeitos-4.jpg",
  "/fotos/jeitos-5.jpg",
];

function Jeitos({ onContinuar }) {
  return (
    <main className="jeitos">
      <div className="jeitos-topo">
        <p>eu precisava colocar isso aqui</p>

        <h1>
          você já mudou
          <br />
          umas 500 vezes
        </h1>

        <p className="jeitos-sub">
          e eu gostei de você em todas elas
        </p>
      </div>

      <div className="carrossel">
        {fotos.map((foto, index) => (
          <div className="card-jeito" key={foto}>
            <img src={foto} alt="" />

            <span>
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>

      <div className="jeitos-rodape">
        <p>arrasta pro lado →</p>

        <button onClick={onContinuar}>
          continua →
        </button>
      </div>
    </main>
  );
}

export default Jeitos;
import "../styles/momentos.css";

const fotos = [
  "/fotos/momento-1.jpg",
  "/fotos/momento-2.jpg",
  "/fotos/momento-3.jpg",
  "/fotos/momento-4.jpg",
  "/fotos/momento-5.jpg",
  "/fotos/momento-6.jpg",
  "/fotos/momento-7.jpg",
  "/fotos/momento-8.jpg",
  "/fotos/momento-9.jpg",
  "/fotos/momento-10.jpg",
];

function Momentos({ onContinuar }) {
  return (
    <main className="momentos">
      <header className="momentos-topo">
        <p>e aí tem nós dois</p>

        <h1>
          um pouquinho
          <br />
          da gente
        </h1>
      </header>

      <section className="momentos-grid">
        {fotos.map((foto, index) => (
          <div
            className={`momento momento-${index + 1}`}
            key={foto}
          >
            <img src={foto} alt="" />
          </div>
        ))}
      </section>

      <section className="momentos-final">
        <p>
          e ainda falta
          <br />
          tanta foto aqui
        </p>

        <button onClick={onContinuar}>
          só falta uma coisa →
        </button>
      </section>
    </main>
  );
}

export default Momentos;
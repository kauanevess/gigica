import { useState } from "react";

import Abertura from "./pages/Abertura";
import Sorriso from "./pages/Sorriso";
import Jeitinho from "./pages/Jeitinho";
import Jeitos from "./pages/Jeitos";
import ComoEuVejo from "./pages/ComoEuVejo";
import Orgulho from "./pages/Orgulho";
import PorqueVoce from "./pages/PorqueVoce";
import Momentos from "./pages/Momentos";
import Carta from "./pages/Carta";

function App() {
  const [pagina, setPagina] = useState("abertura");

  return (
    <>
      {pagina === "abertura" && (
        <Abertura onContinuar={() => setPagina("sorriso")} />
      )}

      {pagina === "sorriso" && (
        <Sorriso onContinuar={() => setPagina("jeitinho")} />
      )}

      {pagina === "jeitinho" && (
        <Jeitinho onContinuar={() => setPagina("jeitos")} />
      )}

      {pagina === "jeitos" && (
        <Jeitos onContinuar={() => setPagina("como-eu-vejo")} />
      )}

      {pagina === "como-eu-vejo" && (
        <ComoEuVejo onContinuar={() => setPagina("orgulho")} />
      )}
      {pagina === "orgulho" && (
        <Orgulho onContinuar={() => setPagina("porque-voce")} />
      )}
      {pagina === "porque-voce" && (
        <PorqueVoce onContinuar={() => setPagina("momentos")} />
      )}

      {pagina === "momentos" && (
        <Momentos onContinuar={() => setPagina("carta")} />
      )}
      {pagina === "carta" && (
        <Carta onContinuar={() => setPagina("final")} />
      )}
    </>
  );
}

export default App;
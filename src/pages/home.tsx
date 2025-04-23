import { useState } from "react";
import { DesabafoForm } from "../components/DesabafoForm";
import { RespostaBox } from "../components/RespostaBox";

export const Home = () => {
  const [resposta, setResposta] = useState("");

  return (
    <div className="app-container">
      <h1>Escute.Me</h1>
      <DesabafoForm onResposta={setResposta} />
      <RespostaBox resposta={resposta} />
    </div>
  );
};

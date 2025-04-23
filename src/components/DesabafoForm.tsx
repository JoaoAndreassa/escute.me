import { useState } from "react";
import { sendDesabafo } from "../services/sendDesabafo";

interface DesabafoFormProps {
  onResposta: (resposta: string) => void;
}

export const DesabafoForm = ({ onResposta }: DesabafoFormProps) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEnviar = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const resposta = await sendDesabafo(input);
    onResposta(resposta);
    setLoading(false);
    setInput("");
  };

  return (
    <div>
      <textarea
        placeholder="Desabafe aqui..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleEnviar}
        disabled={loading || input.trim() === ""}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </div>
  );
};

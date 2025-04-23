import { useEffect, useState } from "react";

interface RespostaBoxProps {
  resposta: string;
}

export const RespostaBox = ({ resposta }: RespostaBoxProps) => {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (resposta) {
      setVisivel(false);
      setTimeout(() => setVisivel(true), 50);
    }
  }, [resposta]);

  if (!resposta || !visivel) return null;

  return (
    <div className="resposta">
      <strong>Resposta acolhedora:</strong>
      <p>{resposta}</p>
    </div>
  );
};

  
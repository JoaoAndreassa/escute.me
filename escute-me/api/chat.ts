import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req: Request): Promise<Response> {
    const { message } = await req.json();
  
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4", // ou "gpt-3.5-turbo" se quiser economizar
        messages: [
          {
            role: "system",
            content:
              "Você é um amigo virtual acolhedor, sensível e gentil. Sua missão é confortar e ouvir quem está passando por um momento difícil. Responda com carinho, empatia e sensibilidade.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });
  
    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;
  
    return new Response(JSON.stringify({ reply }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  }
  
  
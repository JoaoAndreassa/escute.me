export const sendDesabafo = async (mensagem: string): Promise<string> => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: mensagem }),
    });
  
    const data = await res.json();
    return data.reply;
  };
  
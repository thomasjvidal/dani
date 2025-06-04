const express = require("express");
const app = express();
app.use(express.json());
app.post("/agendar", (req, res) => {
  const { nome, email, whatsapp, tipoConsulta, tipoAtendimento, data, horario } = req.body;

  // Simulando processamento do agendamento
  console.log("Novo agendamento recebido:");
  console.log({ nome, email, whatsapp, tipoConsulta, tipoAtendimento, data, horario });

  // Aqui você futuramente integrará:
  // - Google Calendar (API)
  // - Google Meet (link automático)
  // - Envio de e-mail com o link
  // - Confirmação por Pix

  res.json({
    status: "ok",
    mensagem: "Consulta agendada com sucesso!",
    link_simulado_meet: "https://meet.google.com/abc-defg-hij"
  });
});

app.get("/", (req, res) => {
  res.send("Servidor da Dra. Daniela está no ar!");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

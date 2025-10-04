import express from "express"
import fetch from "node-fetch"

const app = express()
app.use(express.json())

const VERIFY_TOKEN = "123"
const WHATSAPP_TOKEN = "EAALMNFV0edkBPlwkUIpWxtlFA7E8n9Harpop3DU7xztflygT0OzvWuAxSfD183ftCtMmJZCvZCj2qZABiakeghyF4Rl37w8hZCPLlxLsd87ce565ngUZAZCxf3EuzySs0vubQPae8N1wFW0mAZA4bdWRZByrtfZAF1nZCjBy4i7YYCW57z4ZAhpjGZBCqymkfUWuikeNWbHH7LxfqbyoYrlRTKZCSKchqYAiekG0GHtCtkqRoaC5ZCpwZDZD"
const GEMINI_API_KEY = "AIzaSyDws_lwp4wHqPiqOW99LS9wR-VfHIvQfOA"

// 1) Verificação do Webhook (Meta chama quando conecta)
app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"]
  const token = req.query["hub.verify_token"]
  const challenge = req.query["hub.challenge"]

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    res.status(200).send(challenge)
  } else {
    res.sendStatus(403)
  }
})

// 2) Receber mensagens do WhatsApp
app.post("/webhook", async (req, res) => {
  const entry = req.body.entry?.[0]
  const changes = entry?.changes?.[0]
  const messages = changes?.value?.messages

  if (messages) {
    const msg = messages[0]
    const from = msg.from // número do usuário
    const text = msg.text?.body // mensagem enviada

    console.log("Usuário:", text)

    // 3) Chamar Gemini API
    const geminiRes = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text }] }]
        })
      }
    )

    const geminiData = await geminiRes.json()
    const reply = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || "Não entendi 🤖"

    // 4) Responder no WhatsApp
    await fetch(`https://graph.facebook.com/v20.0/me/messages`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${WHATSAPP_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: from,
        text: { body: reply }
      })
    })
  }

  res.sendStatus(200)
})

app.listen(3000, () => console.log("Bot rodando na porta 3000 🚀"))

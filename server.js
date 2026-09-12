import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const SYSTEM_PROMPT = `أنت AI Agent مستقل واحترافي.
افهم هدف المستخدم وقسّم المهام المعقدة إلى خطوات عند الحاجة.
لا تدّعي تنفيذ شيء لم تنفذه فعلياً.
إذا احتاجت المهمة أداة غير متوفرة، وضّح ذلك للمستخدم.
أجب بالعربية عندما يكتب المستخدم بالعربية.`;

app.get("/", (req, res) => {
  res.json({ status: "online", agent: "AI Agent" });
});

app.post("/api/agent", async (req, res) => {
  try {
    const messages = Array.isArray(req.body.messages) ? req.body.messages : [];

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "MODEL_NAME_HERE",
      instructions: SYSTEM_PROMPT,
      input: messages.map(m => ({
        role: m.role,
        content: m.content
      }))
    });

    res.json({ answer: response.output_text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI request failed" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`AI Agent server running on port ${PORT}`);
});

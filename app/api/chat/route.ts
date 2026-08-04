import { NextResponse } from "next/server";
import OpenAI from "openai";
import fs from "fs";
import path from "path";

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

const historyFile = path.join(process.cwd(), "data", "chat-history.json");

function saveMessage(role: string, content: string) {
  const dir = path.dirname(historyFile);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let history: any[] = [];

  if (fs.existsSync(historyFile)) {
    history = JSON.parse(fs.readFileSync(historyFile, "utf8"));
  }

  history.push({
    role,
    content,
    createdAt: new Date().toISOString(),
  });

  fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    saveMessage("user", message);

    const completion = await openai.chat.completions.create({
    model: "openai/gpt-oss-20b:free",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    const reply =
      completion.choices[0].message.content ?? "No response from AI.";

    saveMessage("assistant", reply);

    return NextResponse.json({
      reply,
    });
  } catch (error: any) {
    console.error("OpenRouter Error:", error);

    return NextResponse.json(
      {
        error: error.message || "Failed to generate response.",
      },
      { status: 500 }
    );
  }
}

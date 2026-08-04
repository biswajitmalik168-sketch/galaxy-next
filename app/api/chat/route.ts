import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

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

    return NextResponse.json({ reply });
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

import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-r1:free",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      reply:
        completion.choices[0].message.content ?? "No response from AI.",
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

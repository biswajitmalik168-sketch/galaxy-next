const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

async function main() {
  const models = await ai.models.list();
  console.log(models);
}

main().catch(console.error);

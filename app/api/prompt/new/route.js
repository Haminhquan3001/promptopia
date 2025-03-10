import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
    
  }
  try {
    await connectToDB();

    const newPrompt = new Prompt({
      creator: userId,
      prompt: prompt,
      tag: tag,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new Prompt", { status: 500 });
  }
};

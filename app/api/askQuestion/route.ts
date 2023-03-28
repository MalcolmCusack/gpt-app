import queryChatGPT from "@/lib/queryApi";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";
import { log } from "console";

type Data = {
  answer: string;
};

export async function POST(req: Request) {
  const { prompt, chatId, model, session } = await req.json();

  if (!prompt) {
    return new Response("Please provide a prompt.", {
      status: 400,
    });
  }

  const response = await queryChatGPT(prompt, chatId, model);
  const message: Message = {
    text: response || "ChatGPT was unable to find an answer for that",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: "",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  return new Response(JSON.stringify({ answer: message.text }), {
    status: 200,
  });
}

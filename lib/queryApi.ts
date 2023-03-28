import { log } from "console";
import openai from "./chatgpt";

const queryChatGPT = async (prompt: string, chatId: string, model: string) => {
  // Could build prompt up by getting all previous chats and build up the context of the prompt using chatId

  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.5, //https://platform.openai.com/docs/api-reference/completions/create#completions/create-temperature
      //top_p: 1, //https://platform.openai.com/docs/api-reference/completions/create#completions/create-top_p
      max_tokens: 1000,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) => `Chat GPT has unable to find the answer for that. ${err.message}`
    );

  log(res);
  return res;
};

export default queryChatGPT;

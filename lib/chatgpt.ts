import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
  organization: process.env.OPEN_AI_ORG,
});

const openai = new OpenAIApi(configuration);

export default openai;

export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.";

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const DEFAULT_TEMPERATURE = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "1");

  export const DEFAULT_TOPP = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TOP_P || "1");

  export const DEFAULT_FREQUENCY_PENALTY = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_FREQUENCY_PENALTY || "0");

  export const DEFAULT_PRESENCE_PENALTY = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_PRESENCE_PENALTY || "0");

  export const DEFAULT_SEED = 
  null

export const OPENAI_API_TYPE =
  process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-03-15-preview';

export const OPENAI_ORGANIZATION =
  process.env.OPENAI_ORGANIZATION || '';

export const AZURE_DEPLOYMENT_ID =
  process.env.AZURE_DEPLOYMENT_ID || '';

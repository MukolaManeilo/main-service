import * as process from 'node:process';


export default () => ({
  userServiceUrl: process.env.USER_SERVICE_URL,
  userServicePort: process.env.USER_SERVICE_PORT,
  openaiApiKey: process.env.OPENAI_API_KEY,
  internalApiKey: process.env.INTERNAL_API_KEY,
  userApiKey: process.env.USER_API_KEY,
  port: parseInt(process.env.PORT ?? '50051', 10),
});

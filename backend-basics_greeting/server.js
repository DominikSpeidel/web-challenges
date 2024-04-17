import { createServer } from "http";

export const server = createServer((request, response) => {
  response.end("Hello, Dominik");
});

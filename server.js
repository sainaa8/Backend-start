const http = require("http");
const { open } = require("node:fs/promises");
const getWords = async () => {
  const words = [];

  const file = await open("./text.txt");
  const text = await file.readLines();
  for await (const line of text) {
    words.push(line);
  }
  return words;
};
const port = 8000;

const server = http.createServer(async (req, res) => {
  const words = await getWords();
  const newWords = words.map((el) => {
    return el.split(",");
  });
  console.log(newWords[0]);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`${newWords[0]},${newWords[1]},hioo`);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

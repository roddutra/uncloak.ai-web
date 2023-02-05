export default function handler(req, res) {
  res
    .status(200)
    .json({ answer: '{This is a sample answer from a mocked API...}' });
}

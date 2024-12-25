export default function handler(req, res) {
  const { booksNumber } = req.body;
  res.status(200).json({ message: `Updated value for: ${booksNumber}` });
}

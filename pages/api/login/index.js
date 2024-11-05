export default function handler(req, res) {
  if (req.method === 'POST') {

    const { username, password } = req.body;
    const correctUsername = "admin";
    const correctPassword = "1234";

    if (username === correctUsername && password === correctPassword) {

      res.status(200).json({ message: "Login successful!", token: "auth_token" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

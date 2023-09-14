const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

// Secret key for JWT signing (replace with a strong, secret key)
const JWT_SECRET = "your-secret-key";

// Sample user data (for testing)
const users = [{ id: 1, username: "testuser", password: "password" }];

// Login route to generate a JWT token
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  // Create a JWT token
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Protected route that requires JWT token
app.get("/protected", (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Authentication token is missing" });
  }

  try {
    // Verify the JWT token
    const decodedToken = jwt.verify(token, JWT_SECRET);
    res.json({ message: "Access granted", userId: decodedToken.userId });
  } catch (err) {
    res.status(401).json({ message: "Authentication failed" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require("express");
const app = express();

app.use(express.json());

app.post("/triangle-area", (req, res) => {
  const { base, height } = req.body;

  if (!base || !height) {
    return res
      .status(400)
      .json({ error: "Please provide both base and height." });
  }

  const area = 0.5 * base * height;
  res.json({ area });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

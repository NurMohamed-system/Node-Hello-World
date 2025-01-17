import express from "express";

const app = express();

//Define a "default root"
app.get("/", (req, res) => {
  // res.send();'<h1>This is a heading!<h1><p>Hello, World!'>
  res.sendFile(`${import.meta.dirname}/views/home.html`);
  app.use(express.static("public"));
});

// Tell the app to listen on port 300
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

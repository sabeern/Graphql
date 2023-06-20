const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 8000;
const app = express();
const cors = require("cors");
app.use(cors());
const { graphqlHTTP } = require("express-graphql");

app.use("/graphql", graphqlHTTP({}));

app.listen(8081, () => {
  console.log(`app is running on port ${port}`);
});

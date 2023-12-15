const express = require('express')
const app = express()
const port = 3000;


require("./config/database")

app.use(express.json());
app.use(require('./routes/user'));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
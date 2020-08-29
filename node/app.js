const express = require ('express')
// const { determineLanguage } = require('../pkg/ssvm_nodejs_starter_lib.js')
const { determineLanguage } = require('./testFunction.js')

const app = express()
const port = 8080
app.listen(port, () => console.log(`Server running at http://locahost:${port}/`))
app.use(express.json())

app.post('/getLang', (req, res) => {
  const text = req.body.text
  console.log(text)
  const language = determineLanguage(text)
  return res.status(200).json({
    language: language
  })
})
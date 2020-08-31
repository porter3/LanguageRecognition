const express = require('express')
const { determine_language } = require('../pkg/language_detector.js')

const cors = require('cors')
const app = express()
const options = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(options))

const port = 3000
const host = '172.17.0.2'

app.listen(port, host, () => console.log(`Server running at http://${host}:${port}/`))
app.use(express.json())

app.post('/getLang', (req, res) => {
  console.log('This endpoint is being accessed')
  const DELIMITER = '-:::-'
  const text = req.body.text
  console.log(text)
  const infoString = determine_language(text)
  const [ language, confidence, isReliable ] = infoString.split(DELIMITER)
  console.log(language + confidence + isReliable)
  return res.status(200).json({
    language: language,
    confidence: confidence,
    isReliable: isReliable
  })
})
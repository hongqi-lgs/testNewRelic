NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true
NEW_RELIC_INFINITE_TRACING_TRACE_OBSERVER_HOST="localhost:3000"

require('newrelic')
const express = require('express')

const app = express()
app.use(express.static(__dirname + '/static'));
const port = 3000

app.get('/api', (req, res) => {
  console.error('test')
  res.send('Hello World!')
})

app.get('/api/a', (req, res) => {
  console.error('test')
  res.send('a!')
})

app.get('/api/error', (req, res) => {
  console.error('test')
  // res.send('a!')
  res.send("异常")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
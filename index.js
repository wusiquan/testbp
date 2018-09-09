// https://blog.risingstack.com/how-to-debug-nodej-js-with-the-best-tools-available/
const path = require('path')
const debug = require('debug')('bigpipe')
const express = require('express')
const favicon = require('serve-favicon')
const nunjucks = require('nunjucks')
const logger = require('morgan')

const njkExtension = require('./utils/njkExtension')

const app = express()
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')))

debug('jiayou %s!', 'wusiquan')

let env = nunjucks.configure('views', {
  autoescape: true,
  express: app
})
njkExtension(env)

// 设置模板
app.set('views', path.join(__dirname, 'views'))
app.use(logger('dev'))

app.use('/hello', (req, res) => {
  res.render('hello.tpl')
})

app.use('/', (req, res) => {
  res.render('index.html')
})

app.listen(process.env.PORT || 3000, () => {
  console.log('server is running on port 3000')
})
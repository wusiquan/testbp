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


app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
// cache lookup of the view
// app.enable('view cache')

app.use(logger('dev'))

app.use('/hello', (req, res) => {
  res.render('hello.tpl')
})

app.use('/', (req, res) => {
  res.render('index.html')
})

app.listen(app.get('port'), () => {
  console.log('server is running on port ' + app.get('port'))
})
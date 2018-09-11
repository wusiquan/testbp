const debug = require('debug')('bigpipe')
const BigPipe = require('../lib/BigPipe')
const nunjucks = require('nunjucks')

class Tag {
  constructor(tagName) {
    this.tags = [ tagName ]

    this.nodeName = tagName
  }

  render(context, attrs, body) {
    const startTag = `<${this.nodeName}>`
    const fragment = (typeof body === 'function' ? body() : body) || ''
    return `${startTag}${fragment}</${this.nodeName}>`;
  }

  parse(parser, nodes, lexer) {
    // { type: 'symbol', value: 'html' ... }
    let tok = parser.nextToken()
    
    let args = parser.parseSignature(null, true)
    
    parser.advanceAfterBlockEnd(tok.value)
    
    this.compileOpenTag()
    
    let body = parser.parseUntilBlocks('end' + tok.value)
    parser.advanceAfterBlockEnd()

    this.compileCloseTag()

    return new nodes.CallExtension(this, 'run', args, [ body ])
  }

  run(context, ...args) {
    let body = args.pop()
    const html = this.render(context, args, body);
    return context.env.filters.safe(html)
    // return new nunjucks.runtime.SafeString(`<${this.tagName}>${body()}</${this.tagName}>`)
  }
}

class HtmlTag extends Tag {
  constructor() {
    super('html')
  }

  compileOpenTag(params) {
    BigPipe.compileOpenTag(BigPipe.TAG_HTML, params)
  }

  compileCloseTag() {
    BigPipe.compileCloseTag()
  }
}

class HeadTag extends Tag {
  constructor() {
    super('head')
  }

  compileOpenTag() {
    BigPipe.compileOpenTag()
  }

  compileCloseTag() {
    BigPipe.compileCloseTag()
  }
}

class TitleTag extends Tag {
  constructor() {
    super('title')
  }

  compileOpenTag() {
    BigPipe.compileOpenTag()
  }

  compileCloseTag() {
    BigPipe.compileCloseTag()
  }
}


class BodyTag extends Tag {
  constructor() {
    super('body')
  }

  compileOpenTag() {
    BigPipe.compileOpenTag()
  }

  compileCloseTag() {
    BigPipe.compileCloseTag()
  }
}

module.exports = function(env) {
  env.addExtension('htmlTag', new HtmlTag())
  env.addExtension('headTag', new HeadTag())
  env.addExtension('titleTag', new TitleTag())
  env.addExtension('bodyTag', new BodyTag())
}
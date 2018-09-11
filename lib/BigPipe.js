const uuidV4 = require('uuid/v4')

let uniqID = 0

class BigPipe {
  
  constructor() {
    /**
     * prefix for Bigpipe
     */
    this.ATTR_PREFIX = 'siquan-'
  }
  
  static _compileUniqid () {
    return uniqID++
    // return uuidV4()
  }

  static currentContext() {
    return this.context
  }

  static init() {
    let PageletContext = require('./PageletContext')
    
    this.controller = this.getController()
    this.context = new PageletContext(this.TAG_NONE)
    this.state = this.STAT_FIRST
    
    // const BIGPIPE_CONF_DIR

    // return true
  }

  static has(uniqid) {
    return this.context.children[uniqid] != null
  }

  static open(type, uniqid, params = null) {
    // console.log(type)
  }

  // 这里id是否需要考虑并发??...
  static compileOpenTag(type, params) {
    let uniqid = this._compileUniqid()
    // console.log(type)
    if (params != null) {
      BigPipe.open(type, uniqid, BigPipe.has(uniqid) ? null : this.compileParamsArray(params))
    }
  }

  static close() {

  }

  static compileCloseTag() {
    
  }
}

// 状态常量
BigPipe.STAT_UNINIT = 0
BigPipe.STAT_FIRST = 1
BigPipe.STAT_LOOP = 2
BigPipe.STAT_END = 3

// 标签类型常量
BigPipe.TAG_NONE = 0
BigPipe.TAG_HTML = 1
BigPipe.TAG_HEAD = 2
BigPipe.TAG_TITLE = 3
BigPipe.TAG_BODY = 4
BigPipe.TAG_PAGELET = 5

module.exports = BigPipe
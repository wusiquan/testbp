const uuidV4 = require('uuid/v4')

class BigPipe {
  
  constructor() {
    // 状态常量
    this.STAT_UNINIT = 0
    this.STAT_FIRST = 1
    this.STAT_LOOP = 2
    this.STAT_END = 3

    /**
     * prefix for Bigpipe
     */
    this.ATTR_PREFIX = 'wsq-'
  }

  static _compileUniqid () {
    return uuidV4()
  }

  static currentContext() {
    return this.context
  }

  static compileOpenTag(type, param) {
    let uniqid = this._compileUniqid()
  }

  static compileCloseTag() {
    
  }
}

// 标签类型常量
BigPipe.TAG_NONE = 0
BigPipe.TAG_HTML = 1
BigPipe.TAG_HEAD = 2
BigPipe.TAG_TITLE = 3
BigPipe.TAG_BODY = 4
BigPipe.TAG_PAGELET = 5

module.exports = BigPipe
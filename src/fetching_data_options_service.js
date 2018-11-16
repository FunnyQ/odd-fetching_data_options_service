const DEFAULT_PAGE_SIZE = 25

/**
 * 提供 parse 關於 fetching data options 的功能
 *
 * @export
 * @class FetchingDataOptionsService
 */
export default class FetchingDataOptionsService {
  static call(options) {
    let result = ''

    result += this.pagenate(options)
    result += this.sort(options)
    result += this.filter(options)
    result += this.search(options)
    result += this.tag(options)

    if (result[0] === '&') {
      result = result.substr(1)
    }

    return result
  }

  /**
   * 處理分頁選項
   *
   * @static
   * @param {Object} options
   * @returns {string}
   */
  static pagenate(options) {
    let pageNumber = options.pageNumber
    let pageSize = options.pageSize || DEFAULT_PAGE_SIZE

    if (pageNumber) {
      return `page[number]=${pageNumber}&page[size]=${pageSize}`
    }
    return ''

  }

  /**
   * 處理排序選項
   *
   * @static
   * @param {Object} options
   * @returns {string}
   */
  static sort(options) {
    let sort = options.sort

    if (sort) {
      return `&sort=${sort}`
    }
    return ''

  }

  /**
   * 處理 Filter 選項
   *
   * @static
   * @param {Object} options
   * @returns {string}
   */
  static filter(options) {
    let filter = options.filter

    if (filter) {
      return `&filter=${filter}`
    }
    return ''

  }

  /**
   * 處理搜尋選項
   *
   * @static
   * @param {Object} options
   * @returns {string}
   */
  static search(options) {
    if (!options.search) {
      return ''
    }
    const keys = Object.keys(options.search)
    let result = ''

    keys.forEach(element => {
      if (options.search[element]) {
        result += `&q[${element}]=${options.search[element]}`
      }
    })

    return result

  }

  /**
   * 處理Tag搜尋選項
   *
   * @static
   * @param {Object} options
   * @returns {string}
   */
  static tag(options) {
    if (!options.tag) return ''

    return `&tag=${options.tag}`
  }
}

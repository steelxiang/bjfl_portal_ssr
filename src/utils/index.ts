interface DigitParams {
  places?: number
  thousand?: string
}
/**
 * 格式化数字
 * 参数：保留几位小数-places，货币符号-symbol，千位分隔符-thousand，小数分隔符-decimal，保留小数位数不去除末尾0-fixedAll
 */
export function formatDigit(digit: number, params?: DigitParams) {
  if(!digit || isNaN(digit)) {
    return 0
  }
  const places = params?.places || 4
  const thousand = params?.thousand || ','
  const negative = digit < 0 ? '-' : ''
  const arr = digit.toString().split('.')
  const int = arr[0].split('').reverse().join('').replace(/(\d{3})(?=\d)/g, '$1' + thousand).split('').reverse().join('')
  const float = arr.length === 2 ? arr[1].substr(0, places) : ''
  return parseFloat(negative + int + '.' + float)
}

/**
 * 日期时间格式化未字符串输出
 * @param {(Date | string)} date
 * @param {string} format
 */
export function formatDate(date: Date | string | number, format: string) {
  if(!date) {
    return ''
  }
  try {
    const value: Date = new Date(date)
    const yyyy = value.getFullYear()
    const M = value.getMonth() + 1
    const MM = value.getMonth() + 1 >= 10 ? value.getMonth() + 1 : '0' + (value.getMonth() + 1)
    const d = value.getDate()
    const dd = value.getDate() >= 10 ? value.getDate() : '0' + value.getDate()
    const H = value.getHours()
    const HH = value.getHours() >= 10 ? value.getHours() : '0' + value.getHours()
    const m = value.getMinutes()
    const mm = value.getMinutes() >= 10 ? value.getMinutes() : '0' + value.getMinutes()
    const s = value.getSeconds()
    const ss = value.getSeconds() >= 10 ? value.getSeconds() : '0' + value.getSeconds()
    if(format === 'yyyy') {
      return yyyy
    } else if(format === 'yyyy-MM') {
      return yyyy + '-' + MM
    } else if(format === 'yyyy-M') {
      return yyyy + '-' + M
    } else if(format === 'yyyy-MM-dd') {
      return yyyy + '-' + MM + '-' + dd
    } else if(format === 'yyyy-M-d') {
      return yyyy + '-' + M + '-' + d
    } else if(format === 'HH:mm:ss') {
      return HH + ':' + mm + ':' + ss
    } else if(format === 'H:m:s') {
      return H + ':' + m + ':' + s
    } else if(format === 'HH:mm') {
      return HH + ':' + mm
    } else if(format === 'H:m') {
      return H + ':' + m
    } else if(format === 'yyyy-MM-dd HH:mm') {
      return yyyy + '-' + MM + '-' + dd + ' ' + HH + ':' + mm
    } else if(format === 'yyyy-MM-dd HH:mm:ss') {
      return yyyy + '-' + MM + '-' + dd + ' ' + HH + ':' + mm + ':' + ss
    } else {
      return yyyy + '-' + MM + '-' + dd
    }
  } catch(error) {
    return ''
  }
}

export function langOnBrowser(){
  const pathName = window.location.pathname;
  let lang;
  if(pathName.substring(0,3) === '/en'){
    lang = 'en-US';
  }else{
    lang = 'zh-CN';
  }
  return lang;
}
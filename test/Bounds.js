/**
 * @class 矩形地理范围类
 * @name Bounds
 * @param {Point} min 最小坐标
 * @param {Point} max 最大坐标
 * @constructor
 */


/**
 * 最小坐标点
 * @name Bounds#min
 * @type Point
 * @default null
 */


/**
 * 最大坐标点
 * @name Bounds#max
 * @type Point
 * @default null
 */


/**
 * 中心点坐标
 * @name Bounds#center
 * @type Point
 * @default null
 */



/**
 * 判断坐标或地理范围是否包含在当前地理范围之内
 * @name Bounds#contains
 * @function
 * @param {Point|Bounds} obj 地理坐标或地理范围
 * @returns {boolean}
 */


/**
 * 判断与另一地理范围是否有交集
 * @name Bounds#isIntersects
 * @function
 * @param {Bounds} bounds 地理范围
 * @returns {boolean}
 */


/**
 * 获取与另一地理范围的交集区域
 * @name Bounds#getIntersects
 * @function
 * @param {Bounds} bounds 地理范围
 * @returns {Bounds} 交集区域
 */


/**
 * 扩展当前地理范围
 * @name Bounds#extend
 * @function
 * @param {Point|Bounds} obj 地理坐标或地理范围
 * @returns {Bounds} 当前对象
 */


/**
 * 返回当前对象的字符串形式
 * @name Bounds#toString
 * @function
 * @returns {string}
 */


/**
 * 复制当前对象
 * @name Bounds#clone
 * @function
 * @returns {Bounds}
 */


/**
 * 指定范围是否与当前范围相等
 * @name Bounds#equals
 * @function
 * @param {Bounds} bounds 地理范围
 * @returns {boolean}
 */


/**
 * 转换为数组
 * @name Bounds#toArray
 * @function
 * @returns {Array}
 */



/**
 * 反序列化
 * @name Bounds.deserialize
 * @function
 * @param {string} str 序列化字符串
 * @returns {Bounds}
 */


/**
 * 从数组创建对象
 * @name Bounds.fromArray
 * @function
 * @param {Array} arr
 * @returns {Bounds}
 */


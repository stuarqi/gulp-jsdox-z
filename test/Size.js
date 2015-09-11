/**
 * @class 尺寸类
 * @name Size
 * @param {number} width 宽度
 * @param {number} height 高度
 * @constructor
 */

/**
 * 宽度
 * @name Size#width
 * @type number
 * @default 0
 */

/**
 * 高度
 * @name Size#height
 * @type number
 * @default 0
 */

/**
 * 返回当前对象的序列化字符串
 * @name Size#toString
 * @function
 * @returns {string}
 */

/**
 * 复制当前对象
 * @name Size#clone
 * @function
 * @returns {Size}
 */

/**
 * 对比指定的对象是否相等
 * @name Size#equals
 * @function
 * @param {Size} size 比较对象
 * @returns {boolean}
 */

/**
 * 将当前对象转换为数组
 * @name Size#toArray
 * @function
 * @returns {number[]}
 */

/**
 * 将序列化字符串转换为尺寸对象
 * @name Size.deserialize
 * @function
 * @param {string} str 序列化字符串
 * @returns {Size}
 */

/**
 * 将数组转换为尺寸对象
 * @name Size.fromArray
 * @function
 * @param {number[]} arr 数组
 * @returns {Size}
 */
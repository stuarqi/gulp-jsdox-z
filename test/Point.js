/**
 * @class 地理坐标类
 * @name Point
 * @param {number} lng 经度值
 * @param {number} lat 纬度值
 * @constructor
 */

/**
 * 经度值
 * @name Point#lng
 * @type number
 * @default 0
 */

/**
 * 纬度值
 * @name Point#lat
 * @type number
 * @default 0
 */

/**
 * 组级别
 * @name Point#levelGroup
 * @type number
 * @default undefined
 * @private
 * @ignore
 */

/**
 * 将当前对象序列化为字符串
 * @name Point#toString
 * @function
 * @returns {string}
 */

/**
 * 复制当前对象
 * @name Point#clone
 * @function
 * @returns {Point}
 */

/**
 * 与指定坐标对比是否为同一地理位置
 * @name Point#equals
 * @function
 * @param {Point} point
 * @returns {boolean}
 */

/**
 * 与指定坐标对比是否相同，包括levelGroup
 * @name Point#equalsAll
 * @function
 * @private
 * @ignore
 * @param {Point} point
 * @returns {boolean}
 */

/**
 * 将坐标对象转换为数组对象
 * @name Point#toArray
 * @function
 * @returns {number[]}
 */

/**
 * 从格式字符串创建对象
 * @param {string} str 格式字符串
 * @param {string} [delimiter=','] 分隔符
 * @returns {Point}
 */

/**
 * 从数组创建对象
 * @param {number[]} arr 数组
 * @returns {Point}
 */
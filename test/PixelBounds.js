/**
 * @class 矩形像素类
 * @name PixelBounds
 * @param {Pixel} min 最小坐标
 * @param {Pixel} max 最大坐标
 * @constructor
 */

/**
 * 最小坐标
 * @name PixelBounds#min
 * @type Pixel
 * @default null
 */

/**
 * 最大坐标
 * @name PixelBounds#max
 * @type Pixel
 * @default null
 */

/**
 * 中心点坐标
 * @name PixelBounds#center
 * @type Pixel
 * @default null
 */

/**
 * 判断坐标或矩形区域是否包含在当前范围之内
 * @name PixelBounds#contains
 * @function
 * @param {Pixel|PixelBounds} obj 像素坐标或矩形范围
 * @returns {boolean}
 */

/**
 * 判断与另一矩形范围是否有交集
 * @name PixelBounds#isIntersects
 * @function
 * @param {PixelBounds} bounds 矩形范围
 * @returns {boolean}
 */

/**
 * 获取与另一矩形区域的交集区域
 * @name PixelBounds#getIntersects
 * @function
 * @param {PixelBounds} bounds 矩形范围
 * @returns {PixelBounds} 交集区域
 */

/**
 * 扩展当前矩形范围
 * @name PixelBounds#extend
 * @function
 * @param {Pixel|PixelBounds} obj 像素坐标或矩形范围
 * @returns {extend} 当前对象
 */

/**
 * 返回当前对象的序列化字符串
 * @name PixelBounds#toString
 * @function
 * @returns {string}
 */

/**
 * 复制当前对象
 * @name PixelBounds#clone
 * @function
 * @returns {PixelBounds}
 */

/**
 * 指定矩形范围是否与当前范围相等
 * @name PixelBounds#equals
 * @function
 * @param {PixelBounds} bounds 矩形范围
 * @returns {boolean}
 */

/**
 * 转换为数组
 * @name PixelBounds#toArray
 * @function
 * @returns {Array}
 */

/**
 * 从数组创建对象
 * @name PixelBounds.fromArray
 * @function
 * @param {Array} arr 数组
 * @returns {PixelBounds}
 */


/**
 * 将序列化字符串转换为对象
 * @name PixelBounds.deserialize
 * @function
 * @param {string} str 序列化字符串
 * @returns {PixelBounds}
 */
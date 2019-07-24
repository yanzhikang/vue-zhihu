var entry = {
    a: {
        b: {
            c: {
                dd: "abcdd"
            }
        },
        d: {
            xx: "adxx"
        },
        e: "ae"
    }
};
/**
 * 对象扁平化
 * @param {Object}  obj 操作对象
 * @returns {Object} 扁平化后的对象
 */
function flatObject(obj) {
    const flat = {};

    return Object.assign(flat, ...getFlat(null, obj));

    /**
     *
     * @param {String | null} prevKey 前面的key
     * @param {Object} obj 当前操作对象
     * @returns {Array<Object>} 扁平化后的对象数组
     */
    function getFlat(prevKey, obj) {
        const arr = [];
        Object.keys(obj).forEach(k => {
            const currentKey = prevKey ? `${prevKey}.${k}` : k;
            if (Object.prototype.toString.call(obj[k]) != "[object Object]") {
                arr.push({
                    [currentKey]: obj[k]
                });
            } else {
                arr.push(...getFlat(currentKey, obj[k]));
            }
        });

        return arr;
    }
}
console.log(JSON.stringify(flatObject(entry), 0, 4));
// {
//     "a.b.c.dd": "abcdd",
//     "a.d.xx": "adxx",
//     "a.e": "ae"
// }

/**
 * 对象扁平化
 * @param {Object}  obj 操作对象
 * @returns {Object} 扁平化后的对象
 */
function flatObject2(obj) {
    const flat = {};
    getFlat(null, obj);
    return flat;
    /**
     * 递归将对象扁平化
     * @param {String | null} prevKey 前面的key
     * @param {Object} obj 当前操作对象
     */
    function getFlat(prevKey, obj) {
        Object.keys(obj).forEach(k => {
            const currentKey = prevKey ? `${prevKey}.${k}` : k;
            console.log(currentKey)
            if (Object.prototype.toString.call(obj[k]) != "[object Object]") {
                flat[currentKey] = obj[k];
            } else {
                getFlat(currentKey, obj[k]);
            }
        });
    }
}
console.log(JSON.stringify(flatObject2(entry), 0, 4));
// {
//     "a.b.c.dd": "abcdd",
//     "a.d.xx": "adxx",
//     "a.e": "ae"
// }

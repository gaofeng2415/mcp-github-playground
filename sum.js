// JSDoc：定义一个支持柯里化的求和函数
/**
 * 创建一个可以链式调用的求和函数。
 * @returns {Function} 返回一个可以继续接收数字参数的函数，并最终返回求和结果。
 * @example
 * sum(1, 2)(3)(4)() // === 10
 * sum(5)(10)() // === 15
 */
function sum(...args) {
  // 创建一个add函数，用于接收更多参数并递归调用sum
  const add = (...newArgs) => {
    return sum(...args, ...newArgs);
  };

  // 通过valueOf方法触发实际的加法运算
  add.valueOf = () => {
    return args.reduce((total, num) => total + num, 0);
  };

  // toString方法确保在直接使用时以字符串形式输出结果
  add.toString = () => {
    return String(add.valueOf());
  };

  // 返回add函数供链式调用
  return add;
}

// 使用示例:
// sum(1, 2)(3)(4)() === 10
// sum(5)(10)() === 15
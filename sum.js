function sum(...args) {
  const add = (...newArgs) => {
    return sum(...args, ...newArgs);
  };

  add.valueOf = () => {
    return args.reduce((total, num) => total + num, 0);
  };

  add.toString = () => {
    return String(add.valueOf());
  };

  return add;
}

// 使用示例:
// sum(1, 2)(3)(4)() === 10
// sum(5)(10)() === 15
const setErrorDecorator = (fn: Function, callback: Function) => {
  return (...args: any[]) => {
    try {
      callback(false);
      return fn(...args);
    } catch (e) {
      callback(true);
    }
  };
};

export default setErrorDecorator;

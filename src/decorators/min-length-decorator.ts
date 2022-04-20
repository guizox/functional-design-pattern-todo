const minLengthDecorator = (fn: Function, min: number, text: string) => {
  return (...args: any[]) => {
    const value = text;
    if (value.length < min) {
      throw new Error(`Value must be at least ${min} characters long`);
    }
    return fn(...args);
  };
};

export default minLengthDecorator;

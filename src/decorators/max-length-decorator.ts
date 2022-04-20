const maxLengthDecorator = (fn: Function, max: number, text: string) => {
  return (...args: any[]) => {
    const value = text;
    if (value.length > max) {
      throw new Error(`Value must be smaller than ${max} characters long`);
    }
    return fn(...args);
  };
};

export default maxLengthDecorator;

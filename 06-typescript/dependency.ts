export default (arg: any) => {
  console.log(arg);
};

export const consoleWrapper = (...args: any) => console.log(...args);

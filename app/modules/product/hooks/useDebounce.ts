export const useDebounce = <T extends (...args: any[]) => void>(
    func: T,
    milliseconds: number
  ) => {
    const time = milliseconds || 400;
    let timer: ReturnType<typeof setTimeout>;
  
    return (...args: Parameters<T>) => {
      if (timer) {
        clearTimeout(timer);
      }
  
      timer = setTimeout(func, time, ...args);
    };
  };
  
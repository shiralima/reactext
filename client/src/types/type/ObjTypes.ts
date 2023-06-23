export type ObjType<T> = {
  [K in keyof T]: {
    key: K;
    value: T[K];
  };
}[keyof T];
type MeExclude<T,K> = T extends K ? never : T;
type MyOmit<T,K extends keyof T> = {
    [X in MeExclude<keyof T,K>]: T[X];
}

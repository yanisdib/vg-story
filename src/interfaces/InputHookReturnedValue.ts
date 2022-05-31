export type InputHookReturnedValue<T> = [
    T,
    (event: React.ChangeEvent<HTMLInputElement>) => void
]

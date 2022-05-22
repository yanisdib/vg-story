/**
 * StoreState<T> is an interface which describes data
 * returned by the store's state.  
 */
export interface StoreState<T> {
    body: T;
    error: Error | null;
    status: string;
}
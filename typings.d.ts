declare global {
    declare type GlobalFetch = WindowOrWorkerGlobalScope;
}

declare const __ENVIRONMENT__: {
    production: boolean;
    development: boolean;
    current: "development" | "production";
};

declare module "redux-actions" {
    export function handleActions<State>(
        reducerMap: ReducerMap<State, any>,
        initialState: State,
        options?: Options,
    ): ReduxCompatibleReducer<State, any>;
}

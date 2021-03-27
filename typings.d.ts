import "redux-actions";
declare global {
    declare type GlobalFetch = WindowOrWorkerGlobalScope;
    declare const __ENVIRONMENT__: {
        production: boolean;
        development: boolean;
        current: "development" | "production";
    };
}

declare module "*.graphql" {
    const value: string;
    export default value;
}

declare module "*.gql" {
    const value: any;
    export default value;
}

declare module "redux-actions" {
    export function handleActions<State>(
        reducerMap: ReducerMap<State, any>,
        initialState: State,
        options?: Options,
    ): ReduxCompatibleReducer<State, any>;
}

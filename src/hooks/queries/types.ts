import { QueryResult } from "react-apollo";

export interface IQuery<T> {
    query: QueryResult;
    loading: boolean;
    data: T | undefined;
}

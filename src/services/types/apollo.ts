import { QueryResult } from "react-apollo";

export interface IPaginatedQuery<T> {
    total: number;
    total_pages: number;
    results: T;
}

export interface IQuery<T> {
    query: QueryResult;
    loading: boolean;
    data: T | undefined;
}

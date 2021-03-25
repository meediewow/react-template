import { useQuery } from "react-apollo";
import USERS_QUERY from "/gql/queries/users.gql";
import { IQuery } from "./types";

interface IUsers {
    name: string;
    city: string;
}

interface IFetchUsers {
    users: IUsers[];
}

export const useUsers = (): IQuery<IFetchUsers> => {
    const usersQuery = useQuery<IFetchUsers>(USERS_QUERY);

    return {
        data: usersQuery.data,
        loading: usersQuery.loading,
        query: usersQuery,
    };
};

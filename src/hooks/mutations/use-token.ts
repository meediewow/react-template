import { useMutation } from "react-apollo";
import GET_TOKEN from "gql/mutations/token.gql";

interface IToken {
    access_token: string;
    token_type: string;
    scope: string;
    created_at: string;
}

interface IFetchToken {
    token: IToken;
}

interface IVariables {
    client_id: string;
    client_secret: string;
    redirect_uri: string;
    code: string;
    grant_type: string;
}

interface IBody {
    body: IVariables;
}

export const useToken = () => {
    const [fetch, queryResult] = useMutation<IFetchToken, IBody>(GET_TOKEN);
    return {
        data: queryResult.data,
        query: queryResult,
        fetch,
        loading: queryResult.loading,
    };
};

import { useMutation } from "react-apollo";
import LIKE_PHOTO from "gql/mutations/like-photo.gql";

interface IVariables {
    id: string;
}

export const useLikePhoto = () => {
    const [fetch, queryResult] = useMutation<any, IVariables>(LIKE_PHOTO, {
        errorPolicy: "all",
    });
    return {
        data: queryResult,
        query: queryResult,
        fetch,
        loading: queryResult.loading,
    };
};

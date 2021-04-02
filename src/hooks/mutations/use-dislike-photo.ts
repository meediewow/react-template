import { useMutation } from "react-apollo";
import DISLIKE_PHOTO from "gql/mutations/dislike-photo.gql";

interface IVariables {
    id: string;
}

export const useDislikePhoto = () => {
    const [fetch, queryResult] = useMutation<any, IVariables>(DISLIKE_PHOTO, {
        errorPolicy: "all",
    });
    return {
        data: queryResult.data,
        query: queryResult,
        fetch,
        loading: queryResult.loading,
    };
};

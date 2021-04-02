import { useQuery } from "react-apollo";
import SEARCH_PHOTOS_QUERY from "gql/queries/search.gql";
import { IQuery, IPaginatedQuery } from "services/types/apollo";

interface IUrls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
}

interface IPhoto {
    id: string;
    created_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    likes: number;
    liked_by_user: boolean;
    description: string;
    urls: IUrls;
}

interface IFetchPhotos {
    photos: IPaginatedQuery<IPhoto>;
}

export const useSearchPhotos = (): IQuery<IFetchPhotos> => {
    const searchQuery = useQuery<IFetchPhotos>(SEARCH_PHOTOS_QUERY);

    return {
        data: searchQuery.data,
        loading: searchQuery.loading,
        query: searchQuery,
    };
};

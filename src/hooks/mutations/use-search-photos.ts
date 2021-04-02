import { useLazyQuery } from "react-apollo";
import SEARCH_PHOTOS_QUERY from "gql/mutations/search.gql";
import { IPaginatedQuery } from "services/types/apollo";

interface IUrls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
}

interface IPofileImage {
    small: string;
    medium: string;
    large: string;
}

interface ILink {
    self: string;
    html: string;
    photos: string;
    likes: string;
}

interface ILinkPhoto {
    self: string;
    html: string;
    download: string;
}

interface IUser {
    id: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    instagram_username: string;
    twitter_username: string;
    portfolio_url: string;
    profile_image: IPofileImage;
    links: ILink;
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
    user: IUser;
    current_user_collections: any[];
    urls: IUrls;
    links: ILinkPhoto;
}

interface IFetchPhotos {
    photos: IPaginatedQuery<IPhoto[]>;
}

interface IVariables {
    query: string;
    page: number;
    pageSize: number;
}

export const useSearchPhotos = () => {
    const [fetch, queryResult] = useLazyQuery<IFetchPhotos, IVariables>(
        SEARCH_PHOTOS_QUERY,
        {
            fetchPolicy: "cache-and-network",
        },
    );
    return {
        data: queryResult.data,
        query: queryResult,
        fetch,
        loading: queryResult.loading,
    };
};

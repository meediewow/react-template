import React, { useCallback, useEffect } from "react";
import { SearchInput } from "components/search-input";
import { useSearchPhotos } from "hooks/mutations/use-search-photos";
import { Paginator } from "components/paginator";
import { ImagesWrapperSC, MessageWrapperSC } from "./styled";
import { useHistory, useLocation } from "react-router-dom";
import { Card } from "components/card";
import { useLikePhoto } from "hooks/mutations/use-like-photo";
import { useDislikePhoto } from "hooks/mutations/use-dislike-photo";
import { notification } from "antd";

export const Home: React.FC = (): JSX.Element => {
    const { fetch, data, loading, query } = useSearchPhotos();
    const { fetch: likePhoto } = useLikePhoto();
    const { fetch: dislikePhoto } = useDislikePhoto();
    const { push } = useHistory();
    const { search, pathname } = useLocation();
    const params = new URLSearchParams(search);
    const queryParams = Object.fromEntries(params);

    useEffect(() => {
        // restore data after reload page
        fetch({
            variables: {
                query: queryParams.query || "",
                page: Number(queryParams.page),
                pageSize: Number(queryParams.pageSize) || 10,
            },
        });
    }, []);

    const onSubmit = useCallback(
        (query: string) => {
            if (!query) {
                return;
            }
            push({
                pathname,
                search: String(
                    new URLSearchParams({ ...queryParams, page: "1" }),
                ),
            });
            fetch({
                variables: {
                    query,
                    page: Number(queryParams.page),
                    pageSize: Number(queryParams.pageSize) || 10,
                },
            });
        },
        [fetch, pathname, push, queryParams],
    );

    const handleLike = useCallback(
        (id: string) => {
            likePhoto({
                variables: { id },
            })
                .then(() => {
                    query.refetch();
                    notification.success({
                        message: "Like success",
                    });
                })
                .catch((err) => {
                    console.log(err);
                    notification.error({
                        message: "Like failed",
                        description: err.networkError.result.errors.map(
                            (error: string, key: number) => (
                                <p key={key}>{error}</p>
                            ),
                        ),
                    });
                });
        },
        [likePhoto, query],
    );

    const handleDislike = useCallback(
        (id: string) => {
            dislikePhoto({
                variables: { id },
            })
                .then(() => {
                    query.refetch();
                    notification.success({
                        message: "Dislike success",
                    });
                })
                .catch((err) => {
                    notification.error({
                        message: "Dislike failed",
                        description: err.networkError.result.errors.map(
                            (error: string, key: number) => (
                                <p key={key}>{error}</p>
                            ),
                        ),
                    });
                });
        },
        [dislikePhoto, query],
    );

    const handleChangePage = useCallback(
        (page: number, pageSize: number) => {
            fetch({
                variables: {
                    query: queryParams.query,
                    page: Number(page),
                    pageSize: Number(pageSize),
                },
            });
        },
        [fetch, queryParams.query],
    );

    const isFounded = Boolean(data?.photos.results.length);

    return (
        <>
            <SearchInput onSubmit={onSubmit} loading={loading} />
            <ImagesWrapperSC>
                {isFounded &&
                    data?.photos.results?.map((item, index) => {
                        return (
                            <Card
                                likes={item.likes}
                                id={item.id}
                                key={index}
                                url={item.urls.regular}
                                onLike={handleLike}
                                onDislike={handleDislike}
                                isLiked={item.liked_by_user}
                            />
                        );
                    })}
            </ImagesWrapperSC>
            {!isFounded && !loading && (
                <MessageWrapperSC>No images found</MessageWrapperSC>
            )}
            <Paginator total={data?.photos.total} onChange={handleChangePage} />
        </>
    );
};

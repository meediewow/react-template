import React, { useCallback } from "react";
import { PaginationSC } from "./styled";
import { useHistory, useLocation } from "react-router-dom";
import { useSearchValidator } from "hooks/use-search-validator";

interface IProps {
    total: number | undefined;
    onChange: (page: number, pageSize: number) => void;
}

interface ISearch {
    page?: number;
    pageSize?: number;
}

const SEARCH_VALIDATOR = [
    {
        key: "page",
        condition: (page: any) => Boolean(Number(page)),
    },
    {
        key: "pageSize",
        condition: (page: any) => Boolean(Number(page)),
    },
];

export const Paginator = React.memo(({ onChange, ...props }: IProps) => {
    useSearchValidator(SEARCH_VALIDATOR);
    const { search, pathname } = useLocation();
    const { push } = useHistory();
    const params = new URLSearchParams(search);
    const searchParams = Object.fromEntries(params) as ISearch;

    const handleChange = useCallback(
        (page = 1, pageSize: number) => {
            push({
                pathname,
                search:
                    "?" +
                    String(
                        new URLSearchParams({
                            ...searchParams,
                            page: String(page),
                            pageSize: String(pageSize),
                        }),
                    ),
            });
            onChange(page, pageSize);
        },
        [push, pathname, searchParams, onChange],
    );

    return (
        <PaginationSC
            hideOnSinglePage
            total={props.total}
            current={Number(searchParams.page) || 1}
            pageSize={Number(searchParams.pageSize) || 10}
            onChange={handleChange}
        />
    );
});

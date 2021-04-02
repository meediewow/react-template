import React, { useCallback, useRef, useState } from "react";
import { Button } from "antd";
import * as locaStorageHelper from "services/helpers/local-storage";
import { LocalStorageVariables } from "services/variables/local-storage";
import { AutoCompleteSC, WrapperSC } from "./styled";
import { SearchOutlined } from "@ant-design/icons";
import { useHistory, useLocation } from "react-router-dom";
import { useSearchValidator } from "hooks/use-search-validator";

interface IProps {
    onSubmit: (value: string) => void;
    loading?: boolean;
}

interface IOptions {
    label?: string;
    value: string;
}

const SEARCH_VALIDATOR = [
    {
        key: "query",
        condition: (value: string) => Boolean(value),
    },
];

export const SearchInput = React.memo(({ onSubmit, loading }: IProps) => {
    useSearchValidator(SEARCH_VALIDATOR);
    const input = useRef<any>(undefined);
    const { search, pathname } = useLocation();
    const { push } = useHistory();
    const params = new URLSearchParams(search);
    const searchParams = Object.fromEntries(params);

    const handleChange = useCallback(
        (value: string) => {
            push({
                pathname,
                search:
                    "?" +
                    String(
                        new URLSearchParams({
                            ...searchParams,
                            query: value,
                        }),
                    ),
            });
        },
        [push, pathname, searchParams],
    );
    const [options, setOptions] = useState<IOptions[] | []>([]);

    const onSelect = useCallback(
        (value) => {
            const localStorageOptions: IOptions[] | [] =
                locaStorageHelper.getItem(
                    LocalStorageVariables.SEARCH_SUGGESTIONS,
                ) || [];
            const isExist = localStorageOptions.find((i) => i.value === value);
            if (!isExist && value) {
                if (localStorageOptions.length >= 5) {
                    locaStorageHelper.setItem(
                        LocalStorageVariables.SEARCH_SUGGESTIONS,
                        [
                            { value, label: value },
                            ...localStorageOptions.slice(0, -1),
                        ],
                    );
                } else {
                    locaStorageHelper.setItem(
                        LocalStorageVariables.SEARCH_SUGGESTIONS,
                        [{ value, label: value }, ...localStorageOptions],
                    );
                }
            }
            return onSubmit(value);
        },
        [onSubmit],
    );

    const handleSearch = useCallback((value) => {
        const localStorageOptions: IOptions[] | [] =
            locaStorageHelper.getItem(
                LocalStorageVariables.SEARCH_SUGGESTIONS,
            ) || [];
        setOptions(
            value
                ? localStorageOptions.filter((i) => i.value.includes(value))
                : localStorageOptions,
        );
    }, []);

    const handleSubmitForm = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            onSelect(searchParams.query);
            input?.current.blur();
        },
        [onSelect, searchParams.query],
    );

    return (
        <WrapperSC onSubmit={handleSubmitForm}>
            <AutoCompleteSC
                ref={input}
                value={searchParams.query}
                onSelect={onSelect}
                onChange={handleChange}
                onSearch={handleSearch}
                options={options}
                placeholder="Search images..."
                allowClear
            />
            <Button
                loading={loading}
                type="primary"
                onClick={() => onSelect(searchParams.query)}
            >
                <SearchOutlined />
            </Button>
        </WrapperSC>
    );
});

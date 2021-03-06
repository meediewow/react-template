import React from "react";
import { useUsers } from "hooks/queries/use-users";
import { UserSC } from "./styled";

export const Users: React.FC = () => {
    const { data } = useUsers();
    return (
        <div>
            {data?.users.map((i, index) => {
                return <UserSC key={index}>{i.name}</UserSC>;
            })}
        </div>
    );
};

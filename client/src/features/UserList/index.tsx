import { IUser } from "shared/lib/config/interfaces";
import User from "../../entities/User";
import styles from "./index.module.scss";
import React from "react";

interface IUserList {
  view: "all" | "preview";
  users: IUser[];
  className?: string;
}

const UserList: React.FC<IUserList> = ({ view, users, className }) => {
  return (
    <div
      className={`${styles.users} ${
        styles[`users_${view}`]
      } ${className}`.trim()}
    >
      {users.map((user, index) =>
        (view === "preview" && index < 4) || view === "all" ? (
          <User
            key={user.name}
            {...user}
            view={view === "all" ? "full" : "mini"}
          />
        ) : null
      )}
    </div>
  );
};

export default UserList;

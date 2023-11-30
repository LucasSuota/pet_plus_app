import React from "react";
import { User } from "@/types";

interface UserHelloProps {
  user: User | null;
}

const UserHello: React.FC<UserHelloProps> = ({ user }) => {
  if (user)
    return (
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-md uppercase">
          OLÁ <b>{user.email}</b>
        </h1>
        <p className="text-2xl">&#128075;</p>
      </div>
    );
};

export default UserHello;

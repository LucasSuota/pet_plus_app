"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { handleGetDocs } from "@/firebase/database/db";

const ApplicationBody = () => {
  const currentUser = useContext(AuthContext);
  useEffect(() => {
    handleGetDocs(currentUser);
  }, []);

  return (
    <div>
      <h1>{currentUser.email}</h1>
    </div>
  );
};

export default ApplicationBody;

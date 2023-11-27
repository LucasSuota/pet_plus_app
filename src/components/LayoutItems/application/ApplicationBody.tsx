import { db } from "@/firebase/firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";

const ApplicationBody = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const handleGetDocs = async () => {
      const dataRef = collection(db, "users");
      const docSnap = await getDocs(dataRef);
      docSnap.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });
    };

    handleGetDocs();
  }, []);

  return <div>{userData}</div>;
};

export default ApplicationBody;

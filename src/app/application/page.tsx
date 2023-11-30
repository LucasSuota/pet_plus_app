"use client";

import { ApplicationHeader } from "@/components/LayoutItems/application";
import ApplicationBody from "@/components/LayoutItems/application/ApplicationBody";
import { AuthProvider } from "@/context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <ApplicationHeader />
      <ApplicationBody />
    </AuthProvider>
  );
};

export default App;

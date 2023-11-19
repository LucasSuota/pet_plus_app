import React, { SetStateAction } from "react";

export type Inputs = {
  email: string;
  password: string;
  setDisplayError: SetStateAction<boolean>;
};

export type RegisterInputs = {
  name: string;
  email: string;
  password: string;
};

export type HeadeMenuType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type User = {
  email?: string;
};

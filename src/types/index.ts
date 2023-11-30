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
  confirmPassword: string;
};

export type AddAnimalInputs = {
  name: string;
  bio: string;
}

export type AnimalDataType = {
  name: string;
  bio: string;
}

export type HeadeMenuType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type User = {
  email?: string;
};

export type FileEventTarget = EventTarget & { files: FileList };

export type AnimalCardType = {
  animalName: string;
  animalGender: string;
  animalAge: string;
  animalBio: string;
};

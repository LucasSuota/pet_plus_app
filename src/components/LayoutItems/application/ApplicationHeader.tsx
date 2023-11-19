"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { Menu } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "@/context/AuthContext";
import UserModal from "./UserModal";
import { BoxArrowRight, Gear, Logo } from "../../../../public/svg";
import { Perfil } from "../../../../public/images";

const ApplicationHeader = () => {
  const currentUser = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="mx-auto max-w-screen px-4 py-4 flex flex-row items-center justify-between">
      <div className="relative h-[50px] w-[50px]">
        <Image
          className="cursor-pointer"
          onClick={() => router.push("/")}
          src={Logo}
          alt="logo"
          fill
        />
      </div>
      <Menu as="div" className="relative">
        <Menu.Button className="relative h-[50px] w-[50px]">
          <Image
            className="rounded-full"
            src={Perfil}
            alt="foto de perfil"
            fill
          />
        </Menu.Button>
        <Menu.Items
          className={
            "bg-white rounded-xl shadow-xl z-10 absolute p-4 right-0 mt-2"
          }
        >
          <Menu.Item>
            <p className="text-black text-xl text-center mt-2 rounded-xl">
              {currentUser.email}
            </p>
          </Menu.Item>
          <Menu.Item as="div">
            <div className="flex justify-between">
              <Image
                className="mt-10 float-star cursor-pointer"
                onClick={() => setIsOpen(true)}
                src={Gear}
                alt="sair"
                width={30}
                height={30}
              />
              <Image
                className="mt-10 cursor-pointer"
                onClick={() => signOut(auth)}
                src={BoxArrowRight}
                alt="sair"
                width={30}
                height={30}
              />
            </div>
          </Menu.Item>
        </Menu.Items>
      </Menu>
      {isOpen ? <UserModal isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
    </header>
  );
};

export default ApplicationHeader;

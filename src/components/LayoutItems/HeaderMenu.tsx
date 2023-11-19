"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { headerItems } from "@/constants/headerItems";
import { HeadeMenuType } from "@/types";
import { MenuList } from "../../../public/svg";

const HeaderMenu = ({ isOpen, setIsOpen }: HeadeMenuType) => {
  return (
    <nav className="sm:hidden overflow-hidden">
      <Image
        onClick={() => setIsOpen(true)}
        src={MenuList}
        alt="open menu"
        width={60}
        height={60}
      />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-100"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-100"
              >
                <Dialog.Panel className="w-3/4 min-h-screen absolute top-0 right-0 transform overflow-hidden rounded-r-none bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2 flex flex-col justify-between">
                    <div>
                      {headerItems.map((item, index) => (
                        <Link key={index} href={item.link}>
                          <p className="mt-4 text-gray-500 hover:text-gray-700 text-2xl">
                            {item.title}
                          </p>
                        </Link>
                      ))}
                    </div>
                    <div>
                      <Link
                        className="flex items-center justify-center mt-20 cursor-pointer border-blue-500 border-2 rounded font-regular text-black bg-blue-400 w-full p-2"
                        href={"/login"}
                      >
                        LOGIN
                      </Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </nav>
  );
};

export default HeaderMenu;

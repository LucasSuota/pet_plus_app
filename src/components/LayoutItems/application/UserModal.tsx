import { uploadPhotoURL } from "@/firebase/database/db";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

const UserModal = ({
  currentUser,
  isOpen,
  setIsOpen,
}: {
  currentUser: any;
  isOpen: any;
  setIsOpen: any;
}) => {
  const [photo, setPhoto] = useState<any>(null);

  const handleFileChange = (e: any) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleClick = () => {
    uploadPhotoURL(photo, currentUser);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center"></div>
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
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between text-lg font-medium leading-6 text-gray-900"
                  >
                    {currentUser.uid}
                    <button
                      type="button"
                      className="text-md font-bold"
                      onClick={() => setIsOpen(false)}
                    >
                      X
                    </button>
                  </Dialog.Title>
                  <div className="mt-8 flex flex-col text-center">
                    <p className="text-sm text-gray-500 text-center mt-4 mb-4">
                      Foto de perfil
                    </p>
                    <div className="mx-auto">
                      <label htmlFor="fileInput" className="cursor-pointer">
                        <Image
                          className="rounded-full"
                          src={"/svg/person-circle.svg"}
                          alt="upload profile picture"
                          width={160}
                          height={160}
                        />
                      </label>
                      <input
                        id="fileInput"
                        className="hidden"
                        type="file"
                        onChange={handleFileChange}
                      />
                      <button
                        className="rounded-md bg-blue-400 px-4 py-2 mt-4"
                        onClick={handleClick}
                      >
                        Atualizar!
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UserModal;

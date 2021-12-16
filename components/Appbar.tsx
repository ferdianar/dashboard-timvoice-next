import React, { ReactNode } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

// Import Assets
import IconBell from "../public/iconDashboard/IconBell.svg"
import IconCreate from "../public/iconDashboard/create.svg"
import AvatarImage from "../public/Avatar-Testimonial1.png"
import invoiceIcon from "../public/tagihan.png"
import proposalsIcon from "../public/proposals.png"
import contractIcon from "../public/contract.png"

// Interface Image Option
interface ImageProps {
       appBarIcon: string,
       width?: number,
       height?: number,
       alt: string
}


// Interface Link Action
interface LinkActionProps {
       alt: string,
       imgIcon: string,
       children: ReactNode
}

// Image Option Component
const ImageOptions = ({ appBarIcon, alt } : ImageProps ) => {
       return (
              <div className="w-auto">
                     <Image src={appBarIcon} alt={alt} />
              </div>
       )
}

// Link Action Component
const LinkAction = ({ imgIcon, alt, children } : LinkActionProps) => {
       return (
              <div className='flex items-center'>
                     <Image src={imgIcon} alt={alt} />
                     <Link href="">
                            { children }
                     </Link>
              </div>
       )
}

// modal create invoice component
const ModalInvoice = () => {
       const [isOpen, setIsOpen] = useState(false)

       const closeModal = () => {
         setIsOpen(false)
       }
     
       const openModal = () => {
       setIsOpen(true)
       }
       return (
              <React.Fragment>
              {/* Create Button */}
              <div className="w-[123px] text-center font-bold ml-0 md:ml-1 no-underline flex items-center px-4 py-[10px] leading-none bg-blue-700 border-blue-700 border rounded text-white hover:border-transparent hover:bg-blue-800 mt-4 sm:mt-0" >
              <div className='flex items-center'>
                     <Image src={IconCreate} alt="create" />
                     <button onClick={openModal}>
                            Buat
                     </button>
              </div> 
              <Transition appear show={isOpen} as={Fragment}>
                     <Dialog as="div" className="fixed inset-8 z-10" onClose={closeModal}>
                            <div className="min-h-screen px-4 text-center">
                                   <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                                          <Dialog.Overlay className="fixed inset-0 right-6" />
                                   </Transition.Child>
                                   {/* This element is to trick the browser into centering the modal contents. */}
                                   <span className="inline-block h-screen align-top" aria-hidden="true">
                                   &#8203;
                                   </span>
                                   {/* Modals */}
                                   {/* Children Modals / Content */}
                                   <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                          <div className="inline-block w-full bg-white max-w-xs p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-lg rounded-lg">
                                                 {/* Card */}
                                                 <div className="w-full flex justify-between items-center py-4  border-b border-blue-200">
                                                        <Image src={invoiceIcon} alt="invoice" width={48} height={48} />
                                                        <div className="desc">
                                                                      <Dialog.Title as="h3" className="text-sm font-bold leading-none text-blue-800">
                                                                             TAGIHAN
                                                                      </Dialog.Title>
                                                               <div className="mt-2">
                                                                      <p className="text-sm text-gray-400">
                                                                             Your payment has successfully
                                                                      </p>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 <div className="w-full flex justify-between items-center py-4  border-b border-blue-200">
                                                        <Image src={contractIcon} alt="invoice" width={48} height={48} />
                                                        <div className="desc">
                                                                      <Dialog.Title as="h3" className="text-sm font-bold leading-none text-blue-800">
                                                                             KONTRAK
                                                                      </Dialog.Title>
                                                               <div className="mt-2">
                                                                      <p className="text-sm text-gray-400">
                                                                             Your payment has successfully
                                                                      </p>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 <div className="w-full flex justify-between items-center py-4  border-b border-blue-200">
                                                        <Image src={proposalsIcon} alt="invoice" width={48} height={48} />
                                                        <div className="desc">
                                                                      <Dialog.Title as="h3" className="text-sm font-bold leading-none text-blue-800">
                                                                             PROPOSALS
                                                                      </Dialog.Title>
                                                               <div className="mt-2">
                                                                      <p className="text-sm text-gray-400">
                                                                             Your payment has successfully
                                                                      </p>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 <div className="w-full flex justify-between items-center py-4  border-b border-blue-200">
                                                        <Image src={invoiceIcon} alt="invoice" width={48} height={48} />
                                                        <div className="desc">
                                                                      <Dialog.Title as="h3" className="text-sm font-bold leading-none text-blue-800">
                                                                             CLIENTS
                                                                      </Dialog.Title>
                                                               <div className="mt-2">
                                                                      <p className="text-sm text-gray-400">
                                                                             Your payment has successfully
                                                                      </p>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 {/* button close */}
                                                 <div className="mt-4">
                                                        <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={closeModal}>
                                                               Got it, thanks!
                                                        </button>
                                                 </div>
                                          </div>
                                   </Transition.Child>
                            </div>
                     </Dialog>
              </Transition>
              </div>
              </React.Fragment>
       )
}

// Application Bar Components
const Appbar = () => {
       return (
              <React.Fragment>
                     {/* <!-- Application Bar --> */}
                     <div className="app-bar py-7 px-16 shadow-sm bg-white flex justify-between items-center">
                            <div className="w-[60%] flex items-center">
                                   {/* <!-- Form Search --> */}
                                   <form className="w-[60%]" method="GET">
                                          <div className="relative text-gray-600 focus-within:text-gray-400">
                                                 <span className="absolute inset-y-0 left-0 flex items-center pl-2 pr-[19px]">
                                                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                                               <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                        </button>
                                                 </span>
                                                 <input type="search" name="query" className="w-full border border-gray-200 py-2 px-4 text-sm text-white bg-white rounded-[4px] pl-10 focus:outline-blue-800 focus:bg-white focus:text-gray-900" placeholder="Cari" autoComplete="on" />
                                          </div>
                                   </form>
                            </div>
                            {/* Button Action */}
                            <div className="w-[40%] h-12 flex items-center justify-between">
                                   <div>
                                          <ModalInvoice />
                                   </div>
                                   {/* Language Translation */}
                                   <div className="w-auto text-center font-bold ml-0 md:ml-1 no-underline flex items-center px-4 py-[11px] leading-none bg-white border rounded text-blue-800 hover:border-transparent  mt-4 sm:mt-0" >
                                          <Link href="">
                                                 ENG
                                          </Link>
                                   </div>
                                   {/* Bell Notification */}
                                   <ImageOptions appBarIcon={IconBell} alt="bell-icon" />
                                   {/* Avatar Image */}
                                   <Image src={AvatarImage} />
                                   </div>
                            </div>
              </React.Fragment>
       )
}

export default Appbar
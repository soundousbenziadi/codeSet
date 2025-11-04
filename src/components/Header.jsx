

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoLight from '../assets/sesclogoo.png'
import logoDark from '../assets/sesclogodark.jpg'

import ThemeToggle from './ThemeToggle'
import { toast } from 'react-toastify'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Who we are?', href: '/About' },
    { name: 'Schedule', href: '/#schedule' },
];


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    return (
        <header className="fixed inset-x-0 top-0 z-50 ">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1 items-center">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img
                            alt="logo"
                            src={logoLight}
                            className="h-10 w-auto dark:hidden rounded-full"
                        />
                        <img
                            alt="logo"
                            src={logoDark}
                            className="h-10 w-auto hidden dark:block rounded-full"
                        />
                    </a>

                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 ">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-textc hover:text-accentc transition-all ease-in-out duration-500">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
                    <a href="/#cta" className="text-sm/6 font-semibold text-accentc"
                    >
                        register now<span aria-hidden="true">&rarr;</span>
                    </a>
                    <ThemeToggle />
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <motion.DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-backgroundc p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                    initial="hidden"
                    whileInView="visible"
                    variants={list}
                    transition={{ duration: 1 }} >
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            {/* <span className="sr-only">Your Company</span> */}
                            <img
                                alt=""
                                src={logoLight}
                                className="h-8 w-auto  dark:hidden rounded-full"
                            />
                            <img
                                alt=""
                                src={logoDark}
                                className="h-8 w-auto  hidden dark:block rounded-full"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <motion.div className="-my-6 divide-y divide-gray-500/10"
                        >
                            <div className="space-y-2 pt-6">
                                {navigation.map((item) => (
                                    <a
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-textc hover:dark:bg-black hover:bg-white text-center"
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            <a
                                href="/#cta"
                                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-accentc hover:dark:bg-black hover:bg-white text-center"
                            >
                                register now<span aria-hidden="true">&rarr;</span>
                            </a>
                            <div className="flex justify-center mt-4">
                                <ThemeToggle />
                            </div>


                        </motion.div>
                    </div>
                </motion.DialogPanel>
            </Dialog >
        </header >)
}
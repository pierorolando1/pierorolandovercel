import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { firebase } from '../../firebase.config'

export const Selector = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="cursor-pointer flex font-medium text-sm items-center justify-center h-7 text-gray-500 border-transparent">
        <img src={firebase.auth().currentUser.photoURL} alt="" className="w-16 h-16 lg:w-24 lg:h-24 md:mt-14 rounded-full mx-auto my-5 object-cover cursor-pointer" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-right bg-gray-900 bg-opacity-90 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${active ? 'bg-violet-500 text-red-600' : 'text-red-700'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm font-semibold`}
                >
                  Logout
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${active ? 'bg-violet-500 text-white' : 'text-gray-500'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Duplicate
                </button>
              )}
            </Menu.Item>
          </div>

        </Menu.Items>
      </Transition>
    </Menu>

  )
}
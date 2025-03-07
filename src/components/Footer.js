import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
         <footer>
            <footer class="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                  <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <a href="https://flowbite.com/" class="hover:underline">Cinemate</a>. All Rights Reserved.
                 </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Instagram</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Youtube</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">LinkedIn</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Github</a>
                    </li>
                </ul>
                </div>
            </footer>
          </footer>
  )
}

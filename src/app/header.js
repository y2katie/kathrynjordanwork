'use client'
import { useState } from 'react'
import Image from 'next/image'


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img
              alt="Company Logo"
              src="/logo.png"

              className="h-8 w-auto"
            />
          </a>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span>Menu</span>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold text-gray-900">Linkedin</a>
          <a href="#" className="text-sm font-semibold text-gray-900">Dribble</a>
          <a href="#" className="text-sm font-semibold text-gray-900">Work</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
  <button
    onClick={() => window.location.href = 'mailto:kathrynjordanwork@gmail.com'}
    className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Email me <span aria-hidden="true">→</span>
  </button>
</div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-white px-6 py-6">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Company Logo"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span>✕</span>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="space-y-2 py-6">
                <a href="#" className="block px-3 py-2 text-base font-semibold text-gray-900">Features</a>
                <a href="#" className="block px-3 py-2 text-base font-semibold text-gray-900">Marketplace</a>
                <a href="#" className="block px-3 py-2 text-base font-semibold text-gray-900">Company</a>
              </div>
              <div className="py-6">
                <a href="#" className="block px-3 py-2.5 text-base font-semibold text-gray-900">Send Me an Email</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
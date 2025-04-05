"use client"

import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="relative overflow-hidden flex w-full md:w-1/2 bg-gradient-to-tr from-indigo-600 to-indigo-500 justify-around items-center min-h-[40vh] md:min-h-screen">
        {/* Background image */}
        <Image
          src="/login.webp"
          alt="Login Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        
        <div className="relative z-10 py-12 md:py-0 text-center md:text-left">
          <h1 className="text-white font-bold text-4xl font-sans">Stellar</h1>
          <p className="text-white mt-1">Navigate Your Success with Stellar</p>
          <Link 
            href="/"
            className="block w-28 mx-auto md:mx-0 bg-white text-indigo-800 mt-4 py-2 rounded-sm text-center font-bold mb-2"
          >
            Learn More
          </Link>
        </div>
        {/* Decorative circles */}
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-white/30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-white/30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-white/30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-white/30 border-t-8"></div>
      </div>
      <div className="flex w-full md:w-1/2 justify-center py-10 items-center bg-white dark:bg-slate-900">
        <form className="bg-white dark:bg-slate-900 w-full max-w-md px-8">
          <h1 className="text-slate-900 dark:text-white font-bold text-2xl mb-1">Welcome Back!</h1>
          <p className="text-sm font-normal text-slate-600 dark:text-slate-400 mb-7">Sign in to your account</p>
          
          <div className="flex items-center border-2 border-slate-200 dark:border-slate-700 py-2 px-3 rounded-sm mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input 
              className="pl-2 outline-none border-none bg-transparent text-slate-900 dark:text-white w-full" 
              type="email" 
              placeholder="Email Address" 
            />
          </div>
          
          <div className="flex items-center border-2 border-slate-200 dark:border-slate-700 py-2 px-3 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd" />
            </svg>
            <input 
              className="pl-2 outline-none border-none bg-transparent text-slate-900 dark:text-white w-full" 
              type="password" 
              placeholder="Password" 
            />
          </div>

          <button 
            type="submit" 
            className="block w-full bg-gradient-to-r from-indigo-600 to-indigo-500 mt-4 py-2 rounded-sm text-white font-semibold mb-2
              hover:from-indigo-500 hover:to-indigo-400 transition-all duration-200"
          >
            Sign In
          </button>
          
          <div className="flex items-center justify-between mt-4">
            <Link 
              href="#" 
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
            >
              Forgot Password?
            </Link>
            <Link 
              href="/signup" 
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
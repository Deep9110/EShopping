import React from 'react'

const Login = () => {
  return (
    <div class="h-screen max-w-auto flex justify-center items-center bg-gray-300">
        <div class=" relative bg-white  rounded-md p-8 flex flex-col justify-start items-start bg-white sm:w-[350px] lg:w-[450px]">
            <div class="flex items-center">
                <span class="text-pink font-bold text-3xl">Login</span>
                <span class=" absolute h-[30px] w-[5px] bg-pink left-0"></span>
            </div>
            <form action="" class="mt-8 w-full">
                <div class="relative mt-">
                    <input type="text" id="email" name="email"
                    class="peer h-14 w-full border-b-2 border-gray-300 text-gray-900
                            focus:outline-none focus:border-pink"
                            placeholder="Email Address" 
                    />
                    <label for="email" class="absolute left-0 -top-4 text-gray-600 text-sm 
                                peer-placehoder-shown:text-base peer-placehoder-shown:text-black-400
                                peer-placehoder-shown:top-2">Email address</label>
                </div>
                <div class="relative mt-10">
                    <input type="password" id="Password" name="Password"
                    class="peer h-14 w-full border-b-2 border-gray-300 text-gray-900
                            focus:outline-none focus:border-pink"
                            placeholder="Password" 
                    />
                    <label for="email" class="absolute left-0 -top-4 text-gray-600 text-sm 
                                peer-placehoder-shown:text-base peer-placehoder-shown:text-black-400
                                peer-placehoder-shown:top-2">Password</label>
                </div>

                <div class="flex justify-end items-end py-4">
                    <span class="text-slate-300 hover:text-pink">Forgot Your Password?</span>
                </div>

                <div class="flex justify-center w-full bg-pink rounded">
                    <a href="/"><button class="text-white font-bold text-xl py-3 bg-pink">Log In</button></a>
                </div>

                <div class="flex items-center justify-center py-6">
                    <span class="text-slate-300 text-lg"> Or sign in with</span>
                </div>

                <div class="flex items-center justify-between w-full gap-3">
                    <span class="py-3 w-1/2 bg-[#43609C] text-center flex justify-center rounded text-white font-semibold text-lg"><i class="fa-brands fa-square-facebook pr-2 text-xl"></i>Facebook</span>
                    <span class="py-3 w-1/2 bg-white shadow-md shadow-white-900 text-center flex justify-center rounded text-black font-semibold text-lg"><i class="fa-brands fa-google pr-2 text-xl text-blue-500"></i>Google</span>
                </div>

                <div class="flex items-center justify-center py-4">
                    <span class="text-slate-300">Not a member? 
                        <a href="./signup"><span class="text-pink">Sign up now</span></a></span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
//update the state 
//..call appwrite 
//this is a login component which is shown at login page
//hav to create a form with email and password
//and a button to submit the form
//if the user is already logged in then redirect to home page
//if the user is not logged in then show the login form
//if the user is logged in then show the home page

import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import {  useDispatch } from 'react-redux'
import { login as authLogin } from '../features/authSlice'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import { useState } from 'react'


export const Login = () => {
    const dispatch = useDispatch()
    const navigate = Navigate()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState(null)
    // const [loading ,setLoading] = useState(false)
    const login = async (data) => {
        setError(null)
        try {
            const session = await authService.login(data)
            if (session) {
                // console.log(session)
                const useData = await authService.getCurrentUser()
                dispatch(authLogin(useData))
                navigate('/')
            }
        }
        catch (err) {
            setError(err.message)
        }
    }
    rreturn(
        <div
            className='flex items-center justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                        >Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}


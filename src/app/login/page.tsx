"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import loginThem from "@/assets/loginthem.png";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export type FormValues = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const router = useRouter();

    const onSubmit = async (data: FormValues) => {

        const res = await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });
        console.log(res);
        if (res?.error) {
            toast.error("Login failed!");
        } else {
            console.log('here i am ');
            router.push("/dashboard/messages");
        }
    };

    return (
        <div className="mt-5 w-[90%] mx-auto">

            <h1 className="text-center text-4xl font-bold">
                Login <span className="text-teal-500">Here</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
                <div>
                    <Image
                        src={loginThem}
                        width={500}
                        height={200}
                        alt="login page"
                        className="w-full h-auto"
                    />
                </div>

                <div className="w-[80%] mx-auto bg-white p-6 shadow-lg rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block text-sm font-bold text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                {...register("email")}
                                placeholder="Email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block text-sm font-bold text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                {...register("password")}
                                placeholder="Password"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full border border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-teal-500 hover:text-black"
                            >
                                Login
                            </button>
                        </div>
                    </form>


                    <p className="text-center mt-6 text-sm text-gray-500">
                        Or Sign Up Using
                    </p>

                    {/* Social Login Buttons */}
                    <div className="flex justify-center gap-4 mt-4">
                        <button
                            onClick={() => signIn("google", {
                                callbackUrl: 'https://sakhawat-portfolio.vercel.app/dashboard/messages'
                            })}
                            className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200">
                            <Image
                                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                                width={30}
                                height={30}
                                alt="Google logo"
                            />
                        </button>
                        <button
                            onClick={() => signIn("github", {
                                callbackUrl: "https://sakhawat-portfolio.vercel.app/dashboard/messages"
                            })}
                            className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
                        >
                            <Image
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                width={25}
                                height={25}
                                alt="GitHub logo"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
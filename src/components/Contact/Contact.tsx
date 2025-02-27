"use client"
import Image from "next/image";
import lineImage from "@/assets/ext/line.png"
import { useForm } from "react-hook-form";
import { createMessage } from "@/utils/actions/fetchMessage";
import { toast } from "sonner";

export type MessageForm = {
    name: string;
    email: string;
    phone?: string;
    message: string;
};

const Contact = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<MessageForm>();


    const onSubmit = async (messageInfo: MessageForm) => {
        const toastId = toast.loading("Sending message...");
        try {
            const res = await createMessage(messageInfo);
            if (res.success) {
                toast.success("Message sent successfully", { id: toastId });
                reset();
            }
            else {
                toast.error("Failed to send message", { id: toastId });
            }
        } catch (error) {
            toast.error("Failed to send message", { id: toastId });
        }
    };

    return (
        <div className="gradient-bg ">

            <div className='py-12 flex items-center'>
                <div className=' border-black border-[5px] w-72 mx-auto text-center '>
                    <h2 className='font-montserrat text-black font-bold text-xl tracking-[6px] p-3 uppercase '>CONTACT</h2>
                </div>
            </div>

            <div className="mx-auto flex w-5/6 md:w-5/6 lg:w-1/2 text-center">
                <p>Whether you have a project in mind, a question, or just want to connect, feel free to reach out. I`m always open to discussing new opportunities and collaborations!</p>
            </div>

            <Image
                src={lineImage}
                alt='line'
                width={170}
                height={50}
                className='mt-8 mb-20 mx-auto'
            />


            <div className="flex justify-center my-10">

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6 w-5/6 md:w-full max-w-md">

                    <input
                        placeholder="ENTER YOUR NAME*"
                        {...register("name", { required: "Name is required" })}
                        className="textarea textarea-bordered w-full border-black focus:outline-none bg-transparent focus:border-black border-l-4 border-b-4 border-t-0 border-r-0 rounded-none min-h-10"
                    />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}

                    <input
                        placeholder="ENTER YOUR EMAIL*"
                        {...register("email", { required: "Email is required" })}
                        className="textarea textarea-bordered w-full border-black focus:outline-none bg-transparent focus:border-black border-l-4 border-b-4 border-t-0 border-r-0 rounded-none min-h-10"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                    <input
                        placeholder="PHONE NUMBER"
                        {...register("phone")}
                        className="textarea textarea-bordered w-full border-black focus:outline-none bg-transparent focus:border-black border-l-4 border-b-4 border-t-0 border-r-0 rounded-none min-h-10"
                    />

                    <textarea
                        placeholder="YOUR MESSAGE*"
                        {...register("message", { required: "Message is required" })}
                        className="textarea textarea-bordered w-full border-black focus:outline-none bg-transparent focus:border-black border-l-4 border-b-4 border-t-0 border-r-0 rounded-none h-32"
                    />
                    {errors.message && <span className="text-red-500">{errors.message.message}</span>}

                    <input
                        className="cursor-pointer btn btn-outline hover:bg-transparent hover:text-black w-fit mx-auto rounded-none bg-transparent border-x-4 border-y-0 uppercase font-extrabold tracking-widest border-black px-2"
                        type="submit"
                        value="Submit"
                    />

                </form>

            </div>


        </div>
    );
};

export default Contact;
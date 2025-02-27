"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import liveSite from '@/assets/card/live.png';
import gitHub from '@/assets/card/github.png';
import { TProject } from "@/types/homeproject.type";

const SkillCart = ({ project } : {project : TProject}) => {

    return (
        <div className="bg-white card card-compact shadow-xl rounded-lg overflow-hidden ">

            <figure className="relative w-full h-60">
                <Carousel
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    showStatus={false}
                    stopOnHover={true}
                    dynamicHeight={false}
                >
                    {project?.images?.map((image, index) => (
                        <div key={index} className="h-60">
                            <Image
                                src={image.src}
                                alt={project.alt}
                                layout="responsive"
                                width={100}
                                height={100}
                                className="w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
                        </div>
                    ))}
                </Carousel>
            </figure>

            <div className="card-body p-5 space-y-3">
                <h2 className="card-title text-lg font-semibold">{project?.projectName}</h2>
                <p className="text-gray-600">{project?.projectDis}</p>
            </div>

            <div className="card-actions flex justify-between items-center py-2 px-5">
                <Link target="_blank" href={project?.liveLink} className="flex items-center space-x-2 cursor-pointer">
                    <Image src={liveSite} width={60} height={40} alt="Live Site" />
                    <span className="text-[#F2303F] font-medium hover:underline">Live Site</span>
                </Link>

                <Link target="_blank" href={project?.gitRepo} className="flex items-center space-x-2 cursor-pointer">
                    <Image src={gitHub} width={40} height={20} alt="GitHub" />
                    <span className="text-gray-600 font-medium hover:underline">GitHub Repo</span>
                </Link>
            </div>

        </div>
    );
};

export default SkillCart;
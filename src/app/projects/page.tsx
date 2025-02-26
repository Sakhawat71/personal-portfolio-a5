import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/utils/actions/fetchProject";
import { FaGithub, FaLink } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";
import { notFound } from "next/navigation";

const ProjectsPage = async () => {
    const { data: projects } = await getProjects();
    if (!projects) return notFound();

    return (
        <div className="bg-[#D6D6D6] min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project: any) => (
                    <div key={project._id} className="bg-white shadow-lg rounded-lg p-4">
                        {/* Project Images */}
                        <div className="relative w-full h-40 overflow-hidden rounded-md">
                            <Image
                                src={project.images[0]} // Show the first image
                                alt={project.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>


                        {/* Project Details */}
                        <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mt-3">
                            {project.techStack.map((tech: string, index: number) => (
                                <span
                                    key={index}
                                    className="bg-blue-100 text-blue-700 px-3 py-1 text-sm rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-600 mt-2">{project.description}</p>


                        {/* Links */}
                        <div className="flex justify-between items-center mt-4">
                            <Link
                                href={project.liveUrl}
                                target="_blank"
                                className="text-teal-500 font-medium hover:underline flex items-center"
                            >
                                <FaLink />
                                Live Demo
                            </Link>

                            <Link
                                key={project._id}
                                href={`/projects/${project._id}`}
                                className="text-blue-700 font-medium hover:underline flex items-center"
                            >
                                <MdOutlinePreview />
                                View Details
                            </Link>

                            <Link
                                href={project.githubUrl}
                                target="_blank"
                                className="text-gray-700 font-medium hover:underline flex items-center"
                            >
                                <FaGithub />
                                GitHub
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;

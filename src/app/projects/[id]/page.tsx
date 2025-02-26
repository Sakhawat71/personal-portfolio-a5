import Image from "next/image";
import Link from "next/link";
import { getProjectById } from "@/utils/actions/fetchProject";
import { notFound } from "next/navigation";
import { IProject } from "@/types/project.type";
import { Carousel } from "antd";

type ProjectDetailsPageProps = {
    params: Promise<{ id: string }>;
};

const ProjectDetails = async ({ params }: ProjectDetailsPageProps) => {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const projectData = await getProjectById(id);
    const project: IProject = projectData?.data;
    if (!project) return notFound();

    return (
        <div className="min-h-screen bg-slate-300 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 ">

            <div className=" max-w-4xl w-full bg-white rounded-lg shadow-lg p-6 sm:p-8 ">
                {/* Back Button */}
                <Link href="/projects" className="text-blue-600 hover:text-blue-700 hover:underline">
                    ← Back to Projects
                </Link>

                {/* Project Title */}
                <h1 className="text-3xl font-bold mt-6 text-gray-800">{project.title}</h1>

                {/* Project Images */}
                <figure className="relative w-full h-60 md:h-96 rounded-lg overflow-hidden shadow-sm">
                    <Carousel
                        autoplay
                        autoplaySpeed={3000}
                        dots={false}
                        effect="fade"
                        draggable
                    >
                        {project.images.map((image, index) => (
                            <div key={index} className="relative h-60 md:h-96">
                                <Image
                                    src={image}
                                    alt={`${project.title} - Image ${index + 1}`}
                                    fill
                                    className="w-full object-cover"
                                    priority={index === 0}
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                            </div>
                        ))}
                    </Carousel>
                </figure>

                {/* Project Description */}
                <p className="mt-6 text-gray-600 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.techStack.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Tags */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800">Tags</h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project?.tags?.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="mt-8 flex gap-4">
                    <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Live Demo
                    </Link>
                    <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
                    >
                        GitHub Repo
                    </Link>
                </div>

                {/* Metadata */}
                <div className="mt-8 text-sm text-gray-500">
                    <p>Created: {project?.createdAt ? new Date(project.createdAt).toDateString() : 'N/A'}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
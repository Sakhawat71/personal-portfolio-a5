import Image from "next/image";
import Link from "next/link";
import { getProjectById } from "@/utils/actions/fetchProject";
import { notFound } from "next/navigation";

type ProjectDetailsPageProps = {
    params: Promise<{ id: string }>;
};

const ProjectDetails = async ({ params }: ProjectDetailsPageProps) => {

    const resolvedParams = await params;
    const { id } = resolvedParams;
    const projectData = await getProjectById(id);
    const project = projectData?.data;
    if (!project) return notFound();

    return (
        <div className="max-w-3xl mx-auto px-6 py-8">
            {/* Back Button */}
            <Link href="/projects" className="text-teal-500 hover:underline">
                ← Back to Projects
            </Link>

            {/* Project Title */}
            <h1 className="text-4xl font-bold mt-4">{project.title}</h1>

            {/* Project Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {project?.images?.map((image: string, index: number) => (
                    <div key={index} className="relative w-full h-60 rounded-md overflow-hidden">
                        <Image
                            src={image}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                ))}
            </div>

            {/* Project Description */}
            <p className="text-gray-600 mt-6">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
                {project?.techStack?.map((tech: string, index: number) => (
                    <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 text-sm rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-6">
                <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="bg-teal-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-teal-600"
                >
                    Live Demo
                </Link>
                <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-900"
                >
                    GitHub Repo
                </Link>
            </div>
        </div>
    );
};

export default ProjectDetails;

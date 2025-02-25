import { Blog } from '@/types/blog.type';
import { fetchBlogById } from '@/utils/actions/fetchBlogs';
import Image from 'next/image';
import React from 'react';

type BlogDetailsPageProps = {
    params: Promise<{ id: string }>;
};


const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {

    const resolvedParams = await params;
    const { id } = resolvedParams;
    const blog = await fetchBlogById(id);
    const blogData: Blog = blog?.data;

    if (!blogData) {
        return <div className="text-center text-red-500 text-xl mt-10">Blog not found!</div>;
    }

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-4">{blogData.title}</h1>

            <Image
                src={blogData.coverImage}
                alt={blogData.title}
                width={500}
                height={500}
                className="w-full rounded-lg mb-4"
            />


            <p className="text-gray-600 text-sm mb-2">Published on: {new Date(blogData.createdAt)?.toDateString()}</p>
            <div className="text-gray-700 leading-relaxed">{blogData.content}</div>
            <div className="mt-4">
                {blogData?.tags?.filter((tag: any) => typeof tag === 'string' || typeof tag === 'number').map((tag: string | number) => (
                    <span key={tag} className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full mr-2">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default BlogDetailsPage;
import { Blog } from "@/types/blog.type";
import { fetchBlogs } from "@/utils/actions/fetchBlogs";
import Link from "next/link";

const BlogsPage = async () => {
    const blogs = await fetchBlogs();

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Blogs</h1>

            {blogs.length === 0 ? (
                <p className="text-center text-gray-500">No blogs found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs?.data?.map((blog: Blog) => (
                        <div key={blog._id} className="bg-white p-5 border rounded-lg shadow-md hover:shadow-lg transition">
                            <h2 className="text-xl font-bold">{blog.title}</h2>
                            <p className="text-gray-600 text-sm">{new Date(blog.createdAt)?.toDateString()}</p>
                            <p className="mt-2 text-gray-700">{blog.content?.slice(0, 100)}...</p>
                            <Link href={`/blog/${blog._id}`} className="text-teal-500 font-semibold mt-3 block">
                                Read More →
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogsPage;

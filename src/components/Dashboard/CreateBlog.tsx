"use client";

import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { fetchCreateBlog } from "@/utils/actions/fetchBlogs";
import { PlusOutlined } from "@ant-design/icons";
import { toast } from "sonner";

const CreateBlog = () => {
    const [form] = Form.useForm();
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState("");

    // Handle form submission
    const handleSubmit = async (values: any) => {
        const blogData = {
            ...values,
            tags,
        };

        const response = await fetchCreateBlog(blogData);
        const toastId = toast.loading("Creating blog...");

        if (response.success) {
            message.success("Blog created successfully!");
            form.resetFields();
            setTags([]);
            toast.success(response.message, { id: toastId });
        } else {
            toast.error(response.message, { id: toastId });
            message.error("Failed to create blog.");
        }
    };

    // Handle adding new tag
    const addTag = () => {
        if (tagInput && !tags.includes(tagInput)) {
            setTags([...tags, tagInput]);
            setTagInput("");
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-slate-300 shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Create a Blog</h1>

            <Form form={form} layout="vertical" onFinish={handleSubmit}>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    <Form.Item
                        className="block mb-2 font-semibold text-sm text-gray-700"
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: "Title is required" }]}
                    >
                        <Input
                            className="w-full p-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            placeholder="Enter blog title"
                        />
                    </Form.Item>

                    <Form.Item
                        className="block mb-2 font-semibold text-sm text-gray-700"
                        label="Cover Image URL"
                        name="coverImage"
                        rules={[{ required: true, message: "Cover image is required" }]}
                    >
                        <Input
                            className="w-full p-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            placeholder="Enter cover image URL"
                        />
                    </Form.Item>
                </div>

                {/* Tags Field */}
                <Form.Item className="block mb-2 font-semibold text-sm text-gray-700" label="Tags">
                    <div className="flex gap-2">
                        <Input
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            placeholder="Enter tag"
                            className="w-full p-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        />
                        <Button
                            onClick={addTag}
                            icon={<PlusOutlined />}
                            className="flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 transition-all"
                        />
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </Form.Item>

                {/* Content Field */}
                <Form.Item
                    className="block mb-2 font-semibold text-sm text-gray-700"
                    label="Content"
                    name="content"
                    rules={[{ required: true, message: "Content is required" }]}
                >
                    <Input.TextArea
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        rows={6}
                        placeholder="Enter blog content"
                    />
                </Form.Item>

                {/* Submit Button */}
                <Form.Item className="mt-5">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
                    >
                        Create Blog
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default CreateBlog;

"use client";

import { Button, Form, Input, Select, message } from "antd";
import { IProject } from "@/types/project.type";
import { toast } from "sonner";

const CreateProjectForm = () => {
    const [form] = Form.useForm();

    const onFinish = async (values: IProject) => {
        try {
            console.log("Form values:", values);
            // Add your submission logic here
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Create a New Project</h2>
            
            <Form form={form} layout="vertical" onFinish={onFinish}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Title */}
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please enter project title!' }]}
                >
                    <Input placeholder="Enter project title" />
                </Form.Item>


                {/* Tech Stack */}
                <Form.Item
                    label="Tech Stack"
                    name="techStack"
                    rules={[{ required: true, message: 'Please select at least one technology!' }]}
                >
                    <Select mode="tags" placeholder="Add technologies" />
                </Form.Item>

                {/* Live URL */}
                <Form.Item
                    label="Live URL"
                    name="liveUrl"
                    rules={[{ type: 'url', message: 'Please enter a valid URL!' }]}
                >
                    <Input placeholder="https://yourproject.com" />
                </Form.Item>

                {/* GitHub URL */}
                <Form.Item
                    label="GitHub URL"
                    name="githubUrl"
                    rules={[{ type: 'url', message: 'Please enter a valid URL!' }]}
                >
                    <Input placeholder="https://github.com/yourrepo" />
                </Form.Item>

                {/* Image URLs */}
                <Form.Item
                    label="Image URLs"
                    name="images"
                    rules={[{ required: true, message: 'Please enter at least one image URL!' }]}
                >
                    <Select mode="tags" placeholder="Enter image URLs" />
                </Form.Item>

                {/* Tags */}
                <Form.Item
                    label="Tags"
                    name="tags"
                >
                    <Select mode="tags" placeholder="Add tags" />
                </Form.Item>

                {/* Description */}
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please enter project description!' }]}
                >
                    <Input.TextArea placeholder="Enter project description" rows={4} />
                </Form.Item>
                </div>
                {/* Submit Button */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Create Project
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateProjectForm;
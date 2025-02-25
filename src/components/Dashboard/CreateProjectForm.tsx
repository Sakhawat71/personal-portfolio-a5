"use client";

import { Button, Form, Input, Select, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { IProject } from "@/types/project.type";


const CreateProjectForm = () => {
    const { register, handleSubmit, setValue, watch } = useForm<IProject>();

    const onSubmit = async (data: IProject) => {
        try {
            console.log(data);
            
        } catch (error) {
            console.error("Error:", error);
            message.error("Something went wrong!");
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Create a New Project</h2>
            
            <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
                
                {/* Title */}
                <Form.Item label="Title">
                    <Input {...register("title")} placeholder="Enter project title" />
                </Form.Item>

                {/* Description */}
                <Form.Item label="Description">
                    <Input.TextArea {...register("description")} placeholder="Enter project description" rows={4} />
                </Form.Item>

                {/* Tech Stack */}
                <Form.Item label="Tech Stack">
                    <Select mode="tags" placeholder="Add technologies" onChange={(value) => setValue("techStack", value)} />
                </Form.Item>

                {/* Live URL */}
                <Form.Item label="Live URL">
                    <Input {...register("liveUrl")} placeholder="https://yourproject.com" />
                </Form.Item>

                {/* GitHub URL */}
                <Form.Item label="GitHub URL">
                    <Input {...register("githubUrl")} placeholder="https://github.com/yourrepo" />
                </Form.Item>

                {/* Image URLs - Allows Single or Multiple URLs */}
                <Form.Item label="Image URLs">
                    <Select
                        mode="tags"
                        placeholder="Enter image URLs"
                        onChange={(value) => setValue("images", value)}
                    />
                </Form.Item>

                {/* Tags */}
                <Form.Item label="Tags">
                    <Select mode="tags" placeholder="Add tags" onChange={(value) => setValue("tags", value)} />
                </Form.Item>

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

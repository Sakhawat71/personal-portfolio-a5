"use client";

import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { fetchCreateBlog } from "@/utils/actions/fetchBlogs";
import { PlusOutlined } from "@ant-design/icons";

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
    if (response.success) {
      message.success("Blog created successfully!");
      form.resetFields();
      setTags([]);
    } else {
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
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Create a Blog</h1>

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Title" name="title" rules={[{ required: true, message: "Title is required" }]}>
          <Input placeholder="Enter blog title" />
        </Form.Item>

        <Form.Item label="Content" name="content" rules={[{ required: true, message: "Content is required" }]}>
          <Input.TextArea rows={6} placeholder="Enter blog content" />
        </Form.Item>

        <Form.Item label="Cover Image URL" name="coverImage" rules={[{ required: true, message: "Cover image is required" }]}>
          <Input placeholder="Enter cover image URL" />
        </Form.Item>

        <Form.Item label="Tags">
          <div className="flex gap-2">
            <Input value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder="Enter tag" />
            <Button onClick={addTag} icon={<PlusOutlined />} />
          </div>
          <div className="mt-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md mr-2">
                {tag}
              </span>
            ))}
          </div>
        </Form.Item>

        <Button type="primary" htmlType="submit" className="w-full">
          Create Blog
        </Button>
      </Form>
    </div>
  );
};

export default CreateBlog;

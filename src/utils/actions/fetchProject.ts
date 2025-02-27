"use server";
import { IProject } from "@/types/project.type";

export const createProject = async (data: IProject) => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/projects/create-project`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            // cache: "no-store",
        });

        return await res.json();
    } catch (error) {
        console.error("Error creating blog:", error);
        return { success: false };
    }
};

export const getProjects = async () => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/projects`, {
            method: "GET",
            // cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch blogs");
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return [];
    }
};

export const getProjectById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/projects/${id}`, {
            method: "GET",
            // cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch blog");
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching blog:", error);
        return null;
    }
};
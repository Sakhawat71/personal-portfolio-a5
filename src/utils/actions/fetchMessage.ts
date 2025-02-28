"use server";
import { IMessage } from "../../types/message.type";

export const createMessage = async (data: IMessage) => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/contacts/send-message`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            cache: "no-store",
        });

        return await res.json();
    } catch (error) {
        console.error("Error creating message:", error);
        return { success: false };
    }
};

export const getMessages = async () => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/contacts`, {
            method: "GET",
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch messages");
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching messages:", error);
        return [];
    }
};

export const getMessageById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/contacts/${id}`, {
            method: "GET",
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch message");
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching message:", error);
        return null;
    }
};

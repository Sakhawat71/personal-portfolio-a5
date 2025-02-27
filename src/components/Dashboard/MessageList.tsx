"use client";

import { useState } from "react";
import { Card, Button } from "antd";
import { IMessage } from "@/types/message.type";
import { Modal } from "./Modal";

interface MessageListProps {
    messages: IMessage[];
}

const MessageList = ({ messages }: MessageListProps) => {
    const [selectedMessage, setSelectedMessage] = useState<IMessage | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (message: IMessage) => {
        setSelectedMessage(message);
        setIsModalOpen(true);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {messages.map((msg) => (
                <Card
                    key={msg._id}
                    className="p-4"
                    title={msg.name}
                    extra={<Button type="primary" onClick={() => openModal(msg)}>View Details</Button>}
                >
                    <p className="text-sm text-gray-500">{msg.email}</p>
                    <p className="truncate text-gray-700">{msg.message}</p>
                </Card>
            ))}

            {isModalOpen && selectedMessage && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2">{selectedMessage.name}</h2>
                        <p className="text-sm text-gray-500">{selectedMessage.email}</p>
                        <p className="text-sm text-gray-500">{selectedMessage.phone || "No phone number"}</p>
                        <p className="mt-4">{selectedMessage.message}</p>
                        {selectedMessage.location && (
                            <div className="mt-4 text-sm text-gray-600">
                                <p><strong>Location:</strong> {selectedMessage.location.city}, {selectedMessage.location.country}</p>
                            </div>
                        )}
                        
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default MessageList;

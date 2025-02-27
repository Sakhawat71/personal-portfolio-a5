import MessageList from "@/components/Dashboard/MessageList";
import { getMessages } from "@/utils/actions/fetchMessage";


const MessagesPage = async () => {
    const { data: messages } = await getMessages();

    return (
        <div className="p-5">
            <h1 className="text-2xl font-semibold mb-5">Messages</h1>
            <MessageList messages={messages} />
        </div>
    );
};

export default MessagesPage;

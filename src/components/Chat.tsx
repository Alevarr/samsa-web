export type Message = {
  message: string;
  belongsToUser: boolean;
}

const Chat = ({ messages }: { messages: Message[] }) => {
  return (
    <div className="p-4 border rounded-lg bg-gray-100 overflow-y-auto h-full">
      <div className="space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.belongsToUser ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg text-sm ${
                msg.belongsToUser
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-900"
              } max-w-xs`}
            >
              {msg.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;

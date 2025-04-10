import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Camera, Bot } from "lucide-react";
import scan from "@/assets/homePic/scan.png";
import { predefinedResponses } from "@/constants/mockData";
import "@/css/ diagnosisCss.css";

export default function Diagnosis() {
  // if is scan
  const [isScanning, setIsScanning] = useState(false);
  // if finish scanning
  const [scanCompleted, setScanCompleted] = useState(false);
  // give an overview anlysis
  const [aiAdvice, setAiAdvice] = useState("");
  // the content that user entered
  const [userQuery, setUserQuery] = useState("");
  // whole records
  const [chatHistory, setChatHistory] = useState([]);

  // automatic go to bottom
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanCompleted(true);
      setAiAdvice(
        "Your plant appears to need more water; increase watering frequency."
      );
      setChatHistory([
        {
          sender: "bot",
          text: "Scan completed! Your plant appears to need more water; increase watering frequency.",
        },
      ]);
    }, 2000);
  };

  const handleSendQuery = () => {
    const question = userQuery.trim();
    if (!question) return;

    const lower = question.toLowerCase();
    const match = predefinedResponses.find((r) => lower.includes(r.keyword));
    const reply = match
      ? match.answer
      : "Sorry, I could not understand. Try asking about sunlight, water, or soil.";

    setChatHistory((prev) => [
      ...prev,
      { sender: "user", text: question },
      {
        sender: "bot",
        text: reply,
        product: match?.product,
        showProduct: false,
      },
    ]);
    setUserQuery("");
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 gap-6 mt-24">
      <Card className="w-full max-w-xl p-6 shadow-lg rounded-2xl min-h-1/2">
        {/* scaning */}
        {!scanCompleted ? (
          <div className="flex flex-col items-center">
            <div className="mb-4 w-64 h-64">
              <img className="rounded-2xl" src={scan} alt="scan" />
            </div>
            <Button
              disabled={isScanning}
              onClick={handleScan}
              className="gap-2"
            >
              {isScanning ? <Loader2 className="animate-spin" /> : <Camera />}
              {isScanning ? "Scanning..." : "Scan Plant"}
            </Button>
          </div>
        ) : (
          // finish scanning, start chatting
          <div
            ref={chatContainerRef}
            className="flex flex-col gap-4 h-[60vh] overflow-y-auto px-2"
          >
            {chatHistory.map((chat, idx) => {
              return (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    chat.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    onAnimationEnd={() => {
                      if (
                        chat.sender === "bot" &&
                        chat.product?.isExists === 1 &&
                        !chat.showProduct
                      ) {
                        setChatHistory((prev) => {
                          const updated = [...prev];
                          updated[idx] = {
                            ...updated[idx],
                            showProduct: true,
                          };
                          return updated;
                        });
                      }
                    }}
                    className={`rounded-xl px-4 py-2 max-w-[75%] text-sm animate-fade-in ${
                      chat.sender === "user"
                        ? "bg-green-100 text-right"
                        : "bg-gray-200 text-left"
                    }`}
                  >
                    {chat.text}
                  </div>

                  {chat.sender === "bot" &&
                    chat.product?.isExists === 1 &&
                    chat.showProduct && (
                      <a
                        target="_blank"
                        href={chat.product.link}
                        className="animate-fade-in"
                      >
                        <div className="mt-2 p-4 border rounded bg-white shadow text-sm max-w-[75%] space-y-1">
                          <div className="font-semibold break-words">
                            {chat.product.name}
                          </div>
                          <div className="text-gray-600 break-words">
                            {chat.product.description}
                          </div>
                          <div className="text-blue-500 underline inline-block">
                            View Product
                          </div>
                        </div>
                      </a>
                    )}
                </div>
              );
            })}
          </div>
        )}
      </Card>

      {/* add the conversation to the history, display on the screen */}
      {scanCompleted && (
        <div className="w-full max-w-xl flex gap-2">
          <input
            type="text"
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            placeholder="Ask AI for more details..."
            className="flex-1 p-2 border rounded-lg outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendQuery();
              }
            }}
          />
          <Button onClick={handleSendQuery} disabled={!userQuery.trim()}>
            <Bot size={16} />
          </Button>
        </div>
      )}
    </div>
  );
}

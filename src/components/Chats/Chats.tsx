import React, { useState, useEffect, useRef } from "react";
import "./Chats.scss";
import { chatbot } from "../../service/login.service";

interface Props {
  userResponse: string;
  // botResponse: {
  //   purpose: string;
  //   message: string;
  //   options?: string[];
  //   sender: string;
  // };
  sendUserResponse: string;
  optionClick: (ev: React.MouseEvent<HTMLElement>) => void;
}

interface MessagesInfo {
  purpose?: string;
  message: string;
  options?: string[];
  sender: string;
}

const Chats: React.FC<Props> = (props) => {
  const [messages, setMessages] = useState<MessagesInfo[]>([]);
  const [botResponse, setBotResponse] = useState<boolean>();

  const dummyRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const onLoad = async () => {
    console.log("messages", messages.length);
    
    if (messages.length === 0) {
      setMessages([
        {
          purpose: "introduction",
          message:
            "Hey there! 👋 got questions about Quebec real-estate or CourtierXpert? Ask away!! ",
          sender: "bot",
        },
      ]);
    } else if(messages.length < 2 || localStorage.getItem("token")) {
      let tempArray = [...messages];
      tempArray.push({ message: props.sendUserResponse, sender: "user" });
      setMessages(tempArray);
      const chatbotObj = {
        question: props.sendUserResponse,
      };
      setBotResponse(true);
      const chatBotResponse: any = await chatbot(chatbotObj);
      // if (chatBotResponse) {
      setBotResponse(false);
      // }
      let res = {
        message: chatBotResponse,
        sender: "bot",
      };
      // setBotResponse( { ...res, sender: "bot" })
      setTimeout(() => {
        let temp2 = [...tempArray];
        temp2.push({
          message: chatBotResponse,
          sender: "bot",
        });
        setMessages(temp2);
      }, 1000);
    }
    else{
      let tempArray = [...messages];
      tempArray.push({ message: props.sendUserResponse, sender: "user" });
      setMessages(tempArray);
      setTimeout(() => {
        let temp2 = [...tempArray];
        temp2.push({
          message: "Please login to continue",
          sender: "bot",
        });
        setMessages(temp2);
      }, 500);
    }
  };

  // stacking up messages
  useEffect(() => {
    onLoad();
  }, [props.sendUserResponse]);

  // enable autoscroll after each message
  useEffect(() => {
    if (dummyRef && dummyRef.current && bodyRef && bodyRef.current) {
      bodyRef.current.scrollTo({
        top: dummyRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="message-container" ref={bodyRef}>
      {messages.map((chat) => (
        <div key={chat.message}>
          <div className={`message ${chat.sender}`}>
            <p>{chat.message}</p>
          </div>
          {chat.options ? (
            <div className="options">
              <div>
                <i className="far fa-hand-pointer"></i>
              </div>
              {chat.options.map((option) => (
                <p
                  onClick={(e) => props.optionClick(e)}
                  data-id={option}
                  key={option}
                >
                  {option}
                </p>
              ))}
            </div>
          ) : null}
          <div ref={dummyRef} className="dummy-div"></div>
        </div>
      ))}
      {botResponse && (
        <div className="snippet" data-title=" ">
          <div className="stage">
            <div className="dot-falling"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chats;

import React, { useState } from "react";
import Chats from "../Chats/Chats";
import { analyzeNextSteps } from "../HelperFunctions/analyzeNextSteps";
import "./Chatbot.scss";
import { chatbot, updateUser } from "../../service/login.service";
import saveImg from "../../assets/images/send.png";
import { Closeicon } from "../../core/icons";
interface ResponseBotObject {
  purpose: string;
  message: string;
  options?: string[];
  sender: string;
}

const Chatbot = ({ chatbotClass, setChatbotClass }: any) => {
  const [userResponse, setUserResponse] = useState<string>("");
  // const [step, setStep] = useState<number>(0);
  const [botResponse, setBotResponse] = useState<ResponseBotObject>({
    purpose: "",
    message: "",
    sender: "bot",
  });
  const [sendUserResponse, setSendUserResponse] = useState<string>("");

  // setting next step when there's response and option click
  const setNextStep = async (response: string) => {
    // const chatbotObj ={
    //   "question": response
    // }
    // const chatBotResponse = await chatbot(chatbotObj);
    setSendUserResponse(response);
    let res = {
      // purpose: "",
      // message: chatBotResponse,
    };
    // setBotResponse({ ...res, sender: "bot" });
    setUserResponse("");
  };

  const optionClick = (e: React.MouseEvent<HTMLElement>) => {
    let option = e.currentTarget.dataset.id;
    if (option) {
      setNextStep(option);
    }
  };

  // event handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserResponse(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNextStep(userResponse);
  };

  const handleCloseChatbotEvent = () => {
    const element: any = document.getElementById("chatbot");
    if (element) {
      element.classList.remove("active");
    }
    setChatbotClass(false);
  };

  return (
    <div className="chat-container">
      <div className="header-top">
      XpertAI
        <div className="closeicon" onClick={handleCloseChatbotEvent}>
          <Closeicon />
        </div>
      </div>

      <Chats
        userResponse={userResponse}
        // botResponse={botResponse}
        sendUserResponse={sendUserResponse}
        optionClick={optionClick}
      />
      <form onSubmit={(e) => handleSubmit(e)} className="form-container">
        <input
          onChange={(e) => handleInputChange(e)}
          value={userResponse}
        ></input>
        <button>
          <img src={saveImg} alt="" />
        </button>
      </form>
    </div>
  );
};

export default Chatbot;

import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
const BotRedirect = ({ url, message }) => {
  return (
    <div>
      <a href={url} target="blank">
        {message}
      </a>
    </div>
  );
};
const CHATBOT_THEME = {
  background: "#FFFFFF",
  fontFamily: "",
  headerBgColor: "#f75700",
  headerFontColor: "White",
  headerFontSize: "17px",
  botBubbleColor: "#f75700",
  botFontColor: "#fff",
  userBubbleColor: "White",
  userFontColor: "Black"
};
const ChatBotHelper = () => {
  const steps = [
    {
      id: "1",
      message: "Hello User!",
      trigger: "2"
    },
    {
      id: "2",
      message: "How can I help you?",
      trigger: "3"
    },
    {
      id: "3",
      options: [
        { value: 1, label: "Support", trigger: "4" },
        { value: 2, label: "AICTE Placements", trigger: "5" },
        { value: 3, label: "Report Security Issue",trigger:"6" },
        {value: 4, label: "AICTE Internships",trigger:"7" },
        {value: 5, label: "Login Problems!",trigger:"8" }

      ]
    },
    {
      id: "4",
      component: (
        <BotRedirect
          message="Contact Praveen - 8038937037"
          url="https://www.aicte-india.org/contact"
        />
      ),
      trigger: "2"
    },
    {
        id: "5",
        component: (
          <BotRedirect
            message="To Know about Placements Click!☝️"
            url="https://www.aicte-india.org/opportunities/students/placements"
          />
        ),
        trigger: "2"
      },
    
    {
        id: "6",
        component: (
          <BotRedirect
            message="Contact Raghu - 90390390393"
            url="https://raghuvr.tech"
          />
        ),
        trigger: "3"
      },
    
      
    
      {
        id: "7",
        component: (
          <BotRedirect
            message="To Know about Internship Click ☝️"
            url="https://internship.aicte-india.org/"
          />
        ),
        trigger: "3"
      },
    
      {
        id: "8",
        component: (
          <BotRedirect
            message="Admin Contact - Sriram -9876789800"
            url="https://sriram-ravichandran.github.io/portfolio"
          />
        ),
        trigger: "3"
      }
   
  ];







  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot steps={steps} floating={true} />
      </ThemeProvider>
    </>
  );
};
export default ChatBotHelper;
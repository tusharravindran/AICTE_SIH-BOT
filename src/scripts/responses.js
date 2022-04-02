function getBotResponse(input) {
    //rock paper scissors
  /*  if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
*/
    // Simple responses
    if (input == "hello" || input=="hi") {
        return "Hello there!";
    } else if (input == "goodbye"|| input=="bye") {
        return "Talk to you later!";
    } 
    else if(input=="Technical Support"||input=="Support"|| input=="support"){
        return "Contact : Prawin - 8056446324 </WebAdmin>"
    }else if(input=="?"||input=="Help"){
        return "Try 'Support' or 'hello' ";
    }
        else if(input =="Report a Bug"||input=="Bug"||input=="bug"){
        return "Contact : Raghunandhan - 78376833833 (Security Analyst)";
    }
    else if(input=="hackathon"||input=="sih"){
        return "8th and 9th of march 2022";
    }else if(input=="webportal"){
        return "https://portal.aicte-india.org/partnerportal_enu/start.swe?SWECmd=Start&SWEHo=portal.aicte-india.org";
    }else if(input=="resources"){
        return "https://www.aicte-india.org/opportunities/students/resources_students";
    }
    else{
        return "Please Ask Something else😊"
    }

}
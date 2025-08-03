import { createContext, useContext, useState } from "react";

export const QuestionStepContext = createContext();

export const QuestionStepProvider = ({ children }) => {
  const [stepData, setStepData] = useState({});
  return (
    <QuestionStepContext.Provider value={[stepData, setStepData]}>
      {children}
    </QuestionStepContext.Provider>
  );
};

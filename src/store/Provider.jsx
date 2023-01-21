import { useReducer } from "react";
import { Data } from "./Context";
import { dataInit } from "./init";
import { dataReducer } from "./reducer";

const DataProvider = ({ children }) => {
  const [data, dispatchData] = useReducer(dataReducer, dataInit);
  return <Data.Provider value={[data, dispatchData]}>{children}</Data.Provider>;
};

export { DataProvider };

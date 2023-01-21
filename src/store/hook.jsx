import { useContext } from "react";
import { Data } from "./Context";

export const useStore = () => {
  const [stateData, dispatchData] = useContext(Data);
  return [stateData, dispatchData];
};

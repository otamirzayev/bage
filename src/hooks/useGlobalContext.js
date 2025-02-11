import { GlobalContext } from "../context/GlobalContext";
import GlobalContextProvider from "../context/GlobalContext";

function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext() must be in the GlobalContextProvider");
  }
  return context;
}

export { useGlobalContext };

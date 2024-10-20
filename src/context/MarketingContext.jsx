import { createContext, useContext } from "react";
import useAxios from "../hooks/useAxios";
import Loader from "../components/loader/Loader";

const MarketingContext = createContext();

function MarketingProvider({ children }) {
  const { data, isLoading, error } = useAxios("/marketing");

  if (isLoading) return null;

  if (error) return <p className="fetch-error">Error: {error.message}</p>;

  return (
    <MarketingContext.Provider value={{ data, isLoading, error }}>
      {children}
    </MarketingContext.Provider>
  );
}

const useMarketing = () => {
  const marketing = useContext(MarketingContext);

  return marketing;
};

export { MarketingProvider, useMarketing };

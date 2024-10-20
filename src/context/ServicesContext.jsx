import { createContext, useContext, useState } from "react";
import useAxios from "../hooks/useAxios";
import Loader from "../components/loader/Loader";

const ServicesContext = createContext();

function ServicesProvider({ children }) {
  const { data, isLoading, error } = useAxios("/services");

  if (isLoading) return <Loader />;

  if (error) return <p className="fetch-error">Error: {error.message}</p>;

  return (
    <ServicesContext.Provider value={{ data, isLoading, error }}>
      {children}
    </ServicesContext.Provider>
  );
}

const useService = () => {
  const service = useContext(ServicesContext);

  return service;
};

export { ServicesProvider, useService };

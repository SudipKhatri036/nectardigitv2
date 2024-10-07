import React from "react";
import MarketingAdContent from "../components/marketingAdContent/MarketingAdContent";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";

function MarketingContent() {
  const { id } = useParams();

  const { data, isLoading, error } = useAxios(`/marketing/${id}`, "Get", null, [
    id,
  ]);

  if (isLoading) <Loader />;

  if (error) return <p className="fetch-error">Error: {error.message}</p>;

  return (
    <main className="marketing">
      <MarketingAdContent key={data?.data.id} content={data?.data} />
    </main>
  );
}

export default MarketingContent;

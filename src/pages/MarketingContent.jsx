import React from "react";
import MarketingAdContent from "../components/marketingAdContent/MarketingAdContent";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";
import { useMarketing } from "../context/MarketingContext";

function MarketingContent() {
  const { id } = useParams();

  const { data, isLoading, error } = useMarketing();

  if (isLoading) <Loader />;

  if (error) return <p className="fetch-error">Error: {error.message}</p>;

  const marketingContent = data?.data.filter(
    (cont) => cont.id === Number(id)
  )[0];
  console.log(marketingContent);

  return (
    <main className="marketing">
      <MarketingAdContent content={marketingContent} />
    </main>
  );
}

export default MarketingContent;

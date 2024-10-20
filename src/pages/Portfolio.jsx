import React, { useEffect, useState } from "react";
import PageHero from "../components/pageHero/PageHero";
import PortfolioPage from "../components/portfolioPage/PortfolioPage";

import PaginationItem from "../components/paginationItem/PaginationItem";
import useAxios from "../hooks/useAxios";
import Loader from "../components/loader/Loader";

function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useAxios(
    `/clients?page=${currentPage}`,
    "Get",
    null,
    [currentPage]
  );

  const maxPage = Math.round(data?.data.total / data?.data.perPage);

  function handlePageNum(indx) {
    setCurrentPage(indx);
  }

  function handleNxt() {
    if (currentPage !== data?.data.lastPage)
      setCurrentPage((pageNum) => pageNum + 1);
  }

  function handlePrev() {
    if (currentPage !== 1) setCurrentPage((pageNum) => pageNum - 1);
  }

  if (isLoading) {
    return <Loader />;
  }

  console.log(data);

  return (
    <main className="portfolio">
      <PageHero
        imgSrc="/images/portfolio-banner-01-1.png"
        pageName="portfolio"
      />

      <PortfolioPage client={data?.data?.client} />
      <PaginationItem
        currentPage={currentPage}
        maxPage={maxPage}
        handlePageNum={handlePageNum}
        handleNxt={handleNxt}
        handlePrev={handlePrev}
        lastPage={data?.data.lastPage}
      />
    </main>
  );
}

export default Portfolio;

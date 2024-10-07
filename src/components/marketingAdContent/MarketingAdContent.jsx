import PageHero from "../pageHero/PageHero";
import "./MarketingAdContent.css";

function MarketingAdContent({ content }) {
  return (
    <>
      <PageHero imgSrc="/images/bg-section.jpg" pageName={content?.title.en} />
      <section className="marketing-ad-content container mt mb">
        <div className="portfolio-details-content pt pb">
          <h3>{content?.title.en}</h3>
          <span></span>

          <div dangerouslySetInnerHTML={{ __html: content?.description }} />
        </div>
      </section>
    </>
  );
}

export default MarketingAdContent;

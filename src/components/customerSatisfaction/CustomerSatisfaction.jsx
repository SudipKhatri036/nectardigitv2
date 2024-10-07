import SectionHeading from "../sectionHeading/SectionHeading";

import "./CustomerSatisfaction.css";

function CustomerSatisfaction({ aboutSatisfy }) {
  return (
    <section className="how-section pt pb">
      <div className="container">
        <SectionHeading
          heading="Satisfy our"
          headingHighlight="Customer"
          subheading="We provide a range of IT related services at reasonable cost and with highest quality possible."
        />
        <div className="row">
          {aboutSatisfy?.map((satisfyData) => {
            return (
              <div key={satisfyData?.id} className="col-lg-4 col-md-6">
                <div className="how-section-wrap hvr-buzz-out">
                  <img
                    src="/images/social-listening.png"
                    alt="Social Listening"
                  />
                  <h3>{satisfyData.title}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: satisfyData.description,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CustomerSatisfaction;

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
            const { id, image, title, description } = satisfyData || {};
            return (
              <div key={id} className="col-lg-4 col-md-6">
                <div className="how-section-wrap hvr-buzz-out">
                  <img
                    src={image}
                    alt="Social Listening"
                    referrerPolicy="no-referrer"
                  />
                  <h3>{title}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: description,
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

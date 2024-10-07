import useAxios from "../../hooks/useAxios";
import Loader from "../loader/Loader";
import Mission from "../mission/Mission";
import "./AboutUs.css";

function AboutUs({ missionData }) {
  const { data, isLoading, error } = useAxios("/aboutus");

  if (isLoading) {
    return <Loader />;
  }

  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="about-us pt pb">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="about-us-content">
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.data[0].short_description,
                }}
              />

              <div
                dangerouslySetInnerHTML={{
                  __html: data?.data[0].description,
                }}
              />
            </div>
          </div>
        </div>
        <Mission missionData={missionData ? missionData : []} />
      </div>
    </section>
  );
}

export default AboutUs;

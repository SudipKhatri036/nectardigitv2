import "./HomeCounter.css";
import CountUpComp from "../countUp/CountUpComp";
import useAxios from "../../hooks/useAxios";
import Loader from "../loader/Loader";

function HomeCounters() {
  const { data, isLoading, error } = useAxios("/home");

  const {
    finesh_project: finishedProject,
    happy_client: happyClient,
    media_post: mediaPost,
    skil_export: skillExport,
  } = data?.data.counters[0] || {};

  return (
    <section className="home-counters ">
      <div className="container">
        {error && <p className="fetch-error">{error.message}</p>}
        {isLoading ? (
          <Loader />
        ) : (
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="counter-wrap">
                <div className="counter-icon">
                  <img src="/images/05.svg" alt="Icon" />
                </div>
                <div className="counter-content">
                  <CountUpComp end={happyClient} description="happy-client" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="counter-wrap">
                <div className="counter-icon">
                  <img src="/images/08.svg" alt="Icon" />
                </div>
                <div className="counter-content">
                  <CountUpComp
                    end={skillExport}
                    description="Skilled Experts"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="counter-wrap">
                <div className="counter-icon">
                  <img src="/images/06.svg" alt="Icon" />
                </div>
                <div className="counter-content">
                  <CountUpComp
                    end={finishedProject}
                    description="Finished Projects"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="counter-wrap">
                <div className="counter-icon">
                  <img src="/images/07.svg" alt="Icon" />
                </div>
                <div className="counter-content">
                  <CountUpComp end={mediaPost} description="Media Posts" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default HomeCounters;

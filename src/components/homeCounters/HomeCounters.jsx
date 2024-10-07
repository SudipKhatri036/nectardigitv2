import "./HomeCounter.css";

function HomeCounters() {
  return (
    <section className="home-counters ">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="counter-wrap">
              <div className="counter-icon">
                <img src="/images/05.svg" alt="Icon" />
              </div>
              <div className="counter-content">
                <span className="counter">1190+</span>
                <p>happy-client</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="counter-wrap">
              <div className="counter-icon">
                <img src="/images/08.svg" alt="Icon" />
              </div>
              <div className="counter-content">
                <span className="counter">345+</span>
                <p>Skilled Experts</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="counter-wrap">
              <div className="counter-icon">
                <img src="/images/06.svg" alt="Icon" />
              </div>
              <div className="counter-content">
                <span className="counter">548+</span>
                <p>Finished Projects</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="counter-wrap">
              <div className="counter-icon">
                <img src="/images/07.svg" alt="Icon" />
              </div>
              <div className="counter-content">
                <span className="counter">980+</span>
                <p>Media Posts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCounters;

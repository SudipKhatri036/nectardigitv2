import "./Loader.css";

function Loader() {
  return (
    <div className="loader-cont">
      <div aria-live="assertive" role="alert" className="loader" />
    </div>
  );
}

export default Loader;

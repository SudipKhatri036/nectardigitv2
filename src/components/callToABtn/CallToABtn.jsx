import "./CallToABtn.css";

function CallToABtn() {
  return (
    <button
      type="button"
      id="openClickCallModalBtn"
      data-toggle="modal"
      data-target="#exampleModalCenter"
      className="call-now-button"
      style={{
        position: "fixed",
        bottom: "160px",
        right: "24px",
        zIndex: "8000",
      }}
    >
      <img
        nitro-lazy-src="https://cdn-hohbd.nitrocdn.com/dsLFxBbnVPUPuwYaXsksKaREDeucUaSd/assets/images/source/rev-4c37114/newspc.s3.ap-south-1.amazonaws.com/website/2024/03/call.svg"
        className="lazyloaded"
        decoding="async"
        nitro-lazy-empty=""
        id="NDY4OToxMDU=-1"
        src="https://cdn-hohbd.nitrocdn.com/dsLFxBbnVPUPuwYaXsksKaREDeucUaSd/assets/images/source/rev-4c37114/newspc.s3.ap-south-1.amazonaws.com/website/2024/03/call.svg"
      />
    </button>
  );
}

export default CallToABtn;

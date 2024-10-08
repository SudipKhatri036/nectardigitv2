import "./CompanyMap.css";

function CompanyMap() {
  return (
    <section className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5672014227493!2d85.30969687538148!3d27.699768525825867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900db12023d%3A0x77ad6a4239f3f2be!2sNectar%20Digit!5e0!3m2!1sne!2snp!4v1727594554751!5m2!1sne!2snp"
        width="100%"
        height="500"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
}

export default CompanyMap;

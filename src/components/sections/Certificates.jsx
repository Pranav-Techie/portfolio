import certificates from "../data/certificates";

export default function Certificates() {
  return (
    <section className="certificates" id="certificates">

      <div className="section-title">
        <p>CERTIFICATES</p>

        <h2>{"05 / LEARNING"}</h2>

        <p className="section-subtitle">
          Certifications and learning achievements.
        </p>
      </div>

      <div className="certificate-grid">

        {certificates.map((certificate) => (

          <div className="certificate-card" key={certificate.title}>

            <div className="certificate-image-wrapper">

              <img
                src={certificate.image}
                alt={certificate.title}
                className="certificate-image"
              />

              <div className="certificate-logo">

                <img
                  src={certificate.logo}
                  alt={certificate.issuer}
                />

              </div>

            </div>

            <div className="certificate-content">

              <p className="certificate-desc">
                {certificate.description}
              </p>

              <h3>{certificate.title}</h3>

              <h4>{certificate.issuer}</h4>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
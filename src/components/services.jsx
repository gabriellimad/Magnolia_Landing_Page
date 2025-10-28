import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Infraestrutura</h2>
          <p>
            Descubra nossa infraestrutura moderna e completa, pensada para oferecer conforto, segurança e praticidade. 
            Aproveite ambientes planejados, áreas de lazer e tecnologia de ponta para você e sua família.
          </p>
          <div style={{ marginTop: "20px", fontWeight: "bold", fontSize: "1.2em", color: "#fff" }}>
            Área construída: 5.000m²
          </div>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

import React from "react";

const HistoryIntro = () => {
  return (
    <section className="history-container history-container-main">
      <h1>BEECH 1900 MODEL HISTORY</h1>
      <div className="history-intro intro-one">
        <div className="history-intro-text">
          <h3>
            The Beech 1900 can trace its history back to 1949, when Beechcraft
            first flew the Model 50{" "}
            <span className="history-italic">&quot;Twin Bonanza&quot;</span>, a
            light-twin reciprocating airplane, for the US military. Though
            dissimilar to the Bonanza model of the time, the company used the{" "}
            <span className="history-italic">&quot;Bonanza&quot;</span> title to
            capitalize on the brand recognition of the popular single-engine
            type.
          </h3>
          <h3>
            Later, a longer cabin and larger engines were mated to the Model 50
            airframe, creating the Model 65{" "}
            <span className="history-italic">&quot;Queen Air&quot;</span>,
            beginning in 1965. The Model 90{" "}
            <span className="history-italic">&quot;King Air&quot;</span> saw an
            addition of pressurization and turboprop engines in the same period.
            Then, the fuselage was stretched again, the turboprop engines made
            more powerful for 1972’s Model 200{" "}
            <span className="history-italic">&quot;Super King Air.&quot;</span>
          </h3>
        </div>
        <div className="history-image-wrap image-one">
          <img
            src={`${process.env.PUBLIC_URL}/history/first_king_air_flight.jpg`}
            alt="increased headroom in the 1900D"
          />
          <p>The first flight of the C90 - 24 January 1964</p>
        </div>
      </div>
      <div className="history-intro intro-two">
        <div className="history-intro-text">
          <h3>
            In the early 1980s, several competing 19-seat turboprop models were
            entering the airline market, designed to take advantage of the FAA’s
            lack of flight attendant requirements for up to 19 passengers. In
            the US, these were the Swearingen{" "}
            <span className="history-italic">&quot;Metroliner&quot;</span> and
            the British Aerospace{" "}
            <span className="history-italic">&quot;Jetstream.&quot;</span> The
            Metroliner and Jetstream were designed to use the Garret TPE-331
            engine, while the new Beech model, put forth by Raytheon, would
            employ the Pratt &amp; Whitney PT-6A turboprop.
          </h3>
          <h3>
            Raytheon celebrated the first flight of the Beech 1900 on September
            3<span className="history-date">rd</span> , 1982. The FAA awarded
            original type certification on November 22
            <span className="history-date">nd</span> , 1983. Raytheon commonly
            used the nickname{" "}
            <span className="history-italic">&quot;Airliner&quot;</span> when
            referring the Model 1900 in print and publications. Since the
            Airliner name was originally and simultaneously applied by Raytheon
            to the smaller Model 99, the aviation community continues to use the
            Model 1900 number exclusively in common referral.
          </h3>
        </div>
        <div className="history-image-wrap image-two">
          <img
            src={`${process.env.PUBLIC_URL}/history/beech_18_factory.jpg`}
            alt="Beech Factory"
          />
          <p>Beech Factory</p>
        </div>
      </div>
    </section>
  );
};

export default HistoryIntro;

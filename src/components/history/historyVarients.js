import React from "react";

const HistoryVarients = () => {
  return (
    <section className="history-container history-varients history-container-main">
      <h1>VARIANTS</h1>
      <div className="history-varients-wrap">
        <div className="history-varients-column">
          <h2>
            UA Series <span className="history-built">(Built 1982-1983)</span>
          </h2>
          <h3>
            Only three airframes were built in this series; the distinguishing
            feature was an extra airstair door in the rear of the cabin, and a
            smaller cargo door.
          </h3>
          <h2>
            UB Series <span className="history-built">(Built 1983-1987)</span>
          </h2>
          <h3>
            These airplanes are referred to as “1900C” models. They employ a
            bladder-type fuel system. 74 UB models were completed.
          </h3>
          <h2>
            UC Series <span className="history-built">(Built 1987-1991)</span>
          </h2>
          <h3>
            Raytheon designated the UC Series airplanes as{" "}
            <span className="history-italic">&quot;1900C-1&quot;</span> models,
            though this appellation is rarely used. Not externally
            distinguishable from the UB Series, 174 UC models were built. The{" "}
            <span className="history-italic">&quot;wet&quot;</span> wing allowed
            a fuel capacity increase to 667 gallons and a dramatic increase in
            range.
          </h3>
          <h2>
            UD Series <span className="history-built">(Built 1991)</span>
          </h2>
          <h3>
            The US Department of Defense ordered six custom{" "}
            <span className="history-italic">&quot;C-1 wet&quot;</span> model
            1900s. The NATO designation is C-12J HURON. Five are in use by the
            US Air Force and US Army as VIP transports. One is used for GPS
            jamming tests at Holloman Air Force Base, New Mexico.
          </h3>
          <div className="history-image-wrap-column">
            <img
              src={`${process.env.PUBLIC_URL}/history/factory1.jpg`}
              alt="1900Ds on the factory floor at Raytheon in Wichita. Mid 1990s"
            />
          </div>
          <div className="history-image-wrap-column">
            <img
              src={`${process.env.PUBLIC_URL}/history/factory2.jpg`}
              alt="1900Ds on the factory floor at Raytheon in Wichita. Mid 1990s"
            />
            <p>1900Ds on the factory floor at Raytheon in Wichita. Mid 1990s</p>
          </div>
        </div>
        <div className="history-varients-column">
          <h2>
            UE Series <span className="history-built">(Built 1991-2002)</span>
          </h2>
          <h3>
            Raytheon marketed the UE Series as the 1900{" "}
            <span className="history-italic">&quot;D&quot;</span> to
            differentiate it to buyers, and it’s still commonly known as the{" "}
            <span className="history-italic">&quot;D Model&quot;</span> and/or
            the <span className="history-italic">&quot;1900 D&quot;</span>. The
            major modification from the UC Series was the enlargement of the
            fuselage to provide airlines with a{" "}
            <span className="history-italic">&quot;standup&quot;</span> cabin,
            featuring six-foot cabin height. While this promoted passenger
            comfort, it also increased overall aerodynamic drag by 13%.
          </h3>
          <div className="history-image-wrap-column">
            <img
              src={`${process.env.PUBLIC_URL}/history/beech-1900D-cabin.jpg`}
              alt="increased headroom in the 1900D"
            />
            <p>The first flight of the C90 24 January 1964</p>
          </div>
          <h3>
            To compensate, more powerful engines were needed; the PT6A-67D
            turboprop engines featured 179 more horsepower each than the
            PT6A-65B found in A, B and C Models. Thirstier engines meant
            somewhat decreased range, but most operators weren’t affected
            because they flew short flight segments anyway.
          </h3>
          <h3>
            Tail surfaces called{" "}
            <span className="history-italic">&quot;ventral strakes&quot;</span>{" "}
            were added to provide to reduce sideslip and add controllability,
            especially in the event of an engine failure; winglets were added as
            well. Payload did not increase, but gross weight increased by 500
            pounds, due to fuselage structure and larger engines.
          </h3>
          <h3>
            In the cockpit, Electronic Flight Instrumentation System (EFIS) was
            standard, improving upon the analog-only displays found in earlier
            Series. Rudder Bias was a new system to increase safety during one-
            engine inoperative flight.
          </h3>
          <h3>
            439 units were sold, more than all the previous 1900 Series
            combined. At the peak production rate in 1995, 1900Ds were rolling
            out of the Wichita factory at the rate of more than one a week. The
            last one was completed in 2002.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HistoryVarients;

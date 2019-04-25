import React from "react";

const HistoryStory = () => {
  return (
    <section className="history-container history-container-main">
      <h1>BEECHCRAFT COMPANY HISTORY</h1>
      <div className="history-story-picture-wrap">
        <div className="history-story-text-wrap">
          <h2>
            Travel Air <span className="history-story-year">- 1924</span>
          </h2>
          <h3>
            Walter H. Beech founded Travel Air in 1924; this company was
            purchased by the much larger aircraft manufacturer Curtiss-Wright in
            1929. Walter Beech was appointed soon thereafter as Curtiss-Wright
            President of Airplanes Division, and Vice President of Sales.
            However, he reportedly desired to return to airplane design.
          </h3>
        </div>
        <div className="history-image-story">
          <img
            src={`${process.env.PUBLIC_URL}/history/walter_beech.jpg`}
            alt="Walter Beech"
          />
          <p>Walter Beech</p>
        </div>
      </div>
      <h2>
        Beech Aircraft Corporation{" "}
        <span className="history-story-year">- 1932</span>
      </h2>
      <h3>
        He resigned and started Beech Aircraft Corporation in 1932, with his
        wife Olive, in Wichita, Kansas. Their first factory was located inside a
        vacant Cessna facility, and many of the original Travel Air employees
        followed Beech to the fledgling company.
      </h3>
      <div className="history-image-story-full">
        <img
          src={`${process.env.PUBLIC_URL}/history/beech_staggerwing.jpg`}
          alt="Beechcraft Staggerwing"
        />
        <p>Beechcraft Staggerwing</p>
      </div>
      <h3>
        The Beechcraft Model 17 Staggerwing was the first model off the new
        Beechcraft production line. It first flew in November 1932. Eventually
        about 750 Staggerwings were constructed. About one third of these were
        delivered to the US Army Air Force during World War II.
      </h3>
      <div className="history-image-story-full">
        <img
          src={`${process.env.PUBLIC_URL}/history/walter_and_olive_beech.jpg`}
          alt="Walter and Olive Beech next to a Staggerwing, circa 1935"
        />
        <p>Walter and Olive Beech next to a Staggerwing, circa 1935</p>
      </div>
      <h3>
        Through World War II, the best-selling Beechcraft model was the
        twin-radial engine Beechcraft Model 18. Following the War, the
        Beechcraft Bonanza was introduced, with its distinctive “V” tail design.
        Since its first sale in 1947, the Bonanza has become the
        longest-produced airplane in history, with new models continuing to roll
        off the factory floor today.
      </h3>
      <div className="history-image-story-full">
        <img
          src={`${process.env.PUBLIC_URL}/history/beech_18_in_flight.jpg`}
          alt="Beechcraft 18"
        />
        <p>Beechcraft 18</p>
      </div>
      <h3>
        After Walter Beech died in 1950, Olive Beech took over the company, and
        remained CEO for the next thirty years, retiring following Raytheon’s
        acquisition of Beechcraft in 1980.
      </h3>
      <div className="history-image-story-full">
        <img
          src={`${process.env.PUBLIC_URL}/history/bonanza_magazine_ad_1949.jpg`}
          alt="Bonanza magazine ad, 1949"
        />
        <p>Bonanza magazine ad, 1949</p>
      </div>
      <h2>
        Raytheon <span className="history-story-year">- 1980</span>
      </h2>
      <h3>
        In 1993, in an effort to improve Raytheon’s presence in the small jet
        market, Raytheon also purchased the Hawker business jet component of
        British Aerospace (known today as BAE Systems).
      </h3>

      <h2>
        Raytheon Aircraft Company{" "}
        <span className="history-story-year">- 1994</span>
      </h2>
      <h3>
        In 1994, the former Beechcraft and Hawker were joined and became
        Raytheon Aircraft Company. During the next eight years, the Raytheon
        marketed its aircraft using the Raytheon brand name.
      </h3>
      <h3>
        In 2002, Raytheon returned to marketing its airplanes under the brand
        names Beechcraft and Hawker. In July 2006, along with several other
        units now considered superlative to its core defense business, Raytheon
        divested its Raytheon Aircraft unit, selling to a Canadian consortium
        which in turn was affiliated with Goldman Sachs. The new company would
        be known as Hawker Beechcraft.
      </h3>
      <h2>
        Hawker Beechcraft <span className="history-story-year">- 2006</span>
      </h2>
      <h3>
        Downturns in the business jet market and cancellations or deferrals of
        airplane orders forced Hawker Beechcraft to file for Chapter 11
        bankruptcy protection in May 2012. The bankruptcy court approved sale of
        Hawker Beechcraft, minus its defense-oriented product lines, to Chinese
        company Superior Aviation Beijing. Ostensibly, Superior would retain the
        Hawker Beechcraft brand.
      </h3>
      <h2>
        Beechcraft Corporation{" "}
        <span className="history-story-year">- 2013</span>
      </h2>
      <h3>
        Then, on October 19, 2012, Hawker Beechcraft announced it was no longer
        pursuing the sale to Superior; rather, it would emerge from bankruptcy
        as Beechcraft Corporation. This occurred on February 19, 2013. The
        company discontinued production of jet airplanes but continued to
        provide fleet support to existing airplanes. Continuing to roll off the
        production line were King Air line, the T-6 and AT- 6 military aircraft
        and the piston-powered Bonanza and Baron.
      </h3>
      <h2>
        Textron Aviation <span className="history-story-year">– 2014</span>
      </h2>
      <h3>
        Textron, Inc. purchased all Beechcraft holdings, and assumed its
        considerable debt. The deal was finalized on March 14, 2014. Textron
        announced that their Cessna manufacturing would be combined with the
        Beechcraft production to form Textron Aviation. The brand names
        Beechcraft and Cessna are preserved due to their inherent value and name
        recognition.
      </h3>
      <h3>
        As of March, 2019, Cessna was continuing to produce 3 piston singles,
        the Cessna 208 Caravan single-engine turboprop, and the family of
        Citation small to midsize jets.
      </h3>
      <h3>
        Beechcraft now sells two reciprocating engine models; the G36 Bonanza
        and the G58 Baron. The “G” in the designation represents the addition of
        the Garmin G1000 family of ‘glass’ panel avionics. The T-6 Texan II
        single-engine turboprop is built for military applications. The only
        remaining ‘legacy’ King Air in production is the King Air C90GTx. Three
        ‘Super’ King Air products are still coming off the line; the King Air
        350i, King Air 350ER, and the King Air 250.
      </h3>
    </section>
  );
};

export default HistoryStory;

import React from "react";

const buildersData = {
  A: ["A C E", "A Shridhar Group", "ABA Corp", "ABC Developers Navi Mumbai", "ABH Developers", "ABI Infrastructure", "More..."],
  B: ["BB Construction", "BBCL builders", "BCC Infrastructures", "BCD EMPRESA LIMITED LIABILITY PARTNERSHIP", "BG Group", "BM Infra Mumbai", "More..."],
  C: ["CBR Builders", "CCS Infratech", "CI Builders", "CKPC Residences", "CKY Properties", "CRC Group", "More..."],
  D: ["DAC Developers", "DAMAC Properties", "DBL builders", "DE Blueoak", "DGS Group", "DH Enterprise", "More..."],
  E: ["EAR Builders", "EIPL Group", "ELV Projects", "EMFCL builders", "ETA Star Tech City", "ETR Developers", "More..."],
  F: ["F5 Realtors", "FK Constructions", "FRONTLINE BUILDERS", "Fair Field", "Fairmount Developers", "Falcon Developers Chennai", "More..."],
  G: ["G Square Developers", "G Square Group", "G Square Realtors", "GB Constructions", "GE Construction", "GEM Infinity Estates", "More..."],
  H: ["HCS Developer", "HIGHNESS CONSTRUCTION", "HLP Group", "HMK Builders", "HYBA Developers", "Habitat Venture", "More..."],
  I: ["IB Developers", "ICIPL builders", "INDIS builders", "ISR Constructions Karnataka", "Icon Developer Kanpur", "Iconic Infra Hyderabad", "More..."],
  J: ["JB Infra Projects Mumbai", "JK Developers Mumbai", "IK Group", "JK Infra Projects", "JLPL Group", "JM Housing", "More..."],
  K: ["K Hemani Group", "K K Enterprises", "K Raheja Corp", "K Raheja Realty", "KD Jaipur Export", "KG Developers", "More..."],
  L: ["L and T Realty", "LA Homes", "LG Developers", "LH Residential Housing", "LIGHTSTONE DEVELOPERS", "LML Homes LLP", "More..."],
  M: ["M2K Group", "M3M India", "MC Builders", "MCB Developers", "MD Enterprise", "MD Group Jaipur", "More..."],
  N: ["N Rose Developers", "NCR Construction", "NG Rathi Associates", "NMS Enterprises", "NMS Group", "NSL Infratech", "More..."],
  O: ["OD Builder", "OMICRON GROUP", "ORO Group", "Oasis Group", "Obel Builders", "Oberoi Realty", "More..."],
  P: ["PNK Group", "PR Associates", "PRM Real Estate", "PRS Builders", "PS Construction", "PS Group", "More..."],
  Q: ["Quantum Builders", "Quba Developers", "QVC Realty", "QRS Constructions", "Q1 Estates", "Qube Realty", "More..."],
  R: ["R K Developers Bangalore", "R R BUILDERS", "RAMA SPACES", "RCB Group", "RD Builders", "RD Eco Developers", "More..."],
  S: ["S Raheja Infrastructure", "S Raheja Realty", "S S Builders Chennai", "S S Tirupati Infraprojects", "S Square Developers", "SAS Developers", "More..."],
  T: ["T.Velayutham Homes", "TDI INFRACORP (INDIA) LTD", "TDI Infrastructure", "TPM PROMOTERS", "TR Developers", "TVS Emerald", "More..."],
  U: ["UG Group", "UKn Properties", "URE Realtors", "UTKAL BUILDERS", "Udaya Group", "Umang Construction Co", "More..."],
  V: ["V K Developers", "V Realty Solutions", "V Square", "VBC Infrastructure", "VBHC Value Homes", "VGK Builders", "More..."],
  W: ["WMI Real Estate Developers", "WTC Group", "Wadhwani Construction", "Wallfort Properties", "Wani Estates", "Wave Infratech", "More..."],
  X: ["Xanadu Realty", "XRBIA Developers", "Xcellon Builders", "Xpert Constructions", "Xtreme Estates", "Xylon Builders", "More..."],
  Y: ["YBR Infra Developers", "YH Associates", "Yamuna Expressway Industrial Development Authority", "Yash Builders Lucknow", "Yash Promoters", "Yashada Developers", "More..."],
  Z: ["Z Estates Bhubaneswar", "Zade Group", "Zamin builders", "Zamindar Realtors", "Zara Group", "Zion Promoters", "More..."],
  "0-9": ["2getherments Infra", "42 Estates", "4S Developers", "7th Heaven Developers", "99 Builders", "More..."],
};

const BuildersSection = () => {
  // Create refs for each letter card
  const cardRefs = React.useRef({});

  // Scroll to card when letter is clicked
  const handleLetterClick = (letter) => {
    const ref = cardRefs.current[letter];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      {/* Top blue navbar */}
      <div className="w-full bg-black py-3 px-6 flex items-center">
        <img src="/abc.png" alt="Bhoomi Logo" className="h-10 w-auto" />
      </div>
  <section className="px-2 sm:px-4 lg:px-8 py-6 max-w-7xl mx-auto bg-white rounded-xl shadow-lg">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 text-green-600 text-center tracking-wide">Builders in India</h2>
  <p className="text-black mb-4 sm:mb-6 text-sm sm:text-base md:text-lg text-center">
          The Real Estate Companies in India are serving the people by offering solutions to all their property needs. With rising demand for residential and commercial space, the property developers are leaving no stone unturned and coming up with new projects in every real estate segment. The real estate and construction sectors are an integral part of Indian economy’s growth graph and responsible for the development of India’s core infrastructure. And the real estate developers, across cities, are offering a variety of inventories to buyers with different reasons. Most of the cities of India have residential launches in budget as well as luxury segments. The housing market of India has varied requirements from diverse income groups and the Property builders in India have successfully catered. The commercial properties delivered by builders include state-of-the-art offices, retail and institutional spaces. Winning the trust of millions of Indians, the real estate companies have more to offer.
        </p>
  <p className="text-black mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-center">
          Let’s explore the best real estate companies in India and know more about them.
        </p>

        {/* Alphabet Navigation */}
  <div className="flex flex-wrap justify-center items-center mb-6 sm:mb-8 text-green-600 border border-green-300 pb-2 overflow-x-auto whitespace-nowrap">
          {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter, idx) => (
            <button
              key={letter}
              className="mx-1 text-lg font-semibold cursor-pointer transition-colors duration-200 hover:text-black hover:bg-green-100 px-2 py-1 rounded focus:outline-none"
              onClick={() => handleLetterClick(letter)}
              type="button"
            >
              {letter}
            </button>
          ))}
          <button
            className="mx-6 text-lg font-semibold cursor-pointer transition-colors duration-200 hover:text-black hover:bg-green-100 px-2 py-1 rounded focus:outline-none"
            onClick={() => handleLetterClick("0-9")}
            type="button"
          >
            0-9
          </button>
        </div>

        {/* Builders List */}
  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
          {Object.keys(buildersData).map((letter) => (
            <div
              key={letter}
              ref={el => (cardRefs.current[letter] = el)}
              className="bg-green-50 shadow-lg rounded-xl p-1 sm:p-2 transition-transform hover:scale-105 border border-green-200 min-h-[40px] flex flex-col justify-start"
            >
              <h3 className="font-bold mb-1 text-green-700 text-xs sm:text-sm text-center uppercase tracking-wide">{letter}</h3>
              <ul className="space-y-0.5 sm:space-y-1">
                {buildersData[letter].map((builder, index) => (
                  <li key={index}>
                    <a href="#" className="block text-black font-normal px-1 py-1 sm:px-2 sm:py-1 rounded transition-colors duration-200 hover:bg-green-600 hover:text-white hover:shadow-md text-xs sm:text-sm">{builder}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Removed duplicate A-Z grid section for cleaner UI */}
      </section>
    </>
  );
}

export default BuildersSection;

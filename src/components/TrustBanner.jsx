import React from "react";
import trustbg from "../assets/trustbg.svg";
import logotrust from "../assets/logotrust.svg";

const TrustBanner = () => {
  return (
    <div className=" mb-16 w-full flex flex-col lg:gap-y-12">
      {/* Heading */}
      <div className="w-full flex justify-center">
        <div className="h-24 max-w-2xl text-center">
          <h1 className=" text-2xl md:text-4xl font-semibold">
            Why Choose Our Company for your{" "}
            <span className="text-primary">Projects?</span>
          </h1>
        </div>
      </div>

      {/* Designer Division */}
      <div
        className="h-[500px] lg:h-[284px] flex flex-col lg:flex-row gap-y-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${trustbg})` }}
      >
        {/* Left Division */}
        <div className="w-full lg:w-1/2 flex flex-col  items-center py-4 md:py-6 md:mt-8">
          <div className="flex md:relative flex-col justify-between md:ml-[25px] md:h-[170px] md:w-[546px]">
            {/* Item 1 */}
            <div className="md:absolute  flex items-center mb-4 gap-x-6">
              <div className=" md:w-[70px] md:h-[70px] p-2 md:p-0 rounded shadow-[0px_0px_30px_0px_#a0aec0] bg-white flex items-center justify-center">
                <img src={logotrust} alt="Logo" className=" object-contain md:w-10 md:h-10" />
              </div>

              <div>
                <h2 className="text-xl md:text-4xl font-semibold">100 +</h2>
                <p className="text-sm md:text-lg font-semibold">Projects done</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="md:absolute md:right-[70px] flex items-center gap-x-6">
              <div className="md:w-[70px] md:h-[70px] p-2 md:p-0 rounded shadow-[0px_0px_30px_0px_#a0aec0] bg-white flex items-center justify-center">
                <img src={logotrust} alt="Logo" className="w-10 h-10" />
              </div>

              <div>
                <h2 className="text-xl md:text-4xl font-semibold">40 +</h2>
                <p className="text-lg font-semibold">Developers</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="md:absolute md:bottom-0 flex items-center mt-4 gap-x-6">
              <div className="md:w-[70px] md:h-[70px] p-2 md:p-0 rounded shadow-[0px_0px_30px_0px_#a0aec0] bg-white flex items-center justify-center">
                <img src={logotrust} alt="Logo" className="w-10 h-10" />
              </div>

              <div>
                <h2 className="text-xl md:text-4xl font-semibold">70 +</h2>
                <p className="text-lg font-semibold">Potential clients</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="md:absolute  md:bottom-0 md:right-[18px] flex items-center mt-4 gap-x-6">
              <div className="md:w-[70px] md:h-[70px] p-2 md:p-0 rounded shadow-[0px_0px_30px_0px_#a0aec0] bg-white flex items-center justify-center">
                <img src={logotrust} alt="Logo" className="w-10 h-10" />
              </div>

              <div>
                <h2 className="text-xl md:text-4xl font-semibold">90 %</h2>
                <p className="text-lg font-semibold">Positive Feedback</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Division */}
        <div
          className="h-full w-full lg:w-1/2 flex flex-col gap-y-9 justify-between bg-cover bg-center bg-no-repeat p-3 md:px-10 md:py-7"
          style={{
            backgroundImage:
              "url(https://s3-alpha-sig.figma.com/img/eb67/5fe9/ee81f06fd91b977d33cb6bf13d07edb3?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lITD44BVvIlVuYR8ULSdAgus-hH1PDdleLwOvNkjdUIJE5b5oD~DKkWQw9gxDCzAT88hqljlzQgj6wn5nOaYXSt441HSVQEBiAysu2bA13IeydFPaqj8caorWTDk1UGMfk8xHpCyf0YkZCA93Dyq5FRRU1sx2BvvdmpijVMw--uzEdWGtggAVRrqAnS4PnN-1KHaq-g4jyZ3SWQRu5mcgFP45GD0RbmBpdKuT1ShjpfWwzkG1p7Kkb-uO~piaSJ3bK2ZtgS7eoT~146u8-NZVHpYTMvqrC7GQ7lguFfTjanbPHwlLczOB8EWE9hrf9k2X2mnIWw4OIe1IbgqVsiqBA__)",
          }}
        >
          <h1 className="text-sm text-white font-normal ">
            We are a team of professional and enthusiastic people, who like what
            they do and are always in the process of growing and improving their
            skills.
          </h1>

          <button className="bg-primary text-white rounded hover:bg-secondary text-xs md:text-sm font-semibold w-[60px] md:w-[97px] py-2 px-2 md:py-2 md:px-4">
            Button 
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;

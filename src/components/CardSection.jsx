import React from "react";
import { cardContent } from "../assets/carousel";

const CardSection = () => {
  return (
    <div className=" w-full py-8">
      {/* Card banner */}
      <div
        className="h-[361px] mb-11 lg:pl-[177px] items-center flex bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/637c/6297/67c4d7706bcc49d2813a8a32c5110d5c?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UxoMQrKIbrQVST5MmbPSAePpP~~rEuAORoPbR-0VTQNUd6jFaFcm77QYgaYx7CXwHiOsht~NHrR8RPjwb06rSEAM9Ijez34IelhZ6ov5wZBfqGtD5KlTCarFdJPXF6q4gOEJz~nrWerXZ5qosirHmEYOaQWJW8WWQzaLT1O1BDGCDbQkrtXNJnQIrHKpBITQWQ7syzKIS9yELXgFXYviFmhcrUZTjFGGR6ZGOMl4Q85vxbZZIJd6LDNLI7ozWcXJwAQ~OKyE7A8U4Wz2sJrcw4YZNahA8aNc73VxVOF6RJ2594vNgIA~IP-Jp6RshQ7mmWFHxkpKByJj5JK4ge8iWg__)",
        }}
      >
        <div className="max-w-lg ">
          <h1 className="text-white text-2xl text-center lg:text-4xl font-semibold uppercase">
            WE PROVIDE <span className="text-primary">WIDE RANGE</span> OF
            CREATIVE SERVICES
          </h1>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-[43px] md:gap-x-3 lg:gap-x-0 justify-center mx-6 lg:ml-6">
        {cardContent.map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-[300px] h-[325px] shadow-[0px_4px_4px_0px_#a0aec0]"
          >
            <div className="relative">
              <img
                src="https://s3-alpha-sig.figma.com/img/1891/e44a/067e379f6dcef1c1b5156bede89f6ea9?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dz4oLuktDYA05aNF3Z963USPS1E-Ia8zEKJthQqwaJOTLifsVfqnzG-aHWhGL4~BylppJkbZ1Jpmtr0R3huhKDBK84ySOFz0ZVqZshotK7wCIg4HzXT1oquPT2DnTjuVHj5kIP-h9BERr5sn4JHKzufqs3XcSDaBUrcJIz0WqbMfzkoM0Em6n8AuTISnJBWJxiSgwXKpBdXD90NIS0Zu59sOuimadjMZO~zev8QMpk8Q0phwq3u4DaclgpOk1os7nhmyqMQvOEu64ezZVsWkEpeONs5v2WoGj0D6ff9Vh9SZCHysoW12y9W-FRKK~mrqVQg62I6CoNG1N3y3ckC-~g__"
                className="w-full lg:w-[300px] h-[220px] object-cover"
              />
            </div>
            <div className="px-[18px] items-center text-black">
              <h1 className="text-lg md:text-base lg:text-lg font-semibold my-2 md:mt-2 md:mb-1 lg:my-2">
                {item.tile}
              </h1>
              <button className="bg-primary text-white mt-2 text-sm rounded-md hover:bg-secondary md:py-1 md:px-2 py-2 px-4">
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;

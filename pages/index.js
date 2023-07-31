import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreasContainer from "../components/areas-container";
import RentPropertiesForm from "../components/rent-properties-form";
import RentPropertiesFilter from "../components/rent-properties-filter";
import ContactForm from "../components/contact-form";
import FooterContainer from "../components/footer-container";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Otofast Estate</title>
        <meta
          name="description"
          content="Get your home at an affordable rate"
        />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-center justify-start text-center text-21xl text-primary-800 font-body-regular-600">
        <Header hamburger showHamburgerMenuIcon={false} />
        <Hero />
        <div className="self-stretch flex-1 flex flex-col py-[53px] px-[50px] items-center justify-start gap-[45px]">
          <div className="self-stretch flex flex-col py-0 px-[30px] items-center justify-start gap-[24px] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Properties by Area
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row flex-wrap py-0 px-2.5 box-border items-start justify-center max-w-[95%px] text-left text-5xl text-gray-white">
            <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
              <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
                <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-1@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                  <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                    <div className="relative leading-[32px] font-semibold">
                      Centerville
                    </div>
                    <div className="relative text-base leading-[24px] text-center">
                      25 listings
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-2@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                  <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                    <div className="relative leading-[32px] font-semibold">
                      Centerville
                    </div>
                    <div className="relative text-base leading-[24px] text-center">
                      25 listings
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-3@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                  <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                    <div className="relative leading-[32px] font-semibold">
                      Centerville
                    </div>
                    <div className="relative text-base leading-[24px] text-center">
                      25 listings
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
                <div className="flex-1 rounded-lg h-[241px] flex flex-row p-2.5 box-border items-start justify-start relative bg-[url(/card-4@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                  <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                    <div className="relative leading-[32px] font-semibold">
                      Arlington
                    </div>
                    <div className="relative text-base leading-[24px] text-center">
                      25 listings
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-lg h-[241px] flex flex-row p-2.5 box-border items-start justify-start relative bg-[url(/card-5@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                  <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                    <div className="relative leading-[32px] font-semibold">
                      Centerville
                    </div>
                    <div className="relative text-base leading-[24px] text-center">
                      25 listings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AreasContainer />
        <RentPropertiesForm />
        <RentPropertiesFilter />
        <ContactForm />
        <FooterContainer
          imageIds="/houseline2.svg"
          smallImageIds="/social-media-logo5.svg"
          mediumImageIds="/social-media-logo6.svg"
          smallImageIds2="/social-media-logo7.svg"
          smallImageIds3="/social-media-logo8.svg"
          largeImageIds="/social-media-logo9.svg"
          propOverflow="unset"
        />
      </div>
    </>
  );
};

export default LandingPage;

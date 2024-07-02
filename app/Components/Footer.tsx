import Image from "next/image";

const icons = [
  {
    name: "facebook",
    img: "/Images/Fb.png",
    url: "#",
  },
  {
    name: "Insta",
    img: "/Images/Insta.png",
    url: "#",
  },
  {
    name: "twitter",
    img: "/Images/Twitter.png",
    url: "#",
  },
  {
    name: "Linkedin",
    img: "/Images/Linkedin.png",
    url: "#",
  },
  {
    name: "Youtube",
    img: "/Images/Youtube.png",
    url: "#",
  },
];

const linksData = [
  {
    title: "Quick Links",
    links: [
      {
        text: "About",
        url: "#",
      },
      {
        text: "Careers",
        url: "#",
      },
      {
        text: "Privacy Policy",
        url: "#",
      },
      {
        text: "Terms & Conditions",
        url: "#",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        text: "Green Building Technologies",
        url: "#",
      },
      {
        text: "Eco-Friendly IT Solutions",
        url: "#",
      },
      {
        text: "Smart Sustainability Solutions",
        url: "#",
      },
      {
        text: "Energy Efficiency Consulting",
        url: "#",
      },
    ],
  },
  {
    title: "Products",
    links: [
      {
        text: "Renewable Energy Systems",
        url: "#",
      },
      {
        text: "Smart Thermostats",
        url: "#",
      },
      {
        text: "Environmental Sensors",
        url: "#",
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        text: "No.7, Anna Street,Ariyanur,Salem-11.",
        url: "#",
        img: "/Images/Location.png",
      },
      {
        text: "+91 8124121318",
        url: "#",
        img: "/Images/Call.png",
      },
      {
        text: "info@etechsolutions.com",
        url: "#",
        img: "/Images/email.png",
      },
    ],
  },
];

const Links = ({ data, customclass }: any) => {
  return (
    <div className={`${customclass ? customclass : "flex-1"}`}>
      <p className="text-[#00C700] font-gilroy-bold text-lg mb-4">
        {data.title}
      </p>
      <div>
        <ul
          className={
            data.links[0].img ? "grid gap-y-8 lg:gap-y-5 row-height-30" : ""
          }
        >
          {data.links.map((link: any, index: number) => (
            <div className={link.img ? "flex gap-4" : ""} key={index}>
              {link.img ? (
                <Image alt="" src={link.img} width={30} height={30} />
              ) : null}
              <li className="text-[#FFF] text-base md:leading-8 ">
                {link.text}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

const showBanner = () => {
    // @ts-ignore
    window._hsp = window._hsp || [];
    // @ts-ignore
    window._hsp.push(['showBanner']);
  };

const Footer = () => {
  return (
    <div className="bg-[url('/Images/footer_bg.png')]  bg-no-repeat bg-cover px-[40px] py-[20px] sm:px-[60px] sm:py-[30px] lg:px-[120px] lg:py-[60px]">
      <div className="flex gap-8 flex-col lg:flex-row">
        <div className="flex-[0.3]">
          <div
            id="nav_logo"
            className=" flex-[0.4] items-center flex font-gilroy font-extrabold mb-4"
          >
            <span className=" text-[#00C700] text-2xl">Green-</span>
            <span className="text-[#FFF500] text-2xl">Tech</span>
          </div>
          <p className="text-[#FFF] leading-8 text-[14px] md:text-[16px]">
            We are a forward-thinking startup dedicated to providing
            cutting-edge technology solutions that not only propel businesses
            into the future but also contribute to a greener and more
            sustainable world.
          </p>
          <div className="flex gap-5 mt-10">
            {icons.map((icon, index) => (
              <Image
                key={index}
                src={icon.img}
                alt={icon.name}
                width={25}
                height={20}
              />
            ))}
          </div>
        </div>
        <div className="lg:flex lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 lg:mb-0">
          <Links data={linksData[0]} customclass="flex-0.8" />
          <Links data={linksData[1]} customclass="flex-1.3" />
          <Links data={linksData[2]} customclass="flex-1.3" />
          <Links data={linksData[3]} customclass="flex-2" />
        </div>
      </div>
      <p className="text-[#FFF] text-sm font-gilroy-medium text-center">
        Copyright © 2024 <b>Green-Tech Solutions.</b> All Rights Reserved
      </p>
      <button type="button" id="hs_show_banner_button" onClick={showBanner}>
        Cookie Settings
      </button>
    </div>
  );
};

export default Footer;

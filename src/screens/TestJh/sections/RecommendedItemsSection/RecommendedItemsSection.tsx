import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const RecommendedItemsSection = (): JSX.Element => {
  // Data for useful links
  const usefulLinks = ["Home", "About Us", "Appointment", "Services", "Blog"];

  // Data for utility pages
  const utilityPages = [
    "FAQ/Return",
    "Privacy/Terms",
    "Gift Cards",
    "Sizing Guide",
    "Accessibility",
  ];

  // Data for miscellaneous links
  const miscellaneousLinks = [
    "Community",
    "FAQs",
    "License",
    "Privacy",
    "Contact Us",
  ];

  return (
    <footer className="flex flex-col w-full items-center gap-12 lg:gap-20 px-4 sm:px-8 py-8 lg:py-[50px] bg-[#121511]">
      <Separator className="w-full h-px bg-gray-600" />

      <div className="flex flex-col w-full max-w-7xl items-center gap-8 lg:gap-[50px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-[149px] w-full">
          {/* Logo and App Store Section */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] flex flex-col items-center lg:items-start gap-6 w-full lg:w-auto lg:flex-1 max-w-lg">
            <img
              className="w-[179px] h-[104px] mx-auto lg:mx-0"
              alt="Logo"
              src="https://c.animaapp.com/mg4gkkvmnROy9v/img/logo.png"
            />

            <p className="w-full font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-sm lg:text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] text-center lg:text-left">
              Sed libero odio, sollicitudin a porttitor ac, tempor eu nisi.
              Nulla sit amet suscipit dolormentum mauris in, rutrum augue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Google Play Store Button */}
              <div className="relative w-full sm:w-[206px] h-[69px] cursor-pointer hover:opacity-80 transition-opacity">
                <img
                  className="absolute left-0 bottom-0 w-[204px] h-[69px]"
                  alt="Google Play Store Background"
                  src="https://c.animaapp.com/mg4gkkvmnROy9v/img/rectangle-176-1.svg"
                />
                <img
                  className="absolute top-[35px] left-[72px] w-[105px] h-[21px]"
                  alt="Google Play Logo"
                  src="https://c.animaapp.com/mg4gkkvmnROy9v/img/group-131463.png"
                />
                <img
                  className="absolute top-[15px] left-[22px] w-[35px] h-[39px]"
                  alt="Google Play Icon"
                  src="https://c.animaapp.com/mg4gkkvmnROy9v/img/group-131462.png"
                />
                <div className="absolute left-[72px] bottom-[35px] font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]">
                  Get it on
                </div>
              </div>

              {/* App Store Button */}
              <div className="relative w-full sm:w-[186px] h-[69px] cursor-pointer hover:opacity-80 transition-opacity">
                <img
                  className="absolute left-0 bottom-0 w-[184px] h-[69px]"
                  alt="App Store Background"
                  src="https://c.animaapp.com/mg4gkkvmnROy9v/img/rectangle-176.svg"
                />
                <div className="absolute left-[63px] bottom-[35px] font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]">
                  Get it on
                </div>
                <img
                  className="absolute top-[35px] left-[63px] w-[98px] h-[21px]"
                  alt="App Store Logo"
                  src="https://c.animaapp.com/mg4gkkvmnROy9v/img/group-131465.png"
                />
                <img
                  className="absolute top-3.5 left-[19px] w-[33px] h-10"
                  alt="App Store Icon"
                  src="https://c.animaapp.com/mg4gkkvmnROy9v/img/group-131466.png"
                />
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-[149px] w-full lg:w-auto lg:flex-1 justify-center lg:justify-start">
            {/* Useful Links */}
            <nav className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] flex flex-col gap-6 w-full sm:w-auto items-center lg:items-start">
              <h4 className="font-h4 font-[number:var(--h4-font-weight)] text-white text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)] text-center lg:text-left">
                USEFUL LINKS
              </h4>
              <ul className="flex flex-col items-center lg:items-start">
                {usefulLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-list-text font-[number:var(--list-text-font-weight)] text-[#bababa] text-[length:var(--list-text-font-size)] tracking-[var(--list-text-letter-spacing)] leading-[var(--list-text-line-height)] [font-style:var(--list-text-font-style)] hover:text-white transition-colors cursor-pointer text-center lg:text-left"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Utility Pages */}
            <nav className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] flex flex-col gap-6 w-full sm:w-auto items-center lg:items-start">
              <h4 className="font-h4 font-[number:var(--h4-font-weight)] text-white text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)] text-center lg:text-left">
                UTILITY PAGES
              </h4>
              <ul className="flex flex-col items-center lg:items-start">
                {utilityPages.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-list-text font-[number:var(--list-text-font-weight)] text-[#bababa] text-[length:var(--list-text-font-size)] tracking-[var(--list-text-letter-spacing)] leading-[var(--list-text-line-height)] [font-style:var(--list-text-font-style)] hover:text-white transition-colors cursor-pointer text-center lg:text-left"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Miscellaneous */}
            <nav className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] flex flex-col gap-6 w-full sm:w-auto items-center lg:items-start">
              <h4 className="font-h4 font-[number:var(--h4-font-weight)] text-white text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)] text-center lg:text-left">
                MISCELLANEOUS
              </h4>
              <ul className="flex flex-col items-center lg:items-start">
                {miscellaneousLinks.slice(0, -1).map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-list-text font-[number:var(--list-text-font-weight)] text-[#bababa] text-[length:var(--list-text-font-size)] tracking-[var(--list-text-letter-spacing)] leading-[var(--list-text-line-height)] [font-style:var(--list-text-font-style)] hover:text-white transition-colors cursor-pointer text-center lg:text-left"
                    >
                      {link}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    className="[font-family:'Sora',Helvetica] font-normal text-[#bababa] text-base leading-4 tracking-[0] hover:text-white transition-colors cursor-pointer text-center lg:text-left"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 w-full">
          {/* Privacy Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[30px]">
            <a
              href="#"
              className="font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] hover:text-white transition-colors cursor-pointer text-center"
            >
              Privacy policy
            </a>
            <Separator
              orientation="vertical"
              className="w-px h-[17px] bg-gray-600 hidden sm:block"
            />
            <a
              href="#"
              className="font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] hover:text-white transition-colors cursor-pointer text-center"
            >
              Terms &amp; Conditions
            </a>
          </div>

          {/* Copyright */}
          <div className="font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-sm lg:text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] text-center">
            ©Designthemes all rights Reserved
          </div>

          {/* Social Media Icons */}
          <img
            className="w-full max-w-[255px] h-auto mx-auto lg:mx-0"
            alt="Social Media Icons"
            src="https://c.animaapp.com/mg4gkkvmnROy9v/img/group-131478.png"
          />
        </div>
      </div>

      <Separator className="w-full h-px bg-gray-600" />
    </footer>
  );
};

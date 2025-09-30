import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Separator } from "../../../../components/ui/separator";

export const SidebarSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  const navigationItems = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#" },
    { label: "SERVICES", href: "#" },
    { label: "BLOG", href: "#" },
    { label: "SHOP", href: "#" },
  ];

  return (
    <section className="flex flex-col items-start relative w-full">
      <header className="flex flex-col relative w-full">
        {/* Desktop layout */}
        <div className="hidden lg:flex items-center relative w-full">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <img
              className="relative w-[253px] h-auto object-contain"
              alt="Element"
              src="https://c.animaapp.com/mg4gkkvmnROy9v/img/01.png"
            />
          </div>

          <nav className="flex items-center justify-center px-0 py-[39px] relative flex-1 grow bg-[#1d1f1a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <NavigationMenu className="absolute left-1/2 transform -translate-x-1/2">
              <NavigationMenuList className="flex items-center justify-center gap-[60px] relative">
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink
                      href={item.href}
                      className={`relative w-fit mt-[-1.00px] font-button-text font-[number:var(--button-text-font-weight)] text-white text-[length:var(--button-text-font-size)] tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)] whitespace-nowrap [font-style:var(--button-text-font-style)] hover:text-[var(--gradient)] transition-colors duration-300 translate-y-[-1rem] animate-fade-in opacity-0`}
                      style={
                        {
                          "--animation-delay": `${400 + index * 100}ms`,
                        } as React.CSSProperties
                      }
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:900ms]">
            <img
              className="relative w-[254px] h-auto object-contain"
              alt="Element"
              src="https://c.animaapp.com/mg4gkkvmnROy9v/img/03.svg"
            />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden flex items-center justify-between w-full px-2 xs:px-4 py-3 xs:py-4 bg-[#1d1f1a]">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <img
              className="flex justify-start relative w-40 xs:w-50 sm:w-30 h-auto object-contain"
              alt="Element"
              src="https://c.animaapp.com/mg4gkkvmnROy9v/img/01.png"
            />
          </div>

          <button
            className="flex flex-col gap-1 p-1 xs:p-2 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-5 xs:w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-5 xs:w-6 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 xs:w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile navigation menu */}
        <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} lg:hidden flex-col items-center justify-center px-2 xs:px-4 py-4 xs:py-6 relative w-full bg-[#1d1f1a] border-t border-[rgba(255,255,255,0.15)]`}>
          <NavigationMenu className="w-full">
            <NavigationMenuList className="flex flex-col items-center justify-center gap-3 xs:gap-4 relative w-full">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    href={item.href}
                    className="relative w-fit font-button-text font-[number:var(--button-text-font-weight)] text-white text-sm xs:text-base tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)] whitespace-nowrap [font-style:var(--button-text-font-style)] hover:text-[var(--gradient)] transition-colors duration-300 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>

      <main className="relative w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-[400px]">
        <div className="flex flex-col w-full h-full items-center justify-center gap-1 xs:gap-2 sm:gap-[9px] px-2 xs:px-4 sm:px-8 lg:px-5 py-0 relative bg-cover bg-center bg-no-repeat translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]" style={{backgroundImage: 'linear-gradient(0deg,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(https://c.animaapp.com/mg4gkkvmnROy9v/img/frame-2121458038.png)'}}>
          <h1 className="relative w-full font-h2 font-[number:var(--h2-font-weight)] text-white text-2xl md:text-4xl lg:text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-tight lg:leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms] px-2 custom-md-font">
            알렉산드리아 도서관
          </h1>


          <nav
            className="flex flex-col sm:flex-row items-center justify-center gap-1 xs:gap-2 sm:gap-[9px] relative w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]"
            aria-label="Breadcrumb"
          >
            <span className="relative w-fit font-sub-heading font-[number:var(--sub-heading-font-weight)] text-white text-xs xs:text-sm sm:text-[length:var(--sub-heading-font-size)] text-center tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] whitespace-nowrap [font-style:var(--sub-heading-font-style)]">
              HOME
            </span>

            <Separator
              orientation="horizontal"
              className="w-3 xs:w-4 sm:w-[15px] h-px bg-white hidden sm:block"
            />

            <span className="relative w-fit font-sub-heading font-[number:var(--sub-heading-font-weight)] text-white text-xs xs:text-sm sm:text-[length:var(--sub-heading-font-size)] text-center tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] whitespace-nowrap [font-style:var(--sub-heading-font-style)]">
              OUR TEAM - DETAIL
            </span>
          </nav>
        </div>
      </main>
    </section>
  );
};

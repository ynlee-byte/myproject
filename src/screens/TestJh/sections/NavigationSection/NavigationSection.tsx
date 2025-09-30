import { SearchIcon } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { CustomArrow } from "../../../../components/ui/custom-arrow";

const filterOptions = {
  type: [
    { value: "optional", label: "선택형" },
    { value: "essential", label: "필수형" },
  ],
  hashtag: [
    { value: "design", label: "#디자인" },
    { value: "practice", label: "#실무" },
  ],
};


export const NavigationSection = (): JSX.Element => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState({
    type: "선택형",
    hashtag: "해시태그",
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleFilterSelect = (filterType: string, value: string, label: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: label,
    }));
    setOpenDropdown(null);
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="flex flex-col min-h-[100px] xs:min-h-[120px] sm:min-h-[160px] lg:h-[199px] items-center justify-center gap-2 xs:gap-2.5 px-2 xs:px-4 sm:px-8 lg:px-60 py-3 xs:py-4 lg:py-0 relative w-full bg-[#121511] translate-y-[-1rem] animate-fade-in opacity-0 overflow-visible">
      <div className="flex flex-col w-full max-w-6xl items-start gap-2 xs:gap-2.5 relative overflow-visible">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 xs:gap-2.5 relative w-full overflow-visible" ref={dropdownRef}>
          {/* 필수형 드롭다운 */}
          <div className="relative w-full sm:w-auto min-w-0">
            <Button
              variant="outline"
              className="flex w-full sm:w-40 lg:w-[153.04px] items-center justify-between gap-1 xs:gap-2 px-2 xs:px-3 sm:px-4 lg:px-10 py-2 xs:py-3 lg:py-[15px] h-auto bg-[#191b16] border-t border-b border-l-0 border-r-0 rounded-none hover:bg-[#191b16] hover:opacity-80 transition-opacity translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] min-h-[40px] xs:min-h-[44px]"
              style={{borderTopColor: 'rgba(255, 255, 255, 0.15)', borderBottomColor: 'rgba(255, 255, 255, 0.15)', borderTopWidth: '1px', borderBottomWidth: '1px'}}
              onClick={() => handleDropdownToggle('type')}
            >
              <span className="relative font-body-text font-[number:var(--body-text-font-weight)] text-white text-xs xs:text-sm lg:text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] truncate">
                {selectedFilters.type}
              </span>
              <CustomArrow isOpen={openDropdown === 'type'} className="relative w-3 xs:w-4 lg:w-5 h-3 xs:h-4 lg:h-5 flex-shrink-0" />
            </Button>
            
            {openDropdown === 'type' && (
              <div className="absolute top-full left-0 w-full bg-[#191b16] border border-[rgba(255,255,255,0.15)] border-t-0 shadow-2xl" style={{ height: '100px', zIndex: 9999 }}>
                {filterOptions.type.map((option) => (
                  <button
                    key={option.value}
                    className="w-full px-3 sm:px-4 py-4 text-left text-white hover:bg-[#2a2d26] transition-colors font-body-text font-[number:var(--body-text-font-weight)] text-sm lg:text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] flex items-center border-b border-[rgba(255,255,255,0.1)] last:border-b-0"
                    onClick={() => handleFilterSelect('type', option.value, option.label)}
                    style={{ height: '50px' }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 해시태그 드롭다운 */}
          <div className="relative w-full sm:w-auto min-w-0">
            <Button
              variant="outline"
              className="flex w-full sm:w-44 lg:w-[167.04px] items-center justify-between gap-1 xs:gap-2 px-2 xs:px-3 sm:px-4 lg:px-10 py-2 xs:py-3 lg:py-[15px] h-auto bg-[#191b16] border-t border-b border-l-0 border-r-0 rounded-none hover:bg-[#191b16] hover:opacity-80 transition-opacity translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:300ms] min-h-[40px] xs:min-h-[44px]"
              style={{borderTopColor: 'rgba(255, 255, 255, 0.15)', borderBottomColor: 'rgba(255, 255, 255, 0.15)', borderTopWidth: '1px', borderBottomWidth: '1px'}}
              onClick={() => handleDropdownToggle('hashtag')}
            >
              <span className="relative font-body-text font-[number:var(--body-text-font-weight)] text-white text-xs xs:text-sm lg:text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] truncate">
                {selectedFilters.hashtag}
              </span>
              <CustomArrow isOpen={openDropdown === 'hashtag'} className="relative w-3 xs:w-4 lg:w-5 h-3 xs:h-4 lg:h-5 flex-shrink-0" />
            </Button>
            
            {openDropdown === 'hashtag' && (
              <div className="absolute top-full left-0 w-full bg-[#191b16] border border-[rgba(255,255,255,0.15)] border-t-0 shadow-2xl" style={{ height: '100px', zIndex: 9999 }}>
                {filterOptions.hashtag.map((option, index) => (
                  <button
                    key={option.value}
                    className="w-full px-3 sm:px-4 py-4 text-left text-white hover:bg-[#2a2d26] transition-colors font-body-text font-[number:var(--body-text-font-weight)] text-sm lg:text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] flex items-center border-b border-[rgba(255,255,255,0.1)] last:border-b-0"
                    onClick={() => handleFilterSelect('hashtag', option.value, option.label)}
                    style={{ height: '50px' }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex w-full min-h-[40px] xs:min-h-[48px] sm:h-14 lg:h-[60px] items-center justify-between px-2 xs:px-4 sm:px-6 lg:px-10 py-2 lg:py-0 relative bg-[#181b15] border-t border-b translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]" style={{borderTopColor: 'rgba(255, 255, 255, 0.15)', borderBottomColor: 'rgba(255, 255, 255, 0.15)', borderTopWidth: '1px', borderBottomWidth: '1px'}}>
          <Input
            type="text"
            placeholder="검색어를 입력하세요"
            className="flex-1 bg-transparent border-none p-0 h-auto font-body-text font-[number:var(--body-text-font-weight)] text-white text-xs xs:text-sm lg:text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <SearchIcon className="relative w-4 xs:w-5 lg:w-[18px] h-4 xs:h-5 lg:h-[18px] text-[#ADFF00] flex-shrink-0" />
        </div>
      </div>
    </section>
  );
};

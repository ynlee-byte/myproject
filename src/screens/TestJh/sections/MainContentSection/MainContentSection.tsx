import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { AnimatedCard } from "../../../../components/ui/animated-card";

export const MainContentSection = (): JSX.Element => {
  // Data for the top badges
  const topBadges = [
    { text: "필수형", variant: "success" as const },
    { text: "PXO - 103", variant: "default" as const },
    { text: "PXO116 - 2018", variant: "default" as const },
  ];

  // Data for the bottom badges
  const bottomBadges = [{ text: "기획" }, { text: "디자인" }, { text: "TOOL" }];

  // Data for the course steps
  const courseSteps = [
    {
      number: "1)",
      text: "[도식화] 잘 보이는 기획은 도형을 가진다 (상하/좌우 배치, 방향, 기호, 색깔 등",
    },
    {
      number: "2)",
      text: "[그래프] 잘 보이는 기획은 그래프를 가진다. (원, 연속, 선, 막대, 지표, 비교 등)",
    },
    {
      number: "3)",
      text: "[강조화] 잘 보이는 기획은 포인트를 가진다. (배경  box, 밑줄, 빨간색, 볼드, 크기, 표시 등)",
    },
  ];

  return (
    <section className="flex flex-col xl:flex-row items-start justify-center gap-4 xs:gap-6 xl:gap-[24px] px-2 xs:px-4 sm:px-8 lg:px-16 xl:px-60 py-6 xs:py-8 lg:py-[50px] relative self-stretch w-full flex-[0_0_auto] bg-[#121511] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <div className="flex flex-col w-full xl:min-w-[600px] items-start gap-4 xs:gap-6 lg:gap-[27px] relative flex-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="flex flex-col items-start gap-[27px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-full lg:max-w-none lg:max-h-none items-start gap-2.5 p-4 lg:p-5 relative flex-1 self-stretch bg-cover bg-center bg-no-repeat min-h-[200px] lg:min-h-[300px]" style={{backgroundImage: 'url(https://c.animaapp.com/mg4gkkvmnROy9v/img/---1.png)'}}>
              <div className="flex flex-wrap items-center gap-[10px_10px] relative self-stretch w-full flex-[0_0_auto]">
                {topBadges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`h-[26px] px-2.5 py-2.5 mt-[-1.00px] mb-[-1.00px] ${index === 0 ? "ml-[-1.00px]" : ""} bg-[#1d1e1ab2] border-t border-b border-[#ffffff26] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)] ${badge.variant === "success" ? "text-[#a2ff32]" : "text-white"} whitespace-nowrap`}
                  >
                    {badge.text}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-[15px] relative flex-1 grow">
              <div className="inline-flex items-center gap-[9px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-gradient text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] whitespace-nowrap [font-style:var(--sub-heading-font-style)]">
                  UNIT
                </div>

                <img
                  className="relative flex-[0_0_auto]"
                  alt="Frame"
                  src="https://c.animaapp.com/mg4gkkvmnROy9v/img/frame-2121457986.svg"
                />
              </div>

              <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
                <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard-Bold',Helvetica] font-bold text-white text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-1.44px] leading-tight lg:leading-[normal]">
                  <span className="block sm:hidden">
                    [기획 TOOL] 가시화 :<br />
                    잘 보이지 않는 기획은, 휴지통으로 간다.
                  </span>
                  <span className="hidden sm:block">
                    [기획 TOOL]
                    <br />
                    가시화 : 잘 보이지 않는
                    <br />
                    기획은, 휴지통으로 간다.
                  </span>
                </h1>

                <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col xs:flex-row items-start gap-2 xs:gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit font-h4 font-[number:var(--h4-font-weight)] text-white text-sm xs:text-base lg:text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] whitespace-nowrap [font-style:var(--h4-font-style)]">
                      설명
                    </div>

                    <p className="relative flex-1 font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-xs xs:text-sm lg:text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                      본 과정에서는 비즈니스 실무 기획 직무에 진입하는 모든
                      유망주들이, 자신이 구상하고 기획하는 모든 내용들을
                      실무자가 어떤 원칙 등을 통해 &apos;실제 기획 자료&apos;
                      (기획안, 기획제안서, 기획 보고소 등)로 제대로 &apos;보여줄
                      수&apos; 있는지에 대해 초점을 맞추고 있습니다.
                    </p>
                  </div>

                  <div className="flex flex-col xs:flex-row items-start gap-2 xs:gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit font-h4 font-[number:var(--h4-font-weight)] text-white text-sm xs:text-base lg:text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] whitespace-nowrap [font-style:var(--h4-font-style)]">
                      목표
                    </div>

                    <p className="relative flex-1 font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-xs xs:text-sm lg:text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                      본 유닛을 통해, 이후 팔랑크스 크루들의 기획안이 타
                      경쟁자들보다 &apos;높은 가시성&apos;을 통해, 우리 크루들이
                      구상하고 표현하는 기획을 효과적으로 전달할 수 있는
                      &apos;퀄리티&apos; 높은 기획안이 되는 것을 목표로 합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-end gap-2.5 relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                  {bottomBadges.map((badge, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className={`h-[26px] px-2.5 py-2.5 mt-[-1.00px] mb-[-1.00px] ${index === 0 ? "ml-[-1.00px]" : ""} ${index === bottomBadges.length - 1 ? "mr-[-1.00px]" : ""} bg-[#1d1e1ab2] border-t border-b border-[#ffffff26] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-white text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)] whitespace-nowrap`}
                    >
                      {badge.text}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Card className="flex flex-col items-start gap-[21px] p-5 relative self-stretch w-full flex-[0_0_auto] bg-cover bg-center bg-no-repeat border-none rounded-none" style={{backgroundImage: 'linear-gradient(0deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%), url(https://c.animaapp.com/mg4gkkvmnROy9v/img/---1.png)'}}>
            <CardContent className="p-0 w-full">
              <blockquote className="mt-[-1.00px] [font-family:'Gapyeong_Hanseokbong',Helvetica] font-normal text-transparent text-xs xs:text-sm sm:text-lg lg:text-xl xl:text-2xl text-center tracking-[0] leading-tight sm:leading-relaxed lg:leading-[34px] relative self-stretch px-2 xs:px-0">
                <span className="text-white">
                  &quot;아들아, 중고차를 팔 때, 단 1시간을 들여 정성들여 닦고
                  간단한 흠집만이라도 제거한다면, 그 간단한
                  &apos;정성&apos;만으로도 몇 백불은 더 받을 수 있단다.&quot;{" "}
                  <br />
                </span>

                <span className="text-[#aaaaaa] text-xs xs:text-xs sm:text-sm lg:text-lg xl:text-xl">
                  - 미국 애리조나 주 카운티 maxim -
                </span>
              </blockquote>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap [font-style:var(--h3-font-style)]">
              진행 횟수
            </div>

            <div className="relative flex-1 mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-[#adff00] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              76회
            </div>
          </div>

          <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap [font-style:var(--h3-font-style)]">
              평점
            </div>

            <div className="flex items-center gap-[10px] relative flex-1 grow">
              <div className="inline-flex h-10 items-end gap-0.5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-[#adff00] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap [font-style:var(--h3-font-style)]">
                  9.5
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Chakra_Petch',Helvetica] font-bold text-[#555555] text-2xl tracking-[-1.20px] leading-10 whitespace-nowrap">
                  / 10
                </div>
              </div>

              <img
                className="relative w-auto h-4"
                alt="Frame"
                src="https://c.animaapp.com/mg4gkkvmnROy9v/img/frame-2121458071.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full xl:w-[420px] xl:h-auto items-stretch xl:items-end justify-start gap-6 lg:gap-[30px] relative">
        <AnimatedCard delay={200}>
          <Card className="flex flex-col w-full gap-2 xs:gap-2.5 p-2 xs:p-4 lg:p-[30px] relative flex-[0_0_auto] border border-solid border-[#ffffff26] bg-transparent rounded-none">
            <CardContent className="flex flex-col items-start gap-[25px] relative w-full p-0">
              <div className="flex flex-col items-start gap-5 self-stretch w-full relative flex-[0_0_auto]">
                <h3 className="relative self-stretch mt-[-2.00px] ml-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                  구성 스텝
                </h3>

                <div className="flex flex-col items-start gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
                  {courseSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 w-full flex-[0_0_auto] relative self-stretch"
                    >
                      <div className="relative w-fit mt-[-2.00px] ml-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-white text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] whitespace-nowrap [font-style:var(--h4-font-style)]">
                        {step.number}
                      </div>

                      <p className="relative flex-1 mt-[-2.00px] font-body-text font-[number:var(--body-text-font-weight)] text-body-text-color text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <img
                className="self-stretch w-full h-px relative object-cover"
                alt="Line"
                src="https://c.animaapp.com/mg4gkkvmnROy9v/img/line-51.svg"
              />

              <div className="flex flex-col items-start gap-5 self-stretch w-full relative flex-[0_0_auto]">
                <h4 className="relative self-stretch mt-[-2.00px] ml-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-white text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                  우수 사례
                </h4>

              <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative w-4 h-4 mt-1 flex-shrink-0"
                  alt="Link icon"
                  src="https://c.animaapp.com/mg4gkkvmnROy9v/img/107003-4-4.png"
                />
                
                <p className="relative flex-1 font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                  GT 만나고 내 기획 인생 180도 달라진 썰 푼다. (GD 아님)
                </p>
              </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>

        <AnimatedCard delay={400}>
          <Card className="flex flex-col w-full items-start gap-3 xs:gap-4 lg:gap-5 p-2 xs:p-4 lg:p-[30px] relative flex-[0_0_auto] border border-solid border-[#ffffff26] bg-transparent rounded-none">
          <CardContent className="flex flex-col items-start gap-5 self-stretch w-full relative flex-[0_0_auto] p-0">
            <div className="flex flex-col items-start gap-5 self-stretch w-full relative flex-[0_0_auto]">
              <img
                className="relative w-28 h-[107px] object-cover"
                alt="Image"
                src="https://c.animaapp.com/mg4gkkvmnROy9v/img/image.png"
              />

              <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                <h3 className="relative self-stretch mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                  김민지
                </h3>

                <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="flex items-center justify-between relative w-full">
                    <div className="relative mt-[-1.00px] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-[#bababa] text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)] whitespace-nowrap">
                      5기 엔터테인먼트팀
                    </div>

                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto] ml-4">
                      <div className="w-5 h-px bg-[#bababa]" />
                      <div className="w-2.5 h-2.5 bg-[#bababa]" />
                      <div className="w-2.5 h-2.5 border border-solid border-[#bababa]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img
              className="self-stretch w-full h-px relative object-cover"
              alt="Line"
              src="https://c.animaapp.com/mg4gkkvmnROy9v/img/line-51.svg"
            />

            <div className="flex flex-col items-start gap-5 self-stretch w-full relative flex-[0_0_auto]">
              <img
                className="relative w-[29px] h-[22px]"
                alt="Image"
                src="https://c.animaapp.com/mg4gkkvmnROy9v/img/-.svg"
              />

              <div className="flex flex-col items-start gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
                <img
                  className="relative w-auto h-4"
                  alt="Frame"
                  src="https://c.animaapp.com/mg4gkkvmnROy9v/img/frame-2121458071.svg"
                />

                <blockquote className="relative self-stretch [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-white text-sm xs:text-base sm:text-lg lg:text-xl tracking-[-0.60px] leading-tight xs:leading-relaxed lg:leading-[31px]">
                  처음엔 기획이 막막했는데, 차근차근 따라가다 보니 이제는 방향이
                  보입니다. 기초를 다지기 좋은 과정이니 초보자라면 꼭 들어보시길
                  추천합니다 :)
                </blockquote>
              </div>
            </div>
          </CardContent>
          </Card>
        </AnimatedCard>
      </div>
    </section>
  );
};

import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { AnimatedCard } from "../../../../components/ui/animated-card";

const topBadges = [
  { text: "필수형", color: "text-[#a2ff32]" },
  { text: "PXO - 103", color: "text-white" },
  { text: "PXO116 - 2018", color: "text-white" },
];

const bottomBadges = [{ text: "기획" }, { text: "디자인" }, { text: "TOOL" }];

const constructionSteps = [
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

export const FeaturedItemSection = (): JSX.Element => {
  return (
    <section className="flex flex-col xl:flex-row items-start justify-center gap-6 xl:gap-6 px-4 sm:px-8 lg:px-16 xl:px-60 py-8 lg:py-[50px] w-full bg-[#121511] translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="flex flex-col w-full xl:min-w-[600px] items-start gap-6 lg:gap-[27px] flex-1">
        <div className="flex flex-col items-start gap-[27px] w-full">
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-full lg:max-w-none lg:max-h-none items-start gap-2.5 p-4 lg:p-5 relative flex-1 self-stretch bg-cover bg-center bg-no-repeat min-h-[200px] lg:min-h-[300px]" style={{backgroundImage: 'url(https://c.animaapp.com/mg4gkkvmnROy9v/img/---7.png)'}}>
              <div className="flex flex-wrap items-center gap-[10px_10px] relative self-stretch w-full flex-[0_0_auto]">
                {topBadges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`h-[26px] px-2.5 py-2.5 mt-[-1.00px] mb-[-1.00px] ${index === 0 ? "ml-[-1.00px]" : ""} bg-[#1d1e1ab2] border-t border-b border-[#ffffff26] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)] ${badge.color} whitespace-nowrap`}
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
                <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Pretendard-Bold',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl tracking-[-1.44px] leading-tight lg:leading-[normal]">
                  <span className="block sm:hidden">
                    [분석 TOOL] 데이터 :<br />
                    감각만 믿는 기획은, 설득력을 잃는다.
                  </span>
                  <span className="hidden sm:block">
                    [분석 TOOL]
                    <br />
                    데이터 : 감각만 믿는
                    <br />
                    기획은, 설득력을 잃는다.
                  </span>
                </h1>

                <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-white text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] whitespace-nowrap [font-style:var(--h4-font-style)]">
                      설명
                    </div>

                    <p className="relative flex-1 mt-[-1.00px] font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                      본 과정에서는 데이터 분석을 통해 얻은 통찰이 어떻게
                      기획안에 반영되고, 근거 기반의 기획이 왜 경쟁에서 우위를
                      차지하는지를 학습합니다. 단순한 감각이나 경험에만 의존하는
                      기획의 한계를 짚습니다.
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-white text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] whitespace-nowrap [font-style:var(--h4-font-style)]">
                      목표
                    </div>

                    <p className="relative flex-1 mt-[-1.00px] font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                      본 유닛을 통해 크루들은 데이터를 수집·정리하고, 이를
                      직관적인 시각자료로 가공해 기획의 설득력을 높이는 능력을
                      기르는 것을 목표로 합니다.
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

          <Card className="flex flex-col items-start gap-[21px] p-5 w-full bg-cover bg-center bg-no-repeat border-none rounded-none translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]" style={{backgroundImage: 'linear-gradient(0deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%), url(https://c.animaapp.com/mg4gkkvmnROy9v/img/---7.png)'}}>
            <CardContent className="p-0 w-full">
              <blockquote className="[font-family:'Gapyeong_Hanseokbong',Helvetica] font-normal text-sm sm:text-lg lg:text-xl xl:text-2xl text-center tracking-[0] leading-tight sm:leading-relaxed lg:leading-[34px] w-full">
                <span className="text-white">
                  "데이터는 숫자가 아니다. 우리가 보지 못한 패턴을 드러내고,
                  감각으로만 기획하는 이들을 무너뜨린다."
                </span>
                <span className="text-[#aaaaaa] text-xs sm:text-sm lg:text-lg xl:text-xl">
                  {" "}
                  – 프랜시스 베이컨 –
                </span>
              </blockquote>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col items-start gap-[15px] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <div className="flex items-center gap-2 w-full">
            <div className="font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] whitespace-nowrap">
              진행 횟수
            </div>
            <div className="flex-1 font-h3 font-[number:var(--h3-font-weight)] text-[#adff00] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              88회
            </div>
          </div>

          <div className="flex items-start gap-[15px] w-full">
            <div className="font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] whitespace-nowrap">
              평점
            </div>
            <div className="flex items-center gap-[10px] flex-1 grow">
              <div className="inline-flex h-10 items-end gap-0.5">
                <div className="font-h3 font-[number:var(--h3-font-weight)] text-[#adff00] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                  9.0
                </div>
                <div className="[font-family:'Chakra_Petch',Helvetica] font-bold text-[#555555] text-2xl tracking-[-1.20px] leading-10 whitespace-nowrap">
                  / 10
                </div>
              </div>
              <img
                className="w-auto h-4"
                alt="Frame"
                src="https://c.animaapp.com/mg4gkkvmnROy9v/img/frame-2121458071.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full xl:w-[420px] xl:h-auto items-stretch xl:items-end justify-start gap-6 lg:gap-[30px] relative">
        <AnimatedCard delay={200}>
          <Card className="flex flex-col w-full gap-2.5 p-4 lg:p-[30px] relative flex-[0_0_auto] border border-solid border-[#ffffff26] bg-transparent rounded-none">
            <CardContent className="flex flex-col items-start gap-[25px] relative w-full p-0">
            <div className="flex flex-col items-start gap-5 self-stretch w-full relative flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-2.00px] ml-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                구성 스텝
              </h3>

              <div className="flex flex-col items-start gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
                {constructionSteps.map((step, index) => (
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
                  보고서 글꼴만 바꿨는데 칭찬받은 썰
                </p>
              </div>
            </div>
            </CardContent>
          </Card>
        </AnimatedCard>

        <AnimatedCard delay={400}>
          <Card className="flex flex-col w-full items-start gap-4 lg:gap-5 p-4 lg:p-[30px] relative flex-[0_0_auto] border border-solid border-[#ffffff26] bg-transparent rounded-none">
          <CardContent className="flex flex-col items-start gap-5 self-stretch w-full relative flex-[0_0_auto] p-0">
            <div className="flex flex-col items-start gap-5 self-stretch w-full relative flex-[0_0_auto]">
              <img
                className="relative w-28 h-[107px]"
                alt="Image"
                src="https://c.animaapp.com/mg4gkkvmnROy9v/img/image-3.png"
              />

              <div className="flex flex-col w-[126px] items-start gap-1.5 relative flex-[0_0_auto]">
                <h3 className="relative w-fit mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap [font-style:var(--h3-font-style)]">
                  강해린
                </h3>

                <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="flex w-[126px] items-center justify-between relative">
                    <div className="relative flex-1 mt-[-1.00px] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-[#bababa] text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]">
                      6기 비주얼팀
                    </div>

                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
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

                <blockquote className="relative self-stretch [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-white text-xl tracking-[-0.60px] leading-[31px]">
                  실습 중심이라서 단순히 듣는 게 아니라 직접 손으로 해볼 수
                  있어서 좋았습니다. 실무와 바로 연결된다는 점이 특히
                  인상적이었어요.
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

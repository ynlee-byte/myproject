import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { AnimatedCard } from "../../../../components/ui/animated-card";

export const HeaderSection = (): JSX.Element => {
  const topBadges = [
    { text: "필수형", color: "text-[#a2ff32]" },
    { text: "PXO - 103", color: "text-white" },
    { text: "PXO116 - 2018", color: "text-white" },
  ];

  const bottomBadges = [{ text: "기획" }, { text: "디자인" }, { text: "TOOL" }];

  const structureSteps = [
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
    <div className="flex flex-col xl:flex-row items-start justify-center gap-6 xl:gap-[24px] px-4 sm:px-8 lg:px-16 xl:px-60 py-8 lg:py-[50px] relative self-stretch w-full flex-[0_0_auto] bg-[#121511] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <div className="flex flex-col w-full xl:min-w-[600px] items-start gap-6 lg:gap-[27px] relative flex-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="flex flex-col items-start gap-[27px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-full lg:max-w-none lg:max-h-none items-start gap-2.5 p-4 lg:p-5 relative flex-1 self-stretch bg-cover bg-center bg-no-repeat min-h-[200px] lg:min-h-[300px]" style={{backgroundImage: 'url(https://c.animaapp.com/mg4gkkvmnROy9v/img/---5.png)'}}>
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
                    [스토리텔링 TOOL] 서사 :<br />
                    맥락 없는 기획은, 망각 속에 묻힌다.
                  </span>
                  <span className="hidden sm:block">
                    [스토리텔링 TOOL]
                    <br />
                    서사 : 맥락 없는 기획은,
                    <br />
                    망각 속에 묻힌다.
                  </span>
                </h1>

                <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-white text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] whitespace-nowrap [font-style:var(--h4-font-style)]">
                      설명
                    </div>

                    <p className="relative flex-1 mt-[-1.00px] font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                      본 과정에서는 실무자가 자신의 아이디어와 기획 의도를
                      청중에게 전달할 때, &apos;스토리라인&apos;이 어떤 역할을
                      하는지를 다룹니다. 서사 없는 기획은 주목받기 어렵고,
                      설득력 또한 떨어집니다.
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-white text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] whitespace-nowrap [font-style:var(--h4-font-style)]">
                      목표
                    </div>

                    <p className="relative flex-1 mt-[-1.00px] font-body-text font-[number:var(--body-text-font-weight)] text-[#bababa] text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                      본 유닛을 통해 크루들은 기획서와 발표 자료를 하나의
                      이야기로 엮어내어, 청중이 쉽게 이해하고 공감할 수 있는
                      &apos;스토리텔링형 기획안&apos;을 작성하는 능력을 목표로
                      합니다.
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

          <Card className="flex flex-col items-start gap-[21px] p-5 relative self-stretch w-full flex-[0_0_auto] bg-cover bg-center bg-no-repeat border-none rounded-none" style={{backgroundImage: 'linear-gradient(0deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%), url(https://c.animaapp.com/mg4gkkvmnROy9v/img/---5.png)'}}>
            <CardContent className="p-0 w-full">
              <blockquote className="relative self-stretch mt-[-1.00px] [font-family:'Gapyeong_Hanseokbong',Helvetica] font-normal text-transparent text-sm sm:text-lg lg:text-xl xl:text-2xl text-center tracking-[0] leading-tight sm:leading-relaxed lg:leading-[34px]">
                <span className="text-white">
                  &quot;사람들은 사실을 기억하지 못한다. 하지만 이야기 속 감정을
                  기억하고, 그 감정은 결국 행동을 이끌어낸다.&quot;{" "}
                </span>

                <span className="text-[#aaaaaa] text-xs sm:text-sm lg:text-lg xl:text-xl">
                  {" "}
                  – 아리스토텔레스 –
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
              58회
            </div>
          </div>

          <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap [font-style:var(--h3-font-style)]">
              평점
            </div>

            <div className="flex items-center gap-[10px] relative flex-1 grow">
              <div className="inline-flex h-10 items-end gap-0.5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-[#adff00] text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap [font-style:var(--h3-font-style)]">
                  9.0
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

      <div className="flex flex-col w-full xl:w-[420px] xl:h-auto items-stretch xl:items-end justify-start gap-6 lg:gap-[30px] relative pt-8 lg:pt-[50px]">
        <AnimatedCard delay={200}>
          <Card className="flex flex-col w-full gap-2.5 p-4 lg:p-[30px] relative flex-[0_0_auto] border border-solid border-[#ffffff26] bg-transparent rounded-none">
            <CardContent className="flex flex-col items-start gap-[25px] relative w-full p-0">
            <div className="flex flex-col items-start gap-5 self-stretch w-full relative flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-2.00px] ml-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                구성 스텝
              </h3>

              <div className="flex flex-col items-start gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
                {structureSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 w-full flex-[0_0_auto] relative self-stretch"
                  >
                    <div className="relative w-fit mt-[-2.00px] ml-[-1.00px] font-h4 font-[number:var(--h4-font-weight)] text-white text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] whitespace-nowrap [font-style:var(--h4-font-style)]">
                      {step.number}
                    </div>

                    <div className="relative flex-1 mt-[-2.00px] font-body-text font-[number:var(--body-text-font-weight)] text-body-text-color text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                      {step.text}
                    </div>
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
                  새벽 3시에 짠 아이디어가 실제 서비스가 되었다구요?! 거짓말 아니죠!
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
                src="https://c.animaapp.com/mg4gkkvmnROy9v/img/image-2.png"
              />

              <div className="flex flex-col w-[126px] items-start gap-1.5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap [font-style:var(--h3-font-style)]">
                  다니엘
                </div>

                <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                  <div className="flex w-[126px] items-center justify-between relative">
                    <div className="relative flex-1 mt-[-1.00px] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-[#bababa] text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]">
                      4기 서비스팀
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

                <div className="relative self-stretch [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-white text-xl tracking-[-0.60px] leading-[31px]">
                  해당 내용 기획자 초보라면 특히나 꼭 읽어봐야
                  <br />할 내용입니다 ~! 기초 다지기를 할때 매우 좋<br />
                  으니 꼭 읽고 똑똑하게 기획 하시기 바랍니다 :)
                </div>
              </div>
            </div>
          </CardContent>
          </Card>
        </AnimatedCard>
      </div>
    </div>
  );
};

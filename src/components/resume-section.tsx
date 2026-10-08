import type { ResumeItem } from "@/types/site";
import { SectionSubtitle } from "@/components/primitives";
import { FadeIn, RevealText } from "@/components/reveal";

interface ResumeSectionProps {
  title: string;
  sideLabel: string;
  items: ResumeItem[];
}

export function ResumeSection({ title, sideLabel, items }: ResumeSectionProps) {
  return (
    <div className="about-me-resume-area pt-115">
      <div className="tp-container">
        <div className="tp-row">
          <div className="col-span-12 lg:col-span-2">
            <div className="tp-about-subtitle-wrap mb-[20px] mt-[15px]">
              <SectionSubtitle uppercase withArrow>
                Resumo
              </SectionSubtitle>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="about-me-resume-content mb-[20px]">
              <RevealText text={title} className="about-me-resume-maintitle text-uppercase" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <div className="about-me-subtitle-wrap d-flex lg:justify-content-end align-items-end h-full">
              <span className="tp-about-subtitle text-uppercase mb-[30px]">
                [ {sideLabel} ]
              </span>
            </div>
          </div>
          <div className="col-span-12 xl:col-start-3 xl:col-span-10">
            <div className="about-me-resume-wrap mt-[40px]">
              {items.map((item, i) => (
                <FadeIn key={item.title} delay={0.3 + i * 0.1} as="div">
                  <div className="about-me-resume-item">
                    <div className="tp-row">
                      <div className="col-span-12 lg:col-span-2">
                        <div className="about-me-resume-date mb-[30px]">
                          <span>{item.date}</span>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-5">
                        <div className="about-me-resume-info ml-[40px] mb-[30px]">
                          <h3 className="about-me-resume-title tp-ff-inter">
                            {item.title}
                          </h3>
                          <span className="about-me-resume-location">
                            {item.location}
                          </span>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-5">
                        <div className="about-me-resume-dec ml-[50px] mb-[30px]">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { SectionSubtitle } from "@/components/sites/html-aqlova-com-27e9f18f/shared/primitives";
import { FadeIn } from "@/components/sites/html-aqlova-com-27e9f18f/shared/reveal";

export function AboutIntro() {
  return (
    <div className="about-me-area about-me-spacing">
      <div className="tp-container">
        <div className="tp-row">
          <div className="col-span-12 lg:col-span-2">
            <div className="tp-about-subtitle-wrap mb-[30px]">
              <FadeIn delay={0.3} as="div">
                <SectionSubtitle withArrow>Sobre mim</SectionSubtitle>
              </FadeIn>
            </div>
          </div>
          <div className="col-span-12 2xl:col-span-6 xl:col-span-8 lg:col-span-10">
            <div className="pp-about-content">
              <FadeIn delay={0.4} as="div">
                <h2 className="pp-about-title mb-[30px]">
                  Desenvolvedor Full Stack apaixonado por tecnologia. 
                </h2>
              </FadeIn>
              <div className="pp-about-dec-wrap">
                <FadeIn delay={0.5} as="div">
                  <div className="pp-about-dec mb-[50px]">
                    <p className="mb-[20px]">
                      Acredito que a melhor maneira de resolver problemas complexos é entregando soluções simples e eficientes. 
                      +15 anos de experiência em tecnologia, combinando bagagem corporativa e atuação freelancer, entrego soluções de ponta a ponta.
                    </p>
                    <p className="mb-[12px] font-semibold">O que Eu Desenvolvo</p>
                    <ul className="list-disc pl-[22px] m-0">
                      <li className="mb-[8px]">
                        <b>Aplicações Web Full-Stack:</b> Desenvolvimento de
                        ponta a ponta (front-end, back-end e banco de dados).
                      </li>
                      <li className="mb-[8px]">
                        <b>Plataformas, sistemas e webapp</b> Saas, dashboards, sistemas de gestão, plataformas de
                        serviço, CRMs e dashboards administrativos customizados.
                      </li>
                      <li className="mb-[8px]">
                        <b>APIs e Integrações:</b> Conexões seguras entre
                        sistemas, gateways de pagamento, serviços de e-mail
                        e ERPs.
                      </li>
                      <li className="mb-[8px]">
                        <b>Aplicativos Mobile:</b> Apps nativos e
                        multiplataforma desenvolvidos com React Native e Flutter
                      </li>
                      <li className="mb-[8px]">
                        <b>Sistes e LandingPages:</b> Sites institucionais, portfólios, 
                        blogs e landing pages otimizadas para conversão.
                      </li>
                    </ul>
                </div>
              </FadeIn>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

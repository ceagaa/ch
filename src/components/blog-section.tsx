import { Fragment } from "react";
import { SectionSubtitle, TpButton } from "@/components/primitives";
import { FadeIn, RevealText } from "@/components/reveal";
import type { BlogPost } from "@/types/site";

const POSTS: BlogPost[] = [
  {
    tag: "Site Institucional",
    title: "Fabiana Cavalcante Fotografia",
    image: "/images/project/fabiana-cavalcante.webp",
    href: "https://fabianacavalcante.2swebtech.com.br/",
  },
  {
    tag: "Sistema Web",
    title: "Escala Fácil",
    image: "/images/project/escala-facil.webp",
    href: "https://escalafacil.2swebtech.com.br/",
  },
  {
    tag: "Landing Page",
    title: "IOEX Implantes",
    image: "/images/project/ioex-implantes.webp",
    href: "https://ioeximplantes.com.br/",
  },
];

export function BlogSection() {
  return (
    <div className="cs-blog-thumb-area pt-155 pb-115">
      <div className="tp-container">
        <div className="tp-row align-items-end">
          <div className="col-span-12 lg:col-span-9">
            <div className="cs-blog-title-wrap">
              <SectionSubtitle uppercase className="d-inline-block mb-[10px]">
                [ CASES ]
              </SectionSubtitle>
              <RevealText text="Projetos Recentes" className="about-me-resume-maintitle text-uppercase" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <FadeIn delay={0.4} as="div">
              <div className="cs-blog-btn-wrap lg:text-right mb-[80px]">
                <TpButton text="outros projetos" href="https://2swebtech.com.br/cases" uppercase />
              </div>
            </FadeIn>
          </div>
          {POSTS.map((post) => (
            <div key={post.title} className="col-span-12 lg:col-span-4 md:col-span-6">
              <FadeIn delay={0.4} as="div">
                <div className="cs-blog-item cs-blog-item-2 mb-[40px]">
                  <div className="cs-blog-thumb fix p-relative mb-[35px]">
                    <img className="w-full" src={post.image} alt={post.title} />
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs-blog-tag"
                    >
                      {post.tag}
                    </a>
                  </div>
                  <h4 className="cs-blog-title tp-ff-sequel-semi-bold">
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="common-underline"
                    >
                      {post.title.split("\n").map((part, i) => (
                        <Fragment key={part}>
                          {i > 0 && <br />}
                          {part}
                        </Fragment>
                      ))}
                    </a>
                  </h4>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

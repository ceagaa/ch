import { SiteHeader } from "@/components/sites/html-aqlova-com-27e9f18f/about-me-light/site-header";
import { AboutIntro } from "@/components/sites/html-aqlova-com-27e9f18f/about-me-light/about-intro";
import { AboutSlider } from "@/components/sites/html-aqlova-com-27e9f18f/about-me-light/about-slider";
import { ResumeSection } from "@/components/sites/html-aqlova-com-27e9f18f/about-me-light/resume-section";
import { SkillsSection } from "@/components/sites/html-aqlova-com-27e9f18f/about-me-light/skills-section";
import { TestimonialSection } from "@/components/sites/html-aqlova-com-27e9f18f/about-me-light/testimonial-section";
import { BannerSection } from "@/components/sites/html-aqlova-com-27e9f18f/about-me-light/banner-section";
import { BlogSection } from "@/components/sites/html-aqlova-com-27e9f18f/about-me-light/blog-section";
import { SiteFooter } from "@/components/sites/html-aqlova-com-27e9f18f/about-me-light/site-footer";
import { PageEffects } from "@/components/sites/html-aqlova-com-27e9f18f/about-me-light/page-effects";
import type { ResumeItem } from "@/types/site";

const EDUCATION: ResumeItem[] = [
  {
    date: "2011",
    title: "Montagem e manutenção de micro computadores e redes",
    location: "Senai",
    description:
      "Curso de montagem de micro e instalação de sistemas operacionais.",
  },
  {
    date: "2010",
    title: "Programação Básica",
    location: "Microcamp",
    description:
      "Programação básica para páginas de internet usando .NET, HTML e CSS.",
  },
  {
    date: "2012",
    title: "Programação para Internet",
    location: "CompuClass (Microsoft Partner)",
    description:
      "Treinamento de programação para internet com foco em HTML, CSS, PHP e JavaScript.",
  },
  {
    date: "2013 - 2016",
    title: "Análise e Desenvolvimento de Sistemas",
    location: "Faculdade Flamingo",
    description:
      "Faculdade de Análise e Desenvolvimento de Sistemas.",
  },
];

const EXPERIENCE: ResumeItem[] = [
  {
    date: "Desde 2012",
    title: "Desenvolvedor Full Stack e Design",
    location: "Freelancer – 2swebtech",
    description:
      "Desenvolvimento de websites, blogs, lojas virtuais e soluções digitais utilizando HTML5, CSS3, JavaScript, PHP, WordPress, React, TypeScript, Tailwind, Angular, Vue, Vite, Git, Github. Atuação em desenvolvimento Full Stack e administração de ambientes web, com conhecimento avançado em cPanel, aaPanel e VPS. Portfólio: 2swebtech.com.br/cases/",
  },
  {
    date: "2018 - 2021",
    title: "Coordenador de Suporte Técnico",
    location: "Sonda IT – Prestador de serviço Voith",
    description:
      "Coordenação de equipe de Field Service, atendimento ao cliente e gestão de pessoas. Acompanhamento de SLA, KPIs, projetos, reuniões e rotinas operacionais. Gestão da fila de chamados, direcionamento das demandas e garantia de atendimento dentro dos prazos. Criação de planos de ação para desvios identificados na equipe e na operação.",
  },
  {
    date: "2012 - 2018",
    title: "Analista de Suporte Pleno (Field Service)",
    location: "Sonda IT – Prestador de serviço Voith",
    description:
      "Atendimento a colaboradores VIP e diretoria. Análise de desempenho de hardware e software, Rollout, Rebuild, Backup, configuração de Outlook (.pst), instalação SCCM e OSD. Suporte a equipamentos de fábrica com sistemas legados, dispositivos corporativos iOS e Android, ERP integrado SAP, Navision, Lotus Notes e softwares CAD.",
  },
  {
    date: "2011 - 2012",
    title: "Analista de Suporte",
    location: "Asyst International – Prestador de serviço Voith",
    description:
      "Análise de desempenho de hardware e software, Rollout, Rebuild, Backup, configuração de Outlook (.pst), instalação SCCM e OSD.",
  },
];

export default function HomePage() {
  return (
    <>
      <PageEffects />
      <SiteHeader />
      <main>
        <AboutIntro />
        <AboutSlider />
        <ResumeSection
          title={"Trajetória de\nAprendizado"}
          sideLabel="Formações"
          items={EDUCATION}
        />
        <SkillsSection />
        <ResumeSection
          title={"Trajetória de\ntrabalho"}
          sideLabel="Experiências"
          items={EXPERIENCE}
        />
        <TestimonialSection />
        <BannerSection />
        <BlogSection />
      </main>
      <SiteFooter />
    </>
  );
}

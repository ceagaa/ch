import { FadeIn } from "@/components/reveal";

const SKILL_GROUPS = [
  {
    title: "Front-end",
    items: [
      "React",
      "Next.js",
      "Vite",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "jQuery",
    ],
  },
  {
    title: "Back-end",
    items: ["Node.js", "PHP", "Java", "SAP ABAP", "REST APIs"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Flutter"],
  },
  {
    title: "Banco de dados e CMS",
    items: ["PostgreSQL", "MySQL", "Supabase", "WordPress"],
  },
  {
    title: "DevOps e infraestrutura",
    items: ["Docker", "Git", "Cloudflare"],
  },
  {
    title: "Design e criativo",
    items: ["Figma", "Adobe Photoshop", "CorelDRAW", "Canva"],
  },
  {
    title: "Ferramentas de AI e Workflows",
    items: ["Google Stitch", "Antigravity"],
  },
];

const STUDYING = [
  {
    title: "Arquitetura de Software",
    desc: "padrões avançados para sistemas empresariais escaláveis e sustentáveis.",
  },
  {
    title: "Engenharia de IA para Sistemas e Apps Web",
    desc: "integração de modelos de machine learning, fluxos autônomos e interfaces inteligentes em produtos de software.",
  },
  {
    title: "Desenvolvimento Mobile",
    desc: "ampliando a entrega de aplicações utilizando React Native e Flutter.",
  },
];

export function SkillsSection() {
  return (
    <div className="tp-skill-area pt-160">
      <div className="tp-container">
        <div className="tp-row">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.title}
              className="col-span-12 sm:col-span-6 xl:col-span-4"
            >
              <FadeIn delay={0.3 + i * 0.08} as="div" className="h-full">
                <div className="skill-group-card">
                  <h3 className="skill-group-title">{group.title}</h3>
                  <ul className="skill-chips">
                    {group.items.map((name) => (
                      <li key={name} className="skill-chip">
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          ))}
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <FadeIn
              delay={0.3 + SKILL_GROUPS.length * 0.08}
              as="div"
              className="h-full"
            >
              <div className="skill-group-card">
                <h3 className="skill-group-title">Arquitetura</h3>
                <ul className="skill-chips">
                  <li className="skill-chip">Clean Architecture</li>
                  <li className="skill-chip">Domain-Driven Design (DDD)</li>
                </ul>
              </div>
            </FadeIn>
          </div>
          <div className="col-span-12">
            <FadeIn
              delay={0.3 + (SKILL_GROUPS.length + 1) * 0.08}
              as="div"
            >
              <div className="skill-group-card skill-note-card">
                <h3 className="skill-group-title">Estudando Atualmente</h3>
                <ul className="skill-study-list">
                  {STUDYING.map((s) => (
                    <li key={s.title}>
                      <b>{s.title}:</b> {s.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

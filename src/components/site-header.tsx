import { ArrowNEIcon } from "@/components/icons";

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/ceagaa" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/carlos-henrique-conceicao" },
  { label: "Github", href: "https://github.com/ceagaa" },
];

function DoubleArrowLink({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <a
      className="tp-btn pp-btn-nobg tp-ff-inter text-uppercase"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>
        <span className="text-1">{label}</span>
        <span className="text-2">{label}</span>
      </span>
      <i>
        <ArrowNEIcon />
        <ArrowNEIcon />
      </i>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header>
      <div className="tp-header-area pp-header-white tp-header-spacing header-transparent">
        <div className="tp-container">
          <div className="pp-header-top">
            <div className="tp-row">
              <div className="col-span-12 lg:col-span-5 sm:col-span-6">
                <div className="pp-header-top-wrap mb-[10px]">
                  <h2 className="pp-header-top-content tp-ff-sequel-semi-bold tp-char-animation">
                    <a href="#" className="pp-logo-lockup">
                      <span className="pp-logo-ch">CH</span>
                      <span className="pp-logo-name">Carlos Henrique</span>
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="pp-header-main mt-[15px] mb-[20px]">
            <div className="tp-row align-items-center">
              <div className="col-span-12 2xl:col-span-4 xl:col-span-5 lg:col-span-6 md:col-span-8 2xl:col-start-9 xl:col-start-8">
                <div className="pp-header-social mb-[20px]">
                  {SOCIALS.map((s) => (
                    <DoubleArrowLink key={s.label} label={s.label} href={s.href} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

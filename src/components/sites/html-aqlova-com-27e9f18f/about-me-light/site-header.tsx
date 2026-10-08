import { ArrowNEIcon } from "@/components/sites/html-aqlova-com-27e9f18f/shared/icons";

const SOCIALS = ["Facebook", "LinkedIn", "Github"];

function DoubleArrowLink({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <a className="tp-btn pp-btn-nobg tp-ff-inter text-uppercase" href={href}>
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
                    <DoubleArrowLink key={s} label={s} />
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

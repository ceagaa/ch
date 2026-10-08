import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  SITE_ASSETS,
  WhatsappIcon,
} from "@/components/icons";
import { FadeIn } from "@/components/reveal";

const SOCIALS = [
  { label: "WhatsApp", href: "https://wa.me/5511952389922", icon: <WhatsappIcon /> },
  { label: "Instagram", href: "https://www.instagram.com/ceagaa", icon: <InstagramIcon /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/carlos-henrique-conceicao", icon: <LinkedinIcon /> },
  { label: "Github", href: "https://github.com/ceagaa", icon: <GithubIcon /> },
];

export function SiteFooter() {
  return (
    <footer>
      <div className="tp-footer-area pt-100 p-relative z-index-1">
        <img className="mg-footer-noice" src={SITE_ASSETS.noise} alt="" />
        <div className="tp-container container-1886">
          <div className="mg-footer-main-style pt-115">
            <div className="tp-row">
              <div className="col-span-12">
                <FadeIn delay={0.6} as="div">
                  <div className="mg-footer-widget mg-footer-info mb-[30px]">
                    <div className="tp-offcanvas-social">
                      <ul>
                        {SOCIALS.map((s) => (
                          <li key={s.label}>
                            <a
                              href={s.href}
                              aria-label={s.label}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {s.icon}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
        <div className="mg-footer-bigtext-wrap text-center">
          <h2 className="mg-footer-bigtext mg-footer-bigtext-long tp-ff-sequel-bold-head text-uppercase">
            CARLOS HENRIQUE
          </h2>
        </div>
      </div>
    </footer>
  );
}

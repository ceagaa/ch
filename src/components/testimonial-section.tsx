import { SITE_ASSETS } from "@/components/icons";

export function TestimonialSection() {
  return (
    <div className="tp-testimonial-area pt-160 pb-130">
      <div className="tp-container">
        <div className="tp-row justify-content-center">
          <div className="col-span-12 xl:col-span-10 xl:col-start-2">
            <div className="text-center">
            <div className="mp-hero-awards p-relative d-inline-block">
              <img className="mp-hero-w-logo" src={SITE_ASSETS.testimonialQuote} alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

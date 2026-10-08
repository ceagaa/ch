import type { ReactNode } from "react";
import { ArrowNEIcon, CornerArrowIcon } from "./icons";

interface TpButtonProps {
  text: string;
  href?: string;
  className?: string;
  uppercase?: boolean;
  download?: string;
  icon?: ReactNode;
}

export function TpButton({
  text,
  href = "#",
  className = "",
  uppercase = false,
  download,
  icon,
}: TpButtonProps) {
  const cls = `tp-btn tp-ff-inter${uppercase ? " text-uppercase" : ""} ${className}`.trim();
  return (
    <a className={cls} href={href} {...(download ? { download } : {})}>
      <span>
        <span className="text-1">{text}</span>
        <span className="text-2">{text}</span>
      </span>
      <i>
        <ArrowNEIcon width={11} height={11} />
        <ArrowNEIcon width={11} height={11} />
      </i>
      {icon}
    </a>
  );
}

interface SectionSubtitleProps {
  children: ReactNode;
  withArrow?: boolean;
  uppercase?: boolean;
  className?: string;
}

export function SectionSubtitle({
  children,
  withArrow = false,
  uppercase = false,
  className = "",
}: SectionSubtitleProps) {
  return (
    <span
      className={`tp-about-subtitle${uppercase ? " text-uppercase" : ""} ${className}`.trim()}
    >
        {withArrow && (
          <>
            <CornerArrowIcon width={23} height={20} />{" "}
          </>
        )}
      {children}
    </span>
  );
}

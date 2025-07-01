import React from "react";
import styles from "./index.module.scss";
import Inst from "shared/icons/inst.svg?react";
import Fb from "shared/icons/fb.svg?react";
import Twitter from "shared/icons/twitter.svg?react";
import GitHub from "shared/icons/gitHub.svg?react";

type SocialNetwork = "instagram" | "facebook" | "twitter" | "github";

interface ISocialLink {
  href?: string;
  socialNetwork: SocialNetwork;
  background?: "transparent" | "color";
}

const socialMap: Record<
  SocialNetwork,
  {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    href: string;
  }
> = {
  instagram: {
    Icon: Inst,
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
  facebook: {
    Icon: Fb,
    label: "Facebook",
    href: "https://www.facebook.com/",
  },
  twitter: {
    Icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/",
  },
  github: {
    Icon: GitHub,
    label: "GitHub",
    href: "https://github.com/",
  },
};

const SocialLink: React.FC<ISocialLink> = React.memo(
  ({ href, socialNetwork, background = "transparent" }) => {
    const { Icon, label, href: defaultHref } = socialMap[socialNetwork];
    const linkHref = href || defaultHref;

    return (
      <a
        href={linkHref}
        className={`${styles.item} ${styles[`item_${background}`]}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Icon className={styles.item__icon} aria-hidden="true" />
      </a>
    );
  }
);

export default SocialLink;

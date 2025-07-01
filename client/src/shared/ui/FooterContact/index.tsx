import styles from "./index.module.scss";
import LocationIcon from "shared/icons/location.svg?react";
import MailIcon from "shared/icons/message.svg?react";
import PhoneIcon from "shared/icons/calling.svg?react";

const contacts = [
  {
    icon: <LocationIcon className={styles.contact__icon} />,
    text: "Tanjung Sari Street no.48, Pontianak City",
  },
  {
    icon: <MailIcon className={styles.contact__icon} />,
    href: "mailto: Support@VRNas.com",
    text: "Support@VRNas.com",
  },
  {
    icon: <PhoneIcon className={styles.contact__icon} />,
    href: "tel: +1234567890",
    text: "+123 456 7890",
  },
];

const FooterContact = () => (
  <div className={styles.contact}>
    <span className={styles.contact__title}>Need Help?</span>
    <ul className={styles.contact__list}>
      {contacts.map(({ icon, href, text }, index) => (
        <li key={text + index} className={styles.contact__item}>
          {icon}
          {href ? (
            <a
              href={href}
              className={`${styles["contact__item-value"]} ${styles["contact__item-value_link"]}`}
            >
              {text}
            </a>
          ) : (
            <span className={styles["contact__item-value"]}>{text}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default FooterContact;

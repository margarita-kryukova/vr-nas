import styles from './index.module.scss';

const quicklinks = [
  { text: 'Home', href: '/' },
  { text: 'Pricing Plan', href: '/page/pricing-plan' },
  { text: 'Service', href: '/service' },
  { text: 'Blog', href: '/blog' },
  { text: 'Our Team', href: '/blog/our-team' },
];

const support = [
  { text: 'About us', href: '/about' },
  { text: 'Contact us', href: '/contact-us' },
  { text: 'FAQ', href: '/page/faq' },
  { text: 'Tems & Conditions', href: '/page/teams' },
  { text: 'Privacy Policy', href: '/page/privacy-policy' },
];

const FooterNav = () => (
  <div className={styles.nav}>
    <div className={styles.nav__column}>
      <span className={styles.nav__title}>Quicklinks</span>
      <ul className={styles.nav__list}>
        {quicklinks.map((item) => (
          <li key={item.text} className={styles.nav__item}>
            <a href={item.href} className={styles['nav__item-value']}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.nav__column}>
      <span className={styles.nav__title}>Support</span>
      <ul className={styles.nav__list}>
        {support.map((item) => (
          <li key={item.text} className={styles.nav__item}>
            <a href={item.href} className={styles['nav__item-value']}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default FooterNav;

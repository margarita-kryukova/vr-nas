import { Link } from "react-router-dom";
import Arrow from "shared/icons/arrow.svg?react";
import styles from "./index.module.scss";

interface IBreadcrumb {
  value: string;
  href?: string;
}

interface IBreadcrumbs {
  list: IBreadcrumb[];
}

const Breadcrumbs: React.FC<IBreadcrumbs> = ({ list }) => {
  return (
    <ul className={styles.breadcrumbs}>
      {list.map((item) => (
        <li className={styles.breadcrumb} key={item.value}>
          {item.href ? (
            <Link
              to={item.href}
              className={`${styles.breadcrumb__value} ${styles.breadcrumb__value_link}`}
            >
              {item.value}
            </Link>
          ) : (
            <span className={styles.breadcrumb__value}>{item.value}</span>
          )}
          <Arrow className={styles.breadcrumb__arrow} />
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;

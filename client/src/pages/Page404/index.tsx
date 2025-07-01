import Label from "shared/ui/Label";
import styles from "./index.module.scss";
import Button from "shared/ui/Button";

const Page404 = () => {
  return (
    <section className={styles["error-page"]}>
      <div className={styles["error-page__background"]}>
        <div className={styles["error-page__container"]}>
          <div className={styles["error-page__content"]}>
            <div className={styles["error-page__header"]}>
              <Label text="404 Error" />
              <h1 className={styles["error-page__title"]}>Page Not Found</h1>
            </div>
            <div className={styles["error-page__desc"]}>
              <p className={styles["error-page__text"]}>
                Oops! It&nbsp;looks like the page you were looking for
                is&nbsp;not here. Here are some possible reasons why:
              </p>
              <ul className={styles["error-page__group-text"]}>
                <li className={styles["error-page__text"]}>
                  The page may have been moved or&nbsp;deleted.
                </li>
                <li className={styles["error-page__text"]}>
                  You may have mistyped the URL.
                </li>
                <li className={styles["error-page__text"]}>
                  There may be&nbsp;a&nbsp;temporary problem with our server.
                </li>
              </ul>
              <p className={styles["error-page__text"]}>
                You can try the following options to&nbsp;find what you&rsquo;re
                looking for:
              </p>
              <ul className={styles["error-page__group-text"]}>
                <li className={styles["error-page__text"]}>
                  Check the URL for typos or&nbsp;errors and try again.
                </li>
                <li className={styles["error-page__text"]}>
                  Go&nbsp;back to&nbsp;our homepage and browse from there.
                </li>
              </ul>
              <p className={styles["error-page__text"]}>
                If&nbsp;you believe there&rsquo;s an&nbsp;issue with our
                website, please contact us&nbsp;using the information provided
                on&nbsp;our contact page.
              </p>
            </div>
            <Button
              text="Back home"
              typeButton="primary"
              styleText="bold"
              href="/"
              className={styles["error-page__btn"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page404;

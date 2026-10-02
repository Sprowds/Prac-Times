import React, { useState } from "react";
import PageTitle from "../../ui/PageTitle/PageTitle";
import styles from "./NewsletterForm.module.css";
import WarningList from "../../ui/WarningList/WarningList";

const NewsletterForm = () => {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  const [email, setEmail] = useState("");

  const [incorrect, setIncorrect] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: React.SubmitEvent) => {
    event.preventDefault();

    if (EMAIL_REGEXP.test(email)) {
      setIsSent(true);
      setIncorrect(false);
      // Function for sending email to DB
      setEmail("");
    } else setIncorrect(true);
  };

  return (
    <section className={styles.newsletter}>
      <PageTitle titleText="Хочешь получать рассылку?" />

      <div className={styles.form__wrapper}>
        {incorrect ? (
          <WarningList
            warningArray={[
              "Email is incorrect",
              "Email is incorrect",
              "Email is incorrect",
              "Email is incorrect",
            ]}
          />
        ) : (
          ""
        )}

        <form className={styles.newsletter__form} onSubmit={handleSubmit}>
          <input
            type="email"
            className={styles.newsletter__input}
            value={email}
            placeholder={isSent ? "Почта отправлена" : "Введите e-mail"}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className={styles.newsletter__btn} type="submit">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterForm;

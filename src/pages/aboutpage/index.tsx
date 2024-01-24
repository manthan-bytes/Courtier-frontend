import React, { useEffect } from 'react';
import '../../styles/AboutPage.scss';
import { useTranslation } from 'react-i18next';
import Footer from '../../common/footer';

const AboutPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const element: any = document.getElementById("header");
    if (element) {
      element.classList.add("header-bk");
    }
  })
  return (
    <><div className="about-page">

      <h1 className='h1'>{t("about.about_1")}</h1>

      <section>
        <strong>{t("about.about_2")} </strong>
        <span> {t("about.about_3")}</span>
        <p style={{ marginTop: "20px" }}>{t("about.about_4")}</p>
      </section>

      <section className="mission-section">
        <h2>{t("about.about_5")}</h2>
        <p>{t("about.about_6")}</p>
      </section>

      <section className="services-section">
        <h2>{t("about.about_7")}</h2>
        <ul>
          <li>
            <strong>{t("about.about_8")}</strong> {t("about.about_9")}
          </li>
        </ul>
        <p style={{ marginTop: "20px" }}>{t("about.about_10")}</p>
      </section>

      <section className="key-benefits-section">
        <h2>{t("about.about_11")}</h2>
        <ul>
          <li>
            <strong>{t("about.about_12")}</strong> {t("about.about_13")}
          </li>
          <li>
            <strong>{t("about.about_14")}</strong> {t("about.about_15")}
          </li>
          <li>
            <strong>{t("about.about_16")}</strong> {t("about.about_17")}
          </li>
          <li>
            <strong>{t("about.about_18")}</strong> {t("about.about_19")}
          </li>
          <li>
            <strong>{t("about.about_20")}</strong> {t("about.about_21")}
          </li>
        </ul>
      </section>

      <section className="online-brokerage-section">
        <p>{t("about.about_22")}</p>
      </section>

      <section className="client-support-section">
        <ul>
          <li>
            <strong>{t("about.about_23")}</strong> {t("about.about_24")}
          </li>
          <li>
            <strong>{t("about.about_25")}</strong> {t("about.about_26")}
          </li>
          <li>
            <strong>{t("about.about_27")}</strong> {t("about.about_28")}
          </li>
          <li>
            <strong>{t("about.about_29")}</strong> {t("about.about_30")}
          </li>
        </ul>
      </section>

      <section className="why-choose-us-section">
        <h2>{t("about.about_31")}</h2>
        <p>{t("about.about_32")}</p>
        <p>{t("about.about_33")}</p>
      </section>

    </div><Footer></Footer></>
  );
};

export default AboutPage;

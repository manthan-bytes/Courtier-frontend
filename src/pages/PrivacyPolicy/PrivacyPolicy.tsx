// PrivacyPolicy.js

import React from 'react';
import './PrivacyPolicy.scss';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <div className="privacy-policy">
    <header>
      <h1>{t('Privacy_policy.Privacy_policy_1')}</h1>
      <p>{t('Privacy_policy.Privacy Policy_2')}</p>
    </header>

    <section>
      <h2>{t('Privacy_policy.Privacy Policy_3')}</h2>
      <p>{t('Privacy_policy.Privacy Policy_4')}</p>
    </section>

    <section>
      <h2>{t('Privacy_policy.Privacy Policy_6')}</h2>
      <p>{t('Privacy_policy.Privacy Policy_7')}</p>
      <ul>
        <li>{t('Privacy_policy.Privacy Policy_8')}</li>
        <li>{t('Privacy_policy.Privacy Policy_9')}</li>
        <li>{t('Privacy_policy.Privacy Policy_10')}</li>
        <li>{t('Privacy_policy.Privacy Policy_11')}</li>
      </ul>
      <p>{t('Privacy_policy.Privacy Policy_12')}</p>
    </section>

    <section>
      <h2>{t('Privacy_policy.Privacy Policy_13')}</h2>
      <p>{t('Privacy_policy.Privacy Policy_14')}</p>
    </section>

    <section>
      <h2>{t('Privacy_policy.Privacy Policy_15')}</h2>
      <p>{t('Privacy_policy.Privacy Policy_16')}</p>
    </section>

    <section>
      <h2>{t('Privacy_policy.Privacy Policy_17')}</h2>
      <p>
        {t('Privacy_policy.Privacy Policy_18')}
        <a href={`mailto:${t('Privacy_policy.Privacy Policy_19')}`}>
          {t('Privacy_policy.Privacy Policy_19')}
        </a>
      </p>
    </section>

    <section>
      <h2>{t('Privacy_policy.Privacy Policy_20')}</h2>
      <p>{t('Privacy_policy.Privacy Policy_21')}</p>
    </section>

    <section>
      <h2>{t('Privacy_policy.Privacy Policy_22')}</h2>
      <p>{t('Privacy_policy.Privacy Policy_23')}</p>
    </section>

    <section>
      <h2>{t('Privacy_policy.Privacy Policy_24')}</h2>
      <p>{t('Privacy_policy.Privacy Policy_25')}</p>
    </section>

    <section>
      <h2>{t('Privacy_policy.Privacy Policy_26')}</h2>
      <p>{t('Privacy_policy.Privacy Policy_27')}</p>
    </section>

    <section>
      <h2>{t('Privacy_policy.Privacy Policy_28')}</h2>
      <p>{t('Privacy_policy.Privacy Policy_29')}</p>
    </section>

    <section>
      <h2>{t('Privacy_policy.Privacy Policy_30')}</h2>
      <p>{t('Privacy_policy.Privacy Policy_31')}</p>
    </section>

    <section>
      <h2>{t('Privacy_policy.Privacy Policy_32')}</h2>
      <p>
        {t('Privacy_policy.Privacy Policy_33')}
        <a href={`mailto:${t('Privacy_policy.Privacy Policy_34')}`}>
          {t('Privacy_policy.Privacy Policy_34')}
        </a>
      </p>
    </section>

    <section>
      <h2>{t('Privacy_policy.Privacy Policy_35')}</h2>
      <p>{t('Privacy_policy.Privacy Policy_36')}</p>
    </section>

    <section>
      <h2>{t('Privacy_policy.Privacy Policy_37')}</h2>
      <p>{t('Privacy_policy.Privacy Policy_38')}</p>
    </section>
  </div>
  );
};

export default PrivacyPolicy;

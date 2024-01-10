// PrivacyPolicy.js

import React from 'react';
import './PrivacyPolicy.scss';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <div className="privacy-policy">
    <header>
      <h1>{t('privacy_policy.privacy_policy_1')}</h1>
      <p>{t('privacy_policy.privacy_policy_2')}</p>
    </header>

    <section>
      <h2>{t('privacy_policy.privacy_policy_3')}</h2>
      <p>{t('privacy_policy.privacy_policy_4')}</p>
    </section>

    <section>
      <h2>{t('privacy_policy.privacy_policy_6')}</h2>
      <p>{t('privacy_policy.privacy_policy_7')}</p>
      <ul>
        <li>{t('privacy_policy.privacy_policy_8')}</li>
        <li>{t('privacy_policy.privacy_policy_9')}</li>
        <li>{t('privacy_policy.privacy_policy_10')}</li>
        <li>{t('privacy_policy.privacy_policy_11')}</li>
      </ul>
      <p>{t('privacy_policy.privacy_policy_12')}</p>
    </section>

    <section>
      <h2>{t('privacy_policy.privacy_policy_13')}</h2>
      <p>{t('privacy_policy.privacy_policy_14')}</p>
    </section>

    <section>
      <h2>{t('privacy_policy.privacy_policy_15')}</h2>
      <p>{t('privacy_policy.privacy_policy_16')}</p>
    </section>

    <section>
      <h2>{t('privacy_policy.privacy_policy_17')}</h2>
      <p>
        {t('privacy_policy.privacy_policy_18')}
        <a href={`mailto:${t('privacy_policy.privacy_policy_19')}`}>
          {t('privacy_policy.privacy_policy_19')}
        </a>
      </p>
    </section>

    <section>
      <h2>{t('privacy_policy.privacy_policy_20')}</h2>
      <p>{t('privacy_policy.privacy_policy_21')}</p>
    </section>

    <section>
      <h2>{t('privacy_policy.privacy_policy_22')}</h2>
      <p>{t('privacy_policy.privacy_policy_23')}</p>
    </section>

    <section>
      <h2>{t('privacy_policy.privacy_policy_24')}</h2>
      <p>{t('privacy_policy.privacy_policy_25')}</p>
    </section>

    <section>
      <h2>{t('privacy_policy.privacy_policy_26')}</h2>
      <p>{t('privacy_policy.privacy_policy_27')}</p>
    </section>

    <section>
      <h2>{t('privacy_policy.privacy_policy_28')}</h2>
      <p>{t('privacy_policy.privacy_policy_29')}</p>
    </section>

    <section>
      <h2>{t('privacy_policy.privacy_policy_30')}</h2>
      <p>{t('privacy_policy.privacy_policy_31')}</p>
    </section>

    <section>
      <h2>{t('privacy_policy.privacy_policy_32')}</h2>
      <p>
        {t('privacy_policy.privacy_policy_33')}
        <a href={`mailto:${t('privacy_policy.privacy_policy_34')}`}>
          {t('privacy_policy.privacy_policy_34')}
        </a>
      </p>
    </section>

    <section>
      <h2>{t('privacy_policy.privacy_policy_35')}</h2>
      <p>{t('privacy_policy.privacy_policy_36')}</p>
    </section>

    <section>
      <h2>{t('privacy_policy.privacy_policy_37')}</h2>
      <p>{t('privacy_policy.privacy_policy_38')}</p>
    </section>
  </div>
  );
};

export default PrivacyPolicy;

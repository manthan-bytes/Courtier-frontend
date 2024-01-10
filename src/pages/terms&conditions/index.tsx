// TermsAndConditions.js

import React from 'react';
import '../../styles/TermsAndConditions.scss';
import { useTranslation } from 'react-i18next';
const TeamsConditions = () => {
  const { t } = useTranslation();


  return (
    <div className="terms-container">
      <h1>{t("terms.title")}</h1>

      <div className="section">
        <h2>{t("terms.general.title")}</h2>
        <p>{t("terms.general.content")}</p>
      </div>

      <div className="section">
      <h2>{t("terms.websiteModifications.title")}</h2>
        <p>{t("terms.websiteModifications.content")}</p>
      </div>

      <div className="section">
      <h2>{t("terms.userAgeRequirement.title")}</h2>
        <p>{t("terms.userAgeRequirement.content")}</p>
      </div>

      <div className="section">
      <h2>{t("terms.changesToTerms.title")}</h2>
        <p>{t("terms.changesToTerms.content")}</p>
      </div>

      <div className="section">
      <h2>{t("terms.userConduct.title")}</h2>
        <p>{t("terms.userConduct.content")}</p>
      </div>

      <div className="section">
      <h2>{t("terms.disclaimerOfWarranties.title")}</h2>
        <p>{t("terms.disclaimerOfWarranties.content")}</p>
      </div>

      <div className="section">
      <h2>{t("terms.limitationOfLiability.title")}</h2>
        <p>{t("terms.limitationOfLiability.content")}</p>
      </div>

      <div className="section">
      <h2>{t("terms.resolutionOfDisputes.title")}</h2>
        <p>{t("terms.resolutionOfDisputes.content")}</p>
      </div>

      <div className="section">
      <h2>{t("terms.salesConditions.title")}</h2>
        <h3>{t("terms.salesConditions.Services")}</h3>
        <p>{t("terms.salesConditions.services")}</p>

        <h3>{t("terms.salesConditions.Information Disclosure")}</h3>
        <p>{t("terms.salesConditions.informationDisclosure")}</p>

        <h3>{t("terms.salesConditions.Personal Use")}</h3>
        <p>{t("terms.salesConditions.personalUse")}</p>

        <h3>{t("terms.salesConditions.Access Suspension")}</h3>
        <p>{t("terms.salesConditions.accessSuspension")}</p>

        <h3>{t("terms.salesConditions.False Information")}</h3>
        <p>{t("terms.salesConditions.falseInformation")}</p>


        <h3>{t("terms.salesConditions.Professional's Selection Criteria")}</h3>
        <p>{t("terms.salesConditions.professionalsSelectionCriteria")}</p>
      </div>
    </div>

  //   <div className="terms-container">
  //   <h1>Terms and Conditions of Use - CourtierXpert.com</h1>
  //   {generateContent(jsonData.terms)}
  // </div>
  );
};

export default TeamsConditions;

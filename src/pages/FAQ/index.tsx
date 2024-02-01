import React, { useEffect } from "react";
import "../../styles/FAQPage.scss";
import { useTranslation } from "react-i18next";
import "../FAQ/faq.scss";
import Footer from "../../common/footer";
const FAQ = () => {
  const { t, i18n } = useTranslation();
  const faqData: any = {
    en: [
      {
        question: "What is a Multiple Listing Service (MLS)?",
        answer:
          "The MLS is a comprehensive database of property listings used by real estate brokers. It helps in efficiently marketing properties and sharing information with other brokers.",
      },
      {
        question: "How does an online real estate brokerage work?",
        answer:
          "An online real estate brokerage allows you to list, sell, or buy properties through a digital platform. It offers services like property valuation, listing on the MLS, marketing, and negotiation, all done virtually.",
      },
      {
        question:
          "What are the benefits of using a virtual real estate broker?",
        answer:
          "Virtual real estate brokers offer convenience, reduced costs, wider property exposure, and the flexibility of managing transactions remotely.",
      },
      {
        question: "How do I determine the right selling price for my property?",
        answer:
          "The right selling price is determined by evaluating various factors like market trends, property location, condition, and features. An experienced real estate broker or an appraisal service can provide a more accurate estimate.",
      },
      {
        question: "What should I look for when buying a property?",
        answer:
          "Consider the location, neighborhood, property condition, size, amenities, and future resale value. It's also crucial to review your budget and financing options.",
      },
      {
        question: "What is the role of a notary in real estate transactions?",
        answer:
          "A notary plays a crucial role in real estate transactions by verifying the legal documents, ensuring all parties understand the terms, and finalizing the transfer of property ownership.",
      },
      {
        question: "How can I prepare my home for sale?",
        answer:
          "To prepare your home for sale, consider decluttering, making necessary repairs, improving curb appeal, and possibly staging the home to attract potential buyers.",
      },
      {
        question: "What are closing costs, and who pays for them?",
        answer:
          "Closing costs are the expenses and fees associated with finalizing a real estate transaction. They can include title searches, taxes, notary fees, and more. Typically, both buyers and sellers have specific costs they are responsible for.",
      },
      {
        question: "Can I buy a property without a real estate agent?",
        answer:
          "Yes, it's possible to buy a property without a real estate agent, but having one can provide valuable expertise and guidance through the buying process.",
      },
      {
        question: "What is a buyer’s broker, and how do they get paid?",
        answer:
          "A buyer's broker represents the interests of the property buyer. They are typically paid through a commission split with the seller's broker or through fees agreed upon with the buyer.",
      },
      {
        question: "How does the home evaluation process work on your website?",
        answer:
          "Our online home evaluation process involves submitting details and photos of your property through our website. Our team then assesses this information to provide a comprehensive valuation, delivered to your email within 24 hours.",
      },
      {
        question:
          "Can I upload pictures of my property for a more accurate evaluation?",
        answer:
          "Yes, our system allows you to upload pictures of your property, enabling us to provide a more precise and detailed valuation based on its unique features and condition.",
      },
      {
        question:
          "Is it possible to list my property on the MLS through your website?",
        answer:
          "Absolutely! Once we agree on the sale price, we'll list your property on the MLS, ensuring it gets maximum exposure without the need for any physical effort on your part.",
      },
      {
        question:
          "What kind of support can I expect from your team during the selling process?",
        answer:
          "We provide 7/7 guidance, meaning a team member is always available to answer your questions and offer Xpert advice throughout the entire selling process.",
      },
      {
        question:
          "How do I control the sale of my property using your platform?",
        answer:
          "Our platform is designed to give you full control over the sale, from setting the price to approving marketing strategies and negotiating with buyers, all supported by our Xpert guidance.",
      },
      {
        question:
          "If I choose the traditional brokerage option, how do you select the top brokers for me?",
        answer:
          "We analyze your specific needs and property type, then use our expertise and local market knowledge to recommend the top three brokers in your area who have the most relevant experience.",
      },
      {
        question:
          "Is the buyer's broker service really free? How does that work?",
        answer:
          "Yes, our buyer’s broker service is completely free. The buyer's broker is typically compensated through a commission split with the seller’s broker, meaning no cost is directly passed on to you.",
      },
      {
        question:
          "How effective is the AI chatbox in answering real estate queries?",
        answer:
          "Our AI chatbox is professionally trained to answer a wide range of Quebec real estate questions with accuracy and speed. For more complex queries, our expert team is readily available to provide additional support.",
      },
      {
        question: "What happens if my query is too complex for the AI chatbox?",
        answer:
          "If the AI chatbox cannot fully answer your question, our team is available 7 days a week to provide personalized assistance and ensure all your queries are satisfactorily addressed.",
      },
      {
        question:
          "How does your platform save me time and money in the real estate process?",
        answer:
          "By providing online evaluations, virtual listing services, and AI-assisted customer support, our platform eliminates the need for physical meetings and streamlines the process, saving you both time and expenses associated with traditional real estate transactions.",
      },
      {
        question:
          "What steps do I need to follow to list my property using your online service?",
        answer:
          "Listing your property is a simple process. First, complete our online valuation request with details and photos of your property. Then, after receiving your valuation, you can choose to list your property on our platform. We'll guide you through each step, ensuring a smooth experience.",
      },
      {
        question:
          "How do you ensure the accuracy of online property evaluations?",
        answer:
          "Our evaluations are conducted by experienced professionals who use the latest market data and the specific details and photos you provide of your property to ensure a precise and reliable valuation.",
      },
      {
        question:
          "Can I negotiate the sale price with potential buyers through your platform?",
        answer:
          "Yes, our platform facilitates communication and negotiation with potential buyers, allowing you to discuss and agree on the sale price directly, with our team available for guidance and support.",
      },
      {
        question:
          "What kind of advertising do you provide for listed properties?",
        answer:
          "We offer a range of advertising services including listing your property on the MLS, digital marketing across various platforms, and targeted outreach to potential buyers, ensuring your property receives optimal exposure.",
      },
      {
        question:
          "How does your team support the selling process from listing to closing?",
        answer:
          "Our team supports you throughout the entire process, from helping set the right listing price, marketing your property, arranging and managing viewings, negotiating with buyers, to assisting with the final paperwork and closing procedures.",
      },
      {
        question:
          "Are there any hidden fees or charges in using your online brokerage service?",
        answer:
          "Transparency is key to our service. There are no hidden fees or charges. Any costs will be clearly outlined and discussed with you before any service is provided.",
      },
      {
        question:
          "What makes your AI chatbox different from other real estate assistance tools?",
        answer:
          "Our AI chatbox is specifically trained with a focus on Quebec real estate, making it highly knowledgeable and efficient in answering region-specific queries, backed up by our team for more complex questions.",
      },
      {
        question:
          "How do I access the free buyers broker service on your website?",
        answer:
          "To access this service, simply fill out a request form on our website. Our team will then connect you with a professional buyer’s broker who specializes in your area of interest at no cost to you.",
      },
      {
        question:
          "In what ways does your platform make the real estate process more client-controlled?",
        answer:
          "Our platform empowers you with tools and information to make informed decisions. From valuations to listings and negotiations, you control every aspect of the process, supported by our expertise only when you need it.",
      },
      {
        question:
          "Can I use your service for different types of properties, like commercial or multi-unit residential buildings?",
        answer:
          "Yes, our platform and services cater to a wide range of property types, including residential homes, condos, multi-unit buildings, and commercial properties.",
      },
    ],
    fe: [
      {
        question: "Qu'est-ce qu'un service de liste multiple (MLS) ?",
        answer:
          "Le MLS est une base de données complète des annonces immobilières utilisée par les courtiers immobiliers. Il aide à commercialiser efficacement les propriétés et à partager des informations avec d'autres courtiers.",
      },
      {
        question: "Comment fonctionne une agence immobilière en ligne ?",
        answer:
          "Une agence immobilière en ligne vous permet de lister, vendre ou acheter des propriétés via une plateforme numérique. Elle propose des services tels que l'évaluation immobilière, la mise en vente sur le MLS, le marketing et la négociation, le tout fait virtuellement.",
      },
      {
        question:
          "Quels sont les avantages d'utiliser un courtier immobilier virtuel ?",
        answer:
          "Les courtiers immobiliers virtuels offrent la commodité, des coûts réduits, une exposition plus large des propriétés et la flexibilité de gérer les transactions à distance.",
      },
      {
        question: "Comment déterminer le bon prix de vente pour ma propriété ?",
        answer:
          "Le bon prix de vente est déterminé en évaluant divers facteurs tels que les tendances du marché, l'emplacement de la propriété, son état et ses caractéristiques. Un courtier immobilier expérimenté ou un service d'évaluation peut fournir une estimation plus précise.",
      },
      {
        question: "Que dois-je rechercher lors de l'achat d'une propriété ?",
        answer:
          "Prenez en compte l'emplacement, le quartier, l'état de la propriété, sa taille, ses équipements et sa valeur de revente future. Il est également crucial de revoir votre budget et vos options de financement.",
      },
      {
        question:
          "Quel est le rôle d'un notaire dans les transactions immobilières ?",
        answer:
          "Un notaire joue un rôle crucial dans les transactions immobilières en vérifiant les documents juridiques, en s'assurant que toutes les parties comprennent les termes et en finalisant le transfert de propriété.",
      },
      {
        question: "Comment puis-je préparer ma maison pour la vente ?",
        answer:
          "Pour préparer votre maison à la vente, envisagez de désencombrer, de faire les réparations nécessaires, d'améliorer l'attrait extérieur et éventuellement de mettre en scène la maison pour attirer les acheteurs potentiels.",
      },
      {
        question: "Quels sont les frais de clôture et qui les paie ?",
        answer:
          "Les frais de clôture sont les dépenses et les frais associés à la finalisation d'une transaction immobilière. Ils peuvent inclure des recherches de titres, des taxes, des frais de notaire, et plus encore. En général, les acheteurs et les vendeurs ont des frais spécifiques à leur charge.",
      },
      {
        question: "Puis-je acheter une propriété sans agent immobilier ?",
        answer:
          "Oui, il est possible d'acheter une propriété sans agent immobilier, mais en avoir un peut fournir une expertise précieuse et un accompagnement tout au long du processus d'achat.",
      },
      {
        question:
          "Qu'est-ce qu'un courtier d'acheteur et comment sont-ils rémunérés ?",
        answer:
          "Un courtier d'acheteur représente les intérêts de l'acheteur de propriété. Ils sont généralement rémunérés par le biais d'un partage de commission avec le courtier du vendeur ou par des frais convenus avec l'acheteur.",
      },
      {
        question:
          "Comment fonctionne le processus d'évaluation de la maison sur votre site web ?",
        answer:
          "Notre processus d'évaluation en ligne de la maison implique de soumettre des détails et des photos de votre propriété via notre site web. Notre équipe évalue ensuite ces informations pour fournir une évaluation complète, livrée dans votre courriel dans les 24 heures.",
      },
      {
        question:
          "Puis-je télécharger des photos de ma propriété pour une évaluation plus précise ?",
        answer:
          "Oui, notre système vous permet de télécharger des photos de votre propriété, ce qui nous permet de fournir une évaluation plus précise et détaillée en fonction de ses caractéristiques uniques et de son état.",
      },
      {
        question:
          "Est-il possible de répertier ma propriété sur le MLS via votre site web ?",
        answer:
          "Absolument ! Une fois que nous sommes d'accord sur le prix de vente, nous répertorierons votre propriété sur le MLS, garantissant ainsi qu'elle bénéficie d'une exposition maximale sans nécessiter d'effort physique de votre part.",
      },
      {
        question:
          "Quel type de support puis-je attendre de votre équipe pendant le processus de vente ?",
        answer:
          "Nous fournissons un soutien 7 jours sur 7, ce qui signifie qu'un membre de notre équipe est toujours disponible pour répondre à vos questions et offrir des conseils Xpert tout au long du processus de vente.",
      },
      {
        question:
          "Comment puis-je contrôler la vente de ma propriété à l'aide de votre plateforme ?",
        answer:
          "Notre plateforme est conçue pour vous donner un contrôle total sur la vente, depuis la fixation du prix jusqu'à l'approbation des stratégies marketing et la négociation avec les acheteurs, le tout soutenu par nos conseils Xpert.",
      },
      {
        question:
          "Si je choisis l'option de courtage traditionnel, comment sélectionnez-vous les meilleurs courtiers pour moi ?",
        answer:
          "Nous analysons vos besoins spécifiques et le type de propriété, puis utilisons notre expertise et notre connaissance du marché local pour recommander les trois meilleurs courtiers de votre région ayant l'expérience la plus pertinente.",
      },
      {
        question:
          "Le service de courtier de l'acheteur est-il vraiment gratuit ? Comment cela fonctionne-t-il ?",
        answer:
          "Oui, notre service de courtier de l'acheteur est entièrement gratuit. Le courtier de l'acheteur est généralement rémunéré par le biais d'un partage de commission avec le courtier du vendeur, ce qui signifie qu'aucun coût ne vous est directement facturé.",
      },
      {
        question:
          "Quelle est l'efficacité du chatbot IA pour répondre aux questions immobilières ?",
        answer:
          "Notre chatbot IA est professionnellement formé pour répondre à une large gamme de questions immobilières québécoises avec précision et rapidité. Pour des questions plus complexes, notre équipe d'experts est disponible pour fournir un soutien supplémentaire.",
      },
      {
        question:
          "Que se passe-t-il si ma requête est trop complexe pour le chatbot IA ?",
        answer:
          "Si le chatbot IA ne peut pas répondre pleinement à votre question, notre équipe est disponible 7 jours sur 7 pour fournir une assistance personnalisée et garantir que toutes vos requêtes sont satisfaites de manière adéquate.",
      },
      {
        question:
          "Comment votre plateforme me fait-elle gagner du temps et de l'argent dans le processus immobilier ?",
        answer:
          "En fournissant des évaluations en ligne, des services de mise en vente virtuelle et un support client assisté par IA, notre plateforme élimine le besoin de réunions physiques et simplifie le processus, vous faisant gagner du temps et des dépenses associées aux transactions immobilières traditionnelles.",
      },
      {
        question:
          "Quelles étapes dois-je suivre pour répertorier ma propriété en utilisant votre service en ligne ?",
        answer:
          "Répertorier votre propriété est un processus simple. Tout d'abord, remplissez notre demande d'évaluation en ligne avec les détails et les photos de votre propriété. Ensuite, après avoir reçu votre évaluation, vous pouvez choisir de répertorier votre propriété sur notre plateforme. Nous vous guiderons à travers chaque étape, garantissant une expérience fluide.",
      },
      {
        question:
          "Comment assurez-vous l'exactitude des évaluations immobilières en ligne ?",
        answer:
          "Nos évaluations sont effectuées par des professionnels expérimentés qui utilisent les dernières données du marché ainsi que les détails et les photos spécifiques que vous fournissez de votre propriété pour garantir une évaluation précise et fiable.",
      },
      {
        question:
          "Puis-je négocier le prix de vente avec les acheteurs potentiels via votre plateforme ?",
        answer:
          "Oui, notre plateforme facilite la communication et la négociation avec les acheteurs potentiels, vous permettant de discuter et de convenir du prix de vente directement, notre équipe étant disponible pour vous guider et vous soutenir.",
      },
      {
        question:
          "Quel type de publicité proposez-vous pour les propriétés répertoriées ?",
        answer:
          "Nous offrons une gamme de services publicitaires, y compris la mise en vente de votre propriété sur le MLS, le marketing numérique sur diverses plateformes et la prospection ciblée des acheteurs potentiels, garantissant à votre propriété une exposition optimale.",
      },
      {
        question:
          "Comment votre équipe soutient-elle le processus de vente de la mise en vente à la clôture ?",
        answer:
          "Notre équipe vous soutient tout au long du processus, en vous aidant à fixer le bon prix de vente, en commercialisant votre propriété, en organisant et en gérant les visites, en négociant avec les acheteurs, et en vous aidant avec les formalités finales et les procédures de clôture.",
      },
      {
        question:
          "Y a-t-il des frais cachés ou des frais d'utilisation de votre service de courtage en ligne ?",
        answer:
          "La transparence est essentielle pour notre service. Il n'y a pas de frais cachés ou de charges. Tous les coûts seront clairement détaillés et discutés avec vous avant que tout service ne soit fourni.",
      },
      {
        question:
          "Qu'est-ce qui rend votre chatbot IA différent des autres outils d'assistance immobilière ?",
        answer:
          "Notre chatbot IA est spécifiquement formé avec un accent sur l'immobilier québécois, ce qui le rend très compétent et efficace pour répondre aux questions spécifiques à la région, soutenu par notre équipe pour des questions plus complexes.",
      },
      {
        question:
          "Comment accéder gratuitement au service de courtier pour acheteurs sur votre site web ?",
        answer:
          "Pour accéder à ce service, il vous suffit de remplir un formulaire de demande sur notre site web. Notre équipe vous mettra ensuite en relation avec un courtier professionnel pour acheteurs spécialisé dans votre domaine d'intérêt, sans aucun frais pour vous.",
      },
      {
        question:
          "De quelles manières votre plateforme rend-elle le processus immobilier plus contrôlé par le client ?",
        answer:
          "Notre plateforme vous donne les outils et les informations pour prendre des décisions éclairées. De l'évaluation aux répertoriages et aux négociations, vous contrôlez chaque aspect du processus, soutenu par notre expertise uniquement lorsque vous en avez besoin.",
      },
      {
        question:
          "Puis-je utiliser votre service pour différents types de propriétés, comme des immeubles commerciaux ou résidentiels multi-unités ?",
        answer:
          "Oui, notre plateforme et nos services s'adressent à une large gamme de types de propriétés, y compris les maisons résidentielles, les condos, les immeubles multi-unités et les propriétés commerciales.",
      },
    ],
  };

  useEffect(() => {
    const element: any = document.getElementById("header");
    if (element) {
      element.classList.add("header-bk");
    }
  });
  const currentLanguage: any = i18n.language.substring(0, 2); // Extract the language code

  return (
    <div className="faq-container">
      <div className="container faq-width">
        <h1 className="h1">FAQ - CourtierXpert.com</h1>
        {faqData[currentLanguage].map((faq: any, index: number) => (
          <div key={index} className="faq-item">
            <div className="faq-number">{index + 1}.</div>
            <div className="faq-content">
              <div className="faq-question">{faq.question}</div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;

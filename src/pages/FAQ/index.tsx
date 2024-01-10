import React from "react";
import "../../styles/FAQPage.scss";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const faqData = [
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
      question: "What are the benefits of using a virtual real estate broker?",
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
      question: "How do I control the sale of my property using your platform?",
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
  ];

  return (
    <div className="faq-container">
      <h1>FAQ - CourtierXpert.com</h1>

      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-number">{index + 1}.</div>
          <div className="faq-content">
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

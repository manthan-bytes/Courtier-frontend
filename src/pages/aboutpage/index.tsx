import React from 'react';
import '../../styles/AboutPage.scss';

const AboutPage = () => {
  return (
    <div className="about-page">
        <header>
            <h1>About us</h1>
        </header>
    <section>
      <strong>CourtierXpert </strong><span>- Revolutionizing Your Real Estate Experience</span>
      <p style={{marginTop: '20px'}}>Welcome to CourtierXpert, where we are dedicated to simplifying and enhancing your real estate journey. Our platform is a unique blend of technology, expertise, and client-focused services, designed to facilitate the way you buy and sell properties.</p>
    </section>

    <section className="mission-section">
      <h2>Our Mission</h2>
      <p>To provide a seamless, efficient, and empowering real estate experience to our clients, whether they are buying, selling, or just exploring their options in the property market.</p>
    </section>

    <section className="services-section">
      <h2>Our Services</h2>
      <ul>
        <li><strong>Virtual Real Estate Brokerage:</strong> Experience hassle-free home evaluations within 24 hours, directly in your inbox, eliminating the need for time-consuming meetings with brokers. Our innovative system allows you to upload pictures of your property, ensuring precise and accurate valuations.</li>
      </ul>
      <p style={{marginTop: '20px'}}>Our virtual brokerage service revolutionizes the real estate market by offering a seamless and efficient way to list and sell properties. With our platform, you can list your property on the MLS (Multiple Listing Service), ensuring it receives maximum exposure to potential buyers. The entire process, from listing to finalizing the sale with a notary, is conducted online and over the phone, offering unparalleled convenience.</p>
    </section>

    <section className="key-benefits-section">
      <h2>Key Benefits</h2>
      <ul>
        <li><strong>100% Control Over the Transaction:</strong> You have complete autonomy in managing the sale of your property, from setting the price to choosing the notary, ensuring that your needs and preferences are always at the forefront.</li>
        <li><strong>No Physical Meetings Required:</strong> Eliminate the need for in-person meetings, making the process more efficient and flexible for your schedule. Everything can be managed digitally and through phone communication.</li>
        <li><strong>Comprehensive Listing and Marketing Services:</strong> Once you set your sale price, we handle everything from MLS listing to advertising, viewings, and negotiations, all without you needing to leave your home.</li>
        <li><strong>Time and Cost Efficiency:</strong> Our virtual approach significantly reduces the time and expenses typically associated with selling a property. This streamlined process translates into faster sales and more savings for you.</li>
        <li><strong>CourtierXpert Guidance:</strong> Even though the process is online, Xpert guidance is available at every step, ensuring a smooth and successful transaction all the way to the notary.</li>
      </ul>
    </section>

    <section className="online-brokerage-section">
      <p>Our online brokerage is designed to simplify your real estate experience, making it more accessible, efficient, and user-friendly, without compromising on professionalism or exposure.</p>
    </section>

    <section className="client-support-section">
      <ul>
        <li><strong>Client Empowerment:</strong> With 7/7 guidance from our dedicated team, you maintain 100% control over the sale of your property, supported by Xpert advice at every step.</li>
        <li><strong>Traditional Brokerage Options:</strong> Unsure which broker to choose? We provide a selection of the top three brokers in your area, tailored to your specific needs, whether it's for a home, condo, plex, or commercial property.</li>
        <li><strong>Free Buyers Broker Service:</strong> Many buyers aren’t aware that a buyer’s broker service is available at no cost. We offer this service to ensure you enjoy professional support with no obligation or expense.</li>
        <li><strong>Advanced AI Chatbox:</strong> Our website features an AI chatbox, trained to answer Quebec real estate questions instantly. For queries beyond its scope, our team is available 7/7 to provide personalized support.</li>
      </ul>
    </section>

    <section className="why-choose-us-section">
      <h2>Why Choose Us?</h2>
      <p>Our online platform is more than just a brokerage service; it's a comprehensive real estate solution. Save time and money while enjoying control over your real estate transactions. With CourtierXpert, you have a reliable, innovative, and efficient partner in your real estate endeavors.</p>
      <p>Join us at CourtierXpert and experience the future of real estate – streamlined, personalized, and entirely in your control.</p>
    </section>
  </div>
  );
};

export default AboutPage;

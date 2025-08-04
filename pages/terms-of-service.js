import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Head>
        <title>Terms of Service - MarketProEdge.com</title>
        <meta name="description" content="Read the terms of service for MarketProEdge.com regarding user responsibilities, intellectual property, and limitations." />
        <meta name="keywords" content="terms of service, terms and conditions, legal, MarketProEdge, website terms" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl mb-12 border border-blue-700">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-blue-400 leading-tight drop-shadow-lg">Terms of Service for MarketProEdge.com</h1>

          <p className="text-lg text-gray-300 mb-6">
            **Last Updated: August 3, 2025**
          </p>

          <p className="text-lg text-gray-300 mb-6">
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the MarketProEdge.com website (the "Service") operated by **MarketProEdge.com** ("us", "we", or "our").
          </p>

          <p className="text-lg text-gray-300 mb-6">
            Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Service.
          </p>

          <p className="text-lg text-gray-300 mb-6">
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service.
          </p>

          <h2 className="text-3xl font-bold text-blue-300 mt-8 mb-4">Accounts</h2>
          <p className="text-lg text-gray-300 mb-6">
            When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.
          </p>

          <h2 className="text-3xl font-bold text-blue-300 mt-8 mb-4">Intellectual Property</h2>
          <p className="text-lg text-gray-300 mb-6">
            The Service and its original content (excluding content provided by users), features and functionality are and will remain the exclusive property of **MarketProEdge.com** and its licensors. The Service is protected by copyright, trademark, and other laws of both the [Your Country] and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of **MarketProEdge.com**.
          </p>

          <h2 className="text-3xl font-bold text-blue-300 mt-8 mb-4">Links To Other Web Sites</h2>
          <p className="text-lg text-gray-300 mb-6">
            Our Service may contain links to third-party web sites or services that are not owned or controlled by **MarketProEdge.com**.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            **MarketProEdge.com** has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            You acknowledge and agree that **MarketProEdge.com** shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such third party web sites or services.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
          </p>

          <h2 className="text-3xl font-bold text-blue-300 mt-8 mb-4">Termination</h2>
          <p className="text-lg text-gray-300 mb-6">
            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            If you wish to terminate your account, you may simply discontinue using the Service.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
          </p>

          <h2 className="text-3xl font-bold text-blue-300 mt-8 mb-4">Indemnification</h2>
          <p className="text-lg text-gray-300 mb-6">
            You agree to defend, indemnify and hold harmless **MarketProEdge.com** and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password; b) a breach of these Terms, or c) Content posted on the Service.
          </p>

          <h2 className="text-3xl font-bold text-blue-300 mt-8 mb-4">Limitation Of Liability</h2>
          <p className="text-lg text-gray-300 mb-6">
            In no event shall **MarketProEdge.com**, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
          </p>

          <h2 className="text-3xl font-bold text-blue-300 mt-8 mb-4">Disclaimer</h2>
          <p className="text-lg text-gray-300 mb-6">
            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            **MarketProEdge.com** its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
          </p>

          <h2 className="text-3xl font-bold text-blue-300 mt-8 mb-4">Exclusions</h2>
          <p className="text-lg text-gray-300 mb-6">
            Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential or incidental damages, so the limitations above may not apply to you.
          </p>

          <h2 className="text-3xl font-bold text-blue-300 mt-8 mb-4">Governing Law</h2>
          <p className="text-lg text-gray-300 mb-6">
            These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.
          </p>

          <h2 className="text-3xl font-bold text-blue-300 mt-8 mb-4">Changes</h2>
          <p className="text-lg text-gray-300 mb-6">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
          </p>

          <h2 className="text-3xl font-bold text-blue-300 mt-8 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-300 mb-6">
            If you have any questions about these Terms, please contact us.
          </p>

          <p className="text-base text-gray-400 mt-8 italic text-center">
            **Disclaimer:** This is a generic terms of service template. It is crucial to **consult with a legal professional** to ensure these terms fully comply with all applicable laws and regulations relevant to your specific business operations.
          </p>

          <div className="ad-placeholder h-24 w-full max-w-2xl mx-auto bg-gray-700 border border-blue-600 rounded-lg flex items-center justify-center text-gray-300 text-sm mt-12 shadow-inner">
            [AdSense Ad Unit - Terms of Service Page]
          </div>
        </section>
      </main>

      <Footer />
      <SubFooter />
    </div>
  );
};

export default TermsOfServicePage;

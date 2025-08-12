// content/generators/domain-name-generator.js

const domainNameContent = {
  title: 'Domain Name Generator',
  description: `
    <h2>Find Your Perfect Website Address with Our AI Domain Name Generator 🌐</h2>
    <p>Your domain name is your online identity. It's the first impression you make, and a memorable, relevant domain can significantly impact your brand's success. Our **AI Domain Name Generator** helps you brainstorm and discover unique, available domain names tailored to your needs.</p>

    <h3>Why a Great Domain Matters</h3>
    <ul>
      <li><strong>Brand Identity:</strong> Reinforces your brand and makes you easily recognizable.</li>
      <li><strong>Memorability:</strong> Easy to remember names ensure customers can find you.</li>
      <li><strong>Credibility:</strong> A professional domain builds trust and authority.</li>
      <li><strong>SEO Benefits:</strong> Relevant keywords in your domain can help with search engine rankings.</li>
    </ul>
    <p>Whether you're starting a blog, a business, or an online portfolio, a strong domain name is crucial. Our generator takes your keywords and preferences to suggest creative and available options.</p>

    <h3>Tips for Choosing the Best Domain Name</h3>
    <ol>
      <li><strong>Keep it Short & Simple:</strong> Easier to type and remember.</li>
      <li><strong>Make it Memorable:</strong> Avoid obscure words or complex spellings.</li>
      <li><strong>Relevant Keywords:</strong> Include words related to your business or niche (if appropriate and natural).</li>
      <li><strong>Avoid Hyphens & Numbers:</strong> They can make your domain hard to communicate.</li>
      <li><strong>Consider Your Target Audience:</strong> Does the name resonate with them?</li>
      <li><strong>Check Availability:</strong> Always ensure the ".com" (or your preferred TLD) is available.</li>
      <li><strong>Future-Proof:</strong> Choose a name that allows your brand to grow beyond its current offerings.</li>
    </ol>
    <p>Use our AI Domain Name Generator to kickstart your search and secure the perfect online address!</p>
  `,
  keywords: 'domain name, website name, AI generator, free domain, creative domain names, website address',
  promptLabel: 'Enter keywords or a brief description of your website/business:',
  placeholder: 'e.g., eco-friendly products, tech blog, fitness coaching, online portfolio',
  apiType: 'domain-name',
  faq: [
    {
      question: "What's a Top-Level Domain (TLD)?",
      answer: "A TLD is the last segment of a domain name, such as '.com', '.org', '.net', or country-code TLDs like '.co.uk'."
    },
    {
      question: "Should I always aim for a .com domain?",
      answer: ".com is generally preferred for its familiarity and trust, but new and relevant TLDs (like .ai, .shop, .io) can be great alternatives if they fit your brand."
    },
    {
      question: "Can I check domain availability with this tool?",
      answer: "This generator provides name ideas. You'll need to use a domain registrar (like GoDaddy, Namecheap) to check real-time availability and purchase a domain."
    },
    {
      question: "How do I choose between different generated names?",
      answer: "Consider your target audience, memorability, ease of spelling/pronunciation, and how well it reflects your brand. Saying it out loud can also help."
    }
  ]
};

export default domainNameContent;

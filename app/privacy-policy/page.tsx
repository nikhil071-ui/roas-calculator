export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 font-sans text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-4 text-gray-600">Last updated: December 2025</p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
          <p>
            Welcome to ROAS Calculator ("we," "our," or "us"). We respect your privacy and are committed to protecting it through our compliance with this policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">2. Information We Collect</h2>
          <p>
            We do not collect personal information like your name, email, or phone number unless you voluntarily provide it to us (e.g., by contacting us).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">3. Cookies and Google AdSense</h2>
          <p>
            We use third-party vendors, including **Google**, which use cookies to serve ads based on a user's prior visits to our website or other websites.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>
              Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
            </li>
            <li>
              Users may opt-out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 underline" target="_blank">Google Ads Settings</a>.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">4. Calculation Data</h2>
          <p>
            The data you enter into our calculator (Ad Spend, Revenue, etc.) is processed locally on your device or temporarily on our servers to provide results. We do not store, sell, or share your financial inputs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">5. Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us via our Contact page.
          </p>
        </section>
      </div>
    </main>
  );
}
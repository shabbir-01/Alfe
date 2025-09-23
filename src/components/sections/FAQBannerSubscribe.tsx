'use client';

import React from 'react';
import FAQ from './FAQ';
import Banner from './Banner';
import Newsletter from './Newsletter';
import CustomerReviews from './CustomerReviews';
import CurrencyDropdown from './CurrencyDropdown';

const FAQBannerSubscribe = () => {
  return (
    <>
      {/* Main Section Container */}
      <section className="w-full bg-white pt-[60px] pb-[60px] mx-auto">
        {/* FAQ Section */}
        <div className="mb-[60px]">
          <FAQ />
        </div>

        {/* Banner Section */}
        <div className="mb-0">
          <Banner />
        </div>

        {/* Newsletter Section */}
        <div>
          <Newsletter />
        </div>
      </section>

      {/* Customer Reviews Section - After Newsletter */}
      <CustomerReviews />

      {/* Currency Dropdown - Fixed Position */}
      <CurrencyDropdown />
    </>
  );
};

export default FAQBannerSubscribe;

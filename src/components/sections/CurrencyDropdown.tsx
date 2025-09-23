'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Currency {
  code: string;
  flag: string;
  name: string;
}

const CurrencyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>({
    code: 'INR',
    flag: '🇮🇳',
    name: 'Indian Rupee'
  });

  const currencies: Currency[] = [
    { code: 'INR', flag: '🇮🇳', name: 'Indian Rupee' },
    { code: 'USD', flag: '🇺🇸', name: 'US Dollar' },
    { code: 'EUR', flag: '🇪🇺', name: 'Euro' },
    { code: 'GBP', flag: '🇬🇧', name: 'British Pound' },
    { code: 'JPY', flag: '🇯🇵', name: 'Japanese Yen' }
  ];

  const handleCurrencySelect = (currency: Currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-[90px] h-[35px] px-2 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 transition-colors duration-200"
        >
          <div className="flex items-center space-x-1">
            <span className="text-sm">{selectedCurrency.flag}</span>
            <span className="font-medium">{selectedCurrency.code}</span>
          </div>
          <ChevronDown 
            className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </button>

        {isOpen && (
          <div className="absolute bottom-full left-0 mb-1 w-[200px] bg-white border border-gray-300 rounded shadow-lg">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => handleCurrencySelect(currency)}
                className={`w-full flex items-center space-x-2 px-3 py-2 text-sm text-left hover:bg-gray-50 transition-colors duration-200 ${
                  selectedCurrency.code === currency.code ? 'bg-gray-100' : ''
                }`}
              >
                <span>{currency.flag}</span>
                <span className="font-medium">{currency.code}</span>
                <span className="text-gray-500 text-xs">{currency.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyDropdown;
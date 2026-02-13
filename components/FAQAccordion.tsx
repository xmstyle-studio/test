
import React, { useState } from 'react';
import { FAQItem } from '../types';

const FAQAccordion: React.FC<{ items: FAQItem[] }> = ({ items }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div 
          key={item.id}
          className="group"
        >
            <div 
                onClick={() => toggle(item.id)}
                className={`bg-white rounded-[24px] p-8 cursor-pointer transition-all duration-300 border hover:border-brand/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${openId === item.id ? 'border-brand/20 shadow-[0_8px_30px_rgb(0,0,0,0.08)]' : 'border-gray-200 shadow-[0_4px_20px_rgb(0,0,0,0.02)]'}`}
            >
                <div className="flex justify-between items-center gap-6">
                    {/* Subtitle2 Style */}
                    <span className={`text-4 font-bold leading-4 tracking-0 transition-colors duration-300 ${openId === item.id ? 'text-brand' : 'text-[#1A1A1E]'}`}>
                        {item.question}
                    </span>
                    <button 
                        className={`w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${openId === item.id ? 'bg-[#1A1A1E] text-white rotate-180' : 'bg-[#F1F3F5] text-[#868E96] group-hover:bg-[#E9ECEF]'}`}
                    >
                        {openId === item.id ? (
                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        )}
                    </button>
                </div>
                <div 
                    className={`grid transition-all duration-300 ease-in-out ${openId === item.id ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                >
                    <div className="overflow-hidden">
                        {/* Body4 Style */}
                        <p className="text-[#4B5563] font-medium leading-5 tracking-1 text-3 pr-8">
                            {item.answer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;


import React from 'react';
import { Step } from '../types';

interface ProcessStepProps {
  step: Step;
  isLast: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, isLast }) => {
  return (
    <div className="flex flex-col items-start p-8 rounded-[32px] bg-[#1A1A1A] border border-white/5 hover:bg-[#222] transition-colors duration-300 h-full group">
      <div className="mb-6 flex items-center justify-between w-full">
        {/* H3 Style */}
        <span className="text-5 font-bold leading-2 text-gray-200 group-hover:text-brand transition-colors duration-300 italic">
          0{step.id}
        </span>
        <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-brand transition-colors"></div>
      </div>
      
      {/* Subtitle3 Style */}
      <h3 className="text-3 font-bold leading-5 tracking-1 mb-3 text-white group-hover:text-brand transition-colors">
        {step.title}
      </h3>
      
      {/* Body_md3 Style */}
      <p className="text-gray-400 leading-13 text-2 font-medium break-keep tracking-1">
        {step.description}
      </p>
      
      {step.tags && (
        <div className="mt-auto pt-6 flex flex-wrap gap-2">
          {step.tags.map((tag, idx) => (
            // Subtitle6 Style
            <span key={idx} className="bg-gray-50 text-gray-500 text-0 leading-8 tracking-1 font-bold px-2.5 py-1 rounded-md group-hover:bg-brand/5 group-hover:text-brand transition-colors">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProcessStep;

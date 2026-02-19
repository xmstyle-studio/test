
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Data for left chart: 48% Current (Purple), 52% Remaining (Grey)
const dataLeft = [
  { name: 'Current', value: 48 },
  { name: 'Remaining', value: 52 },
];

// Data for right chart: 48% Current (Purple), 14% Growth (Green), 38% Remaining (Grey)
// The 14% is an average visual representation for "10-18%".
const dataRight = [
  { name: 'Current', value: 48 },
  { name: 'Growth', value: 14 },
  { name: 'Remaining', value: 38 },
];

const MarketShareChart: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full py-8">
      {/* Left Chart */}
      <div className="flex flex-col items-center">
        <div className="w-[260px] h-[260px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataLeft}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={130}
                startAngle={50}
                endAngle={-310}
                dataKey="value"
                stroke="none"
              >
                <Cell fill="#9167F5" />
                <Cell fill="#C4C5D6" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="text-center mt-8">
          {/* H1 Style */}
          <div className="text-7 font-bold leading-0 text-[#555555] mb-3 tracking-0">48%</div>
          {/* Subtitle2 Style */}
          <div className="text-[#888888] font-bold text-4 leading-4 tracking-0">현재 브랜드 점유율</div>
        </div>
      </div>

      {/* Right Chart */}
      <div className="flex flex-col items-center">
        <div className="w-[260px] h-[260px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataRight}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={130}
                startAngle={50}
                endAngle={-310}
                dataKey="value"
                stroke="none"
              >
                <Cell fill="#9167F5" />
                <Cell fill="#6EE7B7" />
                <Cell fill="#C4C5D6" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* Overlay Text */}
          <div className="absolute top-[62%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
              {/* H3 Style */}
              <span className="text-5 font-bold leading-2 text-black tracking-0 drop-shadow-sm whitespace-nowrap">+10~18%</span>
          </div>
        </div>
        <div className="text-center mt-8">
          {/* H1 Style */}
          <div className="text-7 font-bold leading-0 text-[#1A1A1E] mb-3 tracking-0">10~18%</div>
          {/* Subtitle2 Style */}
          <div className="text-gray-500 font-bold text-4 leading-4 tracking-0">+플러스 오퍼 이용 시 추가 점유율</div>
        </div>
      </div>
    </div>
  );
};

export default MarketShareChart;

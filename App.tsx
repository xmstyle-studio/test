
import React, { useEffect, useState, useMemo } from 'react';
import { STEPS, ADVANTAGES, FAQS } from './constants';
import MarketShareChart from './components/MarketShareChart';
import ProcessStep from './components/ProcessStep';
import FAQAccordion from './components/FAQAccordion';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTA = () => {
    alert('플러스 오퍼 신청 페이지로 이동합니다.');
  };

  // Generate random particles for the hero background
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1, // 1px to 4px
      opacity: Math.random() * 0.3 + 0.1, // 0.1 to 0.4
      duration: Math.random() * 15 + 10, // 10s to 25s
      delay: Math.random() * -20, // Start immediately at random positions
    }));
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#111] selection:bg-[#9167F5] selection:text-white font-pretendard">
      
      {/* Trendy Floating Navbar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className={`transition-all duration-300 ${scrolled ? 'w-auto' : 'w-full max-w-[1280px]'}`}>
            <div className={`
                flex items-center justify-between px-6 py-3.5 
                ${scrolled 
                    ? 'bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl pl-6 pr-6 gap-8' 
                    : 'bg-transparent border-transparent'
                }
                transition-all duration-500
            `}>
                {/* Logo - H3 Style */}
                <div className={`flex items-center cursor-pointer select-none group ${scrolled ? 'text-white' : 'text-white'}`}>
                    <span className="text-5 font-bold leading-2 tracking-0">+플러스 오퍼</span>
                </div>

                {/* CTA Button - Subtitle5 Style */}
                <button 
                    onClick={handleCTA}
                    className={`
                        font-bold text-1 leading-7 rounded-full transition-all duration-300
                        ${scrolled 
                            ? 'bg-white text-black px-5 py-2.5 hover:bg-gray-200' 
                            : 'bg-white text-black px-6 py-2.5 hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                        }
                    `}
                >
                    문의하기
                </button>
            </div>
        </nav>
      </div>

      {/* Hero Section */}
      {/* Reduced visual top margin by adding bottom padding to the flex container, shifting the center up */}
      <header className="relative w-full min-h-[100vh] flex flex-col items-center justify-center bg-black overflow-hidden px-6 pb-32">
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
            <div className="absolute w-[80vw] h-[80vw] md:w-[900px] md:h-[900px] bg-[#3B0764] rounded-full blur-[120px] -translate-x-1/4 opacity-60 mix-blend-screen animate-blob-slow"></div>
            <div className="absolute w-[80vw] h-[80vw] md:w-[900px] md:h-[900px] bg-[#172554] rounded-full blur-[120px] translate-x-1/4 opacity-60 mix-blend-screen animate-blob-slow-reverse"></div>
            
            {/* Moving Particles */}
            <div className="absolute inset-0">
                {particles.map((p) => (
                    <div 
                        key={p.id}
                        className="absolute bg-white rounded-full"
                        style={{
                            left: `${p.left}%`,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            animation: `float-up ${p.duration}s linear infinite`,
                            animationDelay: `${p.delay}s`,
                            '--target-opacity': p.opacity
                        } as React.CSSProperties}
                    ></div>
                ))}
            </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
             <div className="animate-fade-in flex flex-col items-center">
                {/* Badge - Updated to Pill Style */}
                <div className="inline-flex items-center px-3 py-1.5 mb-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9167F5] mr-2"></div>
                    <span className="text-white/60 text-0 leading-none font-bold tracking-widest uppercase">B2B SAMPLE SOLUTION</span>
                </div>

                {/* Main Heading - Updated with Background Block */}
                <h1 className="text-hero-mobile md:text-hero-desktop font-bold text-white tracking-tight leading-none mb-10 drop-shadow-2xl select-none">
                    플러스 오퍼로<br />
                    <span className="relative inline-block mx-2 px-1">
                        <span className="absolute inset-0 bg-gradient-to-r from-[#5B21B6] to-[#4C1D95] opacity-90 rounded transform scale-105"></span>
                        <span className="relative z-10 text-white">추가 고객</span>
                    </span>
                    을<br />
                    확보하세요.
                </h1>

                {/* Sub Heading - Body2 Style */}
                <p className="text-5 text-gray-400 font-medium leading-2 max-w-2xl mb-14 tracking-1">
                    플러스 오퍼는 귀사의 브랜드를 새로운 고객에게 연결합니다.<br className="hidden md:block"/>
                    지금 가장 확실한 성장을 경험하세요.
                </p>

                {/* Hero CTA - Updated to Dark Glass Style */}
                <button
                    onClick={handleCTA}
                    className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 text-white text-3 leading-5 font-medium rounded-full overflow-hidden transition-all duration-300 border border-white/10 backdrop-blur-sm"
                >
                    <span className="relative flex items-center gap-2 tracking-1">
                        지금 시작하기
                    </span>
                </button>
            </div>
        </div>

        {/* Scroll Indicator - Updated Style */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-3 animate-scroll-bounce">
                <span className="text-[10px] leading-none text-white font-medium uppercase tracking-[0.2em]">SCROLL</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </div>
      </header>

      {/* Stats Section */}
      <section id="effect" className="py-32 px-6 lg:px-12 bg-white relative">
        <div className="max-w-[1280px] mx-auto">
             <div className="text-center mb-16">
                {/* H1 Style */}
                <h2 className="text-7 font-bold leading-0 tracking-0 mb-4 text-[#111]">
                    수치로 보는 효과
                </h2>
                {/* Body3 Style */}
                <p className="text-gray-500 font-medium text-4 leading-4 tracking-0">실제 파트너사 운영 데이터를 기반으로 한 성과 지표</p>
             </div>
             
             <div className="bg-[#F8F9FA] rounded-[48px] p-8 md:p-16 border border-gray-100 shadow-sm">
                <MarketShareChart />
            </div>
        </div>
      </section>



      {/* Target Brands */}
      <section className="py-32 px-6 lg:px-12 bg-[#E5E7EB]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
            {/* H1 Style */}
            <h2 className="text-7 font-bold leading-0 tracking-0 text-[#111] mb-6">이런 브랜드에<br className="md:hidden" /> 특히 효과적입니다</h2>
            {/* Body3 Style */}
            <p className="text-gray-500 text-4 leading-4 tracking-0">다양한 상황의 브랜드가 플러스 오퍼를 통해 성장하고 있습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "추가 고객 확보",
                desc: "추가 고객 확보가 필요한 브랜드",
                iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                gradient: "from-[#9167F5]/20 to-blue-500/20"
              },
              {
                title: "신규 제품",
                desc: "신규 제품을 빠르게 노출하고 싶은 브랜드",
                iconPath: "M12 4v16m8-8H4", // Plus icon
                gradient: "from-blue-400/20 to-cyan-400/20"
              },
              {
                title: "점유율 확대",
                desc: "경쟁 브랜드 점유율을 가져오고 싶은 브랜드",
                iconPath: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2-2H6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z", // Chart icon
                gradient: "from-emerald-400/20 to-teal-500/20"
              },
              {
                title: "시즌 상품",
                desc: "시즌 상품을 집중 홍보하고 싶은 브랜드",
                iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", // Clock icon
                gradient: "from-orange-400/20 to-red-500/20"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-sm flex flex-col group hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                  <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.iconPath} />
                          </svg>
                      </div>
                      {/* H3 Style */}
                      <h3 className="text-5 font-bold leading-2 tracking-0 text-[#111] mb-2">{item.title}</h3>
                      {/* Body4 Style */}
                      <p className="text-gray-500 text-3 leading-5 tracking-1">{item.desc}</p>
                  </div>
                  <div className={`absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-br ${item.gradient} blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-32 px-6 lg:px-12 bg-white">
          <div className="max-w-[1280px] mx-auto">
            {/* H1 Style */}
            <h2 className="text-7 font-bold leading-0 mb-16 text-[#111] tracking-0">플러스 오퍼의<br className="md:hidden" /> 핵심 장점</h2>
            <div className="grid md:grid-cols-4 gap-8">
                {ADVANTAGES.map((adv, idx) => (
                    <div key={adv.id} className="group relative pt-8 border-t border-gray-300 hover:border-[#111] transition-colors duration-500">
                        {/* H1 Style + Custom Size */}
                        <div className="text-[40px] font-bold text-gray-300 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-[#9167F5] group-hover:to-blue-500 transition-all duration-500">
                            0{idx + 1}
                        </div>
                        {/* Subtitle2 Style */}
                        <h3 className="text-4 font-bold leading-4 tracking-0 mb-3 text-[#111]">{adv.title}</h3>
                        {/* Body5 Style */}
                        <p className="text-gray-500 text-2 leading-13 tracking-1 leading-relaxed">{adv.description}</p>
                    </div>
                ))}
            </div>
          </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 px-6 lg:px-12 bg-[#111] text-white rounded-[40px] mx-4 lg:mx-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-20">
             {/* H1 Style */}
             <h2 className="text-7 font-bold leading-0 mb-4 tracking-0">도입은 간단합니다</h2>
             {/* Body3 Style */}
             <p className="text-gray-400 text-4 leading-4 tracking-0">평균 3분 내 시작 가능한 간편한 도입 절차</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {STEPS.map((step, idx) => (
              <ProcessStep key={step.id} step={step} isLast={idx === STEPS.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="mt-16 pt-16 pb-32 px-6 lg:px-12 bg-[#E5E7EB] text-[#111] relative z-10">
        <div className="max-w-[1280px] mx-auto pt-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
             <div className="max-w-2xl">
                {/* H1 Style + Custom scaling for emphasis */}
                <h2 className="text-7 md:text-[40px] font-bold leading-tight tracking-0 mb-8">
                    이미 샘플은<br />
                    보내고 계십니다.<br />
                    <span className="text-gray-500">이제 더 많이 노출될 차례입니다.</span>
                </h2>
                {/* Body3 Style */}
                <p className="text-4 text-gray-500 font-medium leading-4 tracking-0">
                    플러스 오퍼는 다른 카테고리의 제품을 선택한 고객에게<br className="hidden md:block" /> 우리의 샘플을 함께 배송하는 광고 서비스입니다.
                </p>
             </div>
          </div>

          <div className="space-y-4">
             {[
                  { title: "경쟁 브랜드 대비 점유율 확대", desc: "카테고리 내 독점적 브랜드 위상 강화", color: "from-purple-500 to-blue-500" },
                  { title: "샘플 선택 확률 상승", desc: "타겟 고객 대상 맞춤형 큐레이션 제공", color: "from-blue-500 to-cyan-500" },
                  { title: "자연스러운 브랜드 경험", desc: "고객이 직접 선택한 제품과 함께 배송되어 거부감 없음", color: "from-cyan-500 to-teal-500" }
                ].map((item, i) => (
                    <div key={i} className="group relative overflow-hidden rounded-[32px] bg-white hover:shadow-xl border border-gray-100 transition-all duration-500">
                        <div className="p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between relative z-10">
                            <div>
                                {/* Subtitle5 */}
                                <span className="inline-block text-1 font-bold leading-7 tracking-1 text-gray-400 mb-2">0{i+1} POINT</span>
                                {/* H2 Style */}
                                <h3 className="text-6 font-bold leading-1 tracking-0 text-[#111] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-500 transition-all">{item.title}</h3>
                                {/* Body4 Style */}
                                <p className="text-gray-500 text-3 leading-5 tracking-1 max-w-2xl">{item.desc}</p>
                            </div>
                        </div>
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    </div>
                ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1280px] mx-auto">
          {/* H2 Style */}
          <h2 className="text-6 font-bold leading-1 mb-16 text-[#111] tracking-0">자주 묻는 질문</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

       {/* Footer CTA */}
       <section className="py-40 px-6 bg-black relative overflow-hidden text-center">
        {/* Moving Particles for Footer */}
        <div className="absolute inset-0 pointer-events-none">
            {particles.map((p) => (
                <div 
                    key={`footer-${p.id}`}
                    className="absolute bg-white rounded-full"
                    style={{
                        left: `${p.left}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        animation: `float-up ${p.duration}s linear infinite`,
                        animationDelay: `${p.delay}s`,
                        '--target-opacity': p.opacity
                    } as React.CSSProperties}
                ></div>
            ))}
        </div>

        {/* Background Atmosphere - Dark Mode style */}
         <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
            <div className="absolute w-[600px] h-[600px] bg-[#3B0764] rounded-full blur-[100px] opacity-40 mix-blend-screen animate-blob-slow"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
             {/* H1 Style */}
             <h2 className="text-7 font-bold text-white tracking-0 leading-0 mb-10">
                플러스 오퍼의 기술과<br />
                서비스의 자세한 정보에 대해 문의하세요
             </h2>
             {/* Subtitle2 Style */}
             <button 
                onClick={handleCTA}
                className="bg-white text-black px-10 py-5 rounded-full font-bold text-4 leading-4 hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                문의하기
              </button>
        </div>
      </section>
    </div>
  );
};

export default App;

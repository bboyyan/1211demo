import React, { useState, useEffect } from 'react';
import { Menu, X, Star, Calendar, MapPin, Sparkles, ArrowRight, User, Clock, ChevronRight, Heart, Droplets } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-[#F2F0EB] p-0 md:p-8 font-sans text-neutral-800 flex items-center justify-center">
      
      {/* 主卡片容器：手機版滿版，桌機版圓角 */}
      <div className="w-full max-w-[1400px] bg-[#FAFAFA] md:rounded-[40px] shadow-none md:shadow-2xl overflow-hidden relative mx-auto transition-all duration-500">
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-white tracking-[0.15em] drop-shadow-sm z-50">
              LUMIÈRE <span className="text-rose-200 font-light italic">Spa</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex bg-white/5 backdrop-blur-md px-10 py-4 rounded-full border border-white/10 space-x-10 items-center hover:bg-white/10 transition-all duration-300">
              {['The Brand', 'Treatments', 'Membership', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-xs font-medium text-white/90 hover:text-white transition-colors tracking-[0.2em] uppercase font-sans">
                  {item}
                </a>
              ))}
              <div className="w-px h-3 bg-white/20 mx-2"></div>
              <button className="text-white/90 text-xs font-bold hover:text-white transition-colors tracking-widest uppercase">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white z-50 relative p-2 bg-white/10 backdrop-blur rounded-full" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-neutral-900/95 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in md:hidden">
              {['The Brand', 'Treatments', 'Membership', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-2xl font-['Playfair_Display'] text-white tracking-widest italic" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative h-[100vh] md:h-[900px] flex flex-col justify-center md:justify-start md:pt-40 px-6 md:px-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
              alt="Sensual Spa Mood" 
              className="w-full h-full object-cover brightness-[0.65]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30"></div>
          </div>

          <div className="relative z-10 max-w-4xl mt-0 md:mt-20">
            <div className="flex items-center gap-4 mb-6 animate-slide-up">
              <div className="h-[1px] w-12 bg-rose-300/60"></div>
              <span className="text-rose-200 text-xs tracking-[0.3em] uppercase font-light">Exclusive Care for Ladies</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-['Cormorant_Garamond'] font-light text-white leading-[1.1] mb-8 mix-blend-overlay opacity-90 animate-slide-up delay-100">
              Awaken Your <br />
              <span className="font-['Playfair_Display'] italic text-rose-100/90 font-normal">Inner Beauty</span>
            </h1>
            
            <p className="text-neutral-200 text-lg md:text-xl max-w-lg mb-12 font-light tracking-wide leading-relaxed font-['Cormorant_Garamond'] animate-slide-up delay-200">
              專為亞洲女性量身打造的極致美胸工藝。<br/>
              透過深層經絡與法式芳療，重塑自信曲線。
            </p>

            {/* 懸浮預約選單 - 手機版隱藏，改為底部固定按鈕 */}
            <div className="hidden md:flex absolute -bottom-24 left-16 right-16 bg-white/80 backdrop-blur-2xl p-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] justify-between items-center max-w-5xl border border-white/40">
               <div className="flex-1 px-8 py-5 group cursor-pointer border-r border-neutral-200/50">
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1 font-bold">Treatment</div>
                  <div className="text-neutral-800 font-['Playfair_Display'] text-lg italic group-hover:text-rose-500 transition-colors">Full Body & Bust Care</div>
               </div>
               <div className="flex-1 px-8 py-5 group cursor-pointer border-r border-neutral-200/50">
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1 font-bold">Location</div>
                  <div className="text-neutral-800 font-['Playfair_Display'] text-lg italic group-hover:text-rose-500 transition-colors">Taipei Flagship</div>
               </div>
               <div className="flex-1 px-8 py-5 group cursor-pointer">
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1 font-bold">Date</div>
                  <div className="text-neutral-800 font-['Playfair_Display'] text-lg italic group-hover:text-rose-500 transition-colors">Select a Date</div>
               </div>
               <button className="bg-neutral-900 text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-rose-500 transition-all duration-300 shadow-lg transform hover:scale-105">
                 <ArrowRight size={20} />
               </button>
            </div>
          </div>
        </section>

        {/* 內容區塊 */}
        <div className="bg-[#FAFAFA] relative pt-20 md:pt-32 pb-20 px-6 md:px-16 overflow-hidden">
          
          <div className="absolute top-20 right-0 text-[100px] md:text-[200px] leading-none font-['Playfair_Display'] text-neutral-100 opacity-60 pointer-events-none select-none z-0">
            Luxe
          </div>

          <div className="container mx-auto relative z-10">
            
            {/* 1. 品牌理念 (左圖右文) - 手機版自動改為上圖下文 */}
            <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20 mb-32">
              {/* 圖片區 */}
              <div className="w-full lg:w-1/2 -mt-10 md:-mt-48 relative">
                 <div className="relative h-[500px] md:h-[600px] w-full rounded-t-[200px] rounded-b-[20px] overflow-hidden shadow-2xl">
                   <img 
                     src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2149&auto=format&fit=crop" 
                     alt="Elegant Woman" 
                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                   />
                 </div>
                 <div className="hidden md:block absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-8 border-[#FAFAFA] overflow-hidden shadow-xl animate-pulse-slow">
                    <img src="https://images.unsplash.com/photo-1605265058693-855115206973?q=80&w=2070&auto=format&fit=crop" alt="Oil" className="w-full h-full object-cover"/>
                 </div>
              </div>

              {/* 文字區 */}
              <div className="w-full lg:w-1/2 pt-0 md:pt-10">
                 <span className="text-rose-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Our Philosophy</span>
                 <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-neutral-900 mb-8 leading-tight">
                   The Art of <br />
                   <span className="italic text-rose-400">Sculpting Curves</span>
                 </h2>
                 <p className="text-neutral-500 text-lg leading-loose font-light mb-8 font-['Cormorant_Garamond']">
                   我們相信，美是一種流動的能量。LUMIÈRE 結合傳統中醫經絡智慧與現代解剖學，獨創「深層律動手技」。
                 </p>
                 <div className="grid grid-cols-2 gap-6 mb-10">
                   <div>
                     <div className="flex items-center gap-2 mb-2"><Sparkles size={16} className="text-rose-400" /><h4 className="font-bold text-sm uppercase">Natural Oil</h4></div>
                     <p className="text-neutral-400 text-sm">歐盟認證有機精油</p>
                   </div>
                   <div>
                     <div className="flex items-center gap-2 mb-2"><Heart size={16} className="text-rose-400" /><h4 className="font-bold text-sm uppercase">Private Room</h4></div>
                     <p className="text-neutral-400 text-sm">全獨立包廂隱私</p>
                   </div>
                 </div>
                 <button className="group flex items-center gap-4 text-neutral-900 text-sm font-bold tracking-[0.2em] uppercase hover:text-rose-500 transition-colors">
                   Discover Our Story
                   <div className="w-12 h-[1px] bg-neutral-300 group-hover:bg-rose-500 transition-colors"></div>
                 </button>
              </div>
            </div>

            {/* 2. 獨家療程 (右圖左文 - ZigZag) - 手機版依然保持上圖下文的邏輯，或文字在上 */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-24 mb-32">
               
               {/* 文字區 (左側) */}
               <div className="w-full lg:w-1/2">
                  <span className="text-rose-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Signature Treatment</span>
                  <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-neutral-900 mb-6 leading-tight">
                    Deep Tissue <br />
                    <span className="italic text-neutral-400">& Meridian Massage</span>
                  </h2>
                  <p className="text-neutral-500 text-lg leading-loose font-light mb-8 font-['Cormorant_Garamond']">
                    這不只是一次按摩，而是一場深度的排毒旅程。針對腋下淋巴、乳腺與胸大肌進行深層疏通，有效改善氣血循環，提升胸部彈性與緊實度。
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {['疏通乳腺堆積', '改善副乳問題', '提升胸型輪廓', '產後恢復彈性'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-neutral-600 font-['Cormorant_Garamond'] text-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button className="px-8 py-3 border border-neutral-900 rounded-full hover:bg-neutral-900 hover:text-white transition-all text-sm tracking-widest uppercase">
                    View Treatment Menu
                  </button>
               </div>

               {/* 圖片區 (右側) - 不同的形狀設計 */}
               <div className="w-full lg:w-1/2 relative">
                  <div className="relative h-[400px] md:h-[550px] w-full rounded-full overflow-hidden border-[1px] border-neutral-200 p-4">
                     <div className="w-full h-full rounded-full overflow-hidden shadow-2xl relative">
                        <img 
                          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
                          alt="Massage Treatment" 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-neutral-900/10"></div>
                     </div>
                  </div>
                  {/* 懸浮標籤 */}
                  <div className="absolute top-10 left-0 bg-white/90 backdrop-blur py-3 px-6 rounded-full shadow-lg flex items-center gap-2">
                     <Droplets size={16} className="text-rose-400"/>
                     <span className="text-xs font-bold tracking-widest uppercase">Essential Oil</span>
                  </div>
               </div>
            </div>

            {/* 3. 數據與口碑 (雜誌排版) */}
            <div className="mb-20 border-t border-neutral-200 pt-20">
               <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                 <div>
                   <span className="text-rose-400 text-xs font-bold tracking-[0.3em] uppercase mb-2 block">Our Impact</span>
                   <h3 className="text-4xl font-['Playfair_Display'] text-neutral-800">Results that Speak</h3>
                 </div>
                 <div className="hidden md:block">
                   <button className="border border-neutral-300 rounded-full px-8 py-3 text-xs tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-all">
                     View All Reviews
                   </button>
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l-0 md:border-l border-neutral-200">
                  {[
                    { num: "1500+", title: "Happy Clients", desc: "累積超過千位女性的見證，找回自信光采。" },
                    { num: "98%", title: "Satisfaction", desc: "幾近完美的滿意度，來自對細節的極致苛求。" },
                    { num: "12", title: "Years Experience", desc: "十年磨一劍，獨家研發的深層美胸手技。" }
                  ].map((stat, index) => (
                    <div key={index} className="border-r-0 md:border-r border-b border-neutral-200 p-8 md:p-10 hover:bg-white transition-colors group">
                      <h4 className="text-5xl md:text-6xl font-['Cormorant_Garamond'] text-neutral-300 group-hover:text-rose-400 transition-colors mb-4">{stat.num}</h4>
                      <p className="text-neutral-900 font-bold tracking-widest uppercase text-xs mb-2">{stat.title}</p>
                      <p className="text-neutral-500 text-xs font-light leading-relaxed">{stat.desc}</p>
                    </div>
                  ))}
               </div>
               
               {/* Mobile Only Button */}
               <div className="mt-8 md:hidden text-center">
                  <button className="border border-neutral-300 rounded-full px-8 py-3 text-xs tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-all w-full">
                     View All Reviews
                   </button>
               </div>
            </div>

            {/* 4. 底部行動呼籲 (不規則/左右設計) */}
            <div className="relative rounded-[30px] overflow-hidden bg-neutral-900 text-white min-h-[400px] flex flex-col md:flex-row">
              {/* 左側圖片 */}
              <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                 <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" 
                  alt="Spa Atmosphere" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-transparent"></div>
              </div>
              
              {/* 右側文字內容 - 靠右對齊的視覺 */}
              <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center items-start relative z-10 bg-neutral-900 md:bg-transparent">
                <span className="text-rose-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Book Appointment</span>
                <h3 className="text-3xl md:text-5xl font-['Playfair_Display'] italic mb-6 leading-tight">
                  Ready to start your <br/> transformation?
                </h3>
                <p className="text-neutral-400 max-w-md mb-10 font-['Cormorant_Garamond'] text-lg">
                  給自己一個下午的時間，享受一場身心靈的極致寵愛。名額有限，建議提前一週預約。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <button className="bg-white text-neutral-900 px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-rose-200 transition-colors text-center">
                    Book Now
                  </button>
                  <button className="border border-white/20 text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-white/10 transition-colors text-center">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#FAFAFA] border-t border-neutral-200 py-12 px-6 md:px-16 pb-24 md:pb-12">
           <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 font-light tracking-wider gap-6">
             <div className="text-center md:text-left">
               &copy; 2024 LUMIÈRE SPA. All Rights Reserved.
             </div>
             <div className="flex gap-8">
               <a href="#" className="hover:text-neutral-800 transition-colors">INSTAGRAM</a>
               <a href="#" className="hover:text-neutral-800 transition-colors">FACEBOOK</a>
               <a href="#" className="hover:text-neutral-800 transition-colors">LINE</a>
             </div>
           </div>
        </footer>

        {/* Mobile Floating Action Button (Sticky Bottom) */}
        <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
          <button className="w-full bg-rose-500 text-white py-4 rounded-full shadow-xl font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2">
            <Calendar size={18} />
            Book Appointment
          </button>
        </div>

      </div>
    </div>
  );
};

export default App;
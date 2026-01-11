
import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Concierge from './components/Concierge';
import ReservationForm from './components/ReservationForm';
import Gallery from './components/Gallery';
import { MenuItem, Language } from './types';
import { translations } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('TH');
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const signatureMenu: MenuItem[] = [
    {
      id: '1',
      title: lang === 'CN' ? '红烧鲍鱼' : lang === 'EN' ? 'Braised Abalone' : 'เป๋าฮื้อน้ำแดง',
      category: 'Premium',
      description: lang === 'CN' ? '顶级鲍鱼在秘密汤底中炖煮超过12小时，风味浓郁。' : lang === 'EN' ? 'Premium abalone simmered in a secret broth for over 12 hours for a rich, mellow taste.' : 'เป๋าฮื้อสายพันธุ์ชั้นเลิศ เคี่ยวในน้ำซุปสูตรลับนานกว่า 12 ชั่วโมง ให้รสชาติเข้มข้นกลมกล่อม',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbohIEY8hfECpa2Oc5Nue8-IdLBHVGKIsMaXK1GFCnrs7vNxuOtheNpSHBpQLI9bVk2Yh2g0MKbO_ukMNPOsvWllpbrp80ATyW2k4uAl6PPODPw_Q7zJoBRhh3bnReQDbUrV6bDeNaA5imp3Jf_c1jZSIIC70X1yM9Z4z7eRE_nC6l-An9-KfE5IQrd_l8M0jqpPawGtjE-ibOtimC9PHUVhTQztfktHyHKVXKuFq7yHULkUGaNw__liKmWh2dQzl3X5v7ybse2RyW'
    },
    {
      id: '2',
      title: lang === 'CN' ? '皇家燕窝' : lang === 'EN' ? 'Imperial Bird\'s Nest' : 'รังนกแท้จักรพรรดิ',
      category: 'Superior',
      description: lang === 'CN' ? '精选特级燕窝，加入冰糖和人参炖煮，滋补养颜。' : lang === 'EN' ? 'Selected premium bird\'s nest double-boiled with rock sugar and fine ginseng for health and skin.' : 'คัดสรรเฉพาะรังนกเกรดพรีเมียม ตุ๋นกับน้ำตาลกรวดและโสมชั้นดี เพื่อบำรุงสุขภาพและผิวพรรณ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjr2xn6TY0KEAsj8h3h7-dWkB-2sn2m4PhZwhvdhRgjFq5czPHIXGbfu00Vi1Hzn1eIByOA1euC7erYiCQt42AlFvIRUpZetQyv85FoOq_EgLdjJcKJmZQuys0B7lLHYi_j04jYAx1m1sItcbFma1JvLxkCRAInhurkA0XpWuSKU3uNbkxZCppJZBKAV872lAwTgX-sowA3u4D58InwdGKAx6uiKWLmcmNlNVByGmFel1sTY2h2TiDzDOj_t4MFZW4RdtGy54gHKeI'
    },
    {
      id: '3',
      title: lang === 'CN' ? '金箔鱼翅' : lang === 'EN' ? 'Gold Leaf Shark Fin' : 'หูฉลามแผ่นทอง',
      category: 'Exclusive',
      description: lang === 'CN' ? '传统风味汤底，以保留传奇美味的创新方式呈现。' : lang === 'EN' ? 'Classic thick soup presented in a new style that preserves its legendary taste.' : 'ซุปเข้มข้นสไตล์ดั้งเดิม นำเสนอในรูปแบบใหม่ที่ยังคงเอกลักษณ์ความอร่อยระดับตำนาน',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6-I0-fzoHL23GyIBssvhg1D5uN_dm9HeRrSek49Pd7ob6juERWiUXoANy5jtsO0vxUXLjITh8gttUVU_OyNlXrCTJ9I_bhMX80iswZw5b855IKLRM4pLi7z3dp1zC0SQEbc6fy15f4TPPXRqxa5dP9uK3D-bCSctBfUGb0g4Dsrgzc2b2cTrJfmMq5E31OruzyPmZViX96xIiWXN8JSQyBwidUcvEmACydcBq9rhTcmf7k2L4iOfMNBXl0p2xg1Q48bqGFxfoEmLm'
    }
  ];

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-3xl font-display font-bold text-primary dark:text-accent tracking-tighter">จักรพรรดิ</span>
            <div className="hidden md:block pl-2 border-l border-slate-300 dark:border-slate-700">
              <span className="block text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">Modern</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 -mt-1">Imperial</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-semibold text-slate-600 dark:text-slate-300">
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-primary dark:hover:text-accent transition-colors relative group">
              {t.nav.home}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('menu-section')} className="hover:text-primary dark:hover:text-accent transition-colors relative group">
              {t.nav.menu}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('gallery-section')} className="hover:text-primary dark:hover:text-accent transition-colors relative group">
              {t.nav.gallery}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('reservation-section')} className="hover:text-primary dark:hover:text-accent transition-colors relative group">
              {t.nav.book}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </button>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-3 border-l border-slate-200 dark:border-slate-700 pl-8 ml-2">
              {(['TH', 'CN', 'EN'] as Language[]).map((l) => (
                <button 
                  key={l} 
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 transition-all ${lang === l ? 'text-accent font-black scale-110' : 'text-slate-400 hover:text-primary'}`}
                >
                  {l === 'CN' ? '中' : l}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => scrollToSection('reservation-section')}
            className="bg-primary text-white px-8 py-3 rounded-none hover:bg-white hover:text-primary border border-primary transition-all duration-300 text-xs font-bold tracking-widest shadow-xl"
          >
            {t.nav.reserveBtn}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background-light dark:bg-background-dark bg-texture">
        <div className="absolute inset-0 z-0 opacity-10">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[120px]"></div>
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center z-10">
          <div className="order-2 md:order-1 animate-fadeInLeft">
            <div className="inline-flex items-center space-x-4 mb-6">
              <span className="h-px w-12 bg-accent"></span>
              <span className="text-accent tracking-[0.4em] uppercase text-xs font-bold">{t.hero.sub}</span>
            </div>
            <h1 className="text-7xl lg:text-9xl font-display leading-[0.9] mb-10 text-slate-900 dark:text-white">
              {t.hero.title1} <br/>
              <span className="italic text-primary dark:text-accent">{t.hero.title2}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-lg leading-relaxed font-light">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <button 
                onClick={() => scrollToSection('menu-section')}
                className="bg-primary text-white px-10 py-5 hover:bg-transparent hover:text-primary border border-primary transition-all duration-500 font-display text-xl shadow-2xl"
              >
                {t.hero.cta}
              </button>
              <button 
                onClick={() => scrollToSection('menu-section')}
                className="group flex items-center space-x-3 text-primary dark:text-accent font-bold text-sm tracking-widest uppercase"
              >
                <span>{t.hero.menuLink}</span>
                <span className="material-icons text-lg group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
              </button>
            </div>
          </div>

          <div className="relative order-1 md:order-2 animate-fadeInRight">
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-[24px] border-white dark:border-slate-800 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEWv5cWDSwqO2StpHWAjNUHq-9rCxqEjcuUoKYxSTJMNVBmZ17WALejJaKZZxhqGUVmdodMYAs86D1OI7vUc615OoZLd0f3521anqw__0IUdC609M-Vvh_qOdcfzb14YuEe3MERWEnyvgi782F3Wc6s9rGS2d7JVa7hgZwRx68yGhyv4YDkly61dvkIij6DhpNVeuGsxHxTQTgqWxaPhXDhfI5K-A5Kdbw_E8ItZ2a7sjJwxynyppx_u8EPwwmfFTprT7xhwq2NS--" 
                alt="Luxury Plating"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signature Menu Section */}
      <section id="menu-section" className="py-32 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 relative">
            <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-black mb-4 block">{t.signature.sub}</span>
            <h2 className="text-5xl md:text-6xl font-display mb-8 text-slate-900 dark:text-white">{t.signature.title}</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="mt-8 text-slate-400 uppercase tracking-[0.3em] text-xs font-semibold">{t.signature.footer}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {signatureMenu.map((item) => (
              <div key={item.id} className="group flex flex-col cursor-pointer">
                <div className="relative overflow-hidden aspect-[3/4] mb-8 shadow-2xl">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-white border-2 border-white px-8 py-3 text-xs tracking-widest font-bold uppercase">Discover Taste</span>
                  </div>
                  <div className="absolute top-6 left-6 bg-white/90 dark:bg-slate-900/90 px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold text-accent shadow-lg">{item.category}</div>
                </div>
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-3xl font-display text-slate-900 dark:text-white">{item.title}</h3>
                  <div className="h-px flex-grow mx-4 bg-slate-200 dark:bg-slate-800"></div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{item.description}</p>
                <button className="self-start text-[10px] font-black tracking-[0.3em] uppercase border-b-2 border-accent pb-2 hover:text-accent transition-colors">
                  {t.signature.readMore}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambience & History */}
      <section className="py-32 bg-background-light dark:bg-background-dark bg-texture relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-s8Dd9H8Adm7ubWzqqWUdQm1TJ7w3y2aGzwjHRV8j6kRvHY5XCvD3kkkv3meKY2YYMUOr6BfAEulSYr1dlvBVIMxp-HRBvW0aIPIofa8HuAVa6_OBk7WREdi3zvV-yR72W1uV5Qzn1OFvbnyA9o-FUBswlixuRtjrRHPRClpqdSuzf37wUnqC1fgyNRdulhMFHTvJQJQEBQYiSDVDt105srQqmLeIeMaZ3-qzwgLeOMsKb3m8EynW8uKruvUuth9Aqc3YoSPYTQYn" alt="Ambience" className="w-full h-[650px] object-cover rounded shadow-2xl" />
              <div className="absolute -bottom-10 -right-10 bg-primary p-12 text-white hidden lg:block shadow-2xl border-t-8 border-accent">
                <p className="font-display text-5xl mb-4 italic text-accent">Est. 1988</p>
                <p className="text-xs uppercase tracking-[0.4em] font-bold opacity-80">Heritage of Taste</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <span className="text-primary dark:text-accent tracking-[0.4em] uppercase text-xs font-bold mb-6 block">{t.ambience.sub}</span>
            <h2 className="text-5xl lg:text-6xl font-display leading-[1.1] mb-10 text-slate-900 dark:text-white">{t.ambience.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-12 text-lg font-light">{t.ambience.desc}</p>
            
            <div className="grid grid-cols-2 gap-12 mb-16">
              <div className="p-8 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                <span className="text-4xl font-display text-primary dark:text-accent mb-2 block">10+</span>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{t.ambience.rooms}</p>
              </div>
              <div className="p-8 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                <span className="text-4xl font-display text-primary dark:text-accent mb-2 block">Michelin</span>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{t.ambience.michelin}</p>
              </div>
            </div>

            <button onClick={() => scrollToSection('gallery-section')} className="group relative overflow-hidden border-2 border-primary dark:border-accent text-primary dark:text-accent px-12 py-5 font-bold uppercase tracking-[0.2em] text-xs transition-all duration-500 hover:text-white">
              <span className="relative z-10">{t.ambience.galleryBtn}</span>
              <div className="absolute inset-0 bg-primary dark:bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Gallery lang={lang} />
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark bg-texture relative">
        <div className="max-w-7xl mx-auto px-6">
          <ReservationForm lang={lang} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-20 mb-24">
            <div className="col-span-2">
              <span className="text-5xl font-display font-bold text-accent mb-8 block tracking-tighter">จักรพรรดิ</span>
              <p className="text-slate-300 max-w-sm mb-12 text-lg font-light leading-relaxed">{t.footer.desc}</p>
            </div>

            <div>
              <h4 className="font-display text-2xl mb-10 text-accent">{t.footer.contact}</h4>
              <ul className="space-y-6 text-slate-300 text-sm">
                <li className="flex items-start space-x-4">
                  <span className="material-icons text-accent">location_on</span>
                  <span>123 PLOENCHIT RD, LUMPINI, <br/>PATHUM WAN, BANGKOK 10330</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-2xl mb-10 text-accent">{t.footer.hours}</h4>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex justify-between"><span>{t.footer.lunch}:</span> <b>11:30 - 14:30</b></li>
                <li className="flex justify-between"><span>{t.footer.dinner}:</span> <b>18:00 - 22:30</b></li>
                <li className="pt-4 italic text-right opacity-60">{t.footer.daily}</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <ThemeToggle />
      <Concierge lang={lang} />
    </div>
  );
};

export default App;


import React, { useState } from 'react';
import { getConciergeRecommendation } from '../services/geminiService';
import { Recommendation, Language } from '../types';
import { translations } from '../translations';

interface ConciergeProps {
  lang: Language;
}

const Concierge: React.FC<ConciergeProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pref, setPref] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Recommendation | null>(null);
  
  const t = translations[lang].concierge;

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pref.trim()) return;
    
    setLoading(true);
    try {
      const rec = await getConciergeRecommendation(pref, lang);
      setResult(rec);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-8 bg-accent text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-all z-40 flex items-center space-x-2 font-medium"
      >
        <span className="material-icons">auto_awesome</span>
        <span>AI Concierge</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-end justify-center sm:items-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h2 className="text-2xl font-display font-bold text-primary dark:text-accent">{t.title}</h2>
              <button onClick={() => setIsOpen(false)} className="material-icons text-slate-400 hover:text-slate-600">close</button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              {!result && !loading && (
                <div className="space-y-4">
                  <p className="text-slate-600 dark:text-slate-400">
                    {t.desc}
                  </p>
                  <form onSubmit={handleAsk} className="space-y-4">
                    <textarea 
                      value={pref}
                      onChange={(e) => setPref(e.target.value)}
                      placeholder={t.placeholder}
                      className="w-full h-32 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-accent focus:border-transparent outline-none resize-none dark:text-white"
                    />
                    <button 
                      type="submit"
                      className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>{t.btn}</span>
                      <span className="material-icons">send</span>
                    </button>
                  </form>
                </div>
              )}

              {loading && (
                <div className="py-12 flex flex-col items-center justify-center space-y-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
                  <p className="text-slate-500 animate-pulse">{t.loading}</p>
                </div>
              )}

              {result && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="p-6 bg-accent/5 dark:bg-accent/10 rounded-2xl border border-accent/20">
                    <h3 className="text-accent font-display text-xl mb-4 font-bold uppercase tracking-widest">{result.setMenuName}</h3>
                    <ul className="space-y-3 mb-6">
                      {result.items.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                          <span className="material-icons text-accent text-sm mt-1">restaurant_menu</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-accent/20">
                      <p className="text-sm font-bold text-primary dark:text-accent mb-1 flex items-center">
                        <span className="material-icons text-xs mr-2">local_bar</span> 
                        {t.pairing}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 italic text-sm">{result.pairing}</p>
                    </div>
                  </div>
                  
                  <div className="text-sm text-slate-500 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                    <strong>{t.logic}:</strong> {result.reasoning}
                  </div>

                  <button 
                    onClick={() => {setResult(null); setPref('');}}
                    className="w-full py-3 text-slate-500 hover:text-primary transition-colors text-sm font-medium"
                  >
                    Start Over
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Concierge;

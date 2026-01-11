
import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface ReservationFormProps {
  lang: Language;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ lang }) => {
  const t = translations[lang].reservation;
  
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    requests: '',
    name: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-slate-900 p-12 text-center border-t-4 border-accent shadow-2xl animate-fadeIn">
        <span className="material-icons text-6xl text-accent mb-6">verified</span>
        <h3 className="text-4xl font-display text-primary dark:text-accent mb-4">{t.successTitle}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
          {t.successDesc}
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-accent font-bold uppercase tracking-widest border-b-2 border-accent pb-1 hover:text-primary transition-colors"
        >
          {t.rebook}
        </button>
      </div>
    );
  }

  return (
    <div id="reservation-section" className="bg-white dark:bg-slate-900 shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row">
      {/* Decorative Side */}
      <div className="lg:w-1/3 bg-primary p-12 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/silk-weave.png')]"></div>
        <div className="relative z-10">
          <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-black mb-4 block">{t.sub}</span>
          <h3 className="text-4xl font-display text-white mb-6 leading-tight">{t.title} <br/><span className="italic text-accent">{t.titleItalic}</span></h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            {t.desc}
          </p>
          <div className="flex items-center space-x-4 text-accent">
            <span className="material-icons">phone</span>
            <span className="font-bold tracking-widest text-sm">02-xxx-xxxx</span>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <form onSubmit={handleSubmit} className="lg:w-2/3 p-8 lg:p-16 space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-black text-slate-400">{t.name}</label>
            <input 
              required
              type="text" 
              className="w-full bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-800 focus:ring-0 focus:border-accent transition-colors py-3 px-0 dark:text-white"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-black text-slate-400">{t.email}</label>
            <input 
              required
              type="email" 
              className="w-full bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-800 focus:ring-0 focus:border-accent transition-colors py-3 px-0 dark:text-white"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-black text-slate-400">{t.date}</label>
            <input 
              required
              type="date" 
              className="w-full bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-800 focus:ring-0 focus:border-accent transition-colors py-3 px-0 dark:text-white"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-black text-slate-400">{t.time}</label>
            <select 
              className="w-full bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-800 focus:ring-0 focus:border-accent transition-colors py-3 px-0 dark:text-white"
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
            >
              <option value="" disabled>Select Time</option>
              <optgroup label="Lunch">
                <option value="11:30">11:30</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
              </optgroup>
              <optgroup label="Dinner">
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
              </optgroup>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-black text-slate-400">{t.guests}</label>
            <select 
              className="w-full bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-800 focus:ring-0 focus:border-accent transition-colors py-3 px-0 dark:text-white"
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                <option key={n} value={n}>{n} Guests</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-black text-slate-400">{t.requests}</label>
          <textarea 
            className="w-full bg-transparent border-0 border-b-2 border-slate-200 dark:border-slate-800 focus:ring-0 focus:border-accent transition-colors py-3 px-0 h-24 resize-none dark:text-white"
            value={formData.requests}
            onChange={(e) => setFormData({...formData, requests: e.target.value})}
          />
        </div>

        <button 
          type="submit"
          className="w-full py-5 bg-primary text-white font-display text-xl tracking-widest shadow-2xl hover:bg-opacity-90 transition-all border border-primary flex items-center justify-center space-x-3"
        >
          <span>{t.btn}</span>
          <span className="material-icons">arrow_forward</span>
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;

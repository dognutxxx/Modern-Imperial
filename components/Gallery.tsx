
import React, { useState } from 'react';

interface GalleryImage {
  url: string;
  title: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEWv5cWDSwqO2StpHWAjNUHq-9rCxqEjcuUoKYxSTJMNVBmZ17WALejJaKZZxhqGUVmdodMYAs86D1OI7vUc615OoZLd0f3521anqw__0IUdC609M-Vvh_qOdcfzb14YuEe3MERWEnyvgi782F3Wc6s9rGS2d7JVa7hgZwRx68yGhyv4YDkly61dvkIij6DhpNVeuGsxHxTQTgqWxaPhXDhfI5K-A5Kdbw_E8ItZ2a7sjJwxynyppx_u8EPwwmfFTprT7xhwq2NS--',
      title: 'Grand Dining Hall',
      category: 'Interior'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-s8Dd9H8Adm7ubWzqqWUdQm1TJ7w3y2aGzwjHRV8j6kRvHY5XCvD3kkkv3meKY2YYMUOr6BfAEulSYr1dlvBVIMxp-HRBvW0aIPIofa8HuAVa6_OBk7WREdi3zvV-yR72W1uV5Qzn1OFvbnyA9o-FUBswlixuRtjrRHPRClpqdSuzf37wUnqC1fgyNRdulhMFHTvJQJQEBQYiSDVDt105srQqmLeIeMaZ3-qzwgLeOMsKb3m8EynW8uKruvUuth9Aqc3YoSPYTQYn',
      title: 'Private Imperial Suite',
      category: 'Interior'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbohIEY8hfECpa2Oc5Nue8-IdLBHVGKIsMaXK1GFCnrs7vNxuOtheNpSHBpQLI9bVk2Yh2g0MKbO_ukMNPOsvWllpbrp80ATyW2k4uAl6PPODPw_Q7zJoBRhh3bnReQDbUrV6bDeNaA5imp3Jf_c1jZSIIC70X1yM9Z4z7eRE_nC6l-An9-KfE5IQrd_l8M0jqpPawGtjE-ibOtimC9PHUVhTQztfktHyHKVXKuFq7yHULkUGaNw__liKmWh2dQzl3X5v7ybse2RyW',
      title: 'Braised Premium Abalone',
      category: 'Dish'
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjr2xn6TY0KEAsj8h3h7-dWkB-2sn2m4PhZwhvdhRgjFq5czPHIXGbfu00Vi1Hzn1eIByOA1euC7erYiCQt42AlFvIRUpZetQyv85FoOq_EgLdjJcKJmZQuys0B7lLHYi_j04jYAx1m1sItcbFma1JvLxkCRAInhurkA0XpWuSKU3uNbkxZCppJZBKAV872lAwTgX-sowA3u4D58InwdGKAx6uiKWLmcmNlNVByGmFel1sTY2h2TiDzDOj_t4MFZW4RdtGy54gHKeI',
      title: 'Double-Boiled Bird\'s Nest',
      category: 'Dish'
    },
    {
      url: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=800',
      title: 'Handcrafted Dim Sum',
      category: 'Dish'
    },
    {
      url: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800',
      title: 'Oriental Decor Detail',
      category: 'Ambiance'
    }
  ];

  return (
    <div id="gallery-section" className="py-24">
      <div className="text-center mb-16">
        <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-black mb-4 block">Visual Journey</span>
        <h2 className="text-5xl font-display text-slate-900 dark:text-white mb-6">แกลเลอรี่แห่งความทรงจำ</h2>
        <div className="w-16 h-0.5 bg-accent mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="group relative aspect-square overflow-hidden cursor-pointer bg-slate-100 dark:bg-slate-800"
            onClick={() => setSelectedImage(img)}
          >
            <img 
              src={img.url} 
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
              <span className="text-accent text-[10px] uppercase tracking-widest font-black mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.category}</span>
              <h3 className="text-white font-display text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{img.title}</h3>
              <div className="mt-4 w-8 h-px bg-white/40"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 animate-fadeIn">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setSelectedImage(null)}></div>
          <div className="relative max-w-5xl w-full h-full flex flex-col justify-center">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors flex items-center space-x-2 uppercase tracking-widest text-xs font-bold"
              onClick={() => setSelectedImage(null)}
            >
              <span>Close</span>
              <span className="material-icons">close</span>
            </button>
            <div className="relative bg-white dark:bg-slate-900 overflow-hidden shadow-2xl">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              />
              <div className="p-8 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <div>
                  <span className="text-accent text-xs uppercase tracking-widest font-black block mb-1">{selectedImage.category}</span>
                  <h4 className="text-2xl font-display text-primary dark:text-white">{selectedImage.title}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

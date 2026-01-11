
export type Language = 'TH' | 'CN' | 'EN';

export const translations = {
  TH: {
    nav: { home: 'หน้าแรก', menu: 'เมนูแนะนำ', gallery: 'แกลเลอรี่', book: 'จองโต๊ะ', reserveBtn: 'จองที่นั่ง' },
    hero: { sub: 'สัมผัสประสบการณ์ความหรูหรา', title1: 'Modern', title2: 'Imperial', desc: 'อาหารจีนระดับพรีเมียมที่ผสมผสานรสชาติดั้งเดิมเข้ากับศิลปะการตกแต่งจานที่ทันสมัย รังสรรค์โดยเชฟผู้เชี่ยวชาญ', cta: 'สัมผัสประสบการณ์ความอร่อย', menuLink: 'ดูเมนูทั้งหมด' },
    signature: { sub: 'Crafting Culinary Legends', title: 'เมนูซิกเนเจอร์', footer: 'Signature Imperial Delicacies', readMore: 'อ่านเพิ่มเติม' },
    ambience: { sub: 'The Modern Luxury Experience', title: 'บรรยากาศที่เหนือระดับ เพื่อช่วงเวลาที่พิเศษที่สุด', desc: 'ดื่มด่ำกับบรรยากาศการตกแต่งที่ได้รับแรงบันดาลใจจากความรุ่งเรืองของราชวงศ์จีน ผสานเข้ากับความเรียบหรูร่วมสมัย ทุกรายละเอียดถูกคัดสรรมาเพื่อให้คุณได้รับประสบการณ์การรับประทานอาหารที่น่าจดจำ', rooms: 'ห้องส่วนตัว', michelin: 'มิชลินแนะนำ', galleryBtn: 'ชมแกลเลอรี่ของเรา' },
    gallery: { sub: 'Visual Journey', title: 'แกลเลอรี่แห่งความทรงจำ' },
    reservation: {
      sub: 'Table Reservation', title: 'ร่วมเป็นส่วนหนึ่งของ', titleItalic: 'มื้ออาหารที่น่าจดจำ', desc: 'กรุณากรอกข้อมูลเพื่อสำรองที่นั่งล่วงหน้า สำหรับกลุ่มใหญ่เกิน 10 ท่าน กรุณาติดต่อเราโดยตรง',
      name: 'ชื่อ-นามสกุล', email: 'อีเมล', date: 'วันที่จอง', time: 'เวลา', guests: 'จำนวนที่นั่ง', requests: 'คำขอพิเศษ (ไม่บังคับ)',
      btn: 'ยืนยันการจองที่นั่ง', successTitle: 'ขอบคุณสำหรับการจอง', successDesc: 'เราได้รับข้อมูลการจองของคุณแล้ว และจะส่งอีเมลยืนยันข้อมูลในเร็วๆ นี้', rebook: 'จองใหม่อีกครั้ง'
    },
    footer: { desc: 'เรามุ่งมั่นที่จะนำเสนอสิ่งที่ดีที่สุดจากมรดกทางวัฒนธรรมอาหารจีน ผ่านมุมมองและเทคนิคการปรุงอาหารแบบใหม่', contact: 'ติดต่อเรา', hours: 'เวลาทำการ', lunch: 'มื้อกลางวัน', dinner: 'มื้อค่ำ', daily: 'เปิดบริการทุกวัน' },
    concierge: { title: 'ดิจิทัลคอนเซียจ', desc: 'แจ้งความต้องการของคุณ แล้วเราจะจัดเซ็ตเมนูพิเศษให้คุณโดยเฉพาะ', placeholder: 'เช่น ฉันชอบอาหารรสจัดและซีฟู้ด...', btn: 'รังสรรค์ประสบการณ์ของฉัน', loading: 'กำลังปรึกษาเชฟใหญ่...', pairing: 'เครื่องดื่มแนะนำ', logic: 'ทำไมถึงเลือกชุดนี้ให้คุณ' }
  },
  CN: {
    nav: { home: '首页', menu: '推荐菜品', gallery: '相册', book: '预订', reserveBtn: '立即预订' },
    hero: { sub: '体验极致奢华', title1: '现代', title2: '御膳', desc: '顶级中式美食，将传统风味与现代摆盘艺术完美融合，由名厨倾力打造。', cta: '开启美食之旅', menuLink: '查看全部菜单' },
    signature: { sub: '匠心打造舌尖传奇', title: '招牌菜品', footer: '皇家特色美味', readMore: '阅读更多' },
    ambience: { sub: '现代奢华体验', title: '顶级氛围，铸就非凡时刻', desc: '沉浸在以中国历代王朝鼎盛时期为灵感的装饰氛围中，结合现代简约奢华，每一处细节都为您打造难忘的用餐体验。', rooms: '私享包厢', michelin: '米其林推荐', galleryBtn: '浏览图集' },
    gallery: { sub: '视觉之旅', title: '回忆画廊' },
    reservation: {
      sub: '餐桌预订', title: '成为', titleItalic: '难忘盛宴', desc: '请填写以下信息进行预订。10人以上团体预订请直接联系我们。',
      name: '全名', email: '电子邮箱', date: '预订日期', time: '时间', guests: '人数', requests: '特殊要求 (选填)',
      btn: '确认预订', successTitle: '感谢您的预订', successDesc: '我们已收到您的预订信息，将尽快发送确认邮件。', rebook: '再次预订'
    },
    footer: { desc: '我们致力于通过创新的视角和烹饪技艺，呈现中国餐饮文化的精华。', contact: '联系我们', hours: '营业时间', lunch: '午餐', dinner: '晚餐', daily: '每天营业' },
    concierge: { title: '数字礼宾', desc: '告诉我们您的偏好，我们将为您定制专属套餐。', placeholder: '例如：我喜欢辛辣食物和海鲜...', btn: '生成我的体验', loading: '正在咨询主厨...', pairing: '主厨推荐配饮', logic: '推荐理由' }
  },
  EN: {
    nav: { home: 'Home', menu: 'Menu', gallery: 'Gallery', book: 'Booking', reserveBtn: 'Reserve' },
    hero: { sub: 'Experience Supreme Luxury', title1: 'Modern', title2: 'Imperial', desc: 'Premium Chinese cuisine blending traditional flavors with modern plating art, crafted by master chefs.', cta: 'Experience the Taste', menuLink: 'View Full Menu' },
    signature: { sub: 'Crafting Culinary Legends', title: 'Signature Dishes', footer: 'Signature Imperial Delicacies', readMore: 'Read More' },
    ambience: { sub: 'The Modern Luxury Experience', title: 'Exquisite Ambiance for Special Moments', desc: 'Immerse yourself in decor inspired by the prosperity of Chinese dynasties, blended with modern luxury. Every detail is curated for your unforgettable dining experience.', rooms: 'Private Rooms', michelin: 'Michelin Recommended', galleryBtn: 'Explore Gallery' },
    gallery: { sub: 'Visual Journey', title: 'Gallery of Memories' },
    reservation: {
      sub: 'Table Reservation', title: 'Join Us for an', titleItalic: 'Unforgettable Meal', desc: 'Please provide your details to reserve a table. For groups larger than 10, please contact us directly.',
      name: 'Full Name', email: 'Email', date: 'Date', time: 'Time', guests: 'Guests', requests: 'Special Requests (Optional)',
      btn: 'Confirm Reservation', successTitle: 'Thank You for Your Booking', successDesc: 'We have received your reservation and will send a confirmation email shortly.', rebook: 'Book Again'
    },
    footer: { desc: 'We are committed to presenting the best of Chinese culinary heritage through modern perspectives and techniques.', contact: 'Contact Us', hours: 'Hours', lunch: 'Lunch', dinner: 'Dinner', daily: 'Open Daily' },
    concierge: { title: 'Digital Concierge', desc: 'Tell us your preferences and we will craft a bespoke set menu just for you.', placeholder: 'e.g. I love spicy food and seafood...', btn: 'Generate My Experience', loading: 'Consulting Head Chef...', pairing: 'Chef\'s Pairing', logic: 'Why this works' }
  }
};

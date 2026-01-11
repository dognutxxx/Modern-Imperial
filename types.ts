
export interface MenuItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface Recommendation {
  setMenuName: string;
  items: string[];
  pairing: string;
  reasoning: string;
}

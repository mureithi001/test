export interface EBook {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  featured: boolean;
  created_at: string;
}

export enum Category {
  Restaurant = 'Restaurant',
  Hotel = 'Hotel',
  Cafe = 'Café',
  Attraction = 'Attraction',
  Shopping = 'Shopping',
  Service = 'Service'
}

export interface Review {
  id: string;
  user: string;
  avatar?: string;
  rating: number;
  date: string;
  comment: string;
  response?: string;
}

export interface Business {
  id: string;
  name: string;
  category: Category;
  rating: number;
  reviewCount: number;
  distance: string;
  address: string;
  image: string;
  gallery: string[];
  description: string;
  isFavorite: boolean;
  coordinates: { lat: number; lng: number };
  reviews: Review[];
  priceLevel?: string; // e.g. $$
  openUntil?: string;
}

export interface User {
  name: string;
  email: string;
  role: 'user' | 'business_owner';
}
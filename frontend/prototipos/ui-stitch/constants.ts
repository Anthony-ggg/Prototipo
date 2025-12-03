import { Business, Category } from './types';

export const MOCK_BUSINESSES: Business[] = [
  {
    id: '1',
    name: 'Café del Parque',
    category: Category.Cafe,
    rating: 4.5,
    reviewCount: 123,
    distance: '1.2 km',
    address: 'Calle Bolívar y Rocafuerte, Loja',
    image: 'https://picsum.photos/id/431/800/600',
    gallery: ['https://picsum.photos/id/431/800/600', 'https://picsum.photos/id/425/800/600', 'https://picsum.photos/id/325/800/600'],
    description: 'A cozy spot right next to the central park, perfect for organic coffee and pastries.',
    isFavorite: false,
    coordinates: { lat: -3.9931, lng: -79.2042 },
    priceLevel: '$$',
    openUntil: '20:00',
    reviews: [
      { id: 'r1', user: 'Carlos Mendoza', rating: 5, date: '2 days ago', comment: 'Excellent coffee and atmosphere!', avatar: 'https://ui-avatars.com/api/?name=Carlos+Mendoza' }
    ]
  },
  {
    id: '2',
    name: 'Hotel Loja Imperial',
    category: Category.Hotel,
    rating: 5.0,
    reviewCount: 89,
    distance: '2.5 km',
    address: 'Av. Universitaria, Loja',
    image: 'https://picsum.photos/id/1040/800/600',
    gallery: ['https://picsum.photos/id/1040/800/600'],
    description: 'Luxury accommodation in the heart of the city with modern amenities.',
    isFavorite: true,
    coordinates: { lat: -3.9950, lng: -79.2000 },
    reviews: []
  },
  {
    id: '3',
    name: 'Plaza Central',
    category: Category.Attraction,
    rating: 4.2,
    reviewCount: 450,
    distance: '0.8 km',
    address: 'Centro Histórico',
    image: 'https://picsum.photos/id/1047/800/600',
    gallery: ['https://picsum.photos/id/1047/800/600'],
    description: 'The main square of Loja, surrounded by colonial architecture and gardens.',
    isFavorite: false,
    coordinates: { lat: -3.9910, lng: -79.2050 },
    reviews: []
  },
  {
    id: '4',
    name: 'El Rincón del Sabor',
    category: Category.Restaurant,
    rating: 4.0,
    reviewCount: 120,
    distance: '3.1 km',
    address: 'Av. Cuxibamba y Olmedo',
    image: 'https://picsum.photos/id/1060/800/600',
    gallery: ['https://picsum.photos/id/1060/800/600', 'https://picsum.photos/id/835/800/600', 'https://picsum.photos/id/292/800/600'],
    description: 'Traditional Ecuadorian cuisine served with a modern twist.',
    isFavorite: false,
    coordinates: { lat: -3.9800, lng: -79.2100 },
    openUntil: '22:00',
    reviews: [
      { id: 'r2', user: 'Ana Lucia Torres', rating: 4, date: '1 week ago', comment: 'Great food, slightly slow service.', avatar: 'https://ui-avatars.com/api/?name=Ana+Lucia' },
      { id: 'r3', user: 'John Doe', rating: 5, date: '5 days ago', comment: 'Amazing service and delicious food. Highly recommend!', response: 'Thank you John! We are glad you enjoyed it.' }
    ]
  },
  {
    id: '5',
    name: 'Parque Jipiro',
    category: Category.Attraction,
    rating: 4.9,
    reviewCount: 1200,
    distance: '4.0 km',
    address: 'North Loja',
    image: 'https://picsum.photos/id/1020/800/600',
    gallery: ['https://picsum.photos/id/1020/800/600'],
    description: 'A large recreational park featuring architectural replicas from around the world.',
    isFavorite: false,
    coordinates: { lat: -3.9600, lng: -79.2000 },
    reviews: []
  },
  {
    id: '6',
    name: 'La Tertulia Café',
    category: Category.Cafe,
    rating: 4.6,
    reviewCount: 56,
    distance: '1.8 km',
    address: 'Calle 24 de Mayo',
    image: 'https://picsum.photos/id/1063/800/600',
    gallery: ['https://picsum.photos/id/1063/800/600'],
    description: 'Best place for books and coffee lovers.',
    isFavorite: false,
    coordinates: { lat: -3.9920, lng: -79.2080 },
    reviews: []
  }
];
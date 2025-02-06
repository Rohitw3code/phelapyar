import { Product } from '../types/product';

const API_BASE_URL = 'https://phelapyar-feetbjdkgve9cxax.canadacentral-01.azurewebsites.net';

// Default fallback products
const fallbackProducts: Product[] = [
  {
    "id": "p1",
    "name": "Love Potato Message",
    "desc": "Express your love with a unique potato message",
    "price": 200,
    "currency": "rupees",
    "images": [
      "https://potatoparcel.com/cdn/shop/files/potato-parcel-potato-parcel-30437425053781_800x.png?v=1686049817",
      "https://potatoparcel.com/cdn/shop/files/potato-love-bear-bundle-potato-parcel-30437407391829_800x.png?v=1686049458"
    ],
    "tags": ["love", "gift"],
    "type": "1",
    "date": new Date().toUTCString()
  },
  {
    "id": "p2",
    "name": "Birthday Potato Message",
    "desc": "Make their birthday special with a potato message",
    "price": 250,
    "currency": "rupees",
    "images": [
      "https://potatoparcel.com/cdn/shop/files/potato-parcel-potato-parcel-30437425053781_800x.png?v=1686049817",
      "https://potatoparcel.com/cdn/shop/files/potato-love-bear-bundle-potato-parcel-30437407391829_800x.png?v=1686049458"
    ],
    "tags": ["birthday", "gift"],
    "type": "1",
    "date": new Date().toUTCString()
  }
];

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    });
    
    if (!response.ok) {
      console.warn(`API returned status ${response.status}, using fallback data`);
      return fallbackProducts;
    }
    
    const data = await response.json();
    
    if (!data || !data.products || !Array.isArray(data.products)) {
      console.warn('Invalid API response format, using fallback data');
      return fallbackProducts;
    }
    
    return data.products;
  } catch (error) {
    console.warn('Error fetching products, using fallback data:', error);
    return fallbackProducts;
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        return fallbackProducts[0];
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const product = await response.json();
    return product;
  } catch (error) {
    console.warn('Error fetching product, using fallback data:', error);
    return fallbackProducts[0];
  }
}

export async function postProduct(product: Omit<Product, 'id'>): Promise<Product> {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(product),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}
export interface Item {
  color: string[];
  description: string;
  images: string[];
  price: number;
  rating: number;
  size: string[];
  tags: string[];
  title: string;
  _id: Oid;
}

interface Oid {
  $oid: string;
}

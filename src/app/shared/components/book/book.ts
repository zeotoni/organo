export interface Book {
  title: string;
  author: string;
  img: Img;
  favorite: boolean;
  genre: Genre;
}

export interface Img {
  url: string;
  alt: string;
}

export interface Genre {
  id: string;
  value: string;
  books: Book[];
}

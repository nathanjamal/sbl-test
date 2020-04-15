export interface GalleryItem {
  id: number;
  title: string;
  url: string;
  image: string;
  runningTime?: string;
}

export interface GalleryRequestResponse {
  status: number;
  message: string;
  items?: GalleryItem[];
}

export interface GalleryData {
  data: GalleryItem[];
  loading: boolean;
  error?: string;
}

export interface GalleryProps {
  data: GalleryItem[];
}

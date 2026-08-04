// Partnerler için uygun veri tipleri
export interface WorkDay {
  isOpen: boolean;
  from: string;
  to: string;
}

export interface FriendItem {
  _id: string;
  address: string | null;
  addressUrl: string | null;
  email: string | null;
  imageUrl: string;
  phone: string | null;
  title: string;
  url: string;
  workDays: WorkDay[] | null;
}

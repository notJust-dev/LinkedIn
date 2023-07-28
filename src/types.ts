export type Post = {
  id: string;
  content: string;
  image?: string;
  likes: number;
  profile: User;
};

export type User = {
  id: string;
  name: string;
  position: string;
  image?: string;
  backimage?: string;
  about?: string;
  experience?: Experience[];
};

export type Experience = {
  id: string;
  title: string;
  companyname: string;
  companyimage?: string;
};

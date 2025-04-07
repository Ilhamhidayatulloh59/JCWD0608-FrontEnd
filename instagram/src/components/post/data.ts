interface IUser {
  username: string;
  profile_pic: string;
}

export interface IPost {
  id: number;
  image_url: string;
  content?: string;
  user: IUser;
}

const post: IPost = {
  id: 1,
  image_url:
    "https://res.cloudinary.com/dn6uglajh/image/upload/v1733215820/avatar/sw5tupywxl9k5tnffayx.webp",
  content: "Nonton money heist seru banget",
  user: {
    username: "andi123",
    profile_pic:
      "https://res.cloudinary.com/dn6uglajh/image/upload/v1733990935/blank-image_yfczs3.jpg",
  },
};

export const posts: IPost[] = [post, post, post, post, post];

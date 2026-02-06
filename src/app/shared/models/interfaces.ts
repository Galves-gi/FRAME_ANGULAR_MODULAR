export interface Comment {
  user: string;
  text: string;
}

export interface Photo {
    id?: string;
    image: string;
    text: string;
    hashtag?: string;
    comment: Comment[];
}
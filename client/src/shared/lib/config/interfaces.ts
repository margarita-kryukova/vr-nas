export interface VideoType {
  type: string;
  src: string;
}

export interface IImage {
  url: string;
  urlDesk?: string;
  webp: string;
  alt?: string;
  className?: string;
}

export interface IVideo {
  src: VideoType[];
  preview: {
    jpg: string;
    webp: string;
  };
}

export interface ILink {
  name: string;
  href: string;
}

export interface IUser {
  name: string;
  major: string;
  contacts?: {
    inst: string;
    fb: string;
    twitter: string;
  };
  images: IImage;
}

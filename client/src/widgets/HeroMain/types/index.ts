import { ILink, IVideo } from "shared/lib/config/interfaces";

interface IClientImage {
  url: string;
  webp: string;
}
interface IClients {
  count: string;
  text: string;
  decor: string;
  images: IClientImage[];
}
export interface IHeroMainProps {
  title: string;
  description: string;
  link: ILink;
  video: IVideo;
  clients: IClients;
}

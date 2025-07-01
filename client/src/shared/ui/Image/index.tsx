import type { IImage } from "shared/lib/config/interfaces";

const Image: React.FC<IImage> = ({ url, urlDesk, webp, alt, className }) => {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      {urlDesk && <source srcSet={urlDesk} media="(min-width: 768px)" />}
      <img
        src={url}
        alt={alt || "VR Hero"}
        loading="lazy"
        className={className}
      />
    </picture>
  );
};

export default Image;

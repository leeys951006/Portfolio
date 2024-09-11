import Image from 'next/image';

interface InfoLinkProps {
  href: string;
  src: string;
  alt: string;
}

const InfoLink: React.FC<InfoLinkProps> = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Image src={src} alt={alt} width={40} height={40} className="cursor-pointer hover:opacity-75 transition-opacity duration-200" />
  </a>
);

export default InfoLink;

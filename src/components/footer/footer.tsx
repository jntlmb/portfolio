import { ibmPlexMono } from '../fonts';
import Image from 'next/image';
import nextIcon from '../../../public/next.svg';

export default function Footer() {
  return (
    <footer className={`${ibmPlexMono.className} text-white flex gap-3`}>
      <p className="inline-block bg-amber-600">Made with</p>
      <a target="_blank" href="https://nextjs.org" rel="noopener noreferrer">
        <Image
          priority
          src={nextIcon}
          alt="next.js icon"
          height={13}
          className="inline-block ml-1 mb-[3px] invert"
        />
      </a>
    </footer>
  );
}

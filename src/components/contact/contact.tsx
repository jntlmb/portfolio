import Image from 'next/image';
import mailIcon from '../../../public/gmail.png';
import instagramIcon from '../../../public/instagram.png';
import githubIcon from '../../../public/github.png';
import linkedinIcon from '../../../public/linkedin.png';
import { ibmPlexMono } from '../fonts';

export default function Contact() {
  return (
    <div
      className={`${ibmPlexMono.className} text-white mt-75 lg:ml-50 flex flex-col items-center md:items-baseline`}
    >
      <h2 className=" text-2xl sm:text-4xl md:text-5xl mb-5 text-center lg:text-start text-nowrap text-white">
        <span className="bg-red-600 mb-3">Contact</span>
      </h2>
      <div className="flex gap-5 justify-start md:text-start">
        <a
          href="mailto:jonathan.leimbach2408@gmail.com"
          rel="noopener noreferrer"
        >
          <Image src={mailIcon} alt="mail icon" height={26} />
        </a>
        <a
          href="https://github.com/jntlmb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={githubIcon} alt="github icon" height={26} />
        </a>
        <a
          href="https://instagram.com/jntlmb"
          target="_blank"
          rel="noopener norefferer"
        >
          <Image src={instagramIcon} alt="instagram icon" height={26} />
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-leimbach/"
          target="_blank"
          rel="noopener norefferer"
        >
          <Image src={linkedinIcon} alt="linkedin icon" height={26} />
        </a>
      </div>
    </div>
  );
}

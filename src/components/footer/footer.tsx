import { ibmPlexMono } from '../fonts';

export default function Footer() {
  return (
    <div className="">
      <footer
        className={`${ibmPlexMono.className} text-white bg-blue-600 inline-block`}
      >
        Made in Next.js
      </footer>
    </div>
  );
}

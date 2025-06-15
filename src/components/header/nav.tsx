import { eduQLD, ibmPlexMono } from '../fonts';
import NavLinks from './nav-links';

export default function Nav() {
  return (
    <nav
      className={`${ibmPlexMono.className} flex justify-between text-xl text-white`}
    >
      <h1 className={`${eduQLD.className} bg-blue-600`}>vjl</h1>
      <div className="flex gap-6">
        <NavLinks />
      </div>
    </nav>
  );
}

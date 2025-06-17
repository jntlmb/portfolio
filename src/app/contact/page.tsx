import { ibmPlexMono } from '@/components/fonts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'vjl - Contact',
  description: '...',
};

export default function Page() {
  return (
    <div className={`${ibmPlexMono.className} text-white mt-75 lg:ml-50`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl mb-3 text-center lg:text-start bg-red-600 inline-block">
        Contact
      </h2>
    </div>
  );
}

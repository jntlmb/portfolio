import Contact from '@/components/contact/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'vjl - Contact',
  description: '...',
};

export default function Home() {
  return (
    <div className="">
      <Contact />
    </div>
  );
}

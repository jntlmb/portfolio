import Greeter from '@/components/main/greeter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'vjl - Hey',
  description: '...',
};

export default function Home() {
  return (
    <div className="">
      <Greeter />
    </div>
  );
}

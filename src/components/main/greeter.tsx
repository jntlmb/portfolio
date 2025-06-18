'use client';

import { ibmPlexMono } from '../fonts';
import { TypeAnimation } from 'react-type-animation';

export default function Greeter() {
  return (
    <div className={`${ibmPlexMono.className} text-white mt-75 lg:ml-50`}>
      <h2 className="text-2xl sm:text-4xl md:text-5xl mb-3 text-center lg:text-start text-nowrap">
        {`Hey, I'm`} <span className="bg-blue-600">Jonathan</span>. {`:)`}
      </h2>
      <div className="text-center lg:text-start">
        <TypeAnimation
          sequence={[
            "I'm a Web Developer.",
            2000,
            "I'm always learning.",
            2000,
            "I'm based in Germany.",
            2000,
          ]}
          wrapper="span"
          speed={70}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
          className="text-xl md:text-2xl"
        />
      </div>
    </div>
  );
}

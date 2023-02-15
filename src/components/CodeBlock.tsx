import { FC } from 'react';
import MacOsIcons from './MacOsIcons';

const CodeBlock: FC = () => {
  return (
    <div className="py-[10px] px-4 rounded-[10px] bg-primary/40 backdrop-blur-lg my-auto shadow-[0_0_35px_5px] sm:shadow-[0_0_70px_5px] sm:shadow-secondary/30 shadow-secondary/30 hover:shadow-secondary/40 transition-shadow w-full max-h-[400px]">
      <MacOsIcons />
      <div className="flex items-center text-white font-jbMono sm:text-[32px] text-[12px]">
        <div>
          <div>
            <span className="text-[#c678dd]">import</span> {'{ '}
            <span className="text-[#e06c75]">FC</span>
            {' }'} <span className="text-[#c678dd]">from</span>{' '}
            <span className="text-[#98c379]">'react'</span>;
          </div>
          <div>&nbsp;</div>
          <div>
            <span className="text-[#c678dd]">const</span>{' '}
            <span className="text-[#e5c07b]">Hello</span>:{' '}
            <span className="text-[#e5c07b]">FC</span>{' '}
            <span className="text-[#56b6c2]">=</span> (){' '}
            <span className="text-[#c678dd]">=&gt;</span> {'{'}
          </div>
          <div className="text-typing-animation">
            <p>
              &nbsp; <span className="text-[#c678dd]">return</span> &lt;
              <span className="text-[#e06c75]">div</span>
              &gt;Hello!&lt;/<span className="text-[#e06c75]">div</span>
              &gt;;
            </p>
            <div>{'}'}</div>
            <div>&nbsp;</div>
            <div>
              <span className="text-[#c678dd]">export default</span>{' '}
              <span className="text-[#e5c07b]">Hello</span>;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;

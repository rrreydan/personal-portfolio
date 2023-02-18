import React, { FC } from 'react';
import MacOsIcons from './MacOsIcons';

const CodeBlock: FC = () => {
  const handleOnMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      className="code-block relative py-[10px] px-4 rounded-[10px] bg-primary/40 backdrop-blur-md my-auto shadow-[0_0_35px_5px] xl:shadow-[0_0_70px_5px] w-full max-h-[400px]"
      onMouseMove={handleOnMouseMove}
    >
      <MacOsIcons />
      <div className="flex items-center text-white font-jbMono xl:text-[32px] lg:text-[16px] text-[12px]">
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

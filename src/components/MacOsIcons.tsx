import { mdiCircle } from '@mdi/js';
import Icon from '@mdi/react';
import { FC } from 'react';

const MacOsIcons: FC = () => {
  return (
    <div className="flex gap-2 mb-3 sm:mb-5">
      <Icon
        path={mdiCircle}
        color={'#fd4c3a'}
        className="sm:h-[24px] sm:w-[24px] h-[12px] w-[12px]"
      />
      <Icon
        path={mdiCircle}
        color={'#ffbf05'}
        className="sm:h-[24px] sm:w-[24px] h-[12px] w-[12px]"
      />
      <Icon
        path={mdiCircle}
        color={'#09e31b'}
        className="sm:h-[24px] sm:w-[24px] h-[12px] w-[12px]"
      />
    </div>
  );
};

export default MacOsIcons;

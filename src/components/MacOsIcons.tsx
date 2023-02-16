import { mdiCircle } from '@mdi/js';
import Icon from '@mdi/react';
import { FC } from 'react';

const MacOsIcons: FC = () => {
  return (
    <div className="flex gap-2 mb-3 xl:mb-5">
      <Icon
        path={mdiCircle}
        color={'#fd4c3a'}
        className="xl:h-[24px] xl:w-[24px] h-[12px] w-[12px]"
      />
      <Icon
        path={mdiCircle}
        color={'#ffbf05'}
        className="xl:h-[24px] xl:w-[24px] h-[12px] w-[12px]"
      />
      <Icon
        path={mdiCircle}
        color={'#09e31b'}
        className="xl:h-[24px] xl:w-[24px] h-[12px] w-[12px]"
      />
    </div>
  );
};

export default MacOsIcons;

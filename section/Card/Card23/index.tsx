import React from 'react';
import { Slider } from '@/section/Carousel/Slider';
import { getCurrentBreakpoint } from '@/utils/slider';
import { useWindowWidth } from '@/hooks/useContainDimensions';
import { GroupWrapper } from './styled';
import { ComponentProps } from './types';
import { CardItem23 } from '../Item/CardItem23';

const groupSizes = {
  default: 3,
  desktop: 3,
  laptop: 2,
  tablet: 2,
  mobile: 1,
};

export const Card23: React.FC<ComponentProps> = ({ data, customStyle }) => {
  const width = useWindowWidth();

  const currentBreakpoint = getCurrentBreakpoint(width);

  const groupSize = groupSizes?.[currentBreakpoint] || 1;
  const sliderPage = Math.ceil(data.length / groupSize);

  return (data.length > groupSize ? (
    <Slider
      customStyle={customStyle.slider}
      dataLength={sliderPage}
    >
      {[...Array(sliderPage).keys()].map((index) => (
        // eslint-disable-next-line react/jsx-key
        <GroupWrapper>
          {...data.slice(index * groupSize, (index * groupSize) + groupSize).map((item) => (
            <CardItem23
              key={item.title}
              data={item}
              customStyle={customStyle?.item}
            />
          ))}
        </GroupWrapper>
      ))}
    </Slider>
  )
    : (
      <GroupWrapper>
        {data.map((item) => (
          <CardItem23
            key={item.title}
            data={item}
            customStyle={customStyle?.item}
          />
        ))}
      </GroupWrapper>
    ));
};
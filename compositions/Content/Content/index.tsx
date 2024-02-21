import React from 'react';
import { Hyperlink } from '@/components/Hyperlink';
import { Typography } from '@/components/Typography';
import { HyperlinkWrapper } from '../styled';
import { Wrapper } from './styled';
import { Item as ItemType } from '../Content11/types';
import { ContentCustomStyle } from './types';

type Props = {
  data: ItemType;
  customStyle: ContentCustomStyle | undefined;
};

const Item: React.FC<Props> = ({ data, customStyle }) => (
  <Wrapper>
    {data.title && <Typography rwdFontSize={{ default: 'h5', tablet: 'h7' }} color={customStyle?.title?.color}>{data.title}</Typography>}
    {data.desc && <Typography rwdFontSize={{ default: 'body3', tablet: 'body5' }} color={customStyle?.desc?.color} margin="12px 0 0">{data.desc}</Typography>}

    {data?.hyperlink
      && (
        <HyperlinkWrapper>
          <Hyperlink
            color={customStyle?.hyperlink?.color}
            href={data.hyperlink.href}
          >
            {data.hyperlink.label}
          </Hyperlink>
        </HyperlinkWrapper>
      )}
  </Wrapper>
);

export default Item;
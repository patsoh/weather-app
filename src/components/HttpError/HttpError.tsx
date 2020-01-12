import React from 'react';
import { 
  Wrapper
} from './styles';
import { IProps } from './interfaces';
import { DescriptionError } from '../../utils/sharedStyles';

export const HttpError: React.SFC<IProps> = ({
  description
}) => (
  <Wrapper>
    <DescriptionError>
      {description}
    </DescriptionError>
  </Wrapper>
);
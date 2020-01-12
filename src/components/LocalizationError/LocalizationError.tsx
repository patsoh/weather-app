import React from 'react';
import { 
  Wrapper
} from './styles';
import { DescriptionError } from '../../utils/sharedStyles';

export const LocalizationError = () => (
  <Wrapper>
    <DescriptionError>
      No access to localization.
    </DescriptionError>
  </Wrapper>
);
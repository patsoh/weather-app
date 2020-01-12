import React from 'react';
import { 
  Label,
  Value,
  ValueWrapper
} from './styles';
import { IProps } from './interfaces';

export const WeatherValue: React.SFC<IProps> = ({ 
  value,
  description,
  unit
}) => (
  <ValueWrapper>
  <Label>
    {description}
  </Label>
  <Value>
    {value} {unit}
  </Value>
</ValueWrapper>
);
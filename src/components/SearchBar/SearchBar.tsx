import React, { useCallback, useState } from 'react';
import { 
  Wrapper,
  Input
} from './styles';
import { IProps } from './interfaces';
// @ts-ignore
import debounce from 'lodash.debounce';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const SearchBar: React.SFC<IProps> = ({
  fetchCurrentWeather,
  clearCurrentWeather
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleDebounce = useCallback(debounce((place: string) => place.length > 1 && fetchCurrentWeather(null, null, place), 1000), []);

  const handleChange = (event: InputEvent) => {
    const value: string = event.target.value;
    setInputValue(value);
    value.length > 0 && handleDebounce(value);
    value.length === 0 && clearCurrentWeather();
  }
  
  return (
    <Wrapper>
      <Input
        placeholder='Type place'
        onChange={(event: InputEvent) => handleChange(event)}
        value={inputValue}
      />
    </Wrapper>
  );
}

export default SearchBar;
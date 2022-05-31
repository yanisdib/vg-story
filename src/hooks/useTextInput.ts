import { useState } from 'react';

import { InputHookReturnedValue } from '../interfaces';


export const useTextInput = (initialValue: string)
    : InputHookReturnedValue<string> => {

    const [value, setValue] = useState(initialValue);

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>)
        : void => setValue(event.currentTarget.value);

    return [value, handleChangeValue];
}
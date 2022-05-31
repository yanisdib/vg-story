import { useState } from 'react';

import {
    ImageAttributes,
    InputHookReturnedValue
} from '../interfaces';


export const useImageUploader = (initialValue: ImageAttributes)
    : InputHookReturnedValue<typeof initialValue> => {

    const [value, setValue] = useState(initialValue);

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>)
        : void => {

        event.currentTarget.files && (
            setValue({
                src: URL.createObjectURL(event.currentTarget.files[0])
            })
        );
    };

    return [value, handleChangeValue];
}
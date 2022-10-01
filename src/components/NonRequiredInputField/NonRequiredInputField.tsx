import { FC } from 'react';
import uuid from 'react-uuid';

//NOTE Interface is a structure which acts as a contract in our application.
//It defines the syntax for classes to follow, means a class which implements
//an interface is bound to implement all its members.

const key = uuid();
interface NonRequiredInputProps {
    type: string;
    className: string;
    defaultValue: string;
    name: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
//NOTE :FC means that our component is a FunctionComponent

//NOTE: <InputsProps> means that our component will receive props of type InputProps
const InputField: FC<NonRequiredInputProps> = ({
    type,
    className,
    name,
    defaultValue,
    placeholder,
    onChange
}) => {
    //NOTE: The main purpose of keys is to help React
    // differentiate and distinguish elements from each other, increasing its
    // performance when diffing between the virtual and real DOM.

    return (
        <>
            <input
                type={type}
                className={className}
                name={name}
                defaultValue={defaultValue}
                placeholder={placeholder}
                key={key}
                onChange={onChange}
            />
        </>
    );
};

export default InputField;

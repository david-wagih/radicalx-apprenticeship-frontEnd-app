import { FC } from 'react';
import uuid from 'react-uuid';

//NOTE Interface is a structure which acts as a contract in our application.
//It defines the syntax for classes to follow, means a class which implements
//an interface is bound to implement all its members.
interface InputProps {
    type: string;
    className: string;
    value: string;
    name: string;
    placeholder: string;
}
//NOTE :FC means that our component is a FunctionComponent

//NOTE: <InputsProps> means that our component will receive props of type InputProps
const InputField: FC<InputProps> = ({
    type,
    className,
    name,
    value,
    placeholder
}) => {
    //NOTE: The main purpose of keys is to help React
    // differentiate and distinguish elements from each other, increasing its
    // performance when diffing between the virtual and real DOM.
    const key = uuid();
    console.log(key);
    return (
        <>
            <input
                type={type}
                className={className}
                name={name}
                value={value}
                placeholder={placeholder}
                key={key}
                required
            />
        </>
    );
};

export default InputField;

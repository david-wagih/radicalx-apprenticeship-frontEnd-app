import { FC } from 'react';

import { action } from '../../../features/CreatingApprenticeship/Controller';
import InputField from '../../InputField/InputField';

interface cardTextProps {
    type: string;
    dispatch: (action: action) => void;
    text?: string;
    placeholder: string;
    name: string;
}
const CardText: FC<cardTextProps> = ({
    dispatch,
    type,
    text,
    placeholder,
    name
}) => {
    return (
        <div className="text-wrapper order-1 flex h-6 w-[722px] flex-none flex-grow-0 flex-row items-center gap-[24px] self-stretch p-0">
            <InputField
                type="text"
                className="card-text order-none flex h-6 w-full flex-none flex-grow-0 items-center border-none text-lg font-medium not-italic leading-6 text-gray-900 opacity-70 focus:outline-none"
                onChange={e =>
                    dispatch({
                        type: type,
                        payload: e.target.value
                    })
                }
                value={text || ''}
                placeholder={placeholder}
                name={name}
            />
        </div>
    );
};

export default CardText;

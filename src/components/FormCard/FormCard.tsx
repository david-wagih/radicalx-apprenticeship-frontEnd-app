import { Children, FC } from 'react';

import CardHeader from './CardHeader/CardHeader';
interface formCardProps {
    header: string;
    myKey: string;
    children: JSX.Element;
}
const FormCard: FC<formCardProps> = (
    props: React.PropsWithChildren<formCardProps>
) => {
    return (
        <div
            className="form-card box-border flex flex-col items-start p-6 h-fit bg-white flex-none order-none flex-grow-0
        gap-[16px] w-full border-[1px]  border-[#793EF5] border-solid rounded-[24px]
        z-[7]
        "
            key={props.myKey}
        >
            <CardHeader header={props.header} />
            {props.children}
        </div>
    );
};

export default FormCard;

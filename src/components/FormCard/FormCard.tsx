import { FC } from 'react';

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
            className="form-card z-[7] order-none box-border flex h-fit w-full flex-none flex-grow-0 flex-col items-start gap-[16px] rounded-[24px] border-[1px]  border-solid border-[#793EF5] bg-white p-6"
            key={props.myKey}
        >
            <CardHeader header={props.header} />
            {props.children}
        </div>
    );
};

export default FormCard;

import Paragraph from '../Paragraph/Paragraph';
import Title from '../name/Tittle';
import Ico1 from '../logs.tsx/ico1';
import Ico2 from '../logs.tsx/ico2';
import Ico3 from '../logs.tsx/ico3';
import Tag from '../Tag/Tag';
const Box = () => {
    const Tags = ['Manager', 'Manager', 'Manager', 'Manager'];
    const Orders = ['order-none', 'order-1', 'order-none', 'order-1'];
    return (
        <div className="box-border flex flex-col items-start p-5 h-56 bg-white flex-none order-none self-stretch flex-grow-0 w-[365px] border-[#CFD3D9] border rounded-lg ">
            <div className="inline-flex">
                <Title text="Mobile App Design" /> <Ico1 /> <Ico2 /> <Ico3 />
            </div>
            <div className="mb-[35px]">
                <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magaliqua." />
            </div>
            <div className="flex flex-col items-start p-0 h-16 flex-none order-1 flex-grow-0 w-[283px] gap-[8xp] ">
                {Tags.map((tag, index) => {
                    return <Tag text={tag} order={Orders[index]} key={index} />;
                })}
            </div>
        </div>
    );
};
export default Box;

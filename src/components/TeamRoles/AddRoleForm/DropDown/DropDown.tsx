import { FC, useContext, useState } from 'react';

const searchInOptions = (options: string[], searchValue: string) => {
    let optionsBySearchValue = options.slice(0);
    optionsBySearchValue = optionsBySearchValue
        .filter(role => role.toLowerCase().includes(searchValue.toLowerCase()))
        .sort(
            (a, b) =>
                a.toLowerCase().indexOf(searchValue.toLowerCase()) -
                b.toLowerCase().indexOf(searchValue.toLowerCase())
        );
    return optionsBySearchValue;
};

interface DropDownProps {
    options: string[];
    setShowDropDown: (value: boolean) => void;
    setOption: (value: string) => void;
}

const DropDown: FC<DropDownProps> = ({
    options,
    setShowDropDown,
    setOption
}) => {
    const [search, setSearch] = useState('Search');
    const [optionsBySearchValue, setoptionsBySearchValue] = useState(options);
    return (
        <div className="box-border flex flex-col items-start p-4 absolute h-fit bg-white gap-[12px] w-[508px] left-[70px] top-[105px] border-[1px]  border-[#E2E6EB] border-solid rounded-[20px] appearance-none">
            <input
                type="text"
                className="flex flex-row items-start p-2 h-10 bg-gray-200 rounded-lg flex-none order-none self-stretch flex-grow-0 gap-[10px] w-[476px]"
                placeholder="Search"
                onChange={e => {
                    {
                        setSearch(e.target.value);
                        setoptionsBySearchValue(
                            searchInOptions(options, e.target.value)
                        );
                    }
                }}
            />
            <div className="roles flex flex-col items-start p-0 w-fit h-fit flex-none order-1 flex-grow-0 gap-[8px]">
                {optionsBySearchValue.map(option => (
                    <div
                        className="h-6 not-italic font-medium text-base leading-6 flex items-center text-gray-900 flex-none order-none flex-grow-0 hover:bg-[#793EF5] rounded-xl p-2 hover:cursor-pointer"
                        onClick={() => {
                            setOption(option);
                            setShowDropDown(false);
                        }}
                        key={option + Math.random()}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropDown;

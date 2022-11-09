import { FC, useState } from 'react';

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
    const [search, setSearch] = useState('');
    const [optionsBySearchValue, setoptionsBySearchValue] = useState(options);
    return (
        <div className="absolute left-[70px] top-[105px] box-border flex h-fit w-[508px] appearance-none flex-col items-start gap-[12px] rounded-[20px] border-[1px]  border-solid border-[#E2E6EB] bg-white p-4">
            <input
                value={search}
                type="text"
                className="order-none flex h-10 w-[476px] flex-none flex-grow-0 flex-row items-start gap-[10px] self-stretch rounded-lg bg-gray-200 p-2"
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
            <div className="roles order-1 flex h-fit w-fit flex-none flex-grow-0 flex-col items-start gap-[8px] p-0">
                {optionsBySearchValue.map(option => (
                    <button
                        className="order-none flex h-6 flex-none flex-grow-0 items-center rounded-xl p-2 text-base font-medium not-italic leading-6 text-gray-900 hover:cursor-pointer hover:bg-[#793EF5]"
                        onClick={() => {
                            setOption(option);
                            setShowDropDown(false);
                        }}
                        key={option + Math.random()}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DropDown;

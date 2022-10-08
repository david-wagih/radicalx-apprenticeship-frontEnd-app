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
const addNewOption = (chosenOptions: string[], newOption: string) => {
    if (chosenOptions.length === 3) {
        chosenOptions.pop();
    }
    chosenOptions.push(newOption);
    return chosenOptions;
};
const removeOption = (chosenOptions: string[], optionToRemove: string) => {
    chosenOptions = chosenOptions.filter(option => option !== optionToRemove);
    return chosenOptions;
};

interface CheckBoxDropDownProps {
    options: string[];
    setShowCheckBoxDropDown: (value: boolean) => void;
    whichDropDown: string;
    chosenOptions: string[];
    setChosenOptions: (value: string[]) => void;
}

const CheckBoxDropDown: FC<CheckBoxDropDownProps> = ({
    options,
    setShowCheckBoxDropDown,
    whichDropDown,
    chosenOptions,
    setChosenOptions
}) => {
    let topValue = 'top-[460px]';
    if (whichDropDown === 'compSkills') topValue = 'top-[585px]';
    const [search, setSearch] = useState('Search');
    const [optionsBySearchValue, setoptionsBySearchValue] = useState(options);
    return (
        <div
            className={`box-border flex flex-col items-start p-4 absolute h-fit bg-white gap-[12px] w-[508px] left-[70px] ${topValue} border-[1px]  border-[#E2E6EB] border-solid rounded-[20px] appearance-none`}
        >
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
                        className="check-boxes flex flex-row items-start p-0 w-20 h-6 flex-none order-none flex-grow-0 gap-[16px]"
                        key={option}
                    >
                        <input
                            type="checkbox"
                            className="w-6 h-6 flex-none order-none flex-grow-0"
                            name={option}
                            checked={chosenOptions.includes(option)}
                            onChange={e => {
                                const target = e.target as HTMLInputElement;
                                target.checked
                                    ? setChosenOptions(
                                          addNewOption(
                                              chosenOptions,
                                              target.name
                                          )
                                      )
                                    : setChosenOptions(
                                          removeOption(
                                              chosenOptions,
                                              target.name
                                          )
                                      );
                                setShowCheckBoxDropDown(false);
                            }}
                        />
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CheckBoxDropDown;

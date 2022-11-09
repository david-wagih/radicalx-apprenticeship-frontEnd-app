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
    whichDropDown?: string;
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
    const [search, setSearch] = useState('');
    const [optionsBySearchValue, setoptionsBySearchValue] = useState(options);
    return (
        <div
            className={`absolute left-[70px] box-border flex h-fit w-[508px] flex-col items-start gap-[12px] bg-white p-4 ${topValue} appearance-none  rounded-[20px] border-[1px] border-solid border-[#E2E6EB]`}
        >
            <input
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
                value={search}
            />
            <div className="roles order-1 flex h-fit w-fit flex-none flex-grow-0 flex-col items-start gap-[8px] p-0">
                {optionsBySearchValue.map(option => (
                    <div
                        className="check-boxes order-none flex h-6 w-20 flex-none flex-grow-0 flex-row items-start gap-[16px] p-0"
                        key={option}
                    >
                        <input
                            type="checkbox"
                            className="order-none h-6 w-6 flex-none flex-grow-0"
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

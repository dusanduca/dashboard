import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { addedTask as tasks } from "../../../makeData";
import { Task } from "../../../interface";

interface OptionProps {
  label: string;
  value: string;
}

const createOption = (title: string): OptionProps => {
  const option: OptionProps = {
    label: title,
    value: title.toLowerCase().replace(/\W/g, ""),
  };
  return option;
};

const defaultOptions: OptionProps[] = tasks.map((task) =>
  createOption(task.title)
);

export default function Select() {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [selectedOption, setSelectedOption] = useState<Task | null>();

  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      const newOptions = [...options];
      newOptions.push(newOption);
      setOptions(newOptions);
      //   setValue(newOption);
    }, 1000);
  };

  return (
    <CreatableSelect
      isClearable
      isDisabled={isLoading}
      onCreateOption={handleCreate}
      isLoading={isLoading}
      options={options}
      onChange={(newValue) => setSelectedOption(newValue)}
    />
  );
}

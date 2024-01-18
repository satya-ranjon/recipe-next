"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TiTick } from "react-icons/ti";

const Select = ({
  label,
  initialData,
  initialSelectedData = [],
  getSelectedData = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    if (selectedData?.length > 0) {
      getSelectedData(selectedData);
    }
  }, [selectedData]);

  useEffect(() => {
    if (initialSelectedData?.length > 0) {
      setSelectedData(initialSelectedData);
    }
  }, [initialSelectedData]);

  const handleSelect = (data) => {
    const isSelected = selectedData?.find((item) => item?.id === data.id);
    if (isSelected) {
      // remove selected
      const newData = selectedData?.filter((item) => item.id !== isSelected.id);
      setSelectedData(newData);
      return;
    }
    // add selected
    setSelectedData((prev) => [...prev, data]);
  };

  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });

  return (
    <div ref={dropdownRef} className="text-neutral-800 space-y-1 ">
      <label className="text-xl font-semibold">{label} :</label>
      <div className="border-2  border-orange-200 relative">
        <h1
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-lg flex select-none justify-between items-center p-2 cursor-pointer">
          <span>Select</span>
          <IoIosArrowDown className={`text-2xl ${isOpen && "rotate-180"}`} />
        </h1>
        {isOpen && (
          <div className="z-50 shadow-sm shadow-orange-300 absolute w-full bg-orange-50 left-0 right-0 top-12">
            <div className=" w-full max-h-64 overflow-y-scroll">
              {initialData?.map((item) => {
                const isSelected = selectedData?.find((i) => i.id === item.id);
                return (
                  <div
                    onClick={() => handleSelect(item)}
                    key={item.id}
                    className={`
                          ${
                            isSelected
                              ? " bg-orange-400 text-white"
                              : "hover:bg-orange-100 duration-300 transition-colors "
                          }
                         select-none p-2 border-b border-orange-200 text-base font-normal  cursor-pointer flex items-center gap-2  justify-between group`}>
                    {item.label}
                    <TiTick
                      className={`text-xl ${
                        isSelected
                          ? ""
                          : " text-orange-500 hidden group-hover:block duration-300 transition-all"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;

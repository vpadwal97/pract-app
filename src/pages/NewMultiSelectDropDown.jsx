import { useEffect, useState } from "react";
// import IoIosInformationCircleCustom from "./IoIosInformationCircleCustom";
import Multiselect from "multiselect-react-dropdown";

const NewMultiSelectDropDown = ({
  flag,
  dropdownlist,
  selectedValues,
  onRemove,
  onSelect,
  label,
  placeholder,
  required,
  tooltipMessage,
}) => {
  const [payModeSelectData, setdropdownlist] = useState(dropdownlist);
  const [selectPayModeValues, setselectedValues] = useState(selectedValues);

  return (
    <>
      <div
        className="multi-select-form ui dropdown   form-select input-shadow "
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <label>
          {label}
          <span className={required}></span>
          {/* <IoIosInformationCircleCustom tooltipMessage={tooltipMessage} /> */}
        </label>
        <Multiselect
          placeholder={"--Please Select-- "}
          options={dropdownlist}
          selectedValues={selectedValues}
          onSelect={onSelect}
          displayValue="optionLabel"
          showCheckbox={true}
          id="optionValue"

          // showArrow={true}
        />
      </div>
    </>
  );
};
export default NewMultiSelectDropDown;

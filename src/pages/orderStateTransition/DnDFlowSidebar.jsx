import React, { useState } from 'react';
import SelectComponent from '../../components/SelectComponent';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  
  let [stateData] = useState([]);
  stateData = [
    {
      id: 1,
      optionLabel: "Order Shipped",
      optionValue: 1,
      optionDefaultValue: false,
    },
    {
      id: 2,
      optionLabel: "Order Placed",
      optionValue: 2,
      optionDefaultValue: false,
    },
    {
      id: 3,
      optionLabel: "Order Delivered",
      optionValue: 3,
      optionDefaultValue: false,
    },
    {
      id: 4,
      optionLabel: "Refund Processed",
      optionValue: 4,
      optionDefaultValue: false,
    },
    {
      id: 5,
      optionLabel: "Refund Intiated",
      optionValue: 5,
      optionDefaultValue: false,
    },
    {
      id: 6,
      optionLabel: "Return Initiated by Customer",
      optionValue: 6,
      optionDefaultValue: false,
    },
    {
      id: 7,
      optionLabel: "Return Order Received & Verified",
      optionValue: 7,
      optionDefaultValue: false,
    },
    {
      id: 8,
      optionLabel: "Return Pick-Up Initiated",
      optionValue: 8,
      optionDefaultValue: false,
    },
    {
      id: 9,
      optionLabel: "Order Cancelled",
      optionValue: 9,
      optionDefaultValue: false,
    },
    {
      id: 10,
      optionLabel: "In Delivery",
      optionValue: 10,
      optionDefaultValue: false,
    },
    {
      id: 11,
      optionLabel: "Order Confirmed",
      optionValue: 11,
      optionDefaultValue: false,
    },
  ];

  const [inputStates, setinputStates] = useState([]);
  const [defaultStates, setdefaultStates] = useState([]);
  const [output, setoutput] = useState([]);

  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, `${inputStates}_type_input`)} draggable>
      <SelectComponent
                value={inputStates}
                onChange={(e) => setinputStates(e.target.value)}
                dropdownlist={stateData}
                label="From State"
              />
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, `${defaultStates}_type_default`)} draggable>
      <SelectComponent
                value={defaultStates}
                onChange={(e) => setdefaultStates(e.target.value)}
                dropdownlist={stateData}
                label="From State"
              />
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, `${output}_type_output`)} draggable>
      <SelectComponent
                value={output}
                onChange={(e) => setoutput(e.target.value)}
                dropdownlist={stateData}
                label="From State"
              />
      </div>
    </aside>
  );
};

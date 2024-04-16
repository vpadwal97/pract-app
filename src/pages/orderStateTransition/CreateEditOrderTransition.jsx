import React, { useEffect, useState } from "react";
// import "../../../../../css/style.css";
import FlowCharts from "../../components/FlowCharts/FlowCharts";
import SelectComponent from "../../components/SelectComponent";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const CreateOrderStateTransition = () => {
  const [action, setAction] = useState(localStorage.getItem("action"));
  const navigate = useNavigate();
  const editData = JSON.parse(window.sessionStorage.getItem("editData"));
  // editData = JSON.parse(editData);

  const [selectedStates, setSelectedStates] = useState([]);
  const [nodesData, setNodesData] = useState([]);
  const [edgesData, setEdgesData] = useState([]);
  const [fromStates, setfromStates] = useState([selectedStates[0]]);
  const [toStates, settoStates] = useState([selectedStates[1]]);

  const onSubmit = () => {
    if (action === "create") {
      toast.success("Save Successfully.");
    } else {
      toast.success("Updated Successfully.");
    }
  };

  const handleClickCreate = () => {
    setAction("create");
    const timer = setTimeout(() => {
      navigate("/orderStateTransition/createOrderStateTransition");
    }, 500);
  };

  useEffect(() => {
    if (action === "edit") {
      // setSelectedStates(editData.selectedStates);
      // setfromStates(editData.selectedStates[0]);
      // settoStates(editData.selectedStates[1]);
      
      setNodesData(editData.nodesDatas);
      setEdgesData(editData.edgesDatas);
      setSelectedStates(editData.selectedStates.map((s)=> s.optionValue));
      setfromStates(editData.selectedStates.filter((state, index) => {
        if (index === 0) {
            return state.optionValue;
        }
    })[0].optionValue);
      settoStates(editData.selectedStates.filter((state, index) => {
        if (index === 1) {
            return state.optionValue;
        }
    })[0].optionValue);
    } else if (action === "create") {
      setSelectedStates([]);
      setNodesData([]);
      setEdgesData([]);
      setfromStates([]);
      settoStates([]);
    }
  }, [action]);


  const handleChangeState = (index, value) => {
      if (value !== "") {
    if(index === 0){
      setfromStates(value);
      settoStates("");
    }else if( index === 1){
      settoStates(value);
    }
    const newSelectedStates = [...selectedStates];
    newSelectedStates[index] = value;
    newSelectedStates.splice(index + 1);
    setSelectedStates(newSelectedStates);

    const newNodesData = newSelectedStates.map((state, idx) => ({
      id: idx.toString(),
      data: {
        label:
          state &&
          stateData.filter((states) => states.optionValue == state)[0]
            .optionLabel
            ? stateData.filter((states) => states.optionValue == state)[0]
                .optionLabel
            : "",
      },
      position: { x: 0, y: idx * 80 },
      type: idx === 0 ? "input" : (idx === (selectedStates.length - 1) ? "output" : "default"),
    }));
    setNodesData(newNodesData);

    const newEdgesData = newSelectedStates.slice(1).map((_, idx) => ({
      from: idx.toString(),
      to: [(idx + 1).toString()],
    }));
    setEdgesData(newEdgesData);
  }
  };

  const handleAddState = (e) => {
    e.preventDefault();
    if (selectedStates.length >= 1 && selectedStates[selectedStates.length - 1] !== "")  {
    setSelectedStates([...selectedStates, ""]);
    }
  };

  // const handleRemoveState = (index) => {
  //   const newSelectedStates = [...selectedStates];
  //   // newSelectedStates.splice(index, 1);
  //   newSelectedStates.splice(index);
  //   setSelectedStates(newSelectedStates);

  //   const newNodesData = newSelectedStates.map((state, idx) => ({
  //     id: idx.toString(),
  //     data: {
  //       label:
  //         state &&
  //         stateData.filter((states) => states.optionValue == state)[0]
  //           .optionLabel
  //           ? stateData.filter((states) => states.optionValue == state)[0]
  //               .optionLabel
  //           : "",
  //     },
  //     position: { x: 0, y: idx * 80 },
  //     type: idx === 0 ? "input" : (idx === selectedStates.length-1 ? "output" : "default"),
  //   }));
  //   setNodesData(newNodesData);

  //   const newEdgesData = newSelectedStates.slice(1).map((_, idx) => ({
  //     from: idx.toString(),
  //     to: [(idx + 1).toString()],
  //   }));
  //   setEdgesData(newEdgesData);
  // };

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

  useEffect(() => {
    console.log('selectedStates',selectedStates);
    if (selectedStates.length > 1 && selectedStates[selectedStates.length - 2] === "") {
    const newNodesData = selectedStates.map((state, idx) => ({
      id: idx.toString(),
      data: {
        label:
          state &&
          stateData.filter((states) => states.optionValue == state)[0]
            .optionLabel
            ? stateData.filter((states) => states.optionValue == state)[0]
                .optionLabel
            : "",
      },
      position: { x: 0, y: idx * 80 },
      type: idx === 0 ? "input" : (idx === selectedStates.length-1 ? "output" : "default"),
    }));
    setNodesData(newNodesData);

    const newEdgesData = selectedStates.slice(1).map((_, idx) => ({
      from: idx.toString(),
      to: [(idx + 1).toString()],
    }));
    setEdgesData(newEdgesData);

  }
  }, [selectedStates]);

  return (
    <>
    <div className="mx-5 my-4 text-end">
        <Link
          className="submit-btn btn btn-sm btn-primary m-1 px-5 py-1 rounded-3"
          to={"/orderStateTransition/SearchOmsOrderStateTransition"}
        >
          Cancel
        </Link>
        {action === "edit" ? (
          <a
            onClick={() => handleClickCreate()}
            className="submit-btn btn btn-sm btn-primary m-1 px-5 py-1 rounded-3"
          >
            Add
          </a>
        ) : null}
      </div>
      {/* {selectedStates} */}
      <div className="details  mx-5 mt-3 mb-5">
        <div className="contact">
          <div className="box">
            <h4>{action === "edit" ? "Edit" : "Add"}</h4>
            {/* <form> */}
      <div className="row">
        <div className="col-md-6">
          <div className="row g-3 m-0">
            <div className="col-md-8">
              <SelectComponent
                value={fromStates}
                onChange={(e) => handleChangeState(0, e.target.value)}
                dropdownlist={stateData}
                label="From State"
              />
            </div>
            <div className="col-md-8">
              <SelectComponent
                value={toStates}
                onChange={(e) => handleChangeState(1, e.target.value)}
                dropdownlist={stateData}
                label="To State 1"
              />
            </div>
            {selectedStates.map((state, index) => (
              <>
                {index >= 2 ? (
                  <>
                    <div className="col-md-8" key={index}>
                      <SelectComponent
                        value={state}
                        onChange={(e) =>
                          handleChangeState(index, e.target.value)
                        }
                        dropdownlist={stateData}
                        label={`To State ${index}`}
                      />
                    </div>
                    {/* <div className="col-md-8">
                      <button
                        className="submit-btn btn btn-sm btn-primary"
                        onClick={() => handleRemoveState(index)}
                      >
                        Remove
                      </button>
                    </div> */}
                  </>
                ) : (
                  ""
                )}
              </>
            ))}
            <div className="col-12">
            <button
            className="submit-btn btn btn-sm btn-primary px-4 py-2 border-0 m-0"
            onClick={handleAddState}
          >
            Add State
          </button>
            </div>

          </div>

          
        </div>
        <div className="col-md-6">
          {/* Render your flowchart using nodesData and edgesData */}
          {nodesData.length > 0  && (
            <>
              <FlowCharts nodesDatas={nodesData} edgesDatas={edgesData} />
            </>
          )}
        </div>
        <div className="col-12 text-end">
                  <button
                    className="submit-btn btn btn-primary px-4 py-2 border-0 fs-5 saveUpdate_btn"
                    type="button"
                    onClick={() => onSubmit()}
                  >
                    {action === "edit" ? "Update" : "Save"}
                  </button>
                </div>
      </div>
          <ToastContainer />
          {/* </form> */}
          </div>
          </div>
          </div>
    </>
  );
};

export default CreateOrderStateTransition;

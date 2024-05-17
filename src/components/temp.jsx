// const [formSubmitted, setFormSubmitted] = useState(false);
// const [error , setError]=useState({
//     attrName: '',
//     attrCode: '',
//     attrDesc: '',
//     dataTypeSelect: ''
// });


// const setErrorMessage = () =>{
// setFormSubmitted(true);
// const newErrors = {};
// if (!attrName) {
//       newErrors.attrName = 'Please Enter Attribute Name';
// }else{
//     newErrors.attrName = '';
// }
//   if (!attrCode) {
//       newErrors.attrCode = 'Please Enter Attribute Code';
//   }else{
//     newErrors.attrCode = '';
//   }
//   if (!attrDesc) {
//       newErrors.attrDesc = 'Please Enter Attribute Desc';
//   }else{
//     newErrors.attrDesc = '';
//   }
//   if (!dataTypeSelect) {
//       newErrors.dataTypeSelect = 'Please Select Data Type Select';
//   }else{
//     newErrors.dataTypeSelect = '';
//   }
//   setError(newErrors);
//   if(newErrors.attrName !== '' || newErrors.attrCode !== '' || newErrors.attrDesc !== '' || newErrors.dataTypeSelect !== ''){
//     console.log("return false");
//     return false;
//   }else{
//     console.log("return true");
//     return true;
//   }
// }

// useEffect(()=>{
// if(formSubmitted){
//   setErrorMessage();
// }
// },[attrName, attrCode, attrDesc, dataTypeSelect]);


// const onSubmit = async (id) => {

//   const validate = setErrorMessage();
//   if(validate){

//   }else {
//     toast.error("Please Fill the Mandatory Fields");
// }

// }










// CreateEditSellerOnboardingMaster
// CreateEditAtrributeMaster
// AddButtonModal



// import { Domain } from "@mui/icons-material";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import {
//   TablePagination,
//   Box,
//   Tooltip,
//   ThemeProvider,
//   createTheme,
// } from "@mui/material";
// import { MaterialReactTable } from "material-react-table";
// import React, { useEffect, useState } from "react";
// import { useMemo } from "react";
// import { Form } from "react-bootstrap";
// import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import "../../../../../css/style.css";
// import FormGroup from "../../../../../forms/FormGroup";
// import FormGroupRadio from "../../../../../forms/FormGroupRadio";
// import { TooltipMessages } from "../../../../../constants/TooltipConstants";
// import SelectComponent from "../../../../../forms/SelectComponent";

// const SearchOmsOrderStateTransition = () => {
//   const soost =
//     TooltipMessages.oms.OmsStateMachine.orderStateTransition
//       .SearchOrderStateTransition;
//   const navigate = useNavigate();
//   const [action, setAction] = useState("");
//   const [isActive, setIsActive] = useState(true);

//   const [searchData, setSearchData] = useState([]);
//   const [searchDataCount, setSearchDataCount] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [page, setPage] = useState(0);
//   const [editData, setEditData] = useState({});





//   let [stateData] = useState([]);
//   stateData = [
//     {
//       id: 1,
//       optionLabel: "Order Shipped",
//       optionValue: 1,
//       optionDefaultValue: false,
//     },
//     {
//       id: 2,
//       optionLabel: "Order Placed",
//       optionValue: 2,
//       optionDefaultValue: false,
//     },
//     {
//       id: 3,
//       optionLabel: "Order Delivered",
//       optionValue: 3,
//       optionDefaultValue: false,
//     },
//     {
//       id: 4,
//       optionLabel: "Refund Processed",
//       optionValue: 4,
//       optionDefaultValue: false,
//     },
//     {
//       id: 5,
//       optionLabel: "Refund Intiated",
//       optionValue: 5,
//       optionDefaultValue: false,
//     },
//     {
//       id: 6,
//       optionLabel: "Return Initiated by Customer",
//       optionValue: 6,
//       optionDefaultValue: false,
//     },
//     {
//       id: 7,
//       optionLabel: "Return Order Received & Verified",
//       optionValue: 7,
//       optionDefaultValue: false,
//     },
//     {
//       id: 8,
//       optionLabel: "Return Pick-Up Initiated",
//       optionValue: 8,
//       optionDefaultValue: false,
//     },
//     {
//       id: 9,
//       optionLabel: "Order Cancelled",
//       optionValue: 9,
//       optionDefaultValue: false,
//     },
//     {
//       id: 10,
//       optionLabel: "In Delivery",
//       optionValue: 10,
//       optionDefaultValue: false,
//     },
//     {
//       id: 11,
//       optionLabel: "Order Confirmed",
//       optionValue: 11,
//       optionDefaultValue: false,
//     },
//   ];

//   localStorage.setItem("action", action);
//   sessionStorage.setItem("editData", JSON.stringify(editData));

//   const sdata = {
//     data: {
//       responseList: [
//         {
//           srfno: 0,
//           StateMachine: "State Machine : OCTASHOP DEFAULT STATE MACHINE(152)",
//           // FromState: "AWBNUMGEN",
//           // ToState: "Order Shipped",
//           selectedStates: [
//             {
//               id: 1,
//               optionLabel: "Order Shipped",
//               optionValue: 1,
//               optionDefaultValue: false,
//             },
//             {
//               id: 2,
//               optionLabel: "Order Placed",
//               optionValue: 2,
//               optionDefaultValue: false,
//             },
//             {
//               id: 3,
//               optionLabel: "Order Delivered",
//               optionValue: 3,
//               optionDefaultValue: false,
//             },
//             {
//               id: 4,
//               optionLabel: "Refund Processed",
//               optionValue: 4,
//               optionDefaultValue: false,
//             },
//             {
//               id: 5,
//               optionLabel: "Refund Intiated",
//               optionValue: 5,
//               optionDefaultValue: false,
//             },
//             {
//               id: 6,
//               optionLabel: "Return Initiated by Customer",
//               optionValue: 6,
//               optionDefaultValue: false,
//             },
//             {
//               id: 7,
//               optionLabel: "Return Order Received & Verified",
//               optionValue: 7,
//               optionDefaultValue: false,
//             },
//             {
//               id: 8,
//               optionLabel: "Return Pick-Up Initiated",
//               optionValue: 8,
//               optionDefaultValue: false,
//             },
//             {
//               id: 9,
//               optionLabel: "Order Cancelled",
//               optionValue: 9,
//               optionDefaultValue: false,
//             },
//             {
//               id: 10,
//               optionLabel: "In Delivery",
//               optionValue: 10,
//               optionDefaultValue: false,
//             },
//             {
//               id: 11,
//               optionLabel: "Order Confirmed",
//               optionValue: 11,
//               optionDefaultValue: false,
//             },
//           ],
//           nodesDatas: [
//             {
//               id: "0",
//               data: {
//                 label: "Order Shipped",
//               },
//               position: {
//                 x: 0,
//                 y: 0,
//               },
//               type: "input",
//             },
//             {
//               id: "1",
//               data: {
//                 label: "Order Placed",
//               },
//               position: {
//                 x: 0,
//                 y: 80,
//               },
//               type: "default",
//             },
//             {
//               id: "2",
//               data: {
//                 label: "Order Delivered",
//               },
//               position: {
//                 x: 0,
//                 y: 160,
//               },
//               type: "default",
//             },
//             {
//               id: "3",
//               data: {
//                 label: "Refund Processed",
//               },
//               position: {
//                 x: 0,
//                 y: 240,
//               },
//               type: "default",
//             },
//             {
//               id: "4",
//               data: {
//                 label: "Refund Intiated",
//               },
//               position: {
//                 x: 0,
//                 y: 320,
//               },
//               type: "default",
//             },
//             {
//               id: "5",
//               data: {
//                 label: "Return Initiated by Customer",
//               },
//               position: {
//                 x: 0,
//                 y: 400,
//               },
//               type: "default",
//             },
//             {
//               id: "6",
//               data: {
//                 label: "Return Order Received & Verified",
//               },
//               position: {
//                 x: 0,
//                 y: 480,
//               },
//               type: "default",
//             },
//             {
//               id: "7",
//               data: {
//                 label: "Return Pick-Up Initiated",
//               },
//               position: {
//                 x: 0,
//                 y: 560,
//               },
//               type: "default",
//             },
//             {
//               id: "8",
//               data: {
//                 label: "Order Cancelled",
//               },
//               position: {
//                 x: 0,
//                 y: 640,
//               },
//               type: "default",
//             },
//             {
//               id: "9",
//               data: {
//                 label: "In Delivery",
//               },
//               position: {
//                 x: 0,
//                 y: 720,
//               },
//               type: "default",
//             },
//             {
//               id: "10",
//               data: {
//                 label: "Order Confirmed",
//               },
//               position: {
//                 x: 0,
//                 y: 800,
//               },
//               type: "output",
//             },
//           ],
//           edgesDatas: [
//             {
//               from: "0",
//               to: ["1"],
//             },
//             {
//               from: "1",
//               to: ["2"],
//             },
//             {
//               from: "2",
//               to: ["3"],
//             },
//             {
//               from: "3",
//               to: ["4"],
//             },
//             {
//               from: "4",
//               to: ["5"],
//             },
//             {
//               from: "5",
//               to: ["6"],
//             },
//             {
//               from: "6",
//               to: ["7"],
//             },
//             {
//               from: "7",
//               to: ["8"],
//             },
//             {
//               from: "8",
//               to: ["9"],
//             },
//             {
//               from: "9",
//               to: ["10"],
//             },
//           ],
//           isActive: true,
//         },
//         {
//           srfno: 1,
//           StateMachine: "State Machine : OCTASHOP DEFAULT STATE MACHINE(152)",
//           // FromState: "ORDPLC",
//           // ToState: "Order Placed",
//           selectedStates: [
//             // "1",
//             // "2",
//             // "3",
//             {
//             id: 1,
//             optionLabel: "Order Shipped",
//             optionValue: 1,
//             optionDefaultValue: false,
//           },
//           {
//             id: 2,
//             optionLabel: "Order Placed",
//             optionValue: 2,
//             optionDefaultValue: false,
//           },
//           {
//             id: 3,
//             optionLabel: "Order Delivered",
//             optionValue: 3,
//             optionDefaultValue: false,
//           }],
//           nodesDatas: [
//             {
//                 "id": "0",
//                 "data": {
//                     "label": "Order Shipped"
//                 },
//                 "position": {
//                     "x": 0,
//                     "y": 0
//                 },
//                 "type": "input"
//             },
//             {
//                 "id": "1",
//                 "data": {
//                     "label": "Order Placed"
//                 },
//                 "position": {
//                     "x": 0,
//                     "y": 80
//                 },
//                 "type": "default"
//             },
//             {
//                 "id": "2",
//                 "data": {
//                     "label": "Order Delivered"
//                 },
//                 "position": {
//                     "x": 0,
//                     "y": 160
//                 },
//                 "type": "output"
//             }
//         ],
//           edgesDatas: [
//             {
//                 "from": "0",
//                 "to": [
//                     "1"
//                 ]
//             },
//             {
//                 "from": "1",
//                 "to": [
//                     "2"
//                 ]
//             }
//         ],
//           isActive: true,
//         },
        
//       ],
//       numberOfItems: 11,
//       numberOfPages: 2,
//     },
//   };

//   const getEditApi = (id) => {
//     const response = sdata;
//     let newEditData = response.data.responseList[id];
//     // debugger
//     // console.log("-------------------id-------------------------",newEditData)
//     setEditData(newEditData);
//     sessionStorage.setItem("editData", JSON.stringify(newEditData));
//   };

//   const handleClickEdit = (id) => {
//     setAction("edit");
//     localStorage.setItem("action", "edit");
//     getEditApi(id);
//     const timer = setTimeout(() => {
//       navigate("/orderStateTransition/createOrderStateTransition");
//     }, 500);
//   };

//   const handleSearch = () => {
//     getSearchAPI();
//   };

//   const getSearchAPI = () => {
//     const response = sdata;
//     setSearchData(response.data.responseList);
//     setSearchDataCount(response.data.numberOfItems);
//   };

//   const theme = createTheme({
//     components: {
//       MuiTablePagination: {
//         styleOverrides: {
//           selectLabel: { marginTop: "13px" },
//           displayedRows: { marginTop: "15px" },
//         },
//       },
//     },
//   });

//   const columns = useMemo(
//     () => [
//       { accessorKey: "StateMachine", header: "State Machine", size: 300 },
//       // { accessorKey: "FromState", header: "FromState", size: 300 },
//       {
//         accessorKey: "details",
//         // header: "From - To State",
//         header: "Active Status",
//         size: 300,
//         Cell: ({ row }) => (
//           <>
//           {/* Active Status:{row.original.isActive ? "Yes" : "No"}<br/> */}
//           From State:{row.original.selectedStates.filter((s,i)=>{if(i==0){ return s.optionLabel}})[0].optionLabel}<br/>
//           {/* To State:{row.original.selectedStates.filter((s,i)=>{if(i==0){ return s.optionLabel}})[index].optionLabel} */}
//           {row.original.selectedStates.map((state, index) => (
//               <>
//               {`To State ${index+1}:`}
//               {row.original.selectedStates.filter((s,i)=>{ return s.optionLabel})[index].optionLabel}
//               <br/>
//               </>
//             ))}
//           </>
//       ),
//       },
//       // { accessorKey: "ModifiedDate", header: "ModifiedDate", size: 300 },
//     ],
//     []
//   );

//   const handleChangePage = () => {
//     getSearchAPI();
//   };

//   const handleChangeRowsPerPage = () => {
//     getSearchAPI();
//   };

//   const handleClickCreate = () => {
//     setAction("create");
//     localStorage.setItem("action", "create");
//     const timer = setTimeout(() => {
//       navigate("/orderStateTransition/createOrderStateTransition");
//     }, 1000);
//   };

//   useEffect(() => {
//     getSearchAPI();
//   }, []);
//   return (
//     <>
//       <div className="buttons d-flex justify-content-end p-1 mt-3">
//         <a
//           className="btns pe-5"
//           onClick={() => handleClickCreate()}
//           style={{ textDecoration: "none" }}
//         >
//           <button className="submit-btn btn btn-sm btn-primary m-1 px-5 py-1 rounded-3">
//             Add
//           </button>
//         </a>
//       </div>

//       <div className="details  mx-5 mt-3 mb-5">
//         <div className="contact">
//           <form className="form-floating">
//             <div className="box">
//               <Form encType="multipart/form-data" className="px-3">
//                 <div className="row">
//                   <div className="col-md-4 mt-3">
//                     <FormGroup
//                       type="text"
//                       tooltipMessage={soost.internalSystem}
//                       label="Internal System Id"
//                       placeholder=""
//                     />
//                   </div>
//                   <div className="col-md-4 mt-3">
//                     <SelectComponent
//                       dropdownlist={stateData}
//                       tooltipMessage={soost.stateMachine}
//                       label="State Machine"
//                     />
//                   </div>
//                   <div className="col-md-4 mt-3">
//                     <SelectComponent
//                       dropdownlist={stateData}
//                       tooltipMessage={soost.fromState}
//                       label="From State"
//                     />
//                   </div>
//                   <div className="col-md-4 mt-3">
//                     <SelectComponent
//                       dropdownlist={stateData}
//                       tooltipMessage={soost.toState}
//                       label="To State"
//                     />
//                   </div>
//                   <div className="col-md-4 mt-3">
//                     <FormGroupRadio
//                       tooltipMessage={soost.isActive}
//                       title="Is Active"
//                       value={isActive}
//                       onChange={() => setIsActive(!isActive)}
//                     />
//                   </div>
//                 </div>
//               </Form>
//             </div>
//           </form>

//           <div className="buttons d-flex justify-content-end p-1 mt-3">
//             <div className="btns">
//               <button
//                 className="submit-btn btn btn-sm btn-primary px-4 py-2 border-0"
//                 onClick={() => handleSearch()}
//               >
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>
//         <Outlet />
//       </div>

//       {/* -------------------------------------------------------- */}
//       {searchData.length > 0 ? (
//         <div className="details  mx-5 mt-3 mb-5">
//           <div className="contact">
//             <div className="box">
//               <MaterialReactTable
//                 columns={columns}
//                 data={searchData}
//                 enablePagination={false}
//                 enableColumnOrdering
//                 enableEditing
//                 positionActionsColumn="last"
//                 enableRowNumbers="true"
//                 rowNumberDisplayMode="original"
//                 renderRowActions={({ row, table }) => (
//                   <>
//                     <Box sx={{ display: "flex", gap: "1rem" }}>
//                       <Tooltip arrow placement="left" title="Edit">
//                         <a>
//                           <button
//                             className={`submit-btn btn btn-sm border-0 btn-primary p-1 ${searchData[row.id].srfno}`}
//                             onClick={() => handleClickEdit(searchData[row.id].srfno)}
//                           >
//                             <VisibilityIcon />
//                           </button>
//                         </a>
//                       </Tooltip>
//                     </Box>
//                   </>
//                 )}
//               />
//               <ThemeProvider theme={theme}>
//                 <TablePagination
//                   rowsPerPageOptions={[10, 20, 30]}
//                   component="div"
//                   count={searchDataCount}
//                   rowsPerPage={rowsPerPage}
//                   page={page}
//                   onPageChange={handleChangePage}
//                   onRowsPerPageChange={handleChangeRowsPerPage}
//                   showFirstButton
//                   showLastButton
//                 />
//               </ThemeProvider>
//             </div>
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// };

// export default SearchOmsOrderStateTransition;



import SwalFirePopup from '../../../../../forms/SwalFirePopup';
const [showSeoFormValue, setShowSeoForm] = useState(true);
const [swalFirePopup , setSwalFirePopup]=useState({});
const [goto, setgoto] = useState(false);

function resetSwalFirePopup(){
  let newSwalFirePopup= {}
  newSwalFirePopup.icons= '';
  newSwalFirePopup.texts= '';
  newSwalFirePopup.titles= '';
  newSwalFirePopup.url= '';
  setSwalFirePopup(newSwalFirePopup);
}
useEffect(()=>{
  resetSwalFirePopup()
  if(formSubmitted){
    validateForm();
  }
  },[categoryFormData]);

  useEffect(()=>{
    if(goto){
      goToError();
    }
    setgoto(false)
  },[goto]);
  

  const goToError = () => {
    const element = document.querySelector('.highlight-error');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
  }

  function save(){    
    setgoto(true);




    let newSwalFirePopup= {}
          newSwalFirePopup.icons= 'success';
          // newSwalFirePopup.texts= 'Success!';
          newSwalFirePopup.titles= 'Data saved successfully.';
          newSwalFirePopup.url= '/category/searchCategoryMaster';
          setSwalFirePopup(newSwalFirePopup);
  }
  
  {swalFirePopup.icons && swalFirePopup.titles && <SwalFirePopup
    icons={swalFirePopup.icons}
    titles={swalFirePopup.titles}
    texts={swalFirePopup.texts}
    url={swalFirePopup.url}
  />}
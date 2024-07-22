// import React, { useState, useRef, useEffect } from 'react';
// import Multiselect from 'multiselect-react-dropdown';

// const IV = () => {
//   const [selectedValues, setSelectedValues] = useState([]);
//   const [maxVisibleItems, setMaxVisibleItems] = useState(3); // Default value
//   const selectBoxRef = useRef(null);

//   const options = [
//     { name: 'Option 1', id: 1 },
//     { name: 'Option 2', id: 2 },
//     { name: 'Option 3', id: 3 },
//     { name: 'Option 4', id: 4 },
//     { name: 'Option 5', id: 5 },
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       if (selectBoxRef.current) {
//         const selectBoxWidth = selectBoxRef.current.offsetWidth;
//         const averageItemWidth = 100; // Approximate width of one item in pixels
//         const visibleItems = Math.floor(selectBoxWidth / averageItemWidth);
//         setMaxVisibleItems(visibleItems);
//       }
//     };

//     // Initial calculation
//     handleResize();

//     // Recalculate on window resize
//     window.addEventListener('resize', handleResize);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

  
//   const selectedList = [
//     { name: 'Option 1', id: 1 },
//     { name: 'Option 2', id: 2 },
//     { name: 'Option 3', id: 3 },
//     { name: 'Option 4', id: 4 },
//     { name: 'Option 5', id: 5 },
//   ];

//   const customSelectedValueDecorator = (selectedList) => {
//     if (selectedList?.length > maxVisibleItems) {
//       return (
//         <span style={{ marginRight: '5px', fontWeight: 'bold' }}>
//           {selectedList.length} selected
//         </span>
//       );
//     }

//     return selectedList?.map((item) => (
//       <span key={item.id} style={{ marginRight: '5px', fontWeight: 'bold' }}>
//         {item.name}
//       </span>
//     ));
//   };

//   return (
//     <div ref={selectBoxRef} style={{ width: '100%' }}>
//       <Multiselect
//         options={options} // Options to display in the dropdown
//         selectedValues={selectedValues} // Preselected value to persist in dropdown
//         onSelect={(selectedList) => setSelectedValues(selectedList)} // Function will trigger on select event
//         onRemove={(selectedList) => setSelectedValues(selectedList)} // Function will trigger on remove event
//         displayValue="name" // Property name to display in the dropdown options
//         selectedValueDecorator={customSelectedValueDecorator} // Custom function for selected values
//       />
//     </div>
//   );
// };

// export default IV;







































import SwalFirePopup from '../../../../../forms/SwalFirePopup';


const [goto, setgoto] = useState(false);
const [swalFirePopup , setSwalFirePopup]=useState({});
function resetSwalFirePopup(){
  let newSwalFirePopup= {}
  newSwalFirePopup.icons= '';
  newSwalFirePopup.texts= '';
  newSwalFirePopup.titles= '';
  newSwalFirePopup.url= '';
  newSwalFirePopup.showCommand = false;
  setSwalFirePopup(newSwalFirePopup);
}
const handleChildValue = (value) => {
  let newcustomePopup= {}
  newcustomePopup.showCommand= value;
  setSwalFirePopup(newcustomePopup);
};

const goToError = () => {
  const element = document.querySelector('.highlight-error');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
}

useEffect(()=>{
  if(goto){
    goToError();
  }
  setgoto(false)
},[goto]);

const swalFirePopupFunction = (message)=>{
  let newSwalFirePopup= {}
        newSwalFirePopup.icons= 'success';
        // newSwalFirePopup.texts= 'Success!';
        newSwalFirePopup.titles= message;
        newSwalFirePopup.url= '/category/searchCategoryHierarchy';
        newSwalFirePopup.showCommand = true;
        setSwalFirePopup(newSwalFirePopup);
}



const validateForm = () => { 
    setgoto(true);
}


saveFUN(){
    swalFirePopupFunction('Data saved successfully.');
}
saveFUN(){
    swalFirePopupFunction('Data Updated successfully.');
}



{swalFirePopup.showCommand && <SwalFirePopup
    icons={swalFirePopup.icons}
    titles={swalFirePopup.titles}
    texts={swalFirePopup.texts}
    url={swalFirePopup.url}
    size='sm'
    onValueChange={handleChildValue}
  />}
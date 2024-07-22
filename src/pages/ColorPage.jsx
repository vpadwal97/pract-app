// // import React from 'react';
// // import ColorPicker from '../components/ColorPicker';

// // const ColorPage = () => {
// //   return (
// //     <div>
// //       <ColorPicker />
// //       <div className="sample-div">Sample Text</div>
// //     </div>
// //   );
// // };

// // export default ColorPage;



// import React, { useState } from 'react';

// const Preview = ({ content }) => (
//   <div>
//     <h2>Preview</h2>
//     <div>{content}</div>
//   </div>
// );

// const ColorPage = () => {
//   const [previewContent, setPreviewContent] = useState('');
//   const [showPreview, setShowPreview] = useState(false);

//   const handlePreview = () => {
//     setShowPreview(true);
//   };

//   const handleEdit = () => {
//     setShowPreview(false);
//   };

//   const handleScroll = () => {
//     const element = document.querySelector('.target-class');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div>
//       <textarea
//         value={previewContent}
//         onChange={(e) => setPreviewContent(e.target.value)}
//         rows={10}
//         cols={50}
//       />
//       <br />
//       <button onClick={handlePreview}>Preview</button>
//       <button onClick={handleEdit}>Edit</button>
//       {showPreview && <Preview content={previewContent} />}
//       <div>
//       <button onClick={handleScroll}>Scroll to Class</button>
//       <div className="content">
//         <p>Content before target class</p>
//         <div className="target-class">Target Class</div>
//         <p>Content after target class</p>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ColorPage;




import React from 'react';
import ColorPicker from '../components/ColorPicker';

const ColorPage = () => {
  return (
    <div>
      <ColorPicker />
      <div className="sample-div">Sample Text</div>
    </div>
  );
};

export default ColorPage;

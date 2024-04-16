import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';

import Sidebar from './DnDFlowSidebar';
import './index.css';
// import TextUpdaterNode from './TextUpdaterNode';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'input node' },
    position: { x: 250, y: 5 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
        
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
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      let types = event.dataTransfer.getData('application/reactflow');
      let type = types.split('_type_')[1];
      let op = types.split('_type_')[0];

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }


  
      debugger


      // reactFlowInstance.project was renamed to reactFlowInstance.screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} ${op}` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );

  // const nodeTypes = { textUpdater: TextUpdaterNode };
  return (
    <div className="dndflow" style={{minHeight:"50vh",height:"50vh",width:"100%"}}>
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            // nodeTypes={nodeTypes}
            fitView
          >
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;

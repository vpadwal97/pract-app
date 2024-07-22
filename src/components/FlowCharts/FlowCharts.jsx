import React, { useEffect } from "react";
import ReactFlow, {  StepEdge, useEdgesState, useNodesState } from "reactflow";
import "reactflow/dist/style.css";
import SelfConnecting from "./SelfConnecting";

const edgeTypes = {
  "custom-edge": StepEdge,
  "self-connecting": SelfConnecting,
};

// const createEdge = (source, target) => ({
//   id: `e${source}-${target}`,
//   source,
//   target,
//   type: "custom-edge",
//   style: { stroke: "black" },
//   markerEnd: { type: MarkerType.ArrowClosed, color: "black" },
// });

const FlowCharts = ({ nodesDatas, edgesDatas }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    // Update nodes and edges when nodesDatas or edgesDatas change
    setNodes(nodesDatas);
    setEdges(edgesDatas);
  }, [nodesDatas, edgesDatas, setNodes, setEdges]);

  return (
    <div className="mx-auto" style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        edgeTypes={edgeTypes}
      />
    </div>
  );
};

export default FlowCharts;

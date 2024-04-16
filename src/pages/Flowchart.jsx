import React, { useEffect } from "react";
import ReactFlow, {
  MarkerType,
  StepEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";
import SelfConnecting from "./SelfConnecting";

const edgeTypes = {
  "custom-edge": StepEdge,
  "self-connecting": SelfConnecting,
};

const createNode = (id, label, x, y) => ({
  id,
  position: { x, y },
  data: { label },
});

const createEdge = (source, target) => ({
  id: `e${source}-${target}`,
  source,
  target,
  // label: 'test',
  type: "custom-edge",
  style: { stroke: "black" },
  markerEnd: { type: MarkerType.ArrowClosed, color: "black" },
});

const nodesData = [
  {
    id: "a",
    data: { label: "a" },
    position: { x: 0, y: 0 },
    type: "input",
  },
  {
    id: "b",
    data: { label: "b" },
    position: { x: 0, y: 80 },
    type: "default",
  },
  {
    id: "c",
    data: { label: "c" },
    position: { x: 0, y: 160 },
    type: "output",
  },
  {
    id: "d",
    data: { label: "d" },
    position: { x: 0, y: 240 },
    type: "output",
  },
  {
    id: "e",
    data: { label: "e" },
    position: { x: 0, y: 320 },
    type: "output",
  },
];

const edgesData = [
  {
    from: "a",
    to: ["b", "c"],
  },
  {
    from: "b",
    to: ["b", "d", "e"],
  },
  // {
  //   from: "a",
  //   to: ["b"],
  // },
  // {
  //   from: "b",
  //   to: ["c"],
  // },
];

export default function Flowchart() {
  const [nodes, setNodes, onNodesChange] = useNodesState(nodesData);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    onCreateNodeData(edgesData);
  }, []);

  const onCreateNodeData = (list) => {
    // var nData = [];
    // var eData = [];
    // var x = 0;
    // var y = 0;
    // list.forEach(element => {
    //     const node = createNode(element.from, element.from, x, y);
    //     x += 80;
    //     y += 80;
    //     nData.push(node);
    //     element.to.forEach((el) => {
    //         const childNode = createNode(el, el, x, y);
    //         x += 80;
    //         y += 80;
    //         nData.push(childNode);
    //         const edge = createEdge(element.from, el);
    //         eData.push(edge);
    //     });
    // });
    // setNodeData(nData);
    // setEdgeData(eData);
    // Create a Set to store unique nodes
    const uniqueNodes = new Set();

    var eData = [];

    list.forEach((element) => {
      // const x = 0;
      // const y = 0;
      // const node = createNode(element.from, element.from, x, y);
      // uniqueNodes.add(JSON.stringify(node));
      element.to.forEach((el) => {
        // const childNode = createNode(el, el, x, y);
        // uniqueNodes.add(JSON.stringify(childNode));
        var edge = createEdge(element.from, el);
        if (edge.source === edge.target) {
          edge.zIndex = 1;
          edge.type = "self-connecting";
        }
        eData.push(edge);
      });
    });

    // const formattedSet = [...uniqueNodes].map((item) => {
    //     if (typeof item === 'string') return JSON.parse(item);
    //     else if (typeof item === 'object') return item;
    // });

    // var x = 0;
    // var y = 0;
    // formattedSet.forEach((e) => {
    //     e.position.x = x;
    //     e.position.y = y;
    //     y += 80;
    // });

    // setNodes(formattedSet);
    setEdges(eData);

    // console.log(formattedSet);
    console.log(eData);
  };

  return (
    <div className="mx-auto"
      style={{ width: "100vw", height: "100vh", backgroundColor: "lightgray" }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        edgeTypes={edgeTypes}
      />
    </div>
  );
}

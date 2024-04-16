import React from 'react';
import { BaseEdge, BezierEdge } from 'reactflow';

export default function SelfConnecting(props) {
    // we are using the default bezier edge when source and target ids are different
    if (props.source !== props.target) {
        return <BezierEdge {...props} />;
    }

    const { sourceX, sourceY, targetX, targetY, id, markerEnd } = props;
    const radiusX = (sourceX - targetX) * 0.6;
    const radiusY = 40;
    const edgePath = `M ${sourceX} ${sourceY} A ${radiusX + 50} ${radiusY} 1 1 1 ${targetX} ${targetY}`;
    return <BaseEdge path={edgePath} style={{ stroke: 'black' }} markerEnd={markerEnd} />;
}
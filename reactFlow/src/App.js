import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import data from './data/data.json';

const initialNodes = [
{
id: 'horizontal-1',
sourcePosition: 'right',
type: 'input',
data: { label: '1' },
position: { x: 0, y: 80 },
},
{
id: 'horizontal-2',
sourcePosition: 'right',
targetPosition: 'left',
data: { label: 'Node 2' },
position: { x: 250, y: 0 },
},
{
id: 'horizontal-3',
sourcePosition: 'right',
targetPosition: 'left',
data: { label: 'Node 3' },
position: { x: 250, y: 160 },
},

{
  id: 'horizontal-4',
  sourcePosition: 'right',
  targetPosition: 'left',
  data: { label: 'Node 4' },
  position: { x: 290, y: 160},
  },

  {
    id: 'horizontal-5',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Node 5' },
    position: { x: 310, y: 170 },
    },
    {
      id: 'horizontal-3',
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: 'Node 6' },
      position: { x: 320, y: 180 },
      }
];

const initialEdges = [
{
id: 'horizontal-e1-2',
source: 'horizontal-1',
type: 'smoothstep',
target: 'horizontal-2',
animated: true,
},
{
id: 'horizontal-e1-3',
source: 'horizontal-1',
type: 'smoothstep',
target: 'horizontal-3',
animated: true,
},
{
id: 'horizontal-e1-4',
source: 'horizontal-2',
type: 'smoothstep',
target: 'horizontal-4',
// label: 'edge label',
animated: true,
},
{
id: 'horizontal-e3-5',
source: 'horizontal-3',
type: 'smoothstep',
target: 'horizontal-5',
animated: true,
},
// {
// id: 'horizontal-e3-6',
// source: 'horizontal-3',
// type: 'smoothstep',
// target: 'horizontal-6',
// animated: true,
// },


];

const App = () => {
const [nodes, _, onNodesChange] = useNodesState(initialNodes);
const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);

return (
<ReactFlow
nodes={nodes}
edges={edges}
onNodesChange={onNodesChange}
onEdgesChange={onEdgesChange}
onConnect={onConnect}
fitView
attributionPosition="bottom-left"
></ReactFlow>
);
};

export default App;




// import React, { useState } from "react";
// import ReactFlow from "react-flow-renderer"; 
// import "react-flow-renderer/dist/style.css"; 
// const DynamicNodesFlow = () => {
//   const [elements, setElements] = useState([]);

//   const data = [
//     {
//       "name": "Main-Duct-1",
//       "airQuantity": 1000,
//       "frictionLoss": "0.50",
//       "velocity": "4.82",
//       "frictionStatus": true,
//       "frictioninputStatus": true,
//       "velocityStatus": true,
//       "velocityinputStatus": true,
//       "diaMeter": 516,
//       "width": 1350,
//       "height": 200,
//       "flowArea": "0.20",
//       "widthStatus": true,
//       "width1": 1000,
//       "width2": 800,
//       "width3": 650,
//       "width4": 550,
//       "width5": 450,
//       "width6": 400,
//       "ratio1": "4 : 1",
//       "ratio2": "8 : 3",
//       "ratio3": "13 : 7",
//       "ratio4": "11 : 8",
//       "ratio5": "9 : 10",
//       "ratio6": "2 : 3",
//       "lockStatus": false,
//       "remark": "",
//       "parentDuctName": "Main-Duct-1",
//       "childDuctName": "Main-Duct-1",
//       "children": [
//           {
//               "name": "Branch-1",
//               "airQuantity": 797,
//               "frictionLoss": "0.35",
//               "velocity": "3.94",
//               "frictionStatus": true,
//               "frictioninputStatus": true,
//               "velocityStatus": true,
//               "diaMeter": 510,
//               "width": 1350,
//               "height": 200,
//               "flowArea": "0.19",
//               "widthStatus": true,
//               "width1": 950,
//               "width2": 750,
//               "width3": 650,
//               "width4": 550,
//               "width5": 450,
//               "width6": 350,
//               "ratio1": "19 : 5",
//               "ratio2": "5 : 2",
//               "ratio3": "13 : 7",
//               "ratio4": "11 : 8",
//               "ratio5": "9 : 10",
//               "ratio6": "7 : 12",
//               "lockStatus": false,
//               "remark": "",
//               "parentDuctName": "Main-Duct-1",
//               "childDuctName": "Branch-1",
//               "children": [
//                   {
//                       "name": "Branch-2",
//                       "airQuantity": 700,
//                       "frictionLoss": "0.75",
//                       "velocity": "5.19",
//                       "frictionStatus": true,
//                       "frictioninputStatus": true,
//                       "velocityStatus": true,
//                       "diaMeter": 415,
//                       "width": 800,
//                       "height": 200,
//                       "flowArea": "0.13",
//                       "widthStatus": true,
//                       "width1": 600,
//                       "width2": 500,
//                       "width3": 400,
//                       "width4": 350,
//                       "width5": 300,
//                       "width6": 250,
//                       "ratio1": "12 : 5",
//                       "ratio2": "5 : 3",
//                       "ratio3": "8 : 7",
//                       "ratio4": "7 : 8",
//                       "ratio5": "3 : 5",
//                       "ratio6": "5 : 12",
//                       "lockStatus": false,
//                       "remark": "",
//                       "parentDuctName": "Main-Duct-1",
//                       "childDuctName": "Branch-2",
//                       "children": [
//                           {
//                               "name": "Branch-3",
//                               "airQuantity": 490,
//                               "frictionLoss": "0.80",
//                               "velocity": "4.87",
//                               "frictionStatus": true,
//                               "frictioninputStatus": true,
//                               "velocityStatus": true,
//                               "diaMeter": 359,
//                               "width": 600,
//                               "height": 200,
//                               "flowArea": "0.10",
//                               "widthStatus": true,
//                               "width1": 450,
//                               "width2": 350,
//                               "width3": 300,
//                               "width4": 250,
//                               "width5": 250,
//                               "width6": 200,
//                               "ratio1": "9 : 5",
//                               "ratio2": "7 : 6",
//                               "ratio3": "6 : 7",
//                               "ratio4": "5 : 8",
//                               "ratio5": "1 : 2",
//                               "ratio6": "1 : 3",
//                               "lockStatus": false,
//                               "remark": "",
//                               "parentDuctName": "Main-Duct-1",
//                               "childDuctName": "Branch-3",
//                               "children": [
//                                   {
//                                       "name": "Branch-5",
//                                       "airQuantity": 297,
//                                       "frictionLoss": "0.70",
//                                       "velocity": "4.07",
//                                       "frictionStatus": true,
//                                       "frictioninputStatus": true,
//                                       "velocityStatus": true,
//                                       "diaMeter": 306,
//                                       "width": 400,
//                                       "height": 200,
//                                       "flowArea": "0.07",
//                                       "widthStatus": true,
//                                       "width1": 300,
//                                       "width2": 250,
//                                       "width3": 250,
//                                       "width4": 200,
//                                       "width5": 150,
//                                       "width6": 150,
//                                       "ratio1": "6 : 5",
//                                       "ratio2": "5 : 6",
//                                       "ratio3": "5 : 7",
//                                       "ratio4": "1 : 2",
//                                       "ratio5": "3 : 10",
//                                       "ratio6": "1 : 4",
//                                       "lockStatus": false,
//                                       "remark": "",
//                                       "parentDuctName": "Main-Duct-1",
//                                       "childDuctName": "Branch-5",
//                                       "children": [],
//                                       "velocityinputStatus": true
//                                   }
//                               ],
//                               "velocityinputStatus": true
//                           },
//                           {
//                               "name": "Branch-4",
//                               "airQuantity": "",
//                               "frictionLoss": 0.5,
//                               "velocity": "",
//                               "frictionStatus": false,
//                               "frictioninputStatus": false,
//                               "velocityStatus": true,
//                               "diaMeter": "",
//                               "width": "",
//                               "height": 200,
//                               "flowArea": "",
//                               "widthStatus": true,
//                               "width1": "",
//                               "width2": "",
//                               "width3": "",
//                               "width4": "",
//                               "width5": "",
//                               "width6": "",
//                               "ratio1": "",
//                               "ratio2": "",
//                               "ratio3": "",
//                               "ratio4": "",
//                               "ratio5": "",
//                               "ratio6": "",
//                               "lockStatus": false,
//                               "remark": "",
//                               "parentDuctName": "Main-Duct-1",
//                               "childDuctName": "Branch-4",
//                               "children": [
//                                   {
//                                       "name": "Branch-6",
//                                       "airQuantity": "",
//                                       "frictionLoss": 0.5,
//                                       "velocity": "",
//                                       "frictionStatus": false,
//                                       "frictioninputStatus": false,
//                                       "velocityStatus": true,
//                                       "diaMeter": "",
//                                       "width": "",
//                                       "height": 200,
//                                       "flowArea": "",
//                                       "widthStatus": true,
//                                       "width1": "",
//                                       "width2": "",
//                                       "width3": "",
//                                       "width4": "",
//                                       "width5": "",
//                                       "width6": "",
//                                       "ratio1": "",
//                                       "ratio2": "",
//                                       "ratio3": "",
//                                       "ratio4": "",
//                                       "ratio5": "",
//                                       "ratio6": "",
//                                       "lockStatus": false,
//                                       "remark": "",
//                                       "parentDuctName": "Main-Duct-1",
//                                       "childDuctName": "Branch-6",
//                                       "children": []
//                                   }
//                               ]
//                           }
//                       ],
//                       "velocityinputStatus": true
//                   }
//               ],
//               "velocityinputStatus": true
//           }
//       ]
//   }
    
//   ]

//   const convertToElements = (data) => {
//     return data.map((item) => {
//       const { name, airQuantity, frictionLoss, velocity, children } = item;
//       const id = Math.random().toString();
//       const label = `${name}\nAir Quantity: ${airQuantity}\nFriction Loss: ${frictionLoss}\nVelocity: ${velocity}`;
//       const node = {
//         id,
//         type: 'default',
//         data: { label },
//         position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
//         children: [],
//       };
//       if (children) {
//         node.children = convertToElements(children);
//       }
//       return node;
//     });
//   };

//   useState(() => {
//     const initialElements = convertToElements(data); 
//     setElements(initialElements);
//   }, []);

//   return (
//     <div style={{ height: '500px', backgroundColor: '#f0f0f0' }}>
//       <ReactFlow elements={elements} onConnect={(params) => console.log('onConnect', params)}>
       
//       </ReactFlow>
//     </div>
//   );
// };

// export default DynamicNodesFlow;

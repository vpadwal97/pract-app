import * as React from "react";
import "../assets/common/style.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import "../index.css";
import Home from "../pages/Home";
import Tooltippage from "../pages/Tooltippage";
import About from "../pages/About";
import Login from "../components/Login";
import Forms from "../pages/Forms";
import ChatRoom from "../pages/chat/ChatRoom";
import AppChat from "../pages/chat/AppChat";
import IpApp from "../pages/chat/IpApp";
import FlowCustome from "../pages/flowChart/FlowCustome";
import FlowChartPgae from "../pages/flowChart/FlowChartPgae";
import MyComponent from "../pages/flowChart/MyComponent";
import Tps from "../pages/chat/Tps.jsx";
import Navi from "../pages/chat/Navi.jsx";
import OmsStateMachine from "../pages/chat/oms/OmsStateMachine/OmsStateMachine.jsx";
import SearchStateMasterDefinition from "../pages/chat/oms/OmsStateMachine/statusMasterDefinition/SearchStateMasterDefinition.jsx";
import CreateEditStateMasterDefinition from "../pages/chat/oms/OmsStateMachine/statusMasterDefinition/CreateEditStateMasterDefinition.jsx";
import MaterialTable from "../pages/MaterialTable.jsx";
import MultipleSelectChip from "../pages/MultipleSelectChip.jsx";
import ChipsS from "../pages/ChipsS.jsx";
import Tp from "../pages/chat/Tp.jsx";

const Routing = createBrowserRouter([
  {
    path: "/",
    element: <> <Home /> </>,
    children: [
      // 

      
      {
        path:"/ChipsS",
        element: <ChipsS />
      },
      {
        path:"/Tp",
        element: <Tp />
      },
      
      {
        path:"/MultipleSelectChip",
        element: <MultipleSelectChip />
      },
      {
        path:"/MaterialTable",
        element: <MaterialTable />
      },
      {
        path: "/Navi",
        element: <Navi />,
      },
      {
        path: "/Tooltippage",
        element: <Tooltippage />,
      },
      {
        path: "/Login",
        element: <Login />,
        
      },
      {
        path: "/forms",
        element: <Forms />,
        // children: [{ path: "/ts", element: <>ts</> }],
      },
      // {
      //   path: "/chatComponent",
      //   element: <ChatComponent />,
      //   // children: [{ path: "/ts", element: <>ts</> }],
      // },

      {
        path: "/OmsStateMachine",
        element: <OmsStateMachine/>,
        children: [
            { path: "SearchStateMasterDefinition", element: <SearchStateMasterDefinition/>},
            { path: "CreateEditStateMasterDefinition", element: <CreateEditStateMasterDefinition/>},
            
        ], 
    },

      {
        path: "/ChatRoom",
        element: <ChatRoom />,
      },
      {
        path: "/Tps",
        element: <Tps />,
      },
      {
        path: "/MyComponent",
        element: <MyComponent />,
      },
      {
        path: "/IpApp",
        element: <IpApp />,
      },
      {
        path: "/Appchat",
        element: <AppChat />,
      },
      
      {
        path: "/FlowCharts",
        element: <><b>FlowCharts</b> <Outlet/></>,
        children: [
          {
            path: "FlowCustome",
            element: <FlowCustome />,
          },
          {
            path: "FlowChartPgae",
            element: <FlowChartPgae />,
          },
        ],
      },

      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "v",
            element: "v",
          },
          {
            path: "vv",
            element: "vv",
          },
        ],
      },
    ],
  },
]);

export default Routing;

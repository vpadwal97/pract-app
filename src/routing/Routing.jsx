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
import DnDFlow from "../pages/orderStateTransition/DnDFlow.jsx";
import CreateOrderStateTransition from "../pages/orderStateTransition/CreateEditOrderTransition.jsx";
import SearchOmsOrderStateTransition from "../pages/orderStateTransition/SearchOmsOrderStateTransition.jsx";
import ErrorExample from "../pages/ErrorExample.jsx";
import ColorPage from "../pages/ColorPage.jsx";
import InvoiceDocument from "../pages/InvoiceDocument.jsx";
// import CustomOwlCarousel from "../pages/CustomOwlCarousel.jsx";
import CarouselComponent from "../pages/CarouselComponent.jsx";
import ProductList from "../pages/ProductList.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";
import MultiRange from "../pages/MultiRange.jsx";
import GradientIcons from "../components/GradientIcons.jsx";
// import IV from "../pages/IV.jsx";

const Routing = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {" "}
        <Home />{" "}
      </>
    ),
    children: [
      // CustomOwlCarousel CarouselComponent

      // {
      //   path:"/CustomOwlCarousel",
      //   element: <CustomOwlCarousel />
      // },
      // {

      { path: "/MultiRange", element:<MultiRange /> },
      { path: "/SearchPage", element:<ProductList /> },
      { path: "/product/:id", element:<ProductDetail /> },
      { path: "GradientIcons", element:<GradientIcons /> },
      {
        path: "/CarouselComponent",
        element: <CarouselComponent />,
      },
      {
        path: "/colorPage",
        element: <ColorPage />,
      },
      {
        path: "/InvoiceDocument",
        element: <InvoiceDocument />,
      },
      {
        path: "/ErrorExample",
        element: <ErrorExample />,
      },
      {
        path: "/orderStateTransition",
        element: <OmsStateMachine />,
        children: [
          {
            path: "createOrderStateTransition",
            element: <CreateOrderStateTransition />,
          },
          {
            path: "SearchOmsOrderStateTransition",
            element: <SearchOmsOrderStateTransition />,
          },
        ],
      },

      {
        path: "/ChipsS",
        element: <ChipsS />,
      },

      {
        path: "/DnDFlow",
        element: <DnDFlow />,
      },
      {
        path: "/Tp",
        element: <Tp />,
      },

      {
        path: "/MultipleSelectChip",
        element: <MultipleSelectChip />,
      },
      {
        path: "/MaterialTable",
        element: <MaterialTable />,
      },
      {
        path: "/Navi",
        element: <Navi />,
      },
      // {
      //   path: "/IV",
      //   element: <IV />,
      // },
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
        element: <OmsStateMachine />,
        children: [
          {
            path: "SearchStateMasterDefinition",
            element: <SearchStateMasterDefinition />,
          },
          {
            path: "CreateEditStateMasterDefinition",
            element: <CreateEditStateMasterDefinition />,
          },
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
        element: (
          <>
            <b>FlowCharts</b> <Outlet />
          </>
        ),
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

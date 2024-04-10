import React, { useEffect, useRef, useState, useMemo } from "react";
import { Form } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "../assets/common/style.css";
import TablePagination from "@mui/material/TablePagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MaterialReactTable } from "material-react-table";
import Input from "../components/Input";
import { Response } from "./Response";

const MaterialTable = () => {
  const [searchType, setSearchType] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [orderStatusOptions, setOrderStatusOptions] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchDataCount, setSearchDataCount] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [page, setPage] = useState(0);

  const handleSearchTypeChange = (event) => {
    const selectedSearchType = event.target.value;
    setSearchType(selectedSearchType);

    if (selectedSearchType === "general") {
      setOrderStatus("General Order");
      setOrderStatusOptions(["Order ID", "Order Name", "SubOrder ID"]);
    } else if (selectedSearchType === "subscription") {
      setOrderStatus("Subscription Option");
      setOrderStatusOptions(["Order ID", "Order Name", "SubOrder ID"]);
    } else {
      setOrderStatus("");
    }
  };
  const sdata = Response.MaterialTable;
  // const sdata = {
  //   data: {
  //     responseList: [
  //       // {
  //       //   sr: "0",
  //       //   ordDate: "Mon, 18th Mar, 2024 05:16 PM  ",
  //       //   DeliveryDate: "Mon, 28th Mar, 2024 05:16 PM ",
  //       //   OrderId: "OR_12391",
  //       //   OrderStatus: "DYOJ order flow to Vvsion ",
  //       //   CustomerName: "HARSHAL MHATRE",
  //       //   CustomerMobile: "9879816216",
  //       //   CustEmail: "harshal.mhatre@anmsoft.com  ",
  //       //   SKU: "DYOJ_0000000091",
  //       //   ProdName:
  //       //     "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones",
  //       //   OrderVal: "2000.00",
  //       //   PayMode: "Proceed with Razorpay Secure Payment Gateway",
  //       //   RazorPayID: "pay_Nno4oBPVml5e6Q ",
  //       // },
  //       // {
  //       //   sr: "1",
  //       //   ordDate: "Mon, 18th Mar, 2024 04:33 PM  ",
  //       //   DeliveryDate: "",
  //       //   OrderId: "OR_12390",
  //       //   OrderStatus: "DYOJ order flow to Vvsion ",
  //       //   CustomerName: "HARSHAL MHATRE",
  //       //   CustomerMobile: "9879816216",
  //       //   CustEmail: "harshal.mhatre@anmsoft.com  ",
  //       //   SKU: "DYOJ_0000000091",
  //       //   ProdName:
  //       //     "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones",
  //       //   OrderVal: "2000.00",
  //       //   PayMode: "Proceed with Razorpay Secure Payment Gateway",
  //       //   RazorPayID: "pay_NnnLeR3tTAgJt9 ",
  //       // },
  //       // {
  //       //   sr: "2",
  //       //   ordDate: "Mon, 18th Mar, 2024 04:32 PM ",
  //       //   DeliveryDate: "",
  //       //   OrderId: "OR_12389",
  //       //   OrderStatus: "Awaiting for Gateway Response  ",
  //       //   CustomerName: "HARSHAL MHATRE",
  //       //   CustomerMobile: "9879816216",
  //       //   CustEmail: "harshal.mhatre@anmsoft.com ",
  //       //   SKU: "DYOJ_0000000091",
  //       //   ProdName:
  //       //     "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones",
  //       //   OrderVal: "2000.00",
  //       //   PayMode: "Proceed with Razorpay Secure Payment Gateway",
  //       //   RazorPayID: "-",
  //       // },
  //       // {
  //       //   sr: "3",
  //       //   ordDate: "Mon, 18th Mar, 2024 01:06 PM ",
  //       //   DeliveryDate: "",
  //       //   OrderId: "OR_12388",
  //       //   OrderStatus: "Order Received",
  //       //   CustomerName: "HARSHAL MHATRE",
  //       //   CustomerMobile: "9879816216",
  //       //   CustEmail: "harshal.mhatre@anmsoft.com ",
  //       //   SKU: "Jewellery-Style",
  //       //   ProdName: "Pure Luxury: Classic Plain Platinum Women's Ring",
  //       //   OrderVal: "2000.00",
  //       //   PayMode: "Proceed with Razorpay Secure Payment Gateway",
  //       //   RazorPayID: "pay_Nnjpd2Rfp473y1  ",
  //       // },
  //       // {
  //       //   sr: "4",
  //       //   ordDate: "Mon, 18th Mar, 2024 01:05 PM ",
  //       //   DeliveryDate: "",
  //       //   OrderId: "OR_12387",
  //       //   OrderStatus: "Awaiting for Gateway Response  ",
  //       //   CustomerName: "HARSHAL MHATRE",
  //       //   CustomerMobile: "9879816216",
  //       //   CustEmail: "harshal.mhatre@anmsoft.com ",
  //       //   SKU: "DYOJ_0000000091",
  //       //   ProdName: "Pure Luxury: Classic Plain Platinum Women's Ring",
  //       //   OrderVal: "2000.00",
  //       //   PayMode: "Proceed with Razorpay Secure Payment Gateway",
  //       //   RazorPayID: "-",
  //       // },
  //       // {
  //       //   sr: "5",
  //       //   ordDate: "Tue, 12th Mar, 2024 04:55 PM ",
  //       //   DeliveryDate: "",
  //       //   OrderId: "OR_12386",
  //       //   OrderStatus: "Order Received ",
  //       //   CustomerName: "HARSHAL MHATRE",
  //       //   CustomerMobile: "9879816216",
  //       //   CustEmail: "harshal.mhatre@anmsoft.com ",
  //       //   SKU: "CKCJ_0000259026  ",
  //       //   ProdName: "Pure Luxury: Classic Plain Platinum Women's Ring",
  //       //   OrderVal: "2000.00",
  //       //   PayMode: "Proceed with Razorpay Secure Payment Gateway",
  //       //   RazorPayID: "pay_NlQW6Sjcx70eHc  ",
  //       // },
  //       // {
  //       //   sr: "6",
  //       //   ordDate: "Tue, 12th Mar, 2024 03:37 PM ",
  //       //   DeliveryDate: "",
  //       //   OrderId: "Tue, 23rd May, 2023 09:45 AM",
  //       //   OrderStatus: "Order Received ",
  //       //   CustomerName: "HARSHAL MHATRE",
  //       //   CustomerMobile: "9879816216",
  //       //   CustEmail: "harshal.mhatre@anmsoft.com ",
  //       //   SKU: "vintage-car  ",
  //       //   ProdName: "Pure Luxury: Classic Plain Platinum Women's Ring",
  //       //   OrderVal: "12850.00",
  //       //   PayMode: "Proceed with Razorpay Secure Payment Gateway",
  //       //   RazorPayID: "pay_NlPAyQI75r46Hj  ",
  //       // },
  //       // {
  //       //   sr: "7",
  //       //   ordDate: "Wed, 17th Jan, 2024 04:24 PM ",
  //       //   DeliveryDate: "",
  //       //   OrderId: "OR_12385",
  //       //   OrderStatus: "Order Received ",
  //       //   CustomerName: "HARSHAL MHATRE",
  //       //   CustomerMobile: "9879816216",
  //       //   CustEmail: "harshal.mhatre@anmsoft.com ",
  //       //   SKU: "DYOJ_0000000091",
  //       //   ProdName: "Pure Luxury: Classic Plain Platinum Women's Ring",
  //       //   OrderVal: "12850.00",
  //       //   PayMode: "Cash On Delivery",
  //       //   RazorPayID: "pay_NPeb7ZdX1LhgZf  ",
  //       // },
  //       // {
  //       //   sr: "8",
  //       //   ordDate: "Wed, 17th Jan, 2024 01:02 PM ",
  //       //   DeliveryDate: "",
  //       //   OrderId: "OR_12379",
  //       //   OrderStatus: "Order Received ",
  //       //   CustomerName: "HARSHAL MHATRE",
  //       //   CustomerMobile: "9879816216",
  //       //   CustEmail: "harshal.mhatre@anmsoft.com ",
  //       //   SKU: "DYOJ_0000000091",
  //       //   ProdName: "Pure Luxury: Classic Plain Platinum Women's Ring",
  //       //   OrderVal: "12850.00",
  //       //   PayMode: "Cash On Delivery",
  //       //   RazorPayID: "pay_NPbA89xF1LMY14  ",
  //       // },
  //       // {
  //       //   sr: "9",
  //       //   ordDate: "Fri, 12th Jan, 2024 10:41 AM ",
  //       //   DeliveryDate: "",
  //       //   OrderId: "OR_12378",
  //       //   OrderStatus: "Appointment Created  ",
  //       //   CustomerName: "HARSHAL MHATRE",
  //       //   CustomerMobile: "9879816216",
  //       //   CustEmail: "harshal.mhatre@anmsoft.com ",
  //       //   SKU: "DYOJ_0000000091",
  //       //   ProdName: "Pure Luxury: Classic Plain Platinum Women's Ring",
  //       //   OrderVal: "12850.00",
  //       //   PayMode: "Cash On Delivery",
  //       //   RazorPayID: "-",
  //       // },
  //       // {
  //       //   sr: "10",
  //       //   ordDate: "Fri, 12th Jan, 2024 10:41 AM ",
  //       //   DeliveryDate: "",
  //       //   OrderId: "OR_1418",
  //       //   OrderStatus: "Order Received",
  //       //   CustomerName: "HARSHAL MHATRE",
  //       //   CustomerMobile: "9879816216",
  //       //   CustEmail: "harshal.mhatre@anmsoft.com ",
  //       //   SKU: "DYOJ_0000000091",
  //       //   ProdName:
  //       //     "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones",
  //       //   OrderVal: "12850.00",
  //       //   PayMode: "Cash On Delivery",
  //       //   RazorPayID: "-",
  //       // },
  //       // {
  //       //   sr: "11",
  //       //   ordDate: "Fri, 12th Jan, 2024 10:41 AM 11",
  //       //   DeliveryDate: "11",
  //       //   OrderId: "OR_141811",
  //       //   OrderStatus: "Order Received11",
  //       //   CustomerName: "HARSHAL MHATRE11",
  //       //   CustomerMobile: "987981621611",
  //       //   CustEmail: "harshal.mhatre@anmsoft.com 11",
  //       //   SKU: "DYOJ_000000009111",
  //       //   ProdName:
  //       //     "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones11",
  //       //   OrderVal: "12850.0011",
  //       //   PayMode: "Cash On Delivery11",
  //       //   RazorPayID: "-11",
  //       // },
  //       {
  //         sr: "1",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 1",
  //         DeliveryDate: "1",
  //         OrderId: "OR_14181",
  //         OrderStatus: "Order Received1",
  //         CustomerName: "HARSHAL MHATRE1",
  //         CustomerMobile: "98798162161",
  //         CustEmail: "harshal.mhatre@anmsoft.com 1",
  //         SKU: "DYOJ_00000000911",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones1",
  //         OrderVal: "12850.001",
  //         PayMode: "Cash On Delivery1",
  //         RazorPayID: "-1",
  //       },
  //       {
  //         sr: "2",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 2",
  //         DeliveryDate: "2",
  //         OrderId: "OR_14182",
  //         OrderStatus: "Order Received2",
  //         CustomerName: "HARSHAL MHATRE2",
  //         CustomerMobile: "98798162162",
  //         CustEmail: "harshal.mhatre@anmsoft.com 2",
  //         SKU: "DYOJ_00000000912",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones2",
  //         OrderVal: "12850.002",
  //         PayMode: "Cash On Delivery2",
  //         RazorPayID: "-2",
  //       },
  //       {
  //         sr: "3",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 3",
  //         DeliveryDate: "3",
  //         OrderId: "OR_14183",
  //         OrderStatus: "Order Received3",
  //         CustomerName: "HARSHAL MHATRE3",
  //         CustomerMobile: "98798162163",
  //         CustEmail: "harshal.mhatre@anmsoft.com 3",
  //         SKU: "DYOJ_00000000913",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones3",
  //         OrderVal: "12850.003",
  //         PayMode: "Cash On Delivery3",
  //         RazorPayID: "-3",
  //       },
  //       {
  //         sr: "4",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 4",
  //         DeliveryDate: "4",
  //         OrderId: "OR_14184",
  //         OrderStatus: "Order Received4",
  //         CustomerName: "HARSHAL MHATRE4",
  //         CustomerMobile: "98798162164",
  //         CustEmail: "harshal.mhatre@anmsoft.com 4",
  //         SKU: "DYOJ_00000000914",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones4",
  //         OrderVal: "12850.004",
  //         PayMode: "Cash On Delivery4",
  //         RazorPayID: "-4",
  //       },
  //       {
  //         sr: "5",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 5",
  //         DeliveryDate: "5",
  //         OrderId: "OR_14185",
  //         OrderStatus: "Order Received5",
  //         CustomerName: "HARSHAL MHATRE5",
  //         CustomerMobile: "98798162165",
  //         CustEmail: "harshal.mhatre@anmsoft.com 5",
  //         SKU: "DYOJ_00000000915",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones5",
  //         OrderVal: "12850.005",
  //         PayMode: "Cash On Delivery5",
  //         RazorPayID: "-5",
  //       },
  //       {
  //         sr: "6",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 6",
  //         DeliveryDate: "6",
  //         OrderId: "OR_14186",
  //         OrderStatus: "Order Received6",
  //         CustomerName: "HARSHAL MHATRE6",
  //         CustomerMobile: "98798162166",
  //         CustEmail: "harshal.mhatre@anmsoft.com 6",
  //         SKU: "DYOJ_00000000916",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones6",
  //         OrderVal: "12850.006",
  //         PayMode: "Cash On Delivery6",
  //         RazorPayID: "-6",
  //       },
  //       {
  //         sr: "7",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 7",
  //         DeliveryDate: "7",
  //         OrderId: "OR_14187",
  //         OrderStatus: "Order Received7",
  //         CustomerName: "HARSHAL MHATRE7",
  //         CustomerMobile: "98798162167",
  //         CustEmail: "harshal.mhatre@anmsoft.com 7",
  //         SKU: "DYOJ_00000000917",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones7",
  //         OrderVal: "12850.007",
  //         PayMode: "Cash On Delivery7",
  //         RazorPayID: "-7",
  //       },
  //       {
  //         sr: "8",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 8",
  //         DeliveryDate: "8",
  //         OrderId: "OR_14188",
  //         OrderStatus: "Order Received8",
  //         CustomerName: "HARSHAL MHATRE8",
  //         CustomerMobile: "98798162168",
  //         CustEmail: "harshal.mhatre@anmsoft.com 8",
  //         SKU: "DYOJ_00000000918",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones8",
  //         OrderVal: "12850.008",
  //         PayMode: "Cash On Delivery8",
  //         RazorPayID: "-8",
  //       },
  //       {
  //         sr: "9",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 9",
  //         DeliveryDate: "9",
  //         OrderId: "OR_14189",
  //         OrderStatus: "Order Received9",
  //         CustomerName: "HARSHAL MHATRE9",
  //         CustomerMobile: "98798162169",
  //         CustEmail: "harshal.mhatre@anmsoft.com 9",
  //         SKU: "DYOJ_00000000919",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones9",
  //         OrderVal: "12850.009",
  //         PayMode: "Cash On Delivery9",
  //         RazorPayID: "-9",
  //       },
  //       {
  //         sr: "10",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 10",
  //         DeliveryDate: "10",
  //         OrderId: "OR_141810",
  //         OrderStatus: "Order Received10",
  //         CustomerName: "HARSHAL MHATRE10",
  //         CustomerMobile: "987981621610",
  //         CustEmail: "harshal.mhatre@anmsoft.com 10",
  //         SKU: "DYOJ_000000009110",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones10",
  //         OrderVal: "12850.0010",
  //         PayMode: "Cash On Delivery10",
  //         RazorPayID: "-10",
  //       },
  //       {
  //         sr: "11",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 11",
  //         DeliveryDate: "11",
  //         OrderId: "OR_141811",
  //         OrderStatus: "Order Received11",
  //         CustomerName: "HARSHAL MHATRE11",
  //         CustomerMobile: "987981621611",
  //         CustEmail: "harshal.mhatre@anmsoft.com 11",
  //         SKU: "DYOJ_000000009111",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones11",
  //         OrderVal: "12850.0011",
  //         PayMode: "Cash On Delivery11",
  //         RazorPayID: "-11",
  //       },
  //       {
  //         sr: "12",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 12",
  //         DeliveryDate: "12",
  //         OrderId: "OR_141812",
  //         OrderStatus: "Order Received12",
  //         CustomerName: "HARSHAL MHATRE12",
  //         CustomerMobile: "987981621612",
  //         CustEmail: "harshal.mhatre@anmsoft.com 12",
  //         SKU: "DYOJ_000000009112",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones12",
  //         OrderVal: "12850.0012",
  //         PayMode: "Cash On Delivery12",
  //         RazorPayID: "-12",
  //       },
  //       {
  //         sr: "13",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 13",
  //         DeliveryDate: "13",
  //         OrderId: "OR_141813",
  //         OrderStatus: "Order Received13",
  //         CustomerName: "HARSHAL MHATRE13",
  //         CustomerMobile: "987981621613",
  //         CustEmail: "harshal.mhatre@anmsoft.com 13",
  //         SKU: "DYOJ_000000009113",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones13",
  //         OrderVal: "12850.0013",
  //         PayMode: "Cash On Delivery13",
  //         RazorPayID: "-13",
  //       },
  //       {
  //         sr: "14",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 14",
  //         DeliveryDate: "14",
  //         OrderId: "OR_141814",
  //         OrderStatus: "Order Received14",
  //         CustomerName: "HARSHAL MHATRE14",
  //         CustomerMobile: "987981621614",
  //         CustEmail: "harshal.mhatre@anmsoft.com 14",
  //         SKU: "DYOJ_000000009114",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones14",
  //         OrderVal: "12850.0014",
  //         PayMode: "Cash On Delivery14",
  //         RazorPayID: "-14",
  //       },
  //       {
  //         sr: "15",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 15",
  //         DeliveryDate: "15",
  //         OrderId: "OR_141815",
  //         OrderStatus: "Order Received15",
  //         CustomerName: "HARSHAL MHATRE15",
  //         CustomerMobile: "987981621615",
  //         CustEmail: "harshal.mhatre@anmsoft.com 15",
  //         SKU: "DYOJ_000000009115",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones15",
  //         OrderVal: "12850.0015",
  //         PayMode: "Cash On Delivery15",
  //         RazorPayID: "-15",
  //       },
  //       {
  //         sr: "16",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 16",
  //         DeliveryDate: "16",
  //         OrderId: "OR_141816",
  //         OrderStatus: "Order Received16",
  //         CustomerName: "HARSHAL MHATRE16",
  //         CustomerMobile: "987981621616",
  //         CustEmail: "harshal.mhatre@anmsoft.com 16",
  //         SKU: "DYOJ_000000009116",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones16",
  //         OrderVal: "12850.0016",
  //         PayMode: "Cash On Delivery16",
  //         RazorPayID: "-16",
  //       },
  //       {
  //         sr: "17",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 17",
  //         DeliveryDate: "17",
  //         OrderId: "OR_141817",
  //         OrderStatus: "Order Received17",
  //         CustomerName: "HARSHAL MHATRE17",
  //         CustomerMobile: "987981621617",
  //         CustEmail: "harshal.mhatre@anmsoft.com 17",
  //         SKU: "DYOJ_000000009117",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones17",
  //         OrderVal: "12850.0017",
  //         PayMode: "Cash On Delivery17",
  //         RazorPayID: "-17",
  //       },
  //       {
  //         sr: "18",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 18",
  //         DeliveryDate: "18",
  //         OrderId: "OR_141818",
  //         OrderStatus: "Order Received18",
  //         CustomerName: "HARSHAL MHATRE18",
  //         CustomerMobile: "987981621618",
  //         CustEmail: "harshal.mhatre@anmsoft.com 18",
  //         SKU: "DYOJ_000000009118",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones18",
  //         OrderVal: "12850.0018",
  //         PayMode: "Cash On Delivery18",
  //         RazorPayID: "-18",
  //       },
  //       {
  //         sr: "19",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 19",
  //         DeliveryDate: "19",
  //         OrderId: "OR_141819",
  //         OrderStatus: "Order Received19",
  //         CustomerName: "HARSHAL MHATRE19",
  //         CustomerMobile: "987981621619",
  //         CustEmail: "harshal.mhatre@anmsoft.com 19",
  //         SKU: "DYOJ_000000009119",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones19",
  //         OrderVal: "12850.0019",
  //         PayMode: "Cash On Delivery19",
  //         RazorPayID: "-19",
  //       },
  //       {
  //         sr: "20",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 20",
  //         DeliveryDate: "20",
  //         OrderId: "OR_141820",
  //         OrderStatus: "Order Received20",
  //         CustomerName: "HARSHAL MHATRE20",
  //         CustomerMobile: "987981621620",
  //         CustEmail: "harshal.mhatre@anmsoft.com 20",
  //         SKU: "DYOJ_000000009120",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones20",
  //         OrderVal: "12850.0020",
  //         PayMode: "Cash On Delivery20",
  //         RazorPayID: "-20",
  //       },
  //       {
  //         sr: "21",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 21",
  //         DeliveryDate: "21",
  //         OrderId: "OR_141821",
  //         OrderStatus: "Order Received21",
  //         CustomerName: "HARSHAL MHATRE21",
  //         CustomerMobile: "987981621621",
  //         CustEmail: "harshal.mhatre@anmsoft.com 21",
  //         SKU: "DYOJ_000000009121",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones21",
  //         OrderVal: "12850.0021",
  //         PayMode: "Cash On Delivery21",
  //         RazorPayID: "-21",
  //       },
  //       {
  //         sr: "22",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 22",
  //         DeliveryDate: "22",
  //         OrderId: "OR_141822",
  //         OrderStatus: "Order Received22",
  //         CustomerName: "HARSHAL MHATRE22",
  //         CustomerMobile: "987981621622",
  //         CustEmail: "harshal.mhatre@anmsoft.com 22",
  //         SKU: "DYOJ_000000009122",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones22",
  //         OrderVal: "12850.0022",
  //         PayMode: "Cash On Delivery22",
  //         RazorPayID: "-22",
  //       },
  //       {
  //         sr: "23",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 23",
  //         DeliveryDate: "23",
  //         OrderId: "OR_141823",
  //         OrderStatus: "Order Received23",
  //         CustomerName: "HARSHAL MHATRE23",
  //         CustomerMobile: "987981621623",
  //         CustEmail: "harshal.mhatre@anmsoft.com 23",
  //         SKU: "DYOJ_000000009123",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones23",
  //         OrderVal: "12850.0023",
  //         PayMode: "Cash On Delivery23",
  //         RazorPayID: "-23",
  //       },
  //       {
  //         sr: "24",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 24",
  //         DeliveryDate: "24",
  //         OrderId: "OR_141824",
  //         OrderStatus: "Order Received24",
  //         CustomerName: "HARSHAL MHATRE24",
  //         CustomerMobile: "987981621624",
  //         CustEmail: "harshal.mhatre@anmsoft.com 24",
  //         SKU: "DYOJ_000000009124",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones24",
  //         OrderVal: "12850.0024",
  //         PayMode: "Cash On Delivery24",
  //         RazorPayID: "-24",
  //       },
  //       {
  //         sr: "25",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 25",
  //         DeliveryDate: "25",
  //         OrderId: "OR_141825",
  //         OrderStatus: "Order Received25",
  //         CustomerName: "HARSHAL MHATRE25",
  //         CustomerMobile: "987981621625",
  //         CustEmail: "harshal.mhatre@anmsoft.com 25",
  //         SKU: "DYOJ_000000009125",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones25",
  //         OrderVal: "12850.0025",
  //         PayMode: "Cash On Delivery25",
  //         RazorPayID: "-25",
  //       },
  //       {
  //         sr: "26",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 26",
  //         DeliveryDate: "26",
  //         OrderId: "OR_141826",
  //         OrderStatus: "Order Received26",
  //         CustomerName: "HARSHAL MHATRE26",
  //         CustomerMobile: "987981621626",
  //         CustEmail: "harshal.mhatre@anmsoft.com 26",
  //         SKU: "DYOJ_000000009126",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones26",
  //         OrderVal: "12850.0026",
  //         PayMode: "Cash On Delivery26",
  //         RazorPayID: "-26",
  //       },
  //       {
  //         sr: "27",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 27",
  //         DeliveryDate: "27",
  //         OrderId: "OR_141827",
  //         OrderStatus: "Order Received27",
  //         CustomerName: "HARSHAL MHATRE27",
  //         CustomerMobile: "987981621627",
  //         CustEmail: "harshal.mhatre@anmsoft.com 27",
  //         SKU: "DYOJ_000000009127",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones27",
  //         OrderVal: "12850.0027",
  //         PayMode: "Cash On Delivery27",
  //         RazorPayID: "-27",
  //       },
  //       {
  //         sr: "28",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 28",
  //         DeliveryDate: "28",
  //         OrderId: "OR_141828",
  //         OrderStatus: "Order Received28",
  //         CustomerName: "HARSHAL MHATRE28",
  //         CustomerMobile: "987981621628",
  //         CustEmail: "harshal.mhatre@anmsoft.com 28",
  //         SKU: "DYOJ_000000009128",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones28",
  //         OrderVal: "12850.0028",
  //         PayMode: "Cash On Delivery28",
  //         RazorPayID: "-28",
  //       },
  //       {
  //         sr: "29",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 29",
  //         DeliveryDate: "29",
  //         OrderId: "OR_141829",
  //         OrderStatus: "Order Received29",
  //         CustomerName: "HARSHAL MHATRE29",
  //         CustomerMobile: "987981621629",
  //         CustEmail: "harshal.mhatre@anmsoft.com 29",
  //         SKU: "DYOJ_000000009129",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones29",
  //         OrderVal: "12850.0029",
  //         PayMode: "Cash On Delivery29",
  //         RazorPayID: "-29",
  //       },
  //       {
  //         sr: "30",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 30",
  //         DeliveryDate: "30",
  //         OrderId: "OR_141830",
  //         OrderStatus: "Order Received30",
  //         CustomerName: "HARSHAL MHATRE30",
  //         CustomerMobile: "987981621630",
  //         CustEmail: "harshal.mhatre@anmsoft.com 30",
  //         SKU: "DYOJ_000000009130",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones30",
  //         OrderVal: "12850.0030",
  //         PayMode: "Cash On Delivery30",
  //         RazorPayID: "-30",
  //       },
  //       {
  //         sr: "31",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 31",
  //         DeliveryDate: "31",
  //         OrderId: "OR_141831",
  //         OrderStatus: "Order Received31",
  //         CustomerName: "HARSHAL MHATRE31",
  //         CustomerMobile: "987981621631",
  //         CustEmail: "harshal.mhatre@anmsoft.com 31",
  //         SKU: "DYOJ_000000009131",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones31",
  //         OrderVal: "12850.0031",
  //         PayMode: "Cash On Delivery31",
  //         RazorPayID: "-31",
  //       },
  //       {
  //         sr: "32",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 32",
  //         DeliveryDate: "32",
  //         OrderId: "OR_141832",
  //         OrderStatus: "Order Received32",
  //         CustomerName: "HARSHAL MHATRE32",
  //         CustomerMobile: "987981621632",
  //         CustEmail: "harshal.mhatre@anmsoft.com 32",
  //         SKU: "DYOJ_000000009132",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones32",
  //         OrderVal: "12850.0032",
  //         PayMode: "Cash On Delivery32",
  //         RazorPayID: "-32",
  //       },
  //       {
  //         sr: "33",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 33",
  //         DeliveryDate: "33",
  //         OrderId: "OR_141833",
  //         OrderStatus: "Order Received33",
  //         CustomerName: "HARSHAL MHATRE33",
  //         CustomerMobile: "987981621633",
  //         CustEmail: "harshal.mhatre@anmsoft.com 33",
  //         SKU: "DYOJ_000000009133",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones33",
  //         OrderVal: "12850.0033",
  //         PayMode: "Cash On Delivery33",
  //         RazorPayID: "-33",
  //       },
  //       {
  //         sr: "34",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 34",
  //         DeliveryDate: "34",
  //         OrderId: "OR_141834",
  //         OrderStatus: "Order Received34",
  //         CustomerName: "HARSHAL MHATRE34",
  //         CustomerMobile: "987981621634",
  //         CustEmail: "harshal.mhatre@anmsoft.com 34",
  //         SKU: "DYOJ_000000009134",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones34",
  //         OrderVal: "12850.0034",
  //         PayMode: "Cash On Delivery34",
  //         RazorPayID: "-34",
  //       },
  //       {
  //         sr: "35",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 35",
  //         DeliveryDate: "35",
  //         OrderId: "OR_141835",
  //         OrderStatus: "Order Received35",
  //         CustomerName: "HARSHAL MHATRE35",
  //         CustomerMobile: "987981621635",
  //         CustEmail: "harshal.mhatre@anmsoft.com 35",
  //         SKU: "DYOJ_000000009135",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones35",
  //         OrderVal: "12850.0035",
  //         PayMode: "Cash On Delivery35",
  //         RazorPayID: "-35",
  //       },
  //       {
  //         sr: "36",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 36",
  //         DeliveryDate: "36",
  //         OrderId: "OR_141836",
  //         OrderStatus: "Order Received36",
  //         CustomerName: "HARSHAL MHATRE36",
  //         CustomerMobile: "987981621636",
  //         CustEmail: "harshal.mhatre@anmsoft.com 36",
  //         SKU: "DYOJ_000000009136",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones36",
  //         OrderVal: "12850.0036",
  //         PayMode: "Cash On Delivery36",
  //         RazorPayID: "-36",
  //       },
  //       {
  //         sr: "37",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 37",
  //         DeliveryDate: "37",
  //         OrderId: "OR_141837",
  //         OrderStatus: "Order Received37",
  //         CustomerName: "HARSHAL MHATRE37",
  //         CustomerMobile: "987981621637",
  //         CustEmail: "harshal.mhatre@anmsoft.com 37",
  //         SKU: "DYOJ_000000009137",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones37",
  //         OrderVal: "12850.0037",
  //         PayMode: "Cash On Delivery37",
  //         RazorPayID: "-37",
  //       },
  //       {
  //         sr: "38",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 38",
  //         DeliveryDate: "38",
  //         OrderId: "OR_141838",
  //         OrderStatus: "Order Received38",
  //         CustomerName: "HARSHAL MHATRE38",
  //         CustomerMobile: "987981621638",
  //         CustEmail: "harshal.mhatre@anmsoft.com 38",
  //         SKU: "DYOJ_000000009138",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones38",
  //         OrderVal: "12850.0038",
  //         PayMode: "Cash On Delivery38",
  //         RazorPayID: "-38",
  //       },
  //       {
  //         sr: "39",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 39",
  //         DeliveryDate: "39",
  //         OrderId: "OR_141839",
  //         OrderStatus: "Order Received39",
  //         CustomerName: "HARSHAL MHATRE39",
  //         CustomerMobile: "987981621639",
  //         CustEmail: "harshal.mhatre@anmsoft.com 39",
  //         SKU: "DYOJ_000000009139",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones39",
  //         OrderVal: "12850.0039",
  //         PayMode: "Cash On Delivery39",
  //         RazorPayID: "-39",
  //       },
  //       {
  //         sr: "40",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 40",
  //         DeliveryDate: "40",
  //         OrderId: "OR_141840",
  //         OrderStatus: "Order Received40",
  //         CustomerName: "HARSHAL MHATRE40",
  //         CustomerMobile: "987981621640",
  //         CustEmail: "harshal.mhatre@anmsoft.com 40",
  //         SKU: "DYOJ_000000009140",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones40",
  //         OrderVal: "12850.0040",
  //         PayMode: "Cash On Delivery40",
  //         RazorPayID: "-40",
  //       },
  //       {
  //         sr: "41",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 41",
  //         DeliveryDate: "41",
  //         OrderId: "OR_141841",
  //         OrderStatus: "Order Received41",
  //         CustomerName: "HARSHAL MHATRE41",
  //         CustomerMobile: "987981621641",
  //         CustEmail: "harshal.mhatre@anmsoft.com 41",
  //         SKU: "DYOJ_000000009141",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones41",
  //         OrderVal: "12850.0041",
  //         PayMode: "Cash On Delivery41",
  //         RazorPayID: "-41",
  //       },
  //       {
  //         sr: "42",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 42",
  //         DeliveryDate: "42",
  //         OrderId: "OR_141842",
  //         OrderStatus: "Order Received42",
  //         CustomerName: "HARSHAL MHATRE42",
  //         CustomerMobile: "987981621642",
  //         CustEmail: "harshal.mhatre@anmsoft.com 42",
  //         SKU: "DYOJ_000000009142",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones42",
  //         OrderVal: "12850.0042",
  //         PayMode: "Cash On Delivery42",
  //         RazorPayID: "-42",
  //       },
  //       {
  //         sr: "43",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 43",
  //         DeliveryDate: "43",
  //         OrderId: "OR_141843",
  //         OrderStatus: "Order Received43",
  //         CustomerName: "HARSHAL MHATRE43",
  //         CustomerMobile: "987981621643",
  //         CustEmail: "harshal.mhatre@anmsoft.com 43",
  //         SKU: "DYOJ_000000009143",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones43",
  //         OrderVal: "12850.0043",
  //         PayMode: "Cash On Delivery43",
  //         RazorPayID: "-43",
  //       },
  //       {
  //         sr: "44",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 44",
  //         DeliveryDate: "44",
  //         OrderId: "OR_141844",
  //         OrderStatus: "Order Received44",
  //         CustomerName: "HARSHAL MHATRE44",
  //         CustomerMobile: "987981621644",
  //         CustEmail: "harshal.mhatre@anmsoft.com 44",
  //         SKU: "DYOJ_000000009144",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones44",
  //         OrderVal: "12850.0044",
  //         PayMode: "Cash On Delivery44",
  //         RazorPayID: "-44",
  //       },
  //       {
  //         sr: "45",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 45",
  //         DeliveryDate: "45",
  //         OrderId: "OR_141845",
  //         OrderStatus: "Order Received45",
  //         CustomerName: "HARSHAL MHATRE45",
  //         CustomerMobile: "987981621645",
  //         CustEmail: "harshal.mhatre@anmsoft.com 45",
  //         SKU: "DYOJ_000000009145",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones45",
  //         OrderVal: "12850.0045",
  //         PayMode: "Cash On Delivery45",
  //         RazorPayID: "-45",
  //       },
  //       {
  //         sr: "46",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 46",
  //         DeliveryDate: "46",
  //         OrderId: "OR_141846",
  //         OrderStatus: "Order Received46",
  //         CustomerName: "HARSHAL MHATRE46",
  //         CustomerMobile: "987981621646",
  //         CustEmail: "harshal.mhatre@anmsoft.com 46",
  //         SKU: "DYOJ_000000009146",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones46",
  //         OrderVal: "12850.0046",
  //         PayMode: "Cash On Delivery46",
  //         RazorPayID: "-46",
  //       },
  //       {
  //         sr: "47",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 47",
  //         DeliveryDate: "47",
  //         OrderId: "OR_141847",
  //         OrderStatus: "Order Received47",
  //         CustomerName: "HARSHAL MHATRE47",
  //         CustomerMobile: "987981621647",
  //         CustEmail: "harshal.mhatre@anmsoft.com 47",
  //         SKU: "DYOJ_000000009147",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones47",
  //         OrderVal: "12850.0047",
  //         PayMode: "Cash On Delivery47",
  //         RazorPayID: "-47",
  //       },
  //       {
  //         sr: "48",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 48",
  //         DeliveryDate: "48",
  //         OrderId: "OR_141848",
  //         OrderStatus: "Order Received48",
  //         CustomerName: "HARSHAL MHATRE48",
  //         CustomerMobile: "987981621648",
  //         CustEmail: "harshal.mhatre@anmsoft.com 48",
  //         SKU: "DYOJ_000000009148",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones48",
  //         OrderVal: "12850.0048",
  //         PayMode: "Cash On Delivery48",
  //         RazorPayID: "-48",
  //       },
  //       {
  //         sr: "49",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 49",
  //         DeliveryDate: "49",
  //         OrderId: "OR_141849",
  //         OrderStatus: "Order Received49",
  //         CustomerName: "HARSHAL MHATRE49",
  //         CustomerMobile: "987981621649",
  //         CustEmail: "harshal.mhatre@anmsoft.com 49",
  //         SKU: "DYOJ_000000009149",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones49",
  //         OrderVal: "12850.0049",
  //         PayMode: "Cash On Delivery49",
  //         RazorPayID: "-49",
  //       },
  //       {
  //         sr: "50",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 50",
  //         DeliveryDate: "50",
  //         OrderId: "OR_141850",
  //         OrderStatus: "Order Received50",
  //         CustomerName: "HARSHAL MHATRE50",
  //         CustomerMobile: "987981621650",
  //         CustEmail: "harshal.mhatre@anmsoft.com 50",
  //         SKU: "DYOJ_000000009150",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones50",
  //         OrderVal: "12850.0050",
  //         PayMode: "Cash On Delivery50",
  //         RazorPayID: "-50",
  //       },
  //       {
  //         sr: "51",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 51",
  //         DeliveryDate: "51",
  //         OrderId: "OR_141851",
  //         OrderStatus: "Order Received51",
  //         CustomerName: "HARSHAL MHATRE51",
  //         CustomerMobile: "987981621651",
  //         CustEmail: "harshal.mhatre@anmsoft.com 51",
  //         SKU: "DYOJ_000000009151",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones51",
  //         OrderVal: "12850.0051",
  //         PayMode: "Cash On Delivery51",
  //         RazorPayID: "-51",
  //       },
  //       {
  //         sr: "52",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 52",
  //         DeliveryDate: "52",
  //         OrderId: "OR_141852",
  //         OrderStatus: "Order Received52",
  //         CustomerName: "HARSHAL MHATRE52",
  //         CustomerMobile: "987981621652",
  //         CustEmail: "harshal.mhatre@anmsoft.com 52",
  //         SKU: "DYOJ_000000009152",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones52",
  //         OrderVal: "12850.0052",
  //         PayMode: "Cash On Delivery52",
  //         RazorPayID: "-52",
  //       },
  //       {
  //         sr: "53",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 53",
  //         DeliveryDate: "53",
  //         OrderId: "OR_141853",
  //         OrderStatus: "Order Received53",
  //         CustomerName: "HARSHAL MHATRE53",
  //         CustomerMobile: "987981621653",
  //         CustEmail: "harshal.mhatre@anmsoft.com 53",
  //         SKU: "DYOJ_000000009153",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones53",
  //         OrderVal: "12850.0053",
  //         PayMode: "Cash On Delivery53",
  //         RazorPayID: "-53",
  //       },
  //       {
  //         sr: "54",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 54",
  //         DeliveryDate: "54",
  //         OrderId: "OR_141854",
  //         OrderStatus: "Order Received54",
  //         CustomerName: "HARSHAL MHATRE54",
  //         CustomerMobile: "987981621654",
  //         CustEmail: "harshal.mhatre@anmsoft.com 54",
  //         SKU: "DYOJ_000000009154",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones54",
  //         OrderVal: "12850.0054",
  //         PayMode: "Cash On Delivery54",
  //         RazorPayID: "-54",
  //       },
  //       {
  //         sr: "55",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 55",
  //         DeliveryDate: "55",
  //         OrderId: "OR_141855",
  //         OrderStatus: "Order Received55",
  //         CustomerName: "HARSHAL MHATRE55",
  //         CustomerMobile: "987981621655",
  //         CustEmail: "harshal.mhatre@anmsoft.com 55",
  //         SKU: "DYOJ_000000009155",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones55",
  //         OrderVal: "12850.0055",
  //         PayMode: "Cash On Delivery55",
  //         RazorPayID: "-55",
  //       },
  //       {
  //         sr: "56",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 56",
  //         DeliveryDate: "56",
  //         OrderId: "OR_141856",
  //         OrderStatus: "Order Received56",
  //         CustomerName: "HARSHAL MHATRE56",
  //         CustomerMobile: "987981621656",
  //         CustEmail: "harshal.mhatre@anmsoft.com 56",
  //         SKU: "DYOJ_000000009156",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones56",
  //         OrderVal: "12850.0056",
  //         PayMode: "Cash On Delivery56",
  //         RazorPayID: "-56",
  //       },
  //       {
  //         sr: "57",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 57",
  //         DeliveryDate: "57",
  //         OrderId: "OR_141857",
  //         OrderStatus: "Order Received57",
  //         CustomerName: "HARSHAL MHATRE57",
  //         CustomerMobile: "987981621657",
  //         CustEmail: "harshal.mhatre@anmsoft.com 57",
  //         SKU: "DYOJ_000000009157",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones57",
  //         OrderVal: "12850.0057",
  //         PayMode: "Cash On Delivery57",
  //         RazorPayID: "-57",
  //       },
  //       {
  //         sr: "58",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 58",
  //         DeliveryDate: "58",
  //         OrderId: "OR_141858",
  //         OrderStatus: "Order Received58",
  //         CustomerName: "HARSHAL MHATRE58",
  //         CustomerMobile: "987981621658",
  //         CustEmail: "harshal.mhatre@anmsoft.com 58",
  //         SKU: "DYOJ_000000009158",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones58",
  //         OrderVal: "12850.0058",
  //         PayMode: "Cash On Delivery58",
  //         RazorPayID: "-58",
  //       },
  //       {
  //         sr: "59",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 59",
  //         DeliveryDate: "59",
  //         OrderId: "OR_141859",
  //         OrderStatus: "Order Received59",
  //         CustomerName: "HARSHAL MHATRE59",
  //         CustomerMobile: "987981621659",
  //         CustEmail: "harshal.mhatre@anmsoft.com 59",
  //         SKU: "DYOJ_000000009159",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones59",
  //         OrderVal: "12850.0059",
  //         PayMode: "Cash On Delivery59",
  //         RazorPayID: "-59",
  //       },
  //       {
  //         sr: "60",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 60",
  //         DeliveryDate: "60",
  //         OrderId: "OR_141860",
  //         OrderStatus: "Order Received60",
  //         CustomerName: "HARSHAL MHATRE60",
  //         CustomerMobile: "987981621660",
  //         CustEmail: "harshal.mhatre@anmsoft.com 60",
  //         SKU: "DYOJ_000000009160",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones60",
  //         OrderVal: "12850.0060",
  //         PayMode: "Cash On Delivery60",
  //         RazorPayID: "-60",
  //       },
  //       {
  //         sr: "61",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 61",
  //         DeliveryDate: "61",
  //         OrderId: "OR_141861",
  //         OrderStatus: "Order Received61",
  //         CustomerName: "HARSHAL MHATRE61",
  //         CustomerMobile: "987981621661",
  //         CustEmail: "harshal.mhatre@anmsoft.com 61",
  //         SKU: "DYOJ_000000009161",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones61",
  //         OrderVal: "12850.0061",
  //         PayMode: "Cash On Delivery61",
  //         RazorPayID: "-61",
  //       },
  //       {
  //         sr: "62",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 62",
  //         DeliveryDate: "62",
  //         OrderId: "OR_141862",
  //         OrderStatus: "Order Received62",
  //         CustomerName: "HARSHAL MHATRE62",
  //         CustomerMobile: "987981621662",
  //         CustEmail: "harshal.mhatre@anmsoft.com 62",
  //         SKU: "DYOJ_000000009162",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones62",
  //         OrderVal: "12850.0062",
  //         PayMode: "Cash On Delivery62",
  //         RazorPayID: "-62",
  //       },
  //       {
  //         sr: "63",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 63",
  //         DeliveryDate: "63",
  //         OrderId: "OR_141863",
  //         OrderStatus: "Order Received63",
  //         CustomerName: "HARSHAL MHATRE63",
  //         CustomerMobile: "987981621663",
  //         CustEmail: "harshal.mhatre@anmsoft.com 63",
  //         SKU: "DYOJ_000000009163",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones63",
  //         OrderVal: "12850.0063",
  //         PayMode: "Cash On Delivery63",
  //         RazorPayID: "-63",
  //       },
  //       {
  //         sr: "64",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 64",
  //         DeliveryDate: "64",
  //         OrderId: "OR_141864",
  //         OrderStatus: "Order Received64",
  //         CustomerName: "HARSHAL MHATRE64",
  //         CustomerMobile: "987981621664",
  //         CustEmail: "harshal.mhatre@anmsoft.com 64",
  //         SKU: "DYOJ_000000009164",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones64",
  //         OrderVal: "12850.0064",
  //         PayMode: "Cash On Delivery64",
  //         RazorPayID: "-64",
  //       },
  //       {
  //         sr: "65",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 65",
  //         DeliveryDate: "65",
  //         OrderId: "OR_141865",
  //         OrderStatus: "Order Received65",
  //         CustomerName: "HARSHAL MHATRE65",
  //         CustomerMobile: "987981621665",
  //         CustEmail: "harshal.mhatre@anmsoft.com 65",
  //         SKU: "DYOJ_000000009165",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones65",
  //         OrderVal: "12850.0065",
  //         PayMode: "Cash On Delivery65",
  //         RazorPayID: "-65",
  //       },
  //       {
  //         sr: "66",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 66",
  //         DeliveryDate: "66",
  //         OrderId: "OR_141866",
  //         OrderStatus: "Order Received66",
  //         CustomerName: "HARSHAL MHATRE66",
  //         CustomerMobile: "987981621666",
  //         CustEmail: "harshal.mhatre@anmsoft.com 66",
  //         SKU: "DYOJ_000000009166",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones66",
  //         OrderVal: "12850.0066",
  //         PayMode: "Cash On Delivery66",
  //         RazorPayID: "-66",
  //       },
  //       {
  //         sr: "67",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 67",
  //         DeliveryDate: "67",
  //         OrderId: "OR_141867",
  //         OrderStatus: "Order Received67",
  //         CustomerName: "HARSHAL MHATRE67",
  //         CustomerMobile: "987981621667",
  //         CustEmail: "harshal.mhatre@anmsoft.com 67",
  //         SKU: "DYOJ_000000009167",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones67",
  //         OrderVal: "12850.0067",
  //         PayMode: "Cash On Delivery67",
  //         RazorPayID: "-67",
  //       },
  //       {
  //         sr: "68",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 68",
  //         DeliveryDate: "68",
  //         OrderId: "OR_141868",
  //         OrderStatus: "Order Received68",
  //         CustomerName: "HARSHAL MHATRE68",
  //         CustomerMobile: "987981621668",
  //         CustEmail: "harshal.mhatre@anmsoft.com 68",
  //         SKU: "DYOJ_000000009168",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones68",
  //         OrderVal: "12850.0068",
  //         PayMode: "Cash On Delivery68",
  //         RazorPayID: "-68",
  //       },
  //       {
  //         sr: "69",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 69",
  //         DeliveryDate: "69",
  //         OrderId: "OR_141869",
  //         OrderStatus: "Order Received69",
  //         CustomerName: "HARSHAL MHATRE69",
  //         CustomerMobile: "987981621669",
  //         CustEmail: "harshal.mhatre@anmsoft.com 69",
  //         SKU: "DYOJ_000000009169",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones69",
  //         OrderVal: "12850.0069",
  //         PayMode: "Cash On Delivery69",
  //         RazorPayID: "-69",
  //       },
  //       {
  //         sr: "70",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 70",
  //         DeliveryDate: "70",
  //         OrderId: "OR_141870",
  //         OrderStatus: "Order Received70",
  //         CustomerName: "HARSHAL MHATRE70",
  //         CustomerMobile: "987981621670",
  //         CustEmail: "harshal.mhatre@anmsoft.com 70",
  //         SKU: "DYOJ_000000009170",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones70",
  //         OrderVal: "12850.0070",
  //         PayMode: "Cash On Delivery70",
  //         RazorPayID: "-70",
  //       },
  //       {
  //         sr: "71",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 71",
  //         DeliveryDate: "71",
  //         OrderId: "OR_141871",
  //         OrderStatus: "Order Received71",
  //         CustomerName: "HARSHAL MHATRE71",
  //         CustomerMobile: "987981621671",
  //         CustEmail: "harshal.mhatre@anmsoft.com 71",
  //         SKU: "DYOJ_000000009171",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones71",
  //         OrderVal: "12850.0071",
  //         PayMode: "Cash On Delivery71",
  //         RazorPayID: "-71",
  //       },
  //       {
  //         sr: "72",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 72",
  //         DeliveryDate: "72",
  //         OrderId: "OR_141872",
  //         OrderStatus: "Order Received72",
  //         CustomerName: "HARSHAL MHATRE72",
  //         CustomerMobile: "987981621672",
  //         CustEmail: "harshal.mhatre@anmsoft.com 72",
  //         SKU: "DYOJ_000000009172",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones72",
  //         OrderVal: "12850.0072",
  //         PayMode: "Cash On Delivery72",
  //         RazorPayID: "-72",
  //       },
  //       {
  //         sr: "73",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 73",
  //         DeliveryDate: "73",
  //         OrderId: "OR_141873",
  //         OrderStatus: "Order Received73",
  //         CustomerName: "HARSHAL MHATRE73",
  //         CustomerMobile: "987981621673",
  //         CustEmail: "harshal.mhatre@anmsoft.com 73",
  //         SKU: "DYOJ_000000009173",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones73",
  //         OrderVal: "12850.0073",
  //         PayMode: "Cash On Delivery73",
  //         RazorPayID: "-73",
  //       },
  //       {
  //         sr: "74",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 74",
  //         DeliveryDate: "74",
  //         OrderId: "OR_141874",
  //         OrderStatus: "Order Received74",
  //         CustomerName: "HARSHAL MHATRE74",
  //         CustomerMobile: "987981621674",
  //         CustEmail: "harshal.mhatre@anmsoft.com 74",
  //         SKU: "DYOJ_000000009174",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones74",
  //         OrderVal: "12850.0074",
  //         PayMode: "Cash On Delivery74",
  //         RazorPayID: "-74",
  //       },
  //       {
  //         sr: "75",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 75",
  //         DeliveryDate: "75",
  //         OrderId: "OR_141875",
  //         OrderStatus: "Order Received75",
  //         CustomerName: "HARSHAL MHATRE75",
  //         CustomerMobile: "987981621675",
  //         CustEmail: "harshal.mhatre@anmsoft.com 75",
  //         SKU: "DYOJ_000000009175",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones75",
  //         OrderVal: "12850.0075",
  //         PayMode: "Cash On Delivery75",
  //         RazorPayID: "-75",
  //       },
  //       {
  //         sr: "76",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 76",
  //         DeliveryDate: "76",
  //         OrderId: "OR_141876",
  //         OrderStatus: "Order Received76",
  //         CustomerName: "HARSHAL MHATRE76",
  //         CustomerMobile: "987981621676",
  //         CustEmail: "harshal.mhatre@anmsoft.com 76",
  //         SKU: "DYOJ_000000009176",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones76",
  //         OrderVal: "12850.0076",
  //         PayMode: "Cash On Delivery76",
  //         RazorPayID: "-76",
  //       },
  //       {
  //         sr: "77",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 77",
  //         DeliveryDate: "77",
  //         OrderId: "OR_141877",
  //         OrderStatus: "Order Received77",
  //         CustomerName: "HARSHAL MHATRE77",
  //         CustomerMobile: "987981621677",
  //         CustEmail: "harshal.mhatre@anmsoft.com 77",
  //         SKU: "DYOJ_000000009177",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones77",
  //         OrderVal: "12850.0077",
  //         PayMode: "Cash On Delivery77",
  //         RazorPayID: "-77",
  //       },
  //       {
  //         sr: "78",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 78",
  //         DeliveryDate: "78",
  //         OrderId: "OR_141878",
  //         OrderStatus: "Order Received78",
  //         CustomerName: "HARSHAL MHATRE78",
  //         CustomerMobile: "987981621678",
  //         CustEmail: "harshal.mhatre@anmsoft.com 78",
  //         SKU: "DYOJ_000000009178",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones78",
  //         OrderVal: "12850.0078",
  //         PayMode: "Cash On Delivery78",
  //         RazorPayID: "-78",
  //       },
  //       {
  //         sr: "79",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 79",
  //         DeliveryDate: "79",
  //         OrderId: "OR_141879",
  //         OrderStatus: "Order Received79",
  //         CustomerName: "HARSHAL MHATRE79",
  //         CustomerMobile: "987981621679",
  //         CustEmail: "harshal.mhatre@anmsoft.com 79",
  //         SKU: "DYOJ_000000009179",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones79",
  //         OrderVal: "12850.0079",
  //         PayMode: "Cash On Delivery79",
  //         RazorPayID: "-79",
  //       },
  //       {
  //         sr: "80",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 80",
  //         DeliveryDate: "80",
  //         OrderId: "OR_141880",
  //         OrderStatus: "Order Received80",
  //         CustomerName: "HARSHAL MHATRE80",
  //         CustomerMobile: "987981621680",
  //         CustEmail: "harshal.mhatre@anmsoft.com 80",
  //         SKU: "DYOJ_000000009180",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones80",
  //         OrderVal: "12850.0080",
  //         PayMode: "Cash On Delivery80",
  //         RazorPayID: "-80",
  //       },
  //       {
  //         sr: "81",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 81",
  //         DeliveryDate: "81",
  //         OrderId: "OR_141881",
  //         OrderStatus: "Order Received81",
  //         CustomerName: "HARSHAL MHATRE81",
  //         CustomerMobile: "987981621681",
  //         CustEmail: "harshal.mhatre@anmsoft.com 81",
  //         SKU: "DYOJ_000000009181",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones81",
  //         OrderVal: "12850.0081",
  //         PayMode: "Cash On Delivery81",
  //         RazorPayID: "-81",
  //       },
  //       {
  //         sr: "82",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 82",
  //         DeliveryDate: "82",
  //         OrderId: "OR_141882",
  //         OrderStatus: "Order Received82",
  //         CustomerName: "HARSHAL MHATRE82",
  //         CustomerMobile: "987981621682",
  //         CustEmail: "harshal.mhatre@anmsoft.com 82",
  //         SKU: "DYOJ_000000009182",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones82",
  //         OrderVal: "12850.0082",
  //         PayMode: "Cash On Delivery82",
  //         RazorPayID: "-82",
  //       },
  //       {
  //         sr: "83",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 83",
  //         DeliveryDate: "83",
  //         OrderId: "OR_141883",
  //         OrderStatus: "Order Received83",
  //         CustomerName: "HARSHAL MHATRE83",
  //         CustomerMobile: "987981621683",
  //         CustEmail: "harshal.mhatre@anmsoft.com 83",
  //         SKU: "DYOJ_000000009183",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones83",
  //         OrderVal: "12850.0083",
  //         PayMode: "Cash On Delivery83",
  //         RazorPayID: "-83",
  //       },
  //       {
  //         sr: "84",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 84",
  //         DeliveryDate: "84",
  //         OrderId: "OR_141884",
  //         OrderStatus: "Order Received84",
  //         CustomerName: "HARSHAL MHATRE84",
  //         CustomerMobile: "987981621684",
  //         CustEmail: "harshal.mhatre@anmsoft.com 84",
  //         SKU: "DYOJ_000000009184",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones84",
  //         OrderVal: "12850.0084",
  //         PayMode: "Cash On Delivery84",
  //         RazorPayID: "-84",
  //       },
  //       {
  //         sr: "85",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 85",
  //         DeliveryDate: "85",
  //         OrderId: "OR_141885",
  //         OrderStatus: "Order Received85",
  //         CustomerName: "HARSHAL MHATRE85",
  //         CustomerMobile: "987981621685",
  //         CustEmail: "harshal.mhatre@anmsoft.com 85",
  //         SKU: "DYOJ_000000009185",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones85",
  //         OrderVal: "12850.0085",
  //         PayMode: "Cash On Delivery85",
  //         RazorPayID: "-85",
  //       },
  //       {
  //         sr: "86",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 86",
  //         DeliveryDate: "86",
  //         OrderId: "OR_141886",
  //         OrderStatus: "Order Received86",
  //         CustomerName: "HARSHAL MHATRE86",
  //         CustomerMobile: "987981621686",
  //         CustEmail: "harshal.mhatre@anmsoft.com 86",
  //         SKU: "DYOJ_000000009186",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones86",
  //         OrderVal: "12850.0086",
  //         PayMode: "Cash On Delivery86",
  //         RazorPayID: "-86",
  //       },
  //       {
  //         sr: "87",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 87",
  //         DeliveryDate: "87",
  //         OrderId: "OR_141887",
  //         OrderStatus: "Order Received87",
  //         CustomerName: "HARSHAL MHATRE87",
  //         CustomerMobile: "987981621687",
  //         CustEmail: "harshal.mhatre@anmsoft.com 87",
  //         SKU: "DYOJ_000000009187",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones87",
  //         OrderVal: "12850.0087",
  //         PayMode: "Cash On Delivery87",
  //         RazorPayID: "-87",
  //       },
  //       {
  //         sr: "88",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 88",
  //         DeliveryDate: "88",
  //         OrderId: "OR_141888",
  //         OrderStatus: "Order Received88",
  //         CustomerName: "HARSHAL MHATRE88",
  //         CustomerMobile: "987981621688",
  //         CustEmail: "harshal.mhatre@anmsoft.com 88",
  //         SKU: "DYOJ_000000009188",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones88",
  //         OrderVal: "12850.0088",
  //         PayMode: "Cash On Delivery88",
  //         RazorPayID: "-88",
  //       },
  //       {
  //         sr: "89",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 89",
  //         DeliveryDate: "89",
  //         OrderId: "OR_141889",
  //         OrderStatus: "Order Received89",
  //         CustomerName: "HARSHAL MHATRE89",
  //         CustomerMobile: "987981621689",
  //         CustEmail: "harshal.mhatre@anmsoft.com 89",
  //         SKU: "DYOJ_000000009189",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones89",
  //         OrderVal: "12850.0089",
  //         PayMode: "Cash On Delivery89",
  //         RazorPayID: "-89",
  //       },
  //       {
  //         sr: "90",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 90",
  //         DeliveryDate: "90",
  //         OrderId: "OR_141890",
  //         OrderStatus: "Order Received90",
  //         CustomerName: "HARSHAL MHATRE90",
  //         CustomerMobile: "987981621690",
  //         CustEmail: "harshal.mhatre@anmsoft.com 90",
  //         SKU: "DYOJ_000000009190",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones90",
  //         OrderVal: "12850.0090",
  //         PayMode: "Cash On Delivery90",
  //         RazorPayID: "-90",
  //       },
  //       {
  //         sr: "91",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 91",
  //         DeliveryDate: "91",
  //         OrderId: "OR_141891",
  //         OrderStatus: "Order Received91",
  //         CustomerName: "HARSHAL MHATRE91",
  //         CustomerMobile: "987981621691",
  //         CustEmail: "harshal.mhatre@anmsoft.com 91",
  //         SKU: "DYOJ_000000009191",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones91",
  //         OrderVal: "12850.0091",
  //         PayMode: "Cash On Delivery91",
  //         RazorPayID: "-91",
  //       },
  //       {
  //         sr: "92",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 92",
  //         DeliveryDate: "92",
  //         OrderId: "OR_141892",
  //         OrderStatus: "Order Received92",
  //         CustomerName: "HARSHAL MHATRE92",
  //         CustomerMobile: "987981621692",
  //         CustEmail: "harshal.mhatre@anmsoft.com 92",
  //         SKU: "DYOJ_000000009192",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones92",
  //         OrderVal: "12850.0092",
  //         PayMode: "Cash On Delivery92",
  //         RazorPayID: "-92",
  //       },
  //       {
  //         sr: "93",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 93",
  //         DeliveryDate: "93",
  //         OrderId: "OR_141893",
  //         OrderStatus: "Order Received93",
  //         CustomerName: "HARSHAL MHATRE93",
  //         CustomerMobile: "987981621693",
  //         CustEmail: "harshal.mhatre@anmsoft.com 93",
  //         SKU: "DYOJ_000000009193",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones93",
  //         OrderVal: "12850.0093",
  //         PayMode: "Cash On Delivery93",
  //         RazorPayID: "-93",
  //       },
  //       {
  //         sr: "94",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 94",
  //         DeliveryDate: "94",
  //         OrderId: "OR_141894",
  //         OrderStatus: "Order Received94",
  //         CustomerName: "HARSHAL MHATRE94",
  //         CustomerMobile: "987981621694",
  //         CustEmail: "harshal.mhatre@anmsoft.com 94",
  //         SKU: "DYOJ_000000009194",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones94",
  //         OrderVal: "12850.0094",
  //         PayMode: "Cash On Delivery94",
  //         RazorPayID: "-94",
  //       },
  //       {
  //         sr: "95",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 95",
  //         DeliveryDate: "95",
  //         OrderId: "OR_141895",
  //         OrderStatus: "Order Received95",
  //         CustomerName: "HARSHAL MHATRE95",
  //         CustomerMobile: "987981621695",
  //         CustEmail: "harshal.mhatre@anmsoft.com 95",
  //         SKU: "DYOJ_000000009195",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones95",
  //         OrderVal: "12850.0095",
  //         PayMode: "Cash On Delivery95",
  //         RazorPayID: "-95",
  //       },
  //       {
  //         sr: "96",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 96",
  //         DeliveryDate: "96",
  //         OrderId: "OR_141896",
  //         OrderStatus: "Order Received96",
  //         CustomerName: "HARSHAL MHATRE96",
  //         CustomerMobile: "987981621696",
  //         CustEmail: "harshal.mhatre@anmsoft.com 96",
  //         SKU: "DYOJ_000000009196",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones96",
  //         OrderVal: "12850.0096",
  //         PayMode: "Cash On Delivery96",
  //         RazorPayID: "-96",
  //       },
  //       {
  //         sr: "97",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 97",
  //         DeliveryDate: "97",
  //         OrderId: "OR_141897",
  //         OrderStatus: "Order Received97",
  //         CustomerName: "HARSHAL MHATRE97",
  //         CustomerMobile: "987981621697",
  //         CustEmail: "harshal.mhatre@anmsoft.com 97",
  //         SKU: "DYOJ_000000009197",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones97",
  //         OrderVal: "12850.0097",
  //         PayMode: "Cash On Delivery97",
  //         RazorPayID: "-97",
  //       },
  //       {
  //         sr: "98",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 98",
  //         DeliveryDate: "98",
  //         OrderId: "OR_141898",
  //         OrderStatus: "Order Received98",
  //         CustomerName: "HARSHAL MHATRE98",
  //         CustomerMobile: "987981621698",
  //         CustEmail: "harshal.mhatre@anmsoft.com 98",
  //         SKU: "DYOJ_000000009198",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones98",
  //         OrderVal: "12850.0098",
  //         PayMode: "Cash On Delivery98",
  //         RazorPayID: "-98",
  //       },
  //       {
  //         sr: "99",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 99",
  //         DeliveryDate: "99",
  //         OrderId: "OR_141899",
  //         OrderStatus: "Order Received99",
  //         CustomerName: "HARSHAL MHATRE99",
  //         CustomerMobile: "987981621699",
  //         CustEmail: "harshal.mhatre@anmsoft.com 99",
  //         SKU: "DYOJ_000000009199",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones99",
  //         OrderVal: "12850.0099",
  //         PayMode: "Cash On Delivery99",
  //         RazorPayID: "-99",
  //       },
  //       {
  //         sr: "100",
  //         ordDate: "Fri, 12th Jan, 2024 10:41 AM 100",
  //         DeliveryDate: "100",
  //         OrderId: "OR_1418100",
  //         OrderStatus: "Order Received100",
  //         CustomerName: "HARSHAL MHATRE100",
  //         CustomerMobile: "9879816216100",
  //         CustEmail: "harshal.mhatre@anmsoft.com 100",
  //         SKU: "DYOJ_0000000091100",
  //         ProdName:
  //           "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones100",
  //         OrderVal: "12850.00100",
  //         PayMode: "Cash On Delivery100",
  //         RazorPayID: "-100",
  //       },
  //     ],
  //     // numberOfItems: 100,
  //     // numberOfPages: 10,
  //   },
  // };

  const handleSearch = () => {
    getSearchAPI();
  };

  const theme = createTheme({
    components: {
      MuiTablePagination: {
        styleOverrides: {
          selectLabel: { marginTop: "13px" },
          displayedRows: { marginTop: "15px" },
        },
      },
    },
  });

  const columns = useMemo(
    () => [
      { accessorKey: "ordDate", header: "Order Date", size: 0 },
      { accessorKey: "DeliveryDate", header: "Delivery Date", size: 0 },
      { accessorKey: "OrderId", header: "Order Id", size: 0 },
      { accessorKey: "OrderStatus", header: "Order Status", size: 0 },
      { accessorKey: "CustomerName", header: "Customer Name", size: 0 },
      { accessorKey: "CustomerMobile", header: "Customer Mobile No.", size: 0 },
      { accessorKey: "CustEmail", header: "Customer email ID", size: 0 },
      { accessorKey: "SKU", header: "SKU", size: 0 },
      { accessorKey: "ProdName", header: "Product Name", size: 0 },
      { accessorKey: "OrderVal", header: "Order Value", size: 0 },
      { accessorKey: "PayMode", header: "Payment Mode", size: 0 },
      { accessorKey: "RazorPayID", header: "Razorpay Payment ID", size: 0 },
    ],
    []
  );

  // 123

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const getSearchAPI = () => {
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const responseList = sdata.data.responseList.slice(startIndex, endIndex);
    setSearchData(responseList);
    setSearchDataCount(sdata.data.responseList.length);
    console.log(sdata.data.responseList.length);

  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    const startIndex = newPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setSearchData(sdata.data.responseList.slice(startIndex, endIndex));
  };

  useEffect(() => {
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setSearchData(sdata.data.responseList.slice(startIndex, endIndex));
    setSearchDataCount(sdata.data.responseList.length); // Update data count
    
  }, []);

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0); // Reset page to 0 when rows per page changes
    setSearchData([]); // Clear existing data while new data is being fetched
    // Calculate the new startIndex based on the current page
    const startIndex = page * newRowsPerPage;
    const endIndex = startIndex + newRowsPerPage;
    // Fetch new data based on the new rowsPerPage value
    setSearchData(sdata.data.responseList.slice(startIndex, endIndex));
    setSearchDataCount(sdata.data.responseList.length); // Update data count
  };

  const scroll1Ref = useRef(null);
  const scroll2Ref = useRef(null);
  const scrl1 = useRef(null);
  const scrl2 = useRef(null);

  const handleScroll1 = () => {
    if (scroll2Ref.current) {
      scroll2Ref.current.scrollLeft = scroll1Ref.current.scrollLeft;
    }
  };

  const handleScroll2 = () => {
    if (scroll1Ref.current) {
      scroll1Ref.current.scrollLeft = scroll2Ref.current.scrollLeft;
    }
  };

  useEffect(() => {
    const scrl2Element = scrl2.current;
    if (scrl2Element) {
      const { width, height } = scrl2Element.getBoundingClientRect();
      scrl1.current.style.width = `${width}px`;
    }
  }, [searchData]);

  return (
    <>
      <div className="details  mx-5 mt-3 mb-5">
        <div className="contact">
          {/* <form className="form-floating"> */}
          <div className="box">
            <Form encType="multipart/form-data" className="px-3">
              <div className="row">
                <div className="col-md-4 mt-3">
                  <div className="select_shadow form-floating">
                    <select
                      className="ui dropdown form-select input-shadow py-0 "
                      id="searchType"
                      value={searchType}
                      onChange={handleSearchTypeChange}
                    >
                      <option value="">Select</option>
                      <option value="general">General Order</option>
                      <option value="subscription">Subscription Order</option>
                    </select>
                    <label htmlFor="searchType">Search By:</label>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="select_shadow form-floating">
                    <select
                      id="orderStatus"
                      className="ui dropdown form-select input-shadow py-0 "
                      value={orderStatus}
                      disabled={!searchType}
                    >
                      {orderStatusOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}{" "}
                    </select>
                    <label htmlFor="orderStatus">
                      {searchType === "general"
                        ? "General Order"
                        : searchType === "subscription"
                        ? "Subscription Order"
                        : "Order Status"}
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mt-3">
                  <div className="select_shadow form-floating">
                    <select
                      className="ui dropdown form-select input-shadow py-0 "
                      id="searchTypes"
                      value={searchType}
                      onChange={handleSearchTypeChange}
                    >
                      <option value="">Please Select</option>
                      <option value="order_id1">Order Id</option>
                      <option value="suborder_id1">SubOrder Id</option>
                      <option value="order_date1">Order Date</option>
                      <option value="delivery_date1">Delivery Date</option>
                    </select>
                    <label htmlFor="searchTypes">Search By:</label>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <Input type="text" label="Search Value" placeholder="" />
                </div>
              </div>
            </Form>
          </div>
          {/* </form> */}

          <div className="buttons d-flex justify-content-end p-1 mt-3">
            <div className="btns">
              <button
                className="submit-btn btn btn-sm btn-primary m-1 px-5 py-1 rounded-3"
                onClick={() => handleSearch()}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <Outlet />
      </div>

      {/* ----------------------------------------------- */}
      {searchData.length > 0 ? (
        <div className="details  mx-5 mt-3 mb-5">
          <div className="contact">
            <div className="box">
              <div className="table-container">
                <div className="">
                  <div
                    className="scroll1"
                    ref={scroll1Ref}
                    onScroll={handleScroll1}
                  >
                    <div className="scrl1" ref={scrl1}></div>
                  </div>
                  <div
                    className="scroll2"
                    ref={scroll2Ref}
                    onScroll={handleScroll2}
                  >
                    <div className="scrl2" ref={scrl2}>
                      <MaterialReactTable
                        columns={columns}
                        data={searchData}
                        enablePagination={false}
                        // enableColumnOrdering
                        enableRowNumbers="true"
                        rowNumberDisplayMode="original"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={searchDataCount}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                showFirstButton
                showLastButton
              />
              {/* <ThemeProvider theme={theme}>
                <TablePagination
                  rowsPerPageOptions={[10, 20, 30]}
                  component="div"
                  count={searchDataCount}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  showFirstButton
                  showLastButton
                />
              </ThemeProvider> */}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MaterialTable;

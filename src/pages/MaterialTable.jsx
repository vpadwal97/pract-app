import React, { useEffect, useRef, useState, useMemo } from "react";
import { Form } from "react-bootstrap";
import { Outlet } from "react-router-dom";
// import { Box, Tooltip, createTheme,TablePagination, ThemeProvider } from "@mui/material";

import { MaterialReactTable } from "material-react-table";
// import { Input } from "@mui/base";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import TablePagination from "@mui/material/TablePagination";
import Input from "../components/Input";
// import Input from "@mui/material/Input";


const MaterialTable = () => {
  const [searchType, setSearchType] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [orderStatusOptions, setOrderStatusOptions] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchDataCount, setSearchDataCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

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
  const sdata = {
    data: {
      responseList: [
        {
          // sr: "0",
          ordDate: "Mon, 18th Mar, 2024 05:16 PM  ",
          DeliveryDate: "Mon, 28th Mar, 2024 05:16 PM ",
          OrderId: "OR_12391",
          OrderStatus: "DYOJ order flow to Vvsion ",
          CustomerName: "HARSHAL MHATRE",
          CustomerMobile: "9879816216",
          CustEmail: "harshal.mhatre@anmsoft.com  ",
          SKU: "DYOJ_0000000091",
          ProdName:
            "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones",
          OrderVal: "2000.00",
          PayMode: "Proceed with Razorpay Secure Payment Gateway",
          RazorPayID: "pay_Nno4oBPVml5e6Q ",
        },
        {
          sr: "1",
          ordDate: "Mon, 18th Mar, 2024 04:33 PM  ",
          DeliveryDate: "",
          OrderId: "OR_12390",
          OrderStatus: "DYOJ order flow to Vvsion ",
          CustomerName: "HARSHAL MHATRE",
          CustomerMobile: "9879816216",
          CustEmail: "harshal.mhatre@anmsoft.com  ",
          SKU: "DYOJ_0000000091",
          ProdName:
            "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones",
          OrderVal: "2000.00",
          PayMode: "Proceed with Razorpay Secure Payment Gateway",
          RazorPayID: "pay_NnnLeR3tTAgJt9 ",
        },
        {
          sr: "2",
          ordDate: "Mon, 18th Mar, 2024 04:32 PM ",
          DeliveryDate: "",
          OrderId: "OR_12389",
          OrderStatus: "Awaiting for Gateway Response  ",
          CustomerName: "HARSHAL MHATRE",
          CustomerMobile: "9879816216",
          CustEmail: "harshal.mhatre@anmsoft.com ",
          SKU: "DYOJ_0000000091",
          ProdName:
            "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones",
          OrderVal: "2000.00",
          PayMode: "Proceed with Razorpay Secure Payment Gateway",
          RazorPayID: "-",
        },
        {
          sr: "3",
          ordDate: "Mon, 18th Mar, 2024 01:06 PM ",
          DeliveryDate: "",
          OrderId: "OR_12388",
          OrderStatus: "Order Received",
          CustomerName: "HARSHAL MHATRE",
          CustomerMobile: "9879816216",
          CustEmail: "harshal.mhatre@anmsoft.com ",
          SKU: "Jewellery-Style",
          ProdName: "Pure Luxury: Classic Plain Platinum Women's Ring",
          OrderVal: "2000.00",
          PayMode: "Proceed with Razorpay Secure Payment Gateway",
          RazorPayID: "pay_Nnjpd2Rfp473y1  ",
        },
        {
          sr: "4",
          ordDate: "Mon, 18th Mar, 2024 01:05 PM ",
          DeliveryDate: "",
          OrderId: "OR_12387",
          OrderStatus: "Awaiting for Gateway Response  ",
          CustomerName: "HARSHAL MHATRE",
          CustomerMobile: "9879816216",
          CustEmail: "harshal.mhatre@anmsoft.com ",
          SKU: "DYOJ_0000000091",
          ProdName: "Pure Luxury: Classic Plain Platinum Women's Ring",
          OrderVal: "2000.00",
          PayMode: "Proceed with Razorpay Secure Payment Gateway",
          RazorPayID: "-",
        },
        {
          sr: "5",
          ordDate: "Tue, 12th Mar, 2024 04:55 PM ",
          DeliveryDate: "",
          OrderId: "OR_12386",
          OrderStatus: "Order Received ",
          CustomerName: "HARSHAL MHATRE",
          CustomerMobile: "9879816216",
          CustEmail: "harshal.mhatre@anmsoft.com ",
          SKU: "CKCJ_0000259026  ",
          ProdName: "Pure Luxury: Classic Plain Platinum Women's Ring",
          OrderVal: "2000.00",
          PayMode: "Proceed with Razorpay Secure Payment Gateway",
          RazorPayID: "pay_NlQW6Sjcx70eHc  ",
        },
        {
          sr: "6",
          ordDate: "Tue, 12th Mar, 2024 03:37 PM ",
          DeliveryDate: "",
          OrderId: "Tue, 23rd May, 2023 09:45 AM",
          OrderStatus: "Order Received ",
          CustomerName: "HARSHAL MHATRE",
          CustomerMobile: "9879816216",
          CustEmail: "harshal.mhatre@anmsoft.com ",
          SKU: "vintage-car  ",
          ProdName: "Pure Luxury: Classic Plain Platinum Women's Ring",
          OrderVal: "12850.00",
          PayMode: "Proceed with Razorpay Secure Payment Gateway",
          RazorPayID: "pay_NlPAyQI75r46Hj  ",
        },
        {
          sr: "7",
          ordDate: "Wed, 17th Jan, 2024 04:24 PM ",
          DeliveryDate: "",
          OrderId: "OR_12385",
          OrderStatus: "Order Received ",
          CustomerName: "HARSHAL MHATRE",
          CustomerMobile: "9879816216",
          CustEmail: "harshal.mhatre@anmsoft.com ",
          SKU: "DYOJ_0000000091",
          ProdName: "Pure Luxury: Classic Plain Platinum Women's Ring",
          OrderVal: "12850.00",
          PayMode: "Cash On Delivery",
          RazorPayID: "pay_NPeb7ZdX1LhgZf  ",
        },
        {
          sr: "8",
          ordDate: "Wed, 17th Jan, 2024 01:02 PM ",
          DeliveryDate: "",
          OrderId: "OR_12379",
          OrderStatus: "Order Received ",
          CustomerName: "HARSHAL MHATRE",
          CustomerMobile: "9879816216",
          CustEmail: "harshal.mhatre@anmsoft.com ",
          SKU: "DYOJ_0000000091",
          ProdName: "Pure Luxury: Classic Plain Platinum Women's Ring",
          OrderVal: "12850.00",
          PayMode: "Cash On Delivery",
          RazorPayID: "pay_NPbA89xF1LMY14  ",
        },
        {
          sr: "9",
          ordDate: "Fri, 12th Jan, 2024 10:41 AM ",
          DeliveryDate: "",
          OrderId: "OR_12378",
          OrderStatus: "Appointment Created  ",
          CustomerName: "HARSHAL MHATRE",
          CustomerMobile: "9879816216",
          CustEmail: "harshal.mhatre@anmsoft.com ",
          SKU: "DYOJ_0000000091",
          ProdName: "Pure Luxury: Classic Plain Platinum Women's Ring",
          OrderVal: "12850.00",
          PayMode: "Cash On Delivery",
          RazorPayID: "-",
        },
        {
          sr: "10",
          ordDate: "Fri, 12th Jan, 2024 10:41 AM ",
          DeliveryDate: "",
          OrderId: "OR_1418",
          OrderStatus: "Order Received",
          CustomerName: "HARSHAL MHATRE",
          CustomerMobile: "9879816216",
          CustEmail: "harshal.mhatre@anmsoft.com ",
          SKU: "DYOJ_0000000091",
          ProdName:
            "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones",
          OrderVal: "12850.00",
          PayMode: "Cash On Delivery",
          RazorPayID: "-",
        },
        {
          sr: "11",
          ordDate: "Fri, 12th Jan, 2024 10:41 AM 1",
          DeliveryDate: "",
          OrderId: "OR_14181",
          OrderStatus: "Order Received1",
          CustomerName: "HARSHAL MHATRE1",
          CustomerMobile: "98798162161",
          CustEmail: "harshal.mhatre@anmsoft.com 1",
          SKU: "DYOJ_00000000911",
          ProdName:
            "Classic Traditional Bangle Pair Design Set with Precious Coloured Gemstones1",
          OrderVal: "12850.001",
          PayMode: "Cash On Delivery1",
          RazorPayID: "-1",
        },
      ],
      numberOfItems: 11,
      numberOfPages: 2,
    },
  };

  const handleSearch = () => {
    getSearchAPI();
  };

  const getSearchAPI = () => {
    const response = sdata;
    setSearchData(response.data.responseList);
    setSearchDataCount(response.data.numberOfItems);
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

  const handleChangePage = () => {
    getSearchAPI();
  };

  const handleChangeRowsPerPage = () => {
    getSearchAPI();
  };

  // 123

  const scroll1Ref = useRef(null);
  const scroll2Ref = useRef(null);
  
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
  // useEffect(() => {
  
  //   if (scroll1Ref.current && scroll2Ref.current) {
  //     console.log(scroll1Ref,"--",scroll2Ref);
  //     scroll1Ref.current.addEventListener("scroll", handleScroll1);
  //     scroll2Ref.current.addEventListener("scroll", handleScroll2);
  
  //     return () => {
  //       scroll1Ref.current.removeEventListener("scroll", handleScroll1);
  //       scroll2Ref.current.removeEventListener("scroll", handleScroll2);
  //     };
  //   }
  // }, [scroll1Ref, scroll2Ref]);



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
                    <Input
                      type="text"
                      label="Search Value"
                      placeholder=""
                    />
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
                  <div className="scroll1" ref={scroll1Ref} onScroll={handleScroll1}>
                    <div className="scrl1"></div>
                  </div>
                  <div className="scroll2" ref={scroll2Ref} onScroll={handleScroll2}>
                    <div className="table-scroll">
                      <MaterialReactTable
                        columns={columns}
                        data={searchData}
                        enablePagination={false}
                        enableColumnOrdering
                        enableRowNumbers="true"
                        rowNumberDisplayMode="original"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <ThemeProvider theme={theme}>
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
              </ThemeProvider>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MaterialTable;




// export default MaterialTable;

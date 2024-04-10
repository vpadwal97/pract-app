import { useState } from "react";
import NewMultiSelectDropDown from "../NewMultiSelectDropDown";

function Tps() {
  let response = {
    data: [
      {
        id: "1",
        optionLabel: "Cash On Delivery",
        optionValue: "Ph1169689",
        optionSelected: false,
      },
      {
        id: "3",
        optionLabel: "Cash On Delivery",
        optionValue: "ffFEFF",
        optionSelected: false,
      },
      {
        id: "4",
        optionLabel: "Money On Delivery",
        optionValue: "NEW SFF",
        optionSelected: false,
      },
      {
        id: "6",
        optionLabel: "Money On Delivery",
        optionValue: "NEWF SFF",
        optionSelected: false,
      },
      {
        id: "8",
        optionLabel: "Money On Delivery",
        optionValue: "NEWFdd SFF",
        optionSelected: false,
      },
      {
        id: "9",
        optionLabel: "online",
        optionValue: "online",
        optionSelected: false,
      },
      {
        id: "10",
        optionLabel: "dfg",
        optionValue: "dfg",
        optionSelected: false,
      },
      {
        id: "11",
        optionLabel: "vi",
        optionValue: "vi",
        optionSelected: false,
      },
      {
        id: "13",
        optionLabel: "fghdeg",
        optionValue: "tttdfg",
        optionSelected: false,
      },
      {
        id: "14",
        optionLabel: "h",
        optionValue: "h",
        optionSelected: false,
      },
      {
        id: "15",
        optionLabel: "new",
        optionValue: "new",
        optionSelected: false,
      },
      {
        id: "16",
        optionLabel: "hi",
        optionValue: "hi",
        optionSelected: false,
      },
      {
        id: "17",
        optionLabel: "IPAYMENT",
        optionValue: "IPAY",
        optionSelected: false,
      },
      {
        id: "18",
        optionLabel: "Mobile Wallets",
        optionValue: "MBW",
        optionSelected: false,
      },
      {
        id: "20",
        optionLabel: "NEWR",
        optionValue: "NEWR",
        optionSelected: false,
      },
      {
        id: "24",
        optionLabel: "Mobile Wallets",
        optionValue: "MBW1",
        optionSelected: false,
      },
      {
        id: "26",
        optionLabel: "Mobile Wallets",
        optionSelected: false,
      },
      {
        id: "27",
        optionLabel: "Mobile Wallets",
        optionSelected: false,
      },
      {
        id: "28",
        optionLabel: "Mobile Wallets",
        optionSelected: false,
      },
      {
        id: "29",
        optionLabel: "Bitcoin",
        optionValue: "BTCN",
        optionSelected: false,
      },
      {
        id: "30",
        optionLabel: "gg",
        optionValue: "gg g",
        optionSelected: false,
      },
      {
        id: "31",
        optionLabel: "",
        optionValue: "df gfbh",
        optionSelected: false,
      },
      {
        id: "32",
        optionLabel: "",
        optionValue: "ggg gg",
        optionSelected: false,
      },
      {
        id: "33",
        optionLabel: "",
        optionValue: "drg fgh",
        optionSelected: false,
      },
      {
        id: "34",
        optionLabel: "",
        optionValue: "ff fff",
        optionSelected: false,
      },
      {
        id: "35",
        optionLabel: "ghi",
        optionValue: "ghi",
        optionSelected: false,
      },
      {
        id: "36",
        optionLabel: "z pay",
        optionValue: "zpay",
        optionSelected: false,
      },
      {
        id: "37",
        optionLabel: "Amazon Pay",
        optionValue: "APay",
        optionSelected: false,
      },
      {
        id: "38",
        optionLabel: "test",
        optionValue: "payment",
        optionSelected: false,
      },
      {
        id: "40",
        optionLabel: "PayTestDev",
        optionValue: "10",
        optionSelected: false,
      },
    ],
    status: 200,
    statusText: "",
    headers: {
      "content-length": "415",
      "content-type": "application/json",
    },
    config: {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false,
      },
      adapter: ["xhr", "http"],
      transformRequest: [null],
      transformResponse: [null],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: {},
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvY3Rhc2hvcCIsImlhdCI6MTcxMjc0MTA0OSwiZXhwIjoxNzEyNzU5MDQ5fQ.jnujX8glcD8WYTQ6teYLD25ewNDIeytwfqH_mVvaIFM",
        superOrgId: "0",
        loginId: "274",
      },
      method: "get",
      url: "/api/paymentModeList/paymentMode-dropdown",
      baseURL: "https://qa-ecommgrapi.octashop.com/",
    },
    request: {},
  };

  const [payModeSelectData, setPayModeSelectData] = useState([]);
  const [selectPayModeValues, setSelectPayModeValues] = useState([]);
  const [paymentModeData, setPaymentModeData] = useState([]);

  



  const handlePayModeMultiDropdown = (e) => {
    setPayModeSelectData(e);
    let selectValueList = [];
    e.forEach((item) => {
      selectValueList.push(item.optionValue);
    });
    setSelectPayModeValues(selectValueList);
  };

  const handleClick = () => {
    setPaymentModeData(response.data);
  };

  return (
    <>
      <button onClick={handleClick}>Set Payment Mode Data</button>
      <NewMultiSelectDropDown
        dropdownlist={paymentModeData}
        label="Payment Mode "
        selectedValues={payModeSelectData}
        onSelect={handlePayModeMultiDropdown}
        // onRemove={removePayModeSelect}
      />
    </>
  );
}

export default Tps;

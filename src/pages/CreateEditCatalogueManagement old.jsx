import React, { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import FormGroup from "../../../../forms/FormGroup";
import axios from "../../../../util/HttpServices";
import FormGroupRadio from "../../../../forms/FormGroupRadio";
import SelectComponent from "../../../../forms/SelectComponent";
import "../../../../css/Style.css";
import { useTheme } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { TooltipMessages } from "../../../constants/TooltipConstants";
import IoIosInformationCircleCustom from "../../../../forms/IoIosInformationCircleCustom";
import MultiSelect from "../../../../forms/MultiSelect";

const CreateEditCatalogueManagement = () => {
  const cecm =
    TooltipMessages.catalogue.catalogueManagement.CreateEditCatalogueManagement;
  const theme = useTheme();
  const action = window.localStorage.getItem("action");
  const editData = window.sessionStorage.getItem("editData");
  const editedData = JSON.parse(editData);
  const [internalSystemId, setinternalSystemId] = useState("");
  const [catalogueName, setCatalogueName] = useState("");
  const [catalogueTitle, setCatalogueTitle] = useState("");
  const [catalogueCode, setCatalogueCode] = useState("");
  const [catalogueDescription, setCatalogueDescription] = useState("");
  const [metaKeywordDescription, setMetaKeywordDescription] = useState("");
  const [isactive, setIsActive] = useState(true);
  const [channelData, setChannelData] = useState([]);
  const [channelDataSelect, setChannelDataSelect] = useState();
  const [businessThemeData, setBusinessThemeData] = useState([]);
  const [businessThemeSelect, setBusinessThemeDataSelect] = useState();
  const [paymentModeData, setPaymentModeData] = useState([]);
  const [paymentModeSelect, setPaymentModeSelect] = useState();
  const [restrictionTypeData, setRestrictionTypeData] = useState();
  const [restrictionTypeSelect, setRestrictionTypeSelect] = useState([]);
  const [resValueSelect, setResValueSelect] = useState([]);
  const [resValueSelectData, setResValueSelectData] = useState([]);
  const isAlphabetsAndSpaces = (value) => /^[A-Za-z\s]+$/.test(value);
  const [payModeSelectData, setPayModeSelectData] = useState([]);
  function getStyles(theme) {
    return {
      fontWeight: 700,
    };
  }
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (e) => {
    setResValueSelect(e.target.value);
  };
  const handlePayModeMultiDropdown = (e) => {
    setPayModeSelectData(e.target.value);
  };

  const onSubmit = async (id) => {
    if (!catalogueCode) {
      toast.error("Catalogue Code is required.");
      return;
    }
    if (!isAlphabetsAndSpaces(catalogueCode)) {
      // Display a toast notification for invalid characters
      toast.error("Catalogue Code can only contain alphabets and spaces.");
      return;
    }
    var url = "api/catalogue-master/save";
    var req = {
      catalogueName: catalogueName,
      catalogueCode: catalogueCode,
      catalogueTitle: catalogueTitle,
      catalogueDesc: catalogueDescription,
      keywordDesc: metaKeywordDescription,
      channel: channelDataSelect,
      catalogueTheme: businessThemeSelect,
      paymentModeList: payModeSelectData,
      restrictionType: restrictionTypeSelect,
      restrictionValueList: resValueSelect,
      isActive: isactive === true ? "Y" : "N",
    };

    if (action === "edit") {
      req.id = id;
      url = `/api/catalogue-master/${id}`;
    }

    if (url === `/api/catalogue-master/${id}`) {
      const editRes = await axios.put(url, req).then((response) => {
        if (response.status === 200 || response.status === 201) {
          // Display a success toast
          toast.success("Catalogue Definition saved successfully.");
        } else {
          // Handle other status codes if needed
          toast.error("Failed to save Catalogue Definition.");
        }
      });
    } else if (action === "create") {
      const createRes = await axios.post(url, req).then((response) => {
        if (response.status === 200 || response.status === 201) {
          // Display a success toast
          toast.success("Catalogue Definition saved successfully.");
          reset();
        } else {
          // Handle other status codes if needed
          toast.error("Failed to save Catalogue Definition");
        }
      });
    }
  };

  const getSelectChannelDataApi = async () => {
    try {
      const response = await axios.get("api/commonlist/groupcode/CHANNEL");
      setChannelData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getSelectBusinessThemeDataApi = async () => {
    try {
      const response = await axios.get("api/themeVarientList/theme-dropdown");
      setBusinessThemeData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getSelectPaymentModeDataApi = async () => {
    try {
      const response = await axios.get(
        "/api/paymentModeList/paymentMode-dropdown"
      );
      setPaymentModeData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getSelectRestrictionTypeDataApi = async () => {
    try {
      const response = await axios.get("/api/commonlist/groupcode/RESTRICTION");
      setRestrictionTypeData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSelectRestrictionValueDataApi = async (restrictionTypeSelect) => {
    const req =
      action === "edit" ? editedData.restrictionType : restrictionTypeSelect;

    try {
      const response = await axios.post(
        "/api/catalogue-master/fetchRestrictionValue",
        {
          restrictionType: req,
        }
      );
      setResValueSelectData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelectChannelDataApi();
    getSelectBusinessThemeDataApi();
    getSelectPaymentModeDataApi();
    getSelectRestrictionTypeDataApi();
    getSelectRestrictionValueDataApi();
  }, []);

  useEffect(() => {
    if (action === "edit") {
      setinternalSystemId(editedData.catalogueRfnum);
      setCatalogueName(editedData.catalogueName);
      setCatalogueCode(editedData.catalogueCode);
      setCatalogueDescription(editedData.catalogueDesc);
      setCatalogueTitle(editedData.catalogueTitle);
      setMetaKeywordDescription(editedData.keywordDesc);
      setChannelDataSelect(editedData.channel);
      setBusinessThemeDataSelect(editedData.catalogueTheme);
      // setPaymentModeSelect(editedData.payMode);
      setPayModeSelectData(editedData.paymentModeList);
      setRestrictionTypeSelect(editedData.restrictionType);
      setResValueSelect(editedData.restrictionValueList);
      setIsActive(editedData.isActive === "Y" ? true : false);
    } else {
      setinternalSystemId("");
      setCatalogueName("");
      setCatalogueCode("");
      setCatalogueDescription("");
      setCatalogueTitle("");
      setMetaKeywordDescription("");
      setChannelDataSelect("");
      setBusinessThemeDataSelect("");
      setPaymentModeSelect("");
      setRestrictionTypeSelect("");
      setResValueSelect([]);
    }
  }, []);
  const reset = () => {
    setCatalogueName("");
    setCatalogueCode("");
    setCatalogueDescription("");
    setCatalogueTitle("");
    setMetaKeywordDescription("");
    setChannelDataSelect("");
    setBusinessThemeDataSelect("");
    setPaymentModeSelect("");
    setRestrictionTypeSelect("");
  };

  return (
    <>
      <div className="buttons d-flex justify-content-end p-1 mt-3">
        <Link
          className="btns pe-5"
          to={"/catalogueManagement/searchCatalogueManagement"}
          style={{ textDecoration: "none" }}
        >
          <button className="submit-btn btn-sm m-2 px-5 py-1 text-white rounded-3 me-2">
            Cancel
          </button>
        </Link>
      </div>

      <div className="details  mx-5 mt-3 mb-5">
        <div className="contact">
          <form className="form-floating">
            <div className="box">
              <Form encType="multipart/form-data" className="px-3">
                <div className="row">
                  <div
                    className={`col-md-4 mt-3 ${
                      action === "edit" ? "" : "d-none"
                    }`}
                  >
                    <FormGroup
                      type="text"
                      placeholder="Internal System Id"
                      tooltipMessage={cecm.internalSystemId}
                      value={internalSystemId}
                      onChange={(e) => setinternalSystemId(e.target.value)}
                      disabled
                    />
                  </div>
                  <div className="col-md-4 mt-3">
                    <FormGroup
                      type="text"
                      label="Catalogue Name"
                      placeholder=""
                      tooltipMessage={cecm.catalogueName}
                      value={catalogueName}
                      onChange={(e) => setCatalogueName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 mt-3">
                    <FormGroup
                      type="text"
                      label="Catalogue Code"
                      placeholder=""
                      tooltipMessage={cecm.catalogueCode}
                      value={catalogueCode}
                      onChange={(e) => setCatalogueCode(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 mt-3">
                    <FormGroup
                      type="text"
                      label="Catalogue Title"
                      placeholder=""
                      tooltipMessage={cecm.catalogueTitle}
                      value={catalogueTitle}
                      onChange={(e) => setCatalogueTitle(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 mt-3">
                    <FormGroup
                      type="text"
                      label="Catalogue Description"
                      placeholder=""
                      tooltipMessage={cecm.catalogueDescription}
                      value={catalogueDescription}
                      onChange={(e) => setCatalogueDescription(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 mt-3">
                    <FormGroup
                      type="text"
                      label="Meta Keyword Description"
                      placeholder=""
                      tooltipMessage={cecm.metaKeywordDescription}
                      value={metaKeywordDescription}
                      onChange={(e) =>
                        setMetaKeywordDescription(e.target.value)
                      }
                    />
                  </div>
                  <div className="col-md-4 mt-3">
                    <SelectComponent
                      placeholder="Channel"
                      tooltipMessage={cecm.channelDataSelect}
                      selectedOption={channelDataSelect}
                      onChange={(e) => setChannelDataSelect(e.target.value)}
                      dropdownlist={channelData}
                    />
                  </div>
                  <div className="col-md-4 mt-3">
                    <SelectComponent
                      placeholder="Business Theme"
                      tooltipMessage={cecm.businessThemeSelect}
                      selectedOption={businessThemeSelect}
                      onChange={(e) =>
                        setBusinessThemeDataSelect(e.target.value)
                      }
                      dropdownlist={businessThemeData}
                    />
                  </div>
                  <div className="col-md-4 mt-3">
                    {/* <SelectComponent placeholder="Payment Mode"
                     tooltipMessage={cecm.paymentModeSelect} 
                     selectedOption={paymentModeSelect} 
                     onChange={(e) => setPaymentModeSelect(e.target.value)} dropdownlist={paymentModeData} />
                      */}

                    <MultiSelect
                      multiple
                      tooltipMessage={cecm.resValueSelect}
                      value={payModeSelectData}
                      onChange={handlePayModeMultiDropdown}
                      // input={<OutlinedInput label="Restriction Value" />}
                      dropdownList={paymentModeData}
                      placeholder="Payment Mode"
                    />

                    {/* <FormControl sx={{ m: 1, width: 300, }}>
                    <InputLabel id="demo-multiple-name-label">Payment Mode
                    <IoIosInformationCircleCustom     tooltipMessage={cecm.paymentModeSelect}  />
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      tooltipMessage={cecm.resValueSelect} value={payModeSelectData}
                      onChange={handlePayModeMultiDropdown}
                      input={<OutlinedInput label="Restriction Value" />}
                      MenuProps={MenuProps}
                    >
                      {paymentModeData.map((name) => (
                        <MenuItem
                           value={name.optionValue}
                          style={getStyles(theme)}
                        >
                          {name.optionLabel}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl> */}
                  </div>
                  <div className="col-md-4 mt-3">
                    <SelectComponent
                      placeholder="Restriction Type"
                      tooltipMessage={cecm.restrictionTypeSelect}
                      selectedOption={restrictionTypeSelect}
                      onChange={(e) => {
                        setRestrictionTypeSelect(e.target.value);
                        getSelectRestrictionValueDataApi(e.target.value);
                      }}
                      dropdownlist={restrictionTypeData}
                    />
                  </div>

                  {/* <MultiSelect
                    multiple
                    tooltipMessage={cecm.resValueSelect}
                    value={payModeSelectData}
                    onChange={handlePayModeMultiDropdown}
                    // input={<OutlinedInput label="Restriction Value" />}
                    dropdownList={paymentModeData}
                    placeholder="Restriction Value"
                  /> */}

                  <FormControl sx={{ m: 1, width: 300, marginTop: 4 }}>
                    <InputLabel id="demo-multiple-name-label">
                      Restriction Value
                      <IoIosInformationCircleCustom
                        tooltipMessage={cecm.name}
                      />
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      tooltipMessage={cecm.resValueSelect}
                      value={resValueSelect}
                      onChange={handleChange}
                      input={<OutlinedInput label="Restriction Value" />}
                      MenuProps={MenuProps}
                    >
                      {resValueSelectData.map((name) => (
                        <MenuItem
                          value={name.optionValue}
                          style={getStyles(theme)}
                        >
                          {name.optionLabel}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <div className="col-md-4 mt-2">
                    <FormGroupRadio
                      title="Active"
                      tooltipMessage={cecm.isactive}
                      value={isactive}
                      onChange={() => setIsActive(!isactive)}
                      checked={isactive}
                    />
                  </div>
                  <div className="buttons d-flex justify-content-end p-1">
                    <div className="btns">
                      <a
                        className="submit-btn btn-sm m-2 px-5 py-1 text-white rounded-3 me-2"
                        onClick={() => onSubmit(editedData.catalogueRfnum)}
                      >
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default CreateEditCatalogueManagement;

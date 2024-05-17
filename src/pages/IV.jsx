import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoiceDocument from "./InvoiceDocument";

const IV = () => (
  <>
    <InvoiceDocument />


    <BlobProvider
          document={
            <Document>
              <Page size="A4" >
                
                <View style={styles.container}>
                  <View style={styles.borderp5}>
                    <View
                    //  style={styles.w100} 
                     id="pdf-content">
                        <View style={styles.borderBottom}>
                      <View style={styles.w100}>
                          <View tyle={styles.py2}>
                            <Text style={styles.fwBold}>SALES INVOICE</Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.borderBottom}>
                      <View style={styles.w100}>
                        <View style={styles.row}>
                          <View style={styles.col4}>
                            <View style={styles.rowMTB2P5}>
                              <View style={styles.col6}>
                                <View style={styles.borderp5}>
                                  <Text style={styles.fwBold}>Order No</Text>
                                </View>
                              </View>
                              <View style={styles.col6}>
                                <View style={styles.borderp5}>
                                  <Text style={styles.fwBold}>{viewData.Ord_No}</Text>
                                </View>
                              </View>
                              </View><View style={styles.rowMTB2P5}>
                              <View style={styles.col6}>
                                <View style={styles.borderp5}>
                                  <Text style={styles.fwBold}>Order Date</Text>
                                </View>
                              </View>
                              <View style={styles.col6}>
                                <View style={styles.borderp5}>
                                  <Text style={styles.fwBold}>{viewData.Ord_Date}</Text>
                                </View>
                              </View>
                              </View><View style={styles.rowMTB2P5}>
                              <View style={styles.col6}>
                                <View style={styles.borderp5}>
                                  <Text style={styles.fwBold}>AWB No</Text>
                                </View>
                              </View>
                              <View style={styles.col6}>
                                <View style={styles.borderp5}>
                                  <Text style={styles.fwBold}>{location.state.awb}</Text>
                                </View>
                              </View>
                              </View><View style={styles.rowMTB2P5}>
                                <View style={styles.col6}>
                                <View style={styles.borderp5}>
                                  <Text style={styles.fwBold}>Courier Name</Text>
                                </View>
                              </View>
                              <View style={styles.col6}>
                                <View style={styles.borderp5}>
                                  <Text style={styles.fwBold}>{location.state.courier}</Text>
                                </View>
                              </View>
                              </View>
                              <View style={styles.rowMTB2P5}>
                                <View style={styles.col6}>
                                <View style={styles.borderp5}>
                                  <Text style={styles.fwBold}>Invoice Number</Text>
                                </View>
                              </View>
                              <View style={styles.col6}>
                                <View style={styles.borderp5}>
                                  <Text style={styles.fwBold}>{viewData.SO_No.split("SO-")[1]}</Text>
                                </View>
                              </View>
                              </View>
                              <View style={styles.rowMTB2P5}>
                                <View style={styles.col6}>
                                <View style={styles.borderp5}>
                                  <Text style={styles.fwBold}>Invoice Date</Text>
                                </View>
                              </View>
                              <View style={styles.col6}>
                                <View style={styles.borderp5}>
                                  <Text style={styles.fwBold}>{formattedDate}</Text>
                                </View>
                              </View>
                            </View>
                          </View>
                          <View style={styles.col3} >
                            <View style={styles.row} >
                              <View style={styles.w100}>
                                <View style={styles.py2}>
                                  <Image
                                    src={barcode_invoiceNO}
                                    alt="barcode_invoiceNO"
                                    // style={}
                                    className="img-fluid"
                                    style={{
                                      maxWidth: "80px",
                                      width: "95%",
                                      margin: "5px auto",
                                    }}
                                  />
                                  <Text style={styles.py2}>
                                    {viewData.SO_No.split("SO-")[1]}
                                  </Text>
                                </View>
                              </View>
                              <View style={styles.w100}>
                                <View style={styles.py2}>
                                  <Image
                                    src={barcode_awb}
                                    alt="barcode_awb"
                                    // style={}
                                    className="img-fluid"
                                    style={{
                                      maxWidth: "80px",
                                      width: "95%",
                                      margin: "5px auto",
                                    }}
                                  />
                                  <Text style={styles.py2}>
                                    {location.state.awb}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </View>
                          <View style={styles.col5} >
                            <View style={styles.row}>
                              <View style={styles.w100}>
                                <Image
                                  src={octashopLogo}
                                  alt="octashopLogo"
                                  // style={}
                                  className="OctaShopLogo my-3"
                                  style={{
                                    maxWidth: "80px",
                                    width: "95%",
                                    margin: "5px auto",
                                  }}
                                />
                              </View>
                              <View style={styles.w100}>
                                <Image
                                  src={qr}
                                  alt="qr"
                                  // style={}
                                  className="img-fluid my-3"
                                  style={{
                                    maxWidth: "150px",
                                    width: "95%",
                                    margin: "5px auto",
                                  }}
                                />
                              </View>
                              <View style={styles.MTB2P5}>
                                <View style={styles.row}>
                                <View style={styles.col6}>
                                <View style={styles.borderp5}>
                                  <Text style={styles.fwBold}>Payment Mode</Text>
                                </View>
                              </View>
                              <View style={styles.col6}>
                                <View style={styles.borderp5}>
                                  <Text style={styles.fwBold}>{viewData.Payment_Mode}</Text>
                                </View>
                              </View>
                              </View>


                              <View style={styles.row}>
                                <View style={styles.col6}>
                                <View style={styles.borderp5}>
                                  <Text style={styles.fwBold}>Collectable Amount</Text>
                                </View>
                              </View>
                              <View style={styles.col6}>
                                <View style={styles.borderp5}>
                                  <Text style={styles.fwBold}> {viewData.Collectable_Amount}</Text>
                                </View>
                              </View>
                              </View>

                                
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                      </View>
                      {/* <View style={styles.w100}> */}
                        <View>
                        <View style={styles.rowMTB2P5}>
                          <View style={styles.col6}>
                            <View style={styles.borderp5}>
                              <View style={styles.fwBold}>
                              <Text>Seller</Text>
                            </View>
                            </View>
                            <View style={styles.borderp5}>
                              <View style={styles.w100}>
                              <Text> {viewData.Shipping_Address} </Text>
                            </View>
                            </View>
                          </View>
                          
                          <View style={styles.col6}>
                              {/* <View style={styles.w100}> */}
                              <View style={styles.borderp5}>
                                <View style={styles.fwBold}>
                                <Text>Consignee</Text>
                              </View>
                              </View>
                              {/* </View> */}
                            <View style={styles.row}>
                              
                              <View style={styles.col6}>
                                {/* <View style={styles.rowMTB2P5}> */}
                              <View style={styles.borderp5}>
                                  <View style={styles.fwBold}>
                                    <Text>
                                      Delivery Address
                                    </Text>
                                  </View>
                              </View>
                              <View style={styles.borderp5}>
                                <View>
                                    <Text style={styles.py2}>
                                      {viewData.Shipping_Address}
                                    </Text>
                                  </View>
                              </View>
                                {/* </View> */}
                              </View>

                              
                              <View style={styles.col6}>
                                {/* <View style={styles.rowMTB2P5}> */}
                              <View style={styles.borderp5}>
                                  <View style={styles.fwBold}>
                                    <Text>
                                      Billing Address
                                    </Text>
                                  </View>
                              </View>
                              <View style={styles.borderp5}>
                                <View>
                                    <Text style={styles.py2}>
                                      {viewData.Shipping_Address}
                                    </Text>
                                  </View>
                              </View>
                                {/* </View> */}
                              </View>
                              

                              {/* <View style={styles.col6}>
                                <View style={styles.rowMTB2P5} >
                                  <View style={styles.w100}>
                                    <Text style={styles.py2}>
                                      Billing Address
                                    </Text>
                                  </View>
                                  <View style={styles.w100}>
                                    <Text style={styles.py2}>
                                      {viewData.Shipping_Address}
                                    </Text>
                                  </View>
                                </View>
                              </View> */}
                            </View>
                          </View>

                          {/* <View style={styles.col6}>
                        <View
                          // style={}
                          className="table-responsive"
                        >
                          <table
                            // style={}
                            className="table table-bordered border-dark align-middle"
                          >
                            <thead>
                              <View style={styles.tr}>
                                <View style={styles.td}>
                                  <Text>Seller</Text>
                                </View>
                              </View>
                            </thead>
                            <tbody>
                              <View style={styles.tr}>
                                <View style={styles.td}>
                                  <Text> {viewData.Seller_Address} </Text>
                                </View>
                              </View>
                            </tbody>
                          </table>
                        </View>
                      </View>
                      <View style={styles.col6}>
                        <View
                          // style={}
                          className="table-responsive"
                        >
                          <View
                            style={styles.table}
                            // style={}
                            className="table table-bordered border-dark align-middle"
                          >
                            <View style={styles.tr}>
                              <View style={styles.td2}>Consignee</View>
                            </View>
                            <View style={styles.tr}>
                              <View style={styles.td}>
                                <Text>Delivery Address</Text>
                              </View>
                              <View style={styles.td}>
                                <Text>Billing Address</Text>
                              </View>
                            </View>
                            <View style={styles.tr}>
                              <View style={styles.td}>
                                <Text> {viewData.Shipping_Address} </Text>
                              </View>
                              <View style={styles.td}>
                                <Text> {viewData.Billing_Address} </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View> */}
                        </View>
                        </View>
                      {/* </View> */}
                      <View>
                      <View style={styles.w100}>
                        <View
                          // style={}
                          
                        >
                          <View style={styles.w100}>
                            <View>
                              <View style={styles.table}>
                                  <View style={styles.tr}>
                                    <View style={styles.td1}>
                                      <Text>Product Image</Text>
                                    </View>
                                    <View style={styles.td2}>
                                      <Text>Product Details</Text>
                                    </View>
                                    <View style={styles.td3}>
                                      <Text>Product Variant</Text>
                                    </View>
                                    <View style={styles.td4}>
                                      <Text>Transactions</Text>
                                    </View>
                                    <View style={styles.td5}>
                                      <Text>Price (RS)</Text>
                                    </View>
                                    <View style={styles.td6}>
                                      <Text>Qty</Text>
                                    </View>
                                    <View style={styles.td7}>
                                      <Text>Gross Amount (RS)</Text>
                                    </View>
                                    <View style={styles.td8}>
                                      <Text>Discount (RS)</Text>
                                    </View>
                                    <View style={styles.td9}>
                                      <Text>Taxable Value (RS) (Exc. of) </Text>
                                    </View>
                                    <View style={styles.td10}>
                                      <Text>Tax (%) VAT</Text>
                                    </View>
                                    <View style={styles.td11}>
                                      <Text>Tax Amount (RS)</Text>
                                    </View>
                                    <View style={styles.td12}>
                                      <Text>Total Value (RS) (Inc.of VAT)</Text>
                                    </View>
                                  </View>

                                  {viewData.Product?.map((prod) => (
                                    <>
                                      <View style={styles.tr}>
                                        <View style={styles.td1}>
                                          <Image
                                            src={prod.Product_Image}
                                            alt="prod.Product_Image"
                                            style={{
                                              height: "auto",
                                              width: "100px",
                                              maxWidth:'100%'
                                            }}
                                          />
                                        </View>
                                        <View style={styles.td2}>
                                          <Text> {prod.Product_Details} </Text>
                                        </View>
                                        <View style={styles.td3}>
                                          <Text> {prod.Product_Variant} </Text>
                                        </View>
                                        <View style={styles.td4}>
                                          <Text> {prod.Transactions} </Text>
                                        </View>
                                        <View style={styles.td5}>
                                          <Text>{prod.Price}</Text>
                                        </View>
                                        <View style={styles.td6}>
                                          <Text>{prod.Qty}</Text>
                                        </View>
                                        <View style={styles.td7}>
                                          <Text> {prod.Gross_Amount} </Text>
                                        </View>
                                        <View style={styles.td8}>
                                          <Text>{prod.Discount}</Text>
                                        </View>
                                        <View style={styles.td9}>
                                          <Text> {prod.Taxable_Value} </Text>
                                        </View>
                                        <View style={styles.td10}>
                                          <Text> {prod.Tax_percent_VAT} </Text>
                                        </View>
                                        <View style={styles.td11}>
                                          <Text>{prod.Tax_Amount}</Text>
                                        </View>
                                        <View style={styles.td12}>
                                          <Text>{prod.Total_Value}</Text>
                                        </View>
                                      </View>
                                    </>
                                  ))}
                                  <View style={styles.tr}>
                                    <View
                                      style={styles.tdCOL7}
                                    >
                                      <View style={styles.fwBold}>
                                      <Text >TOTAL</Text>
                                      </View>
                                    </View>
                                    <View style={styles.td}>
                                      <Text></Text>
                                    </View>
                                    <View style={styles.td}>
                                      <Text></Text>
                                    </View>
                                    <View style={styles.td}>
                                      <Text></Text>
                                    </View>
                                    <View style={styles.td}>
                                      <Text></Text>
                                    </View>
                                    <View style={styles.td}>
                                      <Text></Text>
                                    </View>
                                  </View>
                              </View>
                            </View>


{/*  */}
{/* <View style={styles.container}>
        <Text style={styles.description}>Item Description</Text>
        <Text style={styles.qty}>Qty</Text>
        <Text style={styles.rate}>@</Text>
        <Text style={styles.amount}>Amount</Text>
    </View> */}
{/*  */}

                          </View>
                        </View>
                      </View>
                      </View>
                      <View style={styles.borderBottom}>
                      <View style={styles.w100} >
                        <View style={styles.row}>
                        <Text >Amount in Words: RS.</Text>
                        <Text style={styles.fwBold}>{viewData.Amount_in_Words} 31 Only/-</Text>
                        </View>
                      </View>
                      </View>
                      <View style={styles.borderBottom}>
                      <View style={styles.w100}>
                        <View style={styles.py2}>
                          <Text>
                            Thanks for shopping at https://ecm.octashop.com !
                            Explore More @ https://ecm.octashop.com
                          </Text>
                          <Text>
                            For any Queries call us on+0 20 375 00 00 or Email
                            at: ecm.octashop.com
                          </Text>
                        </View>
                      </View>
                      </View>
                      <View style={styles.borderBottom}>
                      <View style={styles.w100}>
                        <Text>
                          This is a computer generated invoice. No signature is
                          required.
                        </Text>
                      </View>
                      </View>
                      <View>
                      <View style={styles.w100}>
                        <Text style={styles.py2}>
                          *Terms & Conditions Apply For details on returns and
                          replacement, please visit
                          <a href="https://ecm.octashop.com">
                            https://ecm.octashop.com
                          </a>
                        </Text>
                      </View>
                      </View>
                    </View>
                  </View>
                </View>
              </Page>
            </Document>
          }
        >
          {({ blob, url, loading, error }) => {
            // Handle loading and error states
            if (loading) {
              return <Text>Loading...</Text>;
            }
            if (error) {
              return <Text>Error: {error.message}</Text>;
            }

            // If the blob is ready, render a link to open or download the PDF
            return (
              <a href={url} target="_blank" rel="noopener noreferrer">
                Open PDF
              </a>
            );
          }}
        </BlobProvider>


  </>
);

export default IV;

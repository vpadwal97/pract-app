import React from "react";
function Navi() {
  return (
    <>
      <ul class="sub_child_menu submenu_child_scroll">
        <li>
          <a href="/oms/omsStateMasterDefinition.jsx">
            Status Master Definition
          </a>
        </li>

        <li>
          <a href="/oms/processVariableMasterDefinition.jsx">
            Process Variable Definition
          </a>
        </li>

        <li>
          <a href="/oms/omsVariableUpdate.jsx">Variable Update</a>
        </li>

        <li>
          <a href="/oms/omsOrderStateTransition.jsx">Order State Transition</a>
        </li>

        <li>
          <a href="/oms/omsSubOrderStateTransition.jsx">
            Sub Order State Transition
          </a>
        </li>

        <li>
          <a href="/oms/omsOrderChangeMail.jsx">Order Change Mail</a>
        </li>

        <li>
          <a href="/oms/omsSubOrderChangeMail.jsx">Sub Order Change Mail</a>
        </li>

        <li>
          <a href="/oms/omsOrderChangeSMS.jsx">Order Change SMS</a>
        </li>

        <li>
          <a href="/oms/omsSubOrderChangeSms.jsx">Sub Order Change SMS</a>
        </li>

        <li>
          <a href="/oms/omsRoleOrderTransition.jsx">Role Order Transition</a>
        </li>

        <li>
          <a href="/oms/omsRoleSubOrderTransition.jsx">
            Role Sub Order Transition
          </a>
        </li>

        <li>
          <a href="/oms/omsStateGroupDefinition.jsx">Status Group Definition</a>
        </li>

        <li>
          <a href="/oms/omsStateGroupAssocation.jsx">
            Status Group Association
          </a>
        </li>

        <li>
          <a href="/oms/stateShipmentDefinition.jsx">State Machine Shipment</a>
        </li>

        <span class="badge pull-right pos-abs">NEW</span>
      </ul>
    </>
    // <>
    //   <li
    //     data-ui-id="menu-link_oms"
    //     class="item-dashboard _current   level-0"
    //     id="menu-link_oms"
    //     aria-haspopup="true"
    //     role="menu-item"
    //   >
    //     <a href="#" class="toggleMenu active_menu">
    //       <img
    //         alt="OMS"
    //         src="https://ckcqa.octashop.com//media/backend/images/module/oms.png"
    //         style={{height: '40px'}}
    //       />
    //       <div>OMS</div>
    //     </a>

    //     <div
    //       class="submenu active"
    //       aria-labelledby="module-oms"
    //       aria-expanded="true"
    //     >
    //       <div class="">
    //         <strong class="submenu-title">OMS</strong>
    //         <a
    //           href="#"
    //           class="endIcon"
    //           onclick="closeSidebar()"
    //           data-role="close-submenu"
    //         >
    //           <i class="fa fa-times"></i>
    //         </a>
    //       </div>

    //       <ul class="sub_menu_scroll">
    //         <li
    //           data-ui-id="module-omsq-elements"
    //           class="item-content-elements"
    //           role="menu-item"
    //         >
    //           <div class="submenu">
    //             <ul role="menu">
    //               <li
    //                 data-ui-id="menu-magento-cms-cms-page"
    //                 class="item-page"
    //                 role="menu-ite	m"
    //               >
    //                 <a href="#">
    //                   <div class="sub_menu">Order</div>
    //                 </a>

    //                 <div
    //                   class="submenu_child"
    //                   aria-labelledby="menu-magento-backend-content"
    //                   aria-expanded="true"
    //                 >
    //                   <div class="">
    //                     <strong class="submenuChild-title">Order</strong>
    //                   </div>

    //                   <ul class="sub_child_menu submenu_child_scroll">
    //                     <li>
    //                       <a
    //                         href="/oms/omsQDashboard.jsx"
    //
    //                       >
    //                         Order dashboard
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/omsQReportMaster.jsx"
    //
    //                       >
    //                         ORDER PANEL
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //         </li>

    //         <li
    //           data-ui-id="module-mast-elements"
    //           class="item-content-elements"
    //           role="menu-item"
    //         >
    //           <div class="submenu">
    //             <ul role="menu">
    //               <li
    //                 data-ui-id="menu-magento-cms-cms-page"
    //                 class="item-page active"
    //                 role="menu-ite	m"
    //               >
    //                 <a href="#">
    //                   <div class="sub_menu">Oms State Machine</div>
    //                 </a>

    //                 <div
    //                   class="submenu_child"
    //                   aria-labelledby="menu-magento-backend-content"
    //                   aria-expanded="true"
    //                 >
    //                   <div class="">
    //                     <strong class="submenuChild-title">
    //                       Oms State Machine
    //                     </strong>
    //                   </div>

    //                   <ul class="sub_child_menu submenu_child_scroll">
    //                     <li>
    //                       <a
    //                         href="/oms/smd/omsStateMasterDefinition.jsx"
    //
    //                       >
    //                         Status Master Definition
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/pvm/processVariableMasterDefinition.jsx"
    //
    //                       >
    //                         Process Variable Definition
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/ovu/omsVariableUpdate.jsx"
    //
    //                       >
    //                         Variable Update
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/ost/omsOrderStateTransition.jsx"
    //
    //                       >
    //                         Order State Transition
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/sost/omsSubOrderStateTransition.jsx"
    //
    //                       >
    //                         Sub Order State Transition
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/ocm/omsOrderChangeMail.jsx"
    //
    //                       >
    //                         Order Change Mail
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/socm/omsSubOrderChangeMail.jsx"
    //
    //                       >
    //                         Sub Order Change Mail
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/ocsms/omsOrderChangeSMS.jsx"
    //
    //                       >
    //                         Order Change SMS
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/socsms/omsSubOrderChangeSms.jsx"
    //
    //                       >
    //                         Sub Order Change SMS
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/rot/omsRoleOrderTransition.jsx"
    //
    //                       >
    //                         Role Order Transition
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/rsot/omsRoleSubOrderTransition.jsx"
    //
    //                       >
    //                         Role Sub Order Transition
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/sgd/omsStateGroupDefinition.jsx"
    //
    //                       >
    //                         Status Group Definition
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/sga/omsStateGroupAssocation.jsx"
    //
    //                       >
    //                         Status Group Association
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/shipment/stateShipmentDefinition.jsx"
    //
    //                       >
    //                         State Machine Shipment
    //                       </a>
    //                     </li>

    //                     <span class="badge pull-right pos-abs">NEW</span>
    //                   </ul>
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //         </li>

    //         <li
    //           data-ui-id="module-usrrl-elements"
    //           class="item-content-elements"
    //           role="menu-item"
    //         >
    //           <div class="submenu">
    //             <ul role="menu">
    //               <li
    //                 data-ui-id="menu-magento-cms-cms-page"
    //                 class="item-page"
    //                 role="menu-ite	m"
    //               >
    //                 <a href="#">
    //                   <div class="sub_menu">User-Role</div>
    //                 </a>

    //                 <div
    //                   class="submenu_child"
    //                   aria-labelledby="menu-magento-backend-content"
    //                   aria-expanded="true"
    //                 >
    //                   <div class="">
    //                     <strong class="submenuChild-title">User-Role</strong>
    //                   </div>

    //                   <ul class="sub_child_menu submenu_child_scroll">
    //                     <li>
    //                       <a
    //                         href="/oms/user-role/omsRoleCreationMaster.jsx"
    //
    //                       >
    //                         OMS Role Creation
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/user-role/omsUserRoleAssociationMaster.jsx"
    //
    //                       >
    //                         OMS User Role Association
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/user-role/omsRoleStateAssociationMaster.jsx"
    //
    //                       >
    //                         Role State Association
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //         </li>

    //         <li
    //           data-ui-id="module-subscriptionboard-elements"
    //           class="item-content-elements"
    //           role="menu-item"
    //         >
    //           <div class="submenu">
    //             <ul role="menu">
    //               <li
    //                 data-ui-id="menu-magento-cms-cms-page"
    //                 class="item-page"
    //                 role="menu-ite	m"
    //               >
    //                 <a href="#">
    //                   <div class="sub_menu">Subscription Dashboard</div>
    //                 </a>

    //                 <div
    //                   class="submenu_child"
    //                   aria-labelledby="menu-magento-backend-content"
    //                   aria-expanded="true"
    //                 >
    //                   <div class="">
    //                     <strong class="submenuChild-title">
    //                       Subscription Dashboard
    //                     </strong>
    //                   </div>

    //                   <ul class="sub_child_menu submenu_child_scroll">
    //                     <li>
    //                       <a
    //                         href="/oms/omsDashboardsubscript.jsx"
    //
    //                       >
    //                         subscription dashboard
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //         </li>

    //         <li
    //           data-ui-id="module-geninv-elements"
    //           class="item-content-elements"
    //           role="menu-item"
    //         >
    //           <div class="submenu">
    //             <ul role="menu">
    //               <li
    //                 data-ui-id="menu-magento-cms-cms-page"
    //                 class="item-page"
    //                 role="menu-ite	m"
    //               >
    //                 <a href="#">
    //                   <div class="sub_menu">Invoice</div>
    //                 </a>

    //                 <div
    //                   class="submenu_child"
    //                   aria-labelledby="menu-magento-backend-content"
    //                   aria-expanded="true"
    //                 >
    //                   <div class="">
    //                     <strong class="submenuChild-title">Invoice</strong>
    //                   </div>

    //                   <ul class="sub_child_menu submenu_child_scroll">
    //                     <li>
    //                       <a
    //                         href="/oms/omsGeneInvo/omsGenerateInvoiceMaster.jsx"
    //
    //                       >
    //                         Manage Invoice
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/omsPrintInvoRep/omsPrintedInvoiceReportMaster.jsx"
    //
    //                       >
    //                         Printed Invoice
    //                       </a>
    //                     </li>

    //                     <li>
    //                       <a
    //                         href="/oms/omsOrdSubOrdUpd/omsOrderSubOrderUpdateMaster.jsx"
    //
    //                       >
    //                         Air Way Bill Update
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </li>
    // </>
  );
}

export default Navi;

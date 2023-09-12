import React from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AutoGraph, Cake } from "@mui/icons-material";
import {
  FormGroup,
  FormControlLabel,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  ButtonGroup,
  Button,
} from "@mui/material";
import "./App.scss";
import ("./tailwind.min.css");
import ("./tailwind-ui.min.css");
import ("./style.css");

export default function () {
  return (
    <div className="left-nav-container">


    <div className="antialiased main_bg_gradient min-h-screen">
       <div className="flex flex-col items-center justify-center p-10">

          <div className="pl-6 pr-6 pt-2 pb-6 grid lg:grid-cols-7 gap-4 rounded-lg shadow-xl overflow-hidden bg-white w-2/3">

            <div className="flex items-center relative col-span-4 ml-4 h-20">
              <img className="w-52 inline img" src="https://assetpayments.app/platform/payments/bitrix24_advanced/img/logo.png" alt="Assetpayments" />
            </div>

            <div className="flex justify-end col-span-8 mr-6">
              <div className="menu-container flex space-x-6">

                  <div className="profile flex justify-end h-20 items-center dropdown">
                    <div className="flex items-center relative space-x-2">
                      <span className="font-semibold">Main menu</span>
                      <img className="w-10 h-10 cursor-pointer" src="https://assetpayments.app/platform/payments/bitrix24_advanced/img/menu.svg" />
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                    <div className="dropdown-content absolute hidden">
                        <ul className="border transition transition-all duration-100 shadow-lg">

                            <li className="flex items-center space-x-2">
                              <img className="w-10 h-10" src="https://assetpayments.app/platform/payments/bitrix24_advanced/img/en.svg" title="<? echo $val ?>" />
                              <span>item 1</span>
                            </li>

                        </ul>
                    </div>
                  </div>
                  <div className="profile flex justify-end h-20 items-center dropdown">
                    <div className="flex items-center relative space-x-2">
                      <span className="font-semibold">Lang</span>
                      <img className="w-10 h-10 border border-solid rounded-full border-gray-400 cursor-pointer" src="https://assetpayments.app/platform/payments/bitrix24_advanced/img/en.svg" />
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                    <div className="dropdown-content absolute transition transition-all duration-200 shadow-lg hidden">
                        <ul className="border transition transition-all duration-100 shadow-lg">
                            <li className="flex items-center space-x-4">
                              <img className="w-10 h-10 border border-solid rounded-full border-gray-400" src="https://assetpayments.app/platform/payments/bitrix24_advanced/img/en.svg" title="<? echo $val ?>" />
                              <span>asdfasdf</span>
                            </li>
                        </ul>
                    </div>
                  </div>
              </div>
            </div>

            <div className="flex flex-col col-span-12">
               <form action="save_invoice.php" method="POST">

                  <h2 className="font-normal text-2xl tracking-tight text-black">
                     Inv title
                  </h2>

                  <div data-type="select-template" className="mt-3 flex relative">
                    <label className="w-full">
                      <span className="font-medium text-gray-700 sm:text-sm">
                        Inv template
                      </span>
                     <select className="form-select mt-1 block px-4 py-3 w-full border-gray-300 form-input sm:text-sm rounded-md focus:ring-0 focus:border-blue-500">
                       <option value="new">New</option>
                     </select>
                   </label>
                  </div>

                  <div className="mt-3 space-y-2">
                    <div>
                      <label className="flex items-center relative h-12">
                        <input id="AddProductsCheckbox" type="checkbox" name="AddProductsCheckbox" className="w-6 h-6 border-gray-300 form-checkbox rounded-md text-blue-500" />
                        <span className="ml-2 font-medium text-black text-sm">
                         Add prodcs
                        </span>
                     </label>
                    </div>

                    <div id="AddProductsDiv">
                        <div className="grid lg:grid-cols-5 gap-4 w-full pl-4 pr-4 font-regular text-black pb-2">
                          <div className="flex flex-col col-span-3">
                            <span className="ml-2 sm:text-sm text-gray-500">Name</span>
                          </div>
                        <div className="flex flex-col col-span-1 items-center">
                           <span className="ml-2 sm:text-sm text-gray-500">Q-ty</span>
                        </div>
                        <div className="flex flex-col col-span-1 items-center mr-2">
                           <span className="ml-2 sm:text-sm text-gray-500">Add products</span>
                        </div>
                     </div>

                     <div className="rounded-md bg-gray-200 border border-gray-300 p-4"></div>

                    </div>

                    <div id="ManualProductsDiv">
                      <label className="w-full">
                        <span className="font-medium text-gray-700 sm:text-sm">
                          Title
                        </span>
                       <input id="payment_title" type="text" name="payment_title" defaultValue="" placeholder="" className="mt-1 block text-black px-4 py-3 w-full border-gray-300 form-input sm:text-sm rounded-md focus:ring-0 focus:border-blue-500" />
                       <p id="error_payment_title" className="mt-2 text-sm text-red-600 dark:text-red-500 font-medium hidden"></p>
                     </label>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-4">
                      <div>
                        <label className="w-full">
                          <span className="font-medium text-gray-700 sm:text-sm">
                            Price
                         </span>
                         <input id="amount" type="text" name="amount" defaultValue="0.00" placeholder="0.00" className="mt-1 block text-black px-4 py-3 w-full border-gray-300 form-input sm:text-sm rounded-md focus:ring-0 focus:border-blue-500 bg-gray-200" />
                         <p id="error_payment_amount" className="mt-2 text-sm text-red-600 dark:text-red-500 font-medium"></p>
                       </label>
                      </div>
                      <div>
                        <label className="w-full">
                          <span className="font-medium text-gray-700 sm:text-sm">
                            Currency
                          </span>
                         <select id="currency" name="currency" className="form-select mt-1 block px-4 py-3 w-full border-gray-300 form-input sm:text-sm rounded-md focus:ring-0 focus:border-blue-500">
                         </select>
                       </label>
                      </div>
                    </div>

                    <div className="relative grid lg:grid-cols-2 gap-4">
                      <div className="flex items-center relative h-12">
                        <label className="flex items-center h-full">
                          <input id="SendByEmailCheckbox" type="checkbox" name="SendByEmailCheckbox" className="w-6 h-6 border-gray-300 form-checkbox rounded-md text-blue-500" />
                          <span className="ml-2 font-medium text-black sm:text-sm">
                            Send to customer
                          </span>
                       </label>
                      </div>
                      <div id="SendByEmailDiv" className="h-12">
                        <label className="w-full">
                         <input type="email" name="email" defaultValue="" placeholder="Enter email address" className="block text-black px-4 py-3 w-full border-gray-300 form-input sm:text-sm rounded-md focus:ring-0 focus:border-blue-500" />
                       </label>
                      </div>
                    </div>

                    <div id="ChangeStageWithoutSplitOption">
                      <div>
                        <label className="w-full">
                          <span className="font-medium text-gray-700 sm:text-sm">
                           Change stage
                          </span>
                         <select defaultValue="1" id="new_stage" name="new_stage" className="form-select mt-1 block px-4 py-3 w-full border-gray-300 form-input sm:text-sm rounded-md focus:ring-0 focus:border-blue-500">
                           <option value="1">Select stage</option>
                         </select>
                       </label>
                      </div>
                    </div>

                    <div data-type="notification-fail-email" className="relative grid lg:grid-cols-2 gap-4">
                        <div className="flex items-center relative h-12">
                          <label className="flex items-center h-full">
                            <input id="FailNotificationEmailCheckbox" type="checkbox" name="FailNotificationEmailCheckbox" className="w-6 h-6 border-gray-300 form-checkbox rounded-md text-blue-500" />
                            <span className="ml-2 font-medium text-black sm:text-sm">
                              Payment notification
                            </span>
                         </label>
                        </div>

                        <div className="h-12">
                          <label className="w-full">
                            <select defaultValue="1" id="FailNotificationEmailValue" name="FailNotificationEmailValue" className="form-select mt-1 block px-4 py-3 w-full border-gray-300 form-input sm:text-sm rounded-md focus:ring-0 focus:border-blue-500">
                              <option value="1'">Responsible person</option>
                            </select>
                         </label>
                        </div>
                    </div>

                    <div>
                      <label className="w-full">
                        <span className="font-medium text-gray-700 sm:text-sm">
                          Customer language
                        </span>
                       <select defaultValue="en" id="form_language" name="form_language" className="form-select mt-1 block px-4 py-3 w-full border-gray-300 form-input sm:text-sm rounded-md focus:ring-0 focus:border-blue-500">
                         <option value="en">English</option>';
                       </select>
                     </label>
                    </div>

                   <div className="pt-4">
                     <span className="rounded-md shadow-sm">
                       <button type="submit" className="bg-blue-600 block w-full px-6 py-3 active_plan h-50 font-semibold text-white rounded-md shadow sm:text-sm">Create invoice</button>
                    </span>
                   </div>

                  </div>
               </form>
            </div>

          </div>
       </div>
    </div>

    </div>
  );
}

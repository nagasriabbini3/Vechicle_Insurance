import {test as baseTest} from "@playwright/test";
import { HomePage } from "../pages/HomePage"
import { AutomobileInsurancePage } from "../pages/automobile/AutomobileInsurancePage";
import { VehicaleDataTab } from "../pages/automobile/VehicleDataTab";

export const test=baseTest.extend
                                <{homePage:HomePage,automobileInsurance:AutomobileInsurancePage,vehicaleData:VehicaleDataTab }>
                            
                                 ({
                                      homePage:async({page},use)=>{
                                        await use(new HomePage(page));
                                 },

                                
                                    automobileInsurance:async({page},use)=>{
                                       await use(new AutomobileInsurancePage(page));
                                 },
                                   vehicaleData:async({page},use)=>{
                                     await use(new VehicaleDataTab(page));
                                }

                                
                        })











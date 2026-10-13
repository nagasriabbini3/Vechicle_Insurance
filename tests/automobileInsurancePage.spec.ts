import {expect} from "@playwright/test"
import {test} from "../src/fixtures/POMFixtures";



test("verifying navigation to Automobileinsurance page and content ",async({page,homePage,automobileInsurance})=>
{
   
    await homePage.openApplication();
    await homePage.navigateAutomationPage();
     await automobileInsurance.verifyTabsText();
    await automobileInsurance.clickenterInsurantDataTab();
    await automobileInsurance.clickenterProductDataTab();
    await automobileInsurance.clickselectPriceOptionTab();
    await automobileInsurance.clicksendQuoteTab();
    await automobileInsurance.clickenterVehicaleDataTab();

})
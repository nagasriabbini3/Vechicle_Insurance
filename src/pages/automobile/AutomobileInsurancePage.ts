import {expect, Locator, Page} from '@playwright/test'


export class AutomobileInsurancePage{
    readonly page:Page;
    readonly enterVehicaleDataTab:Locator;
    readonly enterInsurantDataTab:Locator;
    readonly enterProductDataTab:Locator;
    readonly selectPriceOptionTab:Locator;
    readonly sendQuoteTab:Locator;

    constructor(page:Page){

        this.page=page;
        this.enterVehicaleDataTab=page.locator('#entervehicledata');
        this.enterInsurantDataTab=page.getByRole("link",{name:'Enter Insurant Data'});
        this.enterProductDataTab=page.getByRole("link",{name:'Enter Product Data'});
        this.selectPriceOptionTab=page.getByRole("link",{name:'Select Price Option'});
        this.sendQuoteTab=page.getByRole("link",{name:'Send Quote'});

 }

 async verifyTabsText()
 {
    await expect(this.enterVehicaleDataTab).toBeVisible();
    await expect(this.enterInsurantDataTab).toBeVisible();
    await expect(this.enterProductDataTab).toBeVisible();
    await expect(this.selectPriceOptionTab).toBeVisible();
    await expect(this.sendQuoteTab).toBeVisible();
 }

 

 async clickenterInsurantDataTab()
 {
    await this.enterInsurantDataTab.click();
 }
 async clickenterProductDataTab()
 {
    await this.enterProductDataTab.click();
 }
 async clickselectPriceOptionTab()
{
   await this.selectPriceOptionTab.click();
}
async clicksendQuoteTab()
{
   await this.sendQuoteTab.click();
}
async clickenterVehicaleDataTab()
{
   await this.enterVehicaleDataTab.click();
}

}
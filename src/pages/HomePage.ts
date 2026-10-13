import {expect, Locator, Page,test} from "@playwright/test"

export class HomePage {
    readonly page:Page;
    readonly AutomobileLink:Locator;
    readonly TruckLink:Locator;
    readonly MotorcycleLink:Locator;
    readonly CamperLink:Locator;
    readonly automobileInsuranceHeading:Locator;
    readonly truckInsuranceHeading:Locator;
    readonly motorcycleInsuranceHeading:Locator;
    readonly camperInsuranceHeading:Locator;
    
    
    constructor(page:Page)
    {
        this.page=page;
        this.AutomobileLink= page.getByRole('link', { name: ' Automobile',exact:true},);
        this.automobileInsuranceHeading=page.locator('#selectedinsurance');
        this.TruckLink= page.getByRole("link",{name:'Truck'});
        this.truckInsuranceHeading=page.locator('#selectedinsurance');
        this.MotorcycleLink= page.getByRole("link",{name:'Motorcycle '});
        this.motorcycleInsuranceHeading=page.locator('#selectedinsurance');
        this.CamperLink= page.getByRole("link",{name:'Camper '});
        this.camperInsuranceHeading=page.locator('#selectedinsurance');
        
        
    }
    async openApplication()
    {

        await this.page.goto("https://sampleapp.tricentis.com/101/");
        await expect(this.AutomobileLink).toBeVisible();
        
        
    }
    async navigateAutomationPage()
{
    await this.AutomobileLink.click();
    await expect(this.automobileInsuranceHeading).toBeVisible();
        

}

    async navigateTruckLink()
    {
        await this.TruckLink.click();
        await expect(this.truckInsuranceHeading).toBeVisible();
    }
    
    async navigateMotorcyclePage()
    {
        await this.MotorcycleLink.click();
        await expect(this.motorcycleInsuranceHeading).toBeVisible();
    }

    async navigateCamperPage()
    {
        await this.CamperLink.click();
        await expect(this.camperInsuranceHeading).toBeVisible();
    }
    

}

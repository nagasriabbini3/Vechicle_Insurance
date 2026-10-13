import { Locator,Page } from "@playwright/test"
import { vehicleInsuranceData } from "../../test-data/vehicleInsuranceData";

export class VehicaleDataTab{

    readonly page:Page;
    readonly makeDropDown:Locator;
     readonly enginePerformanceField:Locator;
    readonly dateOfManufacture:Locator;
    readonly numberOfSeatsDropDown:Locator;
     readonly fuelTypeDropDown:Locator;
    readonly listPriceField:Locator;
    readonly licensePlateNumberField:Locator;
    readonly annualMileageField:Locator;
    readonly nextButtonInsurantdataTab:Locator;

    constructor(page:Page){
        this.page=page;
         this.makeDropDown= page.locator("#make");
          this.enginePerformanceField= page.locator('#engineperformance');
        this.dateOfManufacture=page.locator('#dateofmanufacture');
        this.numberOfSeatsDropDown=page.locator('#numberofseats');
         this.fuelTypeDropDown=page.locator('#fuel');
         this.listPriceField=page.locator("#listprice");
        this.licensePlateNumberField=page.locator('#licenseplatenumber');
        this.annualMileageField=page.locator('#annualmileage');
        this.nextButtonInsurantdataTab=page.locator('#nextenterinsurantdata');


    }

    async enterVehicalData(data:vehicleInsuranceData)
    {
        console.log("make value:",data.make);
        console.log(await this.page.locator("#make").isVisible());
        await this.makeDropDown.selectOption(data.make,{timeout:3000});
        await this.enginePerformanceField.fill(String(data.enginePerformance));
        await this.dateOfManufacture.fill(String(data.dateOfManufacture));
        console.log("Data type:", typeof data.dateOfManufacture);
        await this.numberOfSeatsDropDown.selectOption(data.numberOfSeats);
        await this.fuelTypeDropDown.selectOption(data.fuelType);
        await this.listPriceField.fill(data.listPrice);
        await this.licensePlateNumberField.fill(data.licensePlateNumber);
        await this.annualMileageField.fill(data.annualMileage);
        
    }
    async clickNextButton()
    {
        await this.nextButtonInsurantdataTab.click();
                                                 }
                                                 
}






    
    

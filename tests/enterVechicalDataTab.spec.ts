import {test} from "../src/fixtures/POMFixtures"
import { vehicleInsuranceData } from "../src/test-data/vehicleInsuranceData";
import {readExcelData} from "../src/utils/dataReader"
import * as XLSX from 'xlsx';
import path from 'path';
import { env } from '../src/config/env';


const XLPath= XLSX.readFile('./src/test-data/automobile.xlsx');
const sheet= XLPath.Sheets['TestData'];
const data:vehicleInsuranceData[] =XLSX.utils.sheet_to_json<vehicleInsuranceData>(sheet)

test('verifying enter vehicle data tab functionality on automobile page',async ({page,homePage,automobileInsurance,vehicaleData})=>
    {
       await homePage.openApplication();
       await homePage.navigateAutomationPage();

       console.log(data);
         for(const i of data )
         {
        
        await vehicaleData.enterVehicalData(i);
         }
        

        //await vehicaleData.clickNextButton();

})
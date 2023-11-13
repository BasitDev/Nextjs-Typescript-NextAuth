// random salesforce sdk
import { ShopperCustomers } from "commerce-sdk";
import { FormSubmission, SalesforceConfig } from "@/interfaces/salesforce";

export class SalesforceService {
  private config: SalesforceConfig;
  public salesforce: ShopperCustomers;

  constructor() {
    this.config = {
      clientId: "YOUR_CLIENT_ID",
      organizationId: "YOUR_ORG_ID",
      shortCode: "YOUR_SHORT_CODE",
      siteId: "YOUR_SITE_ID",
      version: "v1",
    };
    this.salesforce = new ShopperCustomers(this.config);
  }

  public async submitForm(data: any): Promise<FormSubmission> {
    //
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!data) {
          reject(new Error("No data provided"));
        } else {
          resolve({
            id: "mockId1234",
            status: "Form mock submitted to Salesforce",
            data: data,
          });
        }
      }, 1000);
    });
  }
}

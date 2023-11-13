export interface SalesforceConfig {
  clientId: string;
  organizationId: string;
  shortCode: string;
  siteId: string;
  version: string;
}

export interface FormSubmission {
  id: string;
  status: string;
  data: any; // Define a more specific type here if possible
}

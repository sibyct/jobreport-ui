export interface DropdownModel{
    id:number,
    value:string
}
export interface ReportModel{
    customerName?:string,
    mobNo?:number,
    address?:string,
    location?:string,
    typeOfService?:DropdownModel,
    otherService?:string,
    typeOfcomplaint?:DropdownModel,
    enquiryDate?:Date,
    co?:DropdownModel,
    typeOfCustomer?:number
}
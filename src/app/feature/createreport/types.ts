export interface DropdownModel{
    id:number,
    value:string
}
export interface ReportModel{
    cusfirstname?:string,
    cuslastname?:string,
    route?:string,
    mobno?:number,
    address?:string,
    location?:string,
    typeofservice?:DropdownModel,
    otheritem?:string,
    typeOfcomplaint?:DropdownModel,
    requestdate?:Date,
    CareOf?:DropdownModel,
    custype?:number
}
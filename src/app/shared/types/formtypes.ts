export interface IDyamicComponentConfig{
    name:string,
    label:string,
    type:string,
    layout?:string,
    validators?:IFieldValidation[]| string[]
}
export interface IDyamicformConfig{
    name?:string,
    layout?:string,
    items?:[IDyamicComponentConfig]
}

export interface IFieldValidation{
    type:string,
    messsage?:string
}
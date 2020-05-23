export interface IDyamicComponentConfig{
    name:string,
    label:string,
    type:string,
}
export interface IDyamicformConfig{
    name?:string,
    items?:[IDyamicComponentConfig]
}
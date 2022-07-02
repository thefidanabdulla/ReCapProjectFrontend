import { ResponseModel } from "../responseModel";
import { Brand } from "./brand";

export interface BrandResponseModel extends ResponseModel{
    brands:Brand[]
}
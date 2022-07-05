import { ResponseModel } from "../responseModel";
import { CarDetailDto } from "./carDetailDto";

export interface CarDetailDtoResponseModel extends ResponseModel{
    data:CarDetailDto[]
}
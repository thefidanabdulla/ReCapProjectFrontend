import { ResponseModel } from "../responseModel";
import { RentalDetailDto } from "./rentalDetailDto";

export interface RentalDetailDtoResponseModel extends ResponseModel{
    data: RentalDetailDto[]
}
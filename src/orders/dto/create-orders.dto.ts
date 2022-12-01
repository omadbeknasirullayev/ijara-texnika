import { IsDate, IsNumber } from "class-validator"

export class CreateOrdersDto {
    @IsNumber({}, {message: "equipment_id butun son bo'lishi kerak"})
    equipment_id: number

    @IsNumber({}, {message: "user_id butun son bo'lishi kerak"})
    user_id: number

    @IsDate({message: "start_date string bo'lishi kerak"})
    start_date: Date

    @IsDate({message: "end_date string bo'lishi kerak"})
    end_date: Date
}
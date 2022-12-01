import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Equipment } from "src/equipments/equipments.model"
import { User } from "src/users/users.model"

interface OrderCreateAttr {
    equipment_id: number
    user_id: number
}

@Table({tableName: 'orders'})

export class Order extends Model <Order, OrderCreateAttr> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number

    @ForeignKey(() => Equipment)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    equipment_id: number

    @ForeignKey(() => User) 
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user_id: number

    @Column({
        type: DataType.DATE
    })
    start_date: Date

    @Column({
        type: DataType.DATE,
    })
    end_date: Date

    @Column({
        type: DataType.FLOAT
    })
    total_price: number

}
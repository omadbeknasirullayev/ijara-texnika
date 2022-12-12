import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Equipment } from "src/equipments/equipments.model"

interface UserCreateAttr {
    name: string
    email: string
    password: string
    phone_number: string
}

@Table({tableName: 'users'})

export class User extends Model <User, UserCreateAttr> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    phone_number: string

    @Column({
        type: DataType.STRING,
    })
    location: string

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_admin: boolean

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_active: boolean

    @HasMany(() => Equipment)
    equipments: Equipment[]
}
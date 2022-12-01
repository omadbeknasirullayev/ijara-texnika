import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Equipment } from "src/equipments/equipments.model"
import { User } from "src/users/users.model"

interface CommentCreateAttr {
    equipment_id: number
    user_id: number
}

@Table({tableName: 'comments'})

export class Comment extends Model <Comment, CommentCreateAttr> {
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
        type: DataType.STRING
    })
    comment: string

    @Column({
        type: DataType.INTEGER,
    })
    rating: number

    @Column({
        type: DataType.DATE,
        defaultValue: new Date()
    })
    createdAt: Date

}
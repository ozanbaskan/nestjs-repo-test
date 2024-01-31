import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "users",
})
export class User extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  deletedPhoneNumber: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  deletedEmail: string;

  @Column({
    type: DataType.CITEXT,
    allowNull: true,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isAuthorized: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  phoneNumber: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  tokenIssuedAt: Date;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isActive: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  totpEnabled: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  totpSecret: string;
}

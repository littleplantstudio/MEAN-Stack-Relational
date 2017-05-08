import {Table, Model, PrimaryKey, Column, AutoIncrement, BelongsToMany, DefaultScope, Scopes} from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'cat'
})

@Table
export default class  Cat extends Model<Cat> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  weight: number;

  @Column
  age: number;
}

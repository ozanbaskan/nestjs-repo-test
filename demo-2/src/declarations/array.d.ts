import { ModelData } from './sequelize';
import { Model } from 'sequelize-typescript';

declare global {
  interface Array<T> {
    /**
     * Custom global declaration for Array.prototype to use for arrays that sequelize ORM returns
     */
    eachToJSON(): T extends Model ? ModelData<T>[] : any[];
  }
}

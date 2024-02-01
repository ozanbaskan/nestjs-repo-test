import { ModelData } from './sequelize';

declare global {
  interface Array<T> {
    /**
     * Custom global declaration for Array.prototype to use for arrays that sequelize ORM returns
     */
    eachToJSON(): ModelData<T>[];
  }
}

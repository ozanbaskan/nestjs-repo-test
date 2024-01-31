import { ModelData } from "./sequelize";

declare global {
    interface Array<T> {
      eachToJSON(): ModelData<T>[];
    }
}

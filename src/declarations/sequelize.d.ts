import 'sequelize-typescript';

type ModelData<T extends Model<T>> = Omit<
  T,
  | 'isInitialized'
  | 'init'
  | '$add'
  | '$set'
  | '$get'
  | '$count'
  | '$create'
  | '$has'
  | '$remove'
  | 'addHook'
  | 'changed'
  | 'decrement'
  | 'destroy'
  | 'equals'
  | 'equalsOneOf'
  | 'get'
  | 'getDataValue'
  | 'hasHook'
  | 'hasHooks'
  | 'increment'
  | 'isNewRecord'
  | 'isSoftDeleted'
  | 'previous'
  | 'reload'
  | 'removeHook'
  | 'restore'
  | 'save'
  | 'sequelize'
  | 'set'
  | 'setAttributes'
  | 'setDataValue'
  | 'toJSON'
  | 'update'
  | 'validate'
  | 'version'
  | 'where'
  | '_model'
  | '_attributes'
  | '_creationAttributes'
>;

declare module 'sequelize-typescript' {
  interface Model {
    toJSON(): ModelData<this>;
  }
}

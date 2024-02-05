import { Model } from 'sequelize-typescript';

// Every child class method will call toJSON() method in case they are returning a model
// In this way, services will never be able to do I/O, only repository classes will be able to do them
// this is not necessary if you always call toJSON from repository services
export abstract class Repository {
  constructor() {
    const methods = Object.getOwnPropertyNames(this.constructor.prototype).filter(
      (name) => name !== 'constructor' && typeof this.constructor.prototype[name] === 'function',
    );
    for (const method of methods) {
      const f = this.constructor.prototype[method];
      this.constructor.prototype[method] = async (...args) => {
        const result = getToJSONIfPossible(await f.call(this, ...args));
        loopAndSetJSONs(result);
        return result;
      };
    }
  }
}

export const getToJSONIfPossible = (r) => {
  if (r instanceof Model) return r.toJSON();
  return r;
};

export const loopAndSetJSONs = (obj: any, set = new WeakSet()) => {
  if (!obj || set.has(obj)) return;
  if (typeof obj === 'object') {
    set.add(obj);
    for (const key of Object.keys(obj)) {
      obj[key] = getToJSONIfPossible(obj[key]);
      loopAndSetJSONs(obj[key], set);
    }
  }
};

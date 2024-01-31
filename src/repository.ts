import { Model } from 'sequelize-typescript';

// Every child class method will call toJSON() method in case they are returning a model
// In this way, services will never be able to do I/O, only repository classes will be able to do them
export abstract class Repository {
  constructor() {
    const methods = Object.getOwnPropertyNames(this.constructor.prototype).filter(
      (name) => name !== 'constructor' && typeof this.constructor.prototype[name] === 'function',
    );
    for (const method of methods) {
      const f = this.constructor.prototype[method];
      this.constructor.prototype[method] = async (...args) => {
        const result = await f.call(this, ...args);
        loopAndSetJSONs(result);
        return result;
      };
    }
  }
}

const getToJSONIfPossible = (r) => {
  if (r instanceof Model) return r.toJSON();
  else if (Array.isArray(r) && r.every((r) => r instanceof Model)) return r.map((r) => r.toJSON());
  else return r;
};

const loopAndSetJSONs = (obj: any) => {
  if (!obj || typeof obj !== 'object') return;

  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; ++i) {
      obj[i] = getToJSONIfPossible(obj[i]);
      loopAndSetJSONs(obj[i]);
    }
  } else if (typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      obj[key] = getToJSONIfPossible(obj[key]);
      loopAndSetJSONs(obj[key]);
    }
  }
};

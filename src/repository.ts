import { Model } from "sequelize-typescript";

export abstract class Repository {
    constructor() {
        const methods = Object.getOwnPropertyNames(this.constructor.prototype).filter(name => name !== 'constructor' && typeof this.constructor.prototype[name] === 'function');
        for (const method of methods) {
            const f = this.constructor.prototype[method];
            this.constructor.prototype[method] = async (...args) => {
                const result = await f.call(this, ...args);
                if (result instanceof Model) return result.toJSON();
                else if (Array.isArray(result) && result.every(r => r instanceof Model)) return result.map(r => r.toJSON());
                else return result;
            }
        }
    }
    
}
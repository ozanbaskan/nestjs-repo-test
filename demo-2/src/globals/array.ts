export {};

Array.prototype.eachToJSON = function () {
  return this.map((e: any) => (typeof e?.toJSON === 'function' ? e.toJSON() : e));
};

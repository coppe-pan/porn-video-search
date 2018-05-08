module.exports = subclass(
  /*  Root class                  */

  Error,

  /*  Derived class hierarchy     */

  {
    BaseError: {
      ApiMethod: {
        NotSupported: {},
      }
    }
  }
);

function subclass(BaseClass, classes, namespace = {}) {
  for (const [$class, subclasses] of Object.entries(classes)) {
    const Class = Object.assign(namespace, {

        [$class]: class extends BaseClass {
        constructor(message) {
          super(message);

          this.constructor = Class;
          this.__proto__ = Class.prototype;
          this.message = message;
        }
      }
    })[$class];

    subclass(Class, subclasses, namespace);
  }

  return namespace;
}

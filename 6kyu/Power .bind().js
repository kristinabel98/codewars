Function.prototype.bind = function(ctx) {
    const func = this;
    return function(...args) {
        const rightCtx = this === global ? ctx : this;
        return func.apply(rightCtx, args);
    } 
}
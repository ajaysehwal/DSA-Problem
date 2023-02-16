var MinStack = function() {
    this.element=[];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    return this.element.push({
          value: val,
    min: this.element.length === 0 ? val : Math.min(val, this.getMin()),
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
     this.element.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
      return this.element[this.element.length - 1].value;

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
            return this.element[this.element.length - 1].min;

};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
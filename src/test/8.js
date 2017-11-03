var num = 2;
var obj = {
  num: 0,
  fn: function () {
    var num = 1;
    (function () {
      ++this.num;//3
      num++;//2
      console.log(num);//2
    })(this.num)
  }
}
var f = obj.fn;
f();
//3 0
console.log(window.num, obj.num);
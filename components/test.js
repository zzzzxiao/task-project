const test = ()=>{
    fun:(n, o)=> {
    console.log(o);
    return {
      fun: (m) => {
        return fun(m, n);
      }
    }
  }
  complexFn:()=>{
    const number = 1;
    var obj = {
      number:2,
      showNumber:()=>{
        this.number = 3;
        (function(){
          console.log(this.number)
        })();
        console.log(this.number)
      }
    }
    obj.showNumber();
  }
}
// const a = this.fun(0);
//     a.fun(1);
//     a.fun(2);
//     a.fun(3);
//     const b = this.fun(0).fun(1).fun(2);
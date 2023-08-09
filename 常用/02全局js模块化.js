(function(win){

    function sayHello(name){
        alert("hello"+ name)
    }

    function add(...arg){
       return arg.reduce((pre,cur)=>pre+cur);
    }

    function TestModule(){
        this.sayHello=sayHello;
        //this.add=add;
    }
    TestModule.prototype.add=add;

    win.TestModule=new TestModule();

})(window)
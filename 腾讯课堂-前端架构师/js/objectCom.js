
var ObjectCom=(
    function () {
        var ObjectCom=function(option) {
            this.init(option);    
          }
          
          var __DEFTS__={}
          
          ObjectCom.prototype={
             init:function(option) {
                 this.option=$.extend(this,__DEFTS__,option);
                 this.renderDom();
             },
             renderDom:function() {
                 $("body").append("<div>测试renderDom</div>");
             },
             onSave:function(callBack) {
                 alert("保存了");
                 if (callBack) {
                     callBack();
                 }
                // this.onSave.call(this);
             }
          }
    
          return ObjectCom;
    }
  

)();

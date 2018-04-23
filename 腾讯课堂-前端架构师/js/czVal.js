///自定义表单验证
(function(root,factory,plug) {
    return factory(root.jQuery,plug);
})(window,function($,plug) {
    var __DEFS__={
        trigger:'change',
        required:'必填',
        url:'url不正确'
    }
    var __RULES__={
        required:function() {
            return this.val()!="";
        },
        regex:function () {
            return new RegExp(this.data("dv-regex")).test(this.val());
        },
        url:function() {
            return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(this.val());
        },
        email:function() {
            
        }


    }
   $.fn[plug]=function(params) {
       $.extend(this,__DEFS__,params);
       var $fields=this.find("input").not("input[type=button],input[type=submit],input[type=reset]");
      
       $fields.on(this.trigger,function(params) {
           var $field=$(this);
           $field.next().remove();
           $.each(__RULES__,function(rule,valider){
            if ($field.data("cz"+"-"+rule)) {
                if (!valider.call($field)) {
                    var message=$field.data("cz"+"-"+rule+"-message")?$field.data("cz"+"-"+rule+"-message"):__DEFS__[rule]
                    $field.after("<div class='invalid-feedback'>"+message+"</div>");
                }
            }
 
        })
       })
   }
},'validate')

(function(root)  {
    function jQuery(params) {
    
        switch (typeof params) {
            case 'function':
               // window.onload=params;
               root.addEventListener('load',params);
                break;
            case 'string':
                alert(params);
                break;
            case 'object':
                break;
            default:
                break;
        }
    }
    function $(params) {
        return new jQuery(params);
    }
    root.$=root.jQuery=$;
})(window)

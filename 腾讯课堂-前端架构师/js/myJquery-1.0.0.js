(function(window)  {
    function jQuery(params) {
    
        switch (typeof params) {
            case 'function':
               // window.onload=params;
               window.addEventListener('load',params);
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
    window.$=window.jQuery=$;
})(window)

define(["jquery","ckeditor","bootstrap-datepicker","bootstrap-datepicker.zh-CN","region"],function($,CKEDITOR){

         $(".tc_borady").datepicker({
                    format:"yyyy-mm-dd",
                    language:"zh-CN"
          })

         $(".tc_join_date").datepicker({
                    format:"yyyy-mm-dd",
                    language:"zh-CN"
         })
       CKEDITOR.replace("introduce",{
            toolbarGroups:[
                { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
                { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
                { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
                { name: 'styles' },
                { name: 'colors' },
            ]
       })

       $("#region").region({
           url:"/views/assets/jquery-region/region.json"
       });
});
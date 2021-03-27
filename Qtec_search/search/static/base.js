function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

  function srch_by_w(){

      var input,table,td,tr,filter,txtdata;
      var input = document.getElementById("sbox");
      filter = input.value.toUpperCase();
      table = document.getElementById("t05");
      tr = table.getElementsByTagName("tr");
      
      for(var i = 0;i<tr.length;i++){
        td=tr[i].getElementsByTagName("td")[2];
        if(td){              
          txtdata = td.innerText;
          var txd= txtdata.toUpperCase();
          if(txd.includes(filter)){
            tr[i].style.display="";
          }
          else{
            tr[i].style.display="none";
          }
        }

      }
    }

  function getvalues()
  {
      var selected = new Array();
      var filter = new Array();
      var wc = new Array();
      var pass = "";
      var whole_history ="" ;
      var input,table,td,tr,filter,txtdata;
      var chkbox = document.getElementById("t01");
      var selchk = document.getElementsByName("word");

      for(var i=0;i<selchk.length;i++){
        if(selchk[i].checked){
          selected.push(selchk[i].value);
        }
      }

      for(var i=0;i<selected.length;i++)
      {
        filter[i] = selected[i];
      }
      table = document.getElementById("t02");
      tr = table.getElementsByTagName("tr");
      
      for(var i = 0;i<tr.length;i++){
        td=tr[i].getElementsByTagName("td")[2];
        if(td){              
          txtdata = td.innerText;
          whole_history = whole_history + " " + txtdata
        }

      }

      for(var i =0; i<filter.length;i++){
      var indices = getIndicesOf(filter[i], whole_history);
      wc.push(indices.length)
      }

      for(var i=0;i<filter.length;i++)
      {
        pass = pass  + filter[i] + " :"+ wc[i] +"\n";
      }



    
        document.getElementById("dv").innerHTML = pass;
     

  }
  

  function search_user()
  {
      var selected = new Array();
      var selected2 = new Array();
      var selected1 = 99999999999999999999999999999;
      var filter = new Array();
      var input,table,td,tr,filter,txtdata;
      var chkbox = document.getElementById("t01");
      var selchk = document.getElementsByName("us");
      var selchk1 = document.getElementsByName("dt");
      var selchk2 = document.getElementsByName("df");

      for(var i=0;i<selchk.length;i++){
        if(selchk[i].checked){
          selected.push(selchk[i].value);
        }
      }
      for(var i=0;i<selchk1.length;i++){
        if(selchk1[i].checked){
          selected1=(selchk1[i].value);
        }
      }
      for(var i=0;i<selchk2.length;i++){
          selected2[i]=(selchk2[i].value);
      }
      for(var i=0;i<selected.length;i++)
      {
        filter[i] = selected[i].toUpperCase();
      }
      table = document.getElementById("t02");
      tr = table.getElementsByTagName("tr");
      for(var i = 0;i<tr.length;i++){
        tr[i].style.display="none";
      }

      for(var i = 0;i<tr.length;i++){
        td=tr[i].getElementsByTagName("td")[0];
        if(td){
          
          txtdata = td.innerText;
          // console.log(filter);
          for(var j=0;j<filter.length;j++){
            
            // console.log(txtdata.toUpperCase())
            if(txtdata.toUpperCase() === filter[j] ){                 
              tr[i].style.display="";
            }                
           else{
             if(!tr[i].style.display===""){
              tr[i].style.display="none";
             }
            }
         }
        }

      }

      

      for(var j=0;j<tr.length;j++){

        if(tr[j].style.display===""){            

          if( (Date.now() - (Date.parse(tr[j].getElementsByTagName("td")[1].innerText))) > selected1){


            console.log(( Date.now() - (Date.parse(tr[j].getElementsByTagName("td")[1].innerText))) );
            tr[j].style.display="none";

          }
        }
      }

      for(var j=0;j<tr.length;j++){

        if(tr[j].style.display===""){     
          
          if(selected2[0]!="" && selected2[1]!= ""){

          if((Date.parse(selected2[0]) <= (Date.parse(tr[j].getElementsByTagName("td")[1].innerText) )) &&
            (Date.parse(selected2[1]) >= (Date.parse(tr[j].getElementsByTagName("td")[1].innerText) ))  ){

            tr[j].style.display="";
          }
          else{
            tr[j].style.display="none";
          }

        }
      }

      }
  }

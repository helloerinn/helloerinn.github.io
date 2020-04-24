function readCsv(data) {
    var target001 = '#csv-body001';
    var target002 = '#csv-body002';
    var target003 = '#csv-body003';
    var target004 = '#csv-body004';
    var target005 = '#csv-body005';
    var target006 = '#csv-body006';
    var target007 = '#csv-body007';
    var target008 = '#csv-body008';
    var target009 = '#csv-body009';
    var target0010 = '#csv-body0010';
    var target0011 = '#csv-body0011';
    var target0012 = '#csv-body0012';
    var target01 = '#csv-body01';
    var target02 = '#csv-body02';
    var target03 = '#csv-body03';
    var csv = $.csv.toArrays(data);
    var insert001 = '';
    var insert002 = '';
    var insert003 = '';
    var insert004 = '';
    var insert005 = '';
    var insert006 = '';
    var insert007 = '';
    var insert008 = '';
    var insert009 = '';
    var insert0010 = '';
    var insert0011 = '';
    var insert0012 = '';
    var insert01 = '';
    var insert02 = '';
    var insert03 = '';




    //1picNP
    for(var i = 3; i<6; i++) {
	if(csv[i][14] == 1){
	    insert001 +="<tr><td >MOM</td><td><B>" + csv[i][6]+ "</B>  NP</td>" + "<td>" + csv[i][7] +"  NP</td><td>"+csv[i][11]+"  NP</td></tr>"
	}/**else if(csv[i][14] == 2){
	    insert001 +="<tr><td>タルラーク</td><td><B>" + csv[i][6] + "</B>  NP</td>" + "<td>" + csv[i][7] +"  Gold</td><td>"+csv[i][11]+"  NP</td></tr>"
	}else if(csv[i][14] == 3){
	    insert001 +="<tr><td>ルエリ</td><td ><B>" + csv[i][6] + "</B>  NP</td>" + "<td>" + csv[i][7] +"  NP</td><td>"+csv[i][11]+"  NP</td></tr>"
	}**/
    }





    //2picNP
    for(var i = 0; i<3; i++) {
	if(csv[i][14] == 1){
	    insert002 +="<tr><td >MOM</td><td><B>" + csv[i][6]+ "</B>  NP</td>" + "<td>" + csv[i][7] +"  NP</td><td>"+csv[i][11]+"  NP</td></tr>"
	}
    }


    
    
        //3picNP
    for(var i = 6; i<9; i++) {
	if(csv[i][14] == 1){
	    insert003 +="<tr><td >MOM</td><td><B>" + csv[i][6]+ "</B>  NP</td>" + "<td>" + csv[i][7] +"  NP</td><td>"+csv[i][11]+"  NP</td></tr>"
	}
    }



    
        //4picNP
    for(var i = 9; i<12; i++) {
	if(csv[i][14] == 1){
	    insert004 +="<tr><td >MOM</td><td><B>" + csv[i][6]+ "</B>  NP</td>" + "<td>" + csv[i][7] +"  NP</td><td>"+csv[i][11]+"  NP</td></tr>"
	}
    }



            //5picNP
    for(var i = 12; i<15; i++) {
	if(csv[i][14] == 1){
	    insert005 +="<tr><td >MOM</td><td><B>" + csv[i][6]+ "</B>  NP</td>" + "<td>" + csv[i][7] +"  NP</td><td>"+csv[i][11]+"  NP</td></tr>"
	}
    }



    //6pic
    for(var i = 15; i<18; i++) {
	if(csv[i][14] == 1){
	    insert006 +="<tr><td >マリー</td><td><B>" + csv[i][4]+ "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}else if(csv[i][14] == 2){
	    insert006 +="<tr><td>タルラーク</td><td><B>" + csv[i][4] + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}else if(csv[i][14] == 3){
	    insert006 +="<tr><td>ルエリ</td><td ><B>" + csv[i][4] + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}
    }

        //7pic
    for(var i = 18; i<21; i++) {
	if(csv[i][14] == 1){
	    insert007 +="<tr><td >マリー</td><td><B>" + csv[i][4]+ "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}else if(csv[i][14] == 2){
	    insert007 +="<tr><td>タルラーク</td><td><B>" + csv[i][4] + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}else if(csv[i][14] == 3){
	    insert007 +="<tr><td>ルエリ</td><td ><B>" + csv[i][4] + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}
    }


            //8pic
    for(var i = 21; i<24; i++) {
	if(csv[i][14] == 1){
	    insert008 +="<tr><td >マリー</td><td><B>" + csv[i][4]+ "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}else if(csv[i][14] == 2){
	    insert008 +="<tr><td>タルラーク</td><td><B>" + csv[i][4] + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}else if(csv[i][14] == 3){
	    insert008 +="<tr><td>ルエリ</td><td ><B>" + csv[i][4] + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}
    }


                //9pic
    for(var i = 24; i<27; i++) {
	if(csv[i][14] == 1){
	    insert009 +="<tr><td >マリー</td><td><B>" + csv[i][4]+ "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}else if(csv[i][14] == 2){
	    insert009 +="<tr><td>タルラーク</td><td><B>" + csv[i][4] + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}else if(csv[i][14] == 3){
	    insert009 +="<tr><td>ルエリ</td><td ><B>" + csv[i][4] + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}
    }


                    //10pic
    for(var i = 27; i<30; i++) {
	if(csv[i][14] == 1){
	    insert0010 +="<tr><td >マリー</td><td><B>" + csv[i][4]+ "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}else if(csv[i][14] == 2){
	    insert0010 +="<tr><td>タルラーク</td><td><B>" + csv[i][4] + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}else if(csv[i][14] == 3){
	    insert0010 +="<tr><td>ルエリ</td><td ><B>" + csv[i][4] + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}
    }



                    //11pic
    for(var i = 30; i<33; i++) {
	if(csv[i][14] == 1){
	    insert0011 +="<tr><td >マリー</td><td><B>" + csv[i][4]+ "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}else if(csv[i][14] == 2){
	    insert0011 +="<tr><td>タルラーク</td><td><B>" + csv[i][4] + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}else if(csv[i][14] == 3){
	    insert0011 +="<tr><td>ルエリ</td><td ><B>" + csv[i][4] + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}
    }




                        //12pic
    for(var i = 33; i<36; i++) {
	if(csv[i][14] == 1){
	    insert0012 +="<tr><td >マリー</td><td><B>" + csv[i][4]+ "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}else if(csv[i][14] == 2){
	    insert0012 +="<tr><td>タルラーク</td><td><B>" + csv[i][4] + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}else if(csv[i][14] == 3){
	    insert0012 +="<tr><td>ルエリ</td><td ><B>" + csv[i][4] + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}
    }





    //main
    for(var i = 36; i<177; i++){
	if(csv[i][14] == 1){
	    insert01 += "<tr><td>"+csv[i][13]+"</td><td><B>" + csv[i][4] + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}
	if(csv[i][14] == 2){
	    insert02 += "<tr><td>"+csv[i][13]+"</td><td><B>" + csv[i][4]+ "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}
	if(csv[i][14] == 3){
	    insert03 += "<tr><td>"+csv[i][13]+"</td><td><B>" + csv[i][4] + "</B>  Gold</td>" + "<td>" + csv[i][5] +"  Gold</td><td>"+csv[i][10]+"  Gold</td></tr>"
	}
    }
    $(target001).append(insert001);
    $(target002).append(insert002);
    $(target003).append(insert003);
    $(target004).append(insert004);
    $(target005).append(insert005);
    $(target006).append(insert006);
    $(target007).append(insert007);
    $(target008).append(insert008);
    $(target009).append(insert009);
    $(target0010).append(insert0010);
    $(target0011).append(insert0011);
    $(target0012).append(insert0012);
    $(target01).append(insert01);
    $(target02).append(insert02);
    $(target03).append(insert03);
}
var csvfile = 'forestrenger.csv';
$(function(){
    $.get(csvfile, readCsv, 'text');
});


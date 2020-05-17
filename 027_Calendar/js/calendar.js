            // <!-- <div class="wrcontainer">
            //     <p><span id="today"></span> Day</p>
            //     <p>Month - <span id="month"></span></p>
            //     <p><span id="year"></span> - Year</p>
            //     <button>Prev</button><button>Next</button> <br>
            //     <div id="calendar"></div>
            // </div> -->
            
            // <!-- <div class="calendar-header">
            //     <p><span id="year"></span> - Year</p>
            //     <p>Month - <span id="month"></span></p>
            //     <p id="next">next</p>
            // </div>
            // <div class="calendar-table">
            //     <table id="main-calendar">
            //         <caption><span id="today"></span> Day</caption>
            //         <tr>
            //             <th>MON</th>
            //             <th>TUE</th>
            //             <th>WED</th>
            //             <th>THU</th>
            //             <th>FRI</th>
            //             <th>SAT</th>
            //             <th>SUN</th>
            //         </tr>
            //     </table>
            // </div> -->









 var button = document.getElementsByTagName('button');
 var all_td = 0;
 var now = new Date();
 var month = new Date().getMonth();
 var today = now.getDate();
 function create(num)
 {
   month += (num || 0)
   now = new Date();
   now.setMonth(month)


 //Пустые ячейки в начале месяца
 now.setDate(1);
 var blank = (now.getDay()==0)?6:now.getDay() - 1;
 var text = "<table><tr>";
 for(var i=0; i<blank; i++)
   text+="<td>&nbsp;</td>";
all_td = blank;

 //Дни в месяце
 now.setMonth(now.getMonth() + 1)
 now.setDate(0);
 var days = now.getDate();
 for(var k=1; k<=days; k++){
   text+="<td>"+k+"</td>";
   all_td++;
   if(all_td%7==0){text+="</tr><tr>";}
}
 //Пустые ячейки в конце
 var last = now.getDay();
 var last_blank = (last==0)?0:7-last;
 for(var k=1; k<=last_blank; k++){
   text+="<td>&nbsp;</td>";
}

text +="</tr></table>";
document.getElementById('calendar').innerHTML = text;
}
create()
var item = document.querySelectorAll('button');
item[0].addEventListener('click', function() {
   create(-1)
});
item[1].addEventListener('click', function() {
   create(1)
});
var data = `
[
 {
  "full_name": "Центральная городская больница №18",
  "address":"ул. Мавлютова, д. 2",
  "phone":"(843) 229-79-61"
},
{
  "full_name": "Хирургическая клиника имени В.П. Крупина (бывш. Городская больница №5)",
  "address":"ул. Шарифа Камала, д. 12",
  "phone":"(843) 278-28-30"
},
{
 "full_name": "МКДЦ",
 "address":"ул. Карбышева, д. 12-а",
 "phone":"(843) 2-911-024"
},
{
 "full_name": "Железнодорожная больница",
 "address":"ул. Н. Ершова, д. 65",
 "phone":"(843) 272-48-82"
},
{
 "full_name": "Городская больница скорой медицинской помощи №2",
 "address":"ул. Н. Ершова, д. 2",
 "phone":"(843) 238-22-01"
},
{
 "full_name": "Республиканская инфекционная больница Агафонова",
 "address":"пр. Победы, д. 83",
 "phone":"(843) 267-80-79"
},
{
 "full_name": "Республиканская больница (РКБ)",
 "address":"Оренбургский тракт, д. 138",
 "phone":"(843) 231-21-09"
},
{
 "full_name": "Городская больница №7",
 "address":" ул. Маршала Чуйкова, д. 54",
 "phone":"(843) 237-91-78"
},
{
 "full_name": "Больница №2",
 "address":"ул. Музыкальная, д. 13",
 "phone":"(843) 554-25-70"
},
{
 "full_name": "Городская больница №16",
 "address":"ул. Гагарина, д. 121",
 "phone":"(843) 560-76-14"
},
{
 "full_name": "Городская больница №11",
 "address":"ул. Максимова, д. 34/24",
 "phone":"(843) 570-34-49"
},
{
 "full_name": "Университетская клиника (РКБ 2)",
 "address":"ул. Чехова, д. 1А",
 "phone":"(843) 233-30-60"
},
{
 "full_name": "Республиканский клинический неврологический центр",
 "address":"ул. Ватутина, д. 13",
 "phone":"(843) 278-97-18"
},
{
 "full_name": "Городская больница скорой медицинской помощи №1",
 "address":"ул. Сибирский тракт, д. 31",
 "phone":"(843) 221-36-88"
},
{
 "full_name": "Республиканская офтальмологическая больница",
 "address":"ул. Бутлерова, д. 14",
 "phone":"(843) 528-01-01"
}
]`;

var myData = JSON.parse(data);

 var tds = document.querySelectorAll('td');

 if(localStorage.getItem(1)==undefined){
//заполняет таблицу первоначальными значениями
 for(var i = 0; i<tds.length; i+=3) {
   tds[i].innerHTML = myData[Math.trunc(i/3)].full_name;//выводит данные из JSON на страницу
   localStorage.setItem(i, tds[i].innerHTML);//сохраняет данные в LocslStorage
   tds[i+1].innerHTML = myData[Math.trunc(i/3)].address;
   localStorage.setItem(i+1, tds[i+1].innerHTML);
   tds[i+2].innerHTML = myData[Math.trunc(i/3)].phone;
   localStorage.setItem(i+2, tds[i+2].innerHTML);
}
}
else{
  for(var i = 0; i<tds.length; i++) {
    tds[i].innerHTML = localStorage.getItem(i);
  }
}
///обработка клика для редактирования таблицы
 for(var i = 0; i<tds.length; i++) {
   tds[i].addEventListener('click',function func(){

     var inputsToRemove = document.querySelectorAll('input');//убирает лишние input
     for(var i = 0; i<inputsToRemove.length; i++){
     inputsToRemove[i].remove();
      }
     var input = document.createElement('input');//создает новый input
     input.value=this.innerHTML;
     this.innerHTML = '';
     this.appendChild(input);
     input.focus();

     var td = this;
    input.addEventListener('blur', function(){
       td.innerHTML = this.value;
       var tdsNew = document.querySelectorAll('td');
       for(var i = 0; i<tds.length; i++){
       localStorage.setItem(i, tdsNew[i].innerHTML) //обновление LocalStorage
      }

       td.addEventListener('click',func);
    });

     this.removeEventListener('click', func);

   });





 }

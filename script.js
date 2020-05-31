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
//объявление переменных
var myData = JSON.parse(data);

var tds;

var myTable = document.querySelector("table");

var tr = document.createElement('tr');

var td1= document.createElement('td');
var td2= document.createElement('td');
var td3= document.createElement('td');
var td4= document.createElement('td');
var td5= document.createElement('td');
var text1 = document.createTextNode('');
var text2 = document.createTextNode('');
var text3 = document.createTextNode('');

//Добавляет строку для добавления данных при инициализации
function addLine(){
		 var newRow = myTable.insertRow();
		 for (var x = 0; x < 5; x++){
			 var newCell = newRow.insertCell(x);
			 newCell.innerHTML = '';
		 }
}

 //обновление LocalStorage
function refreshLocalStorage(){
	localStorage.clear();
	var tdsNew = document.querySelectorAll('td');
	for(var i = 0; i < tdsNew.length; i++){
	localStorage.setItem(i, tdsNew[i].innerHTML)
 }
}

function addButtons(){
	tds = document.querySelectorAll('td');

	for(var i = 0;i<tds.length; i+=5) {
		if(tds[i+3].innerHTML.indexOf('button') == -1){//проверяет есть ли кнопки в строке
			//добавляет eventListener'ы в новую строку
			addEventListenersForInputs(i);
			addEventListenersForInputs(i+1);
			addEventListenersForInputs(i+2);

			//создает кнопку
			var text4 = document.createElement("button");
			text4.innerHTML = "Удалить";
			tds[i+3].appendChild(text4);
			//добавляет eventListener на кнопку
			addEventListenersOnDeleteButton(i+3);

			//создает кнопку
			var text5 = document.createElement("button");
			text5.innerHTML = "Добавить";
			tds[i+4].appendChild(text5);
			//добавляет eventListener на кнопку
			addEventListenersOnAddButton(i+4);
		}
	}
}

//заполняет таблицу первоначальными значениями
function initiate(){
	tds = document.querySelectorAll('td');
	if(localStorage.getItem(1)==undefined){//если в localStorage нет значений
	var j = 0;
	for(var i = 0;i<myData.length*5; i+=5) {
		addLine();
		tds = document.querySelectorAll('td');

		tds[i].innerHTML = myData[Math.trunc(i/5)].full_name;//выводит данные из JSON на страницу
		tds[i+1].innerHTML = myData[Math.trunc(i/5)].address;
		tds[i+2].innerHTML = myData[Math.trunc(i/5)].phone;
		//создание кнопок
		var text4 = document.createElement("button");
		text4.innerHTML = "Удалить";
		tds[i+3].appendChild(text4);

		var text5 = document.createElement("button");
		text5.innerHTML = "Добавить";
		tds[i+4].appendChild(text5);

		//сохраняет данные в LocаlStorage
		refreshLocalStorage();
		}
	}
	//если в localStorage есть значения
	else{
		var j = 0;
		while(localStorage.getItem(j)!=undefined) {
			if(j%5==0)addLine();//добавляет строку для 5 значений
			tds = document.querySelectorAll('td');
			tds[j].innerHTML = localStorage.getItem(j);//в ячейки заносятся данные из localStorage
			j++;
		}
	}
}

initiate();
//первичное добавление eventListener'ов. В новые строки они добавляются в addButtons().
tds = document.querySelectorAll('td');
for(var i = 0; i<tds.length; i++) {
	if((i+1)%5==0)//добавление eventListener для столбца с кнопками добавления строки
	addEventListenersOnAddButton(i);
	else if((i+2)%5==0)//добавление eventListener для столбца с кнопками удаления строки
	addEventListenersOnDeleteButton(i);
	else//добавление eventListener для столбцов с текстом
	addEventListenersForInputs(i);
}

///обработка клика для редактирования таблицы
function addEventListenersForInputs(i){
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
			refreshLocalStorage();
			td.addEventListener('click',func);
		});
		this.removeEventListener('click', func);
	});
}

///обработка клика по кнопке удалить
function addEventListenersOnDeleteButton(i){
	tds[i].addEventListener('click',function del(){//добавляет eventListener на td, а не на button, потомучто так удобней обрабатывать
	this.removeEventListener('click', del);
	document.querySelector("table").deleteRow(this.parentNode.rowIndex);//parentNode = tr
	refreshLocalStorage();//обновляет данные в localStorage
	});
}

///обработка клика по кнопке добавить
function addEventListenersOnAddButton(i){
	tds[i].addEventListener('click',function addRow(){//добавляет eventListener на td, а не на button, потомучто так удобней обрабатывать
		var newRow = document.querySelector("table").insertRow(this.parentNode.rowIndex+1);//+1 для того чтобы строка добавлялась не выше строки с нажатой кнопкой, а ниже
		for (var x = 0; x < 5; x++){
			var newCell = newRow.insertCell(x);
			newCell.innerHTML = '';
		}
		refreshLocalStorage();//обновляет данные в localStorage
		addButtons();//добавляет кнопки в новую строку и заодно все eventListener'ы
	});
}

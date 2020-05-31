Math.trunc = Math.trunc || function(x) {//полифилл math.trunk для IE
  if (isNaN(x)) {
    return NaN;
  }
  if (x > 0) {
    return Math.floor(x);
  }
  return Math.ceil(x);
};

//переменная пропущенная через babel для совместимости с ie
var data = "\n[\n {\n  \"full_name\": \"\u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u0430\u044F \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0430 \u211618\",\n  \"address\":\"\u0443\u043B. \u041C\u0430\u0432\u043B\u044E\u0442\u043E\u0432\u0430, \u0434. 2\",\n  \"phone\":\"(843) 229-79-61\"\n},\n{\n  \"full_name\": \"\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043B\u0438\u043D\u0438\u043A\u0430 \u0438\u043C\u0435\u043D\u0438 \u0412.\u041F. \u041A\u0440\u0443\u043F\u0438\u043D\u0430 (\u0431\u044B\u0432\u0448. \u0413\u043E\u0440\u043E\u0434\u0441\u043A\u0430\u044F \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0430 \u21165)\",\n  \"address\":\"\u0443\u043B. \u0428\u0430\u0440\u0438\u0444\u0430 \u041A\u0430\u043C\u0430\u043B\u0430, \u0434. 12\",\n  \"phone\":\"(843) 278-28-30\"\n},\n{\n \"full_name\": \"\u041C\u041A\u0414\u0426\",\n \"address\":\"\u0443\u043B. \u041A\u0430\u0440\u0431\u044B\u0448\u0435\u0432\u0430, \u0434. 12-\u0430\",\n \"phone\":\"(843) 2-911-024\"\n},\n{\n \"full_name\": \"\u0416\u0435\u043B\u0435\u0437\u043D\u043E\u0434\u043E\u0440\u043E\u0436\u043D\u0430\u044F \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0430\",\n \"address\":\"\u0443\u043B. \u041D. \u0415\u0440\u0448\u043E\u0432\u0430, \u0434. 65\",\n \"phone\":\"(843) 272-48-82\"\n},\n{\n \"full_name\": \"\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u0430\u044F \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0430 \u0441\u043A\u043E\u0440\u043E\u0439 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0439 \u043F\u043E\u043C\u043E\u0449\u0438 \u21162\",\n \"address\":\"\u0443\u043B. \u041D. \u0415\u0440\u0448\u043E\u0432\u0430, \u0434. 2\",\n \"phone\":\"(843) 238-22-01\"\n},\n{\n \"full_name\": \"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0438\u043D\u0444\u0435\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0430 \u0410\u0433\u0430\u0444\u043E\u043D\u043E\u0432\u0430\",\n \"address\":\"\u043F\u0440. \u041F\u043E\u0431\u0435\u0434\u044B, \u0434. 83\",\n \"phone\":\"(843) 267-80-79\"\n},\n{\n \"full_name\": \"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0430 (\u0420\u041A\u0411)\",\n \"address\":\"\u041E\u0440\u0435\u043D\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0439 \u0442\u0440\u0430\u043A\u0442, \u0434. 138\",\n \"phone\":\"(843) 231-21-09\"\n},\n{\n \"full_name\": \"\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u0430\u044F \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0430 \u21167\",\n \"address\":\" \u0443\u043B. \u041C\u0430\u0440\u0448\u0430\u043B\u0430 \u0427\u0443\u0439\u043A\u043E\u0432\u0430, \u0434. 54\",\n \"phone\":\"(843) 237-91-78\"\n},\n{\n \"full_name\": \"\u0411\u043E\u043B\u044C\u043D\u0438\u0446\u0430 \u21162\",\n \"address\":\"\u0443\u043B. \u041C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u0430\u044F, \u0434. 13\",\n \"phone\":\"(843) 554-25-70\"\n},\n{\n \"full_name\": \"\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u0430\u044F \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0430 \u211616\",\n \"address\":\"\u0443\u043B. \u0413\u0430\u0433\u0430\u0440\u0438\u043D\u0430, \u0434. 121\",\n \"phone\":\"(843) 560-76-14\"\n},\n{\n \"full_name\": \"\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u0430\u044F \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0430 \u211611\",\n \"address\":\"\u0443\u043B. \u041C\u0430\u043A\u0441\u0438\u043C\u043E\u0432\u0430, \u0434. 34/24\",\n \"phone\":\"(843) 570-34-49\"\n},\n{\n \"full_name\": \"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0441\u043A\u0430\u044F \u043A\u043B\u0438\u043D\u0438\u043A\u0430 (\u0420\u041A\u0411 2)\",\n \"address\":\"\u0443\u043B. \u0427\u0435\u0445\u043E\u0432\u0430, \u0434. 1\u0410\",\n \"phone\":\"(843) 233-30-60\"\n},\n{\n \"full_name\": \"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430\u043D\u0441\u043A\u0438\u0439 \u043A\u043B\u0438\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0435\u0432\u0440\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0446\u0435\u043D\u0442\u0440\",\n \"address\":\"\u0443\u043B. \u0412\u0430\u0442\u0443\u0442\u0438\u043D\u0430, \u0434. 13\",\n \"phone\":\"(843) 278-97-18\"\n},\n{\n \"full_name\": \"\u0413\u043E\u0440\u043E\u0434\u0441\u043A\u0430\u044F \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0430 \u0441\u043A\u043E\u0440\u043E\u0439 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0439 \u043F\u043E\u043C\u043E\u0449\u0438 \u21161\",\n \"address\":\"\u0443\u043B. \u0421\u0438\u0431\u0438\u0440\u0441\u043A\u0438\u0439 \u0442\u0440\u0430\u043A\u0442, \u0434. 31\",\n \"phone\":\"(843) 221-36-88\"\n},\n{\n \"full_name\": \"\u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430\u043D\u0441\u043A\u0430\u044F \u043E\u0444\u0442\u0430\u043B\u044C\u043C\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0430\",\n \"address\":\"\u0443\u043B. \u0411\u0443\u0442\u043B\u0435\u0440\u043E\u0432\u0430, \u0434. 14\",\n \"phone\":\"(843) 528-01-01\"\n}\n]";

/*var data = `
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
]`;*/
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

	let ls = localStorage.getItem(1);
	if(ls == undefined){//если в localStorage нет значений
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

//добавляет строку если была удалена последняя строка
	tds = document.querySelectorAll('td');
	if(tds.length == 0){
		addLine();
		addButtons();
}
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

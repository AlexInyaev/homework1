//создать обект product
//добавить к нему метод paint
//добавить к методу аргументы
var product = {
    paint (container, header, img, button){
  var element = document.querySelector(container);
 var html = `
    <div class="item">
        <div class="header">${header}</div>
        <div class="img" style="background-image: url(${img})"></div>
        <button>${button}</button>
    </div>`;
    element.innerHTML += html;
    }
}
 var arr=[
     {header: 'заголовок1', img:'img/a51.JPG',price:'100'},
     {header: 'заголовок2', img:'img/a52.JPG',price:'200'},
     {header: 'заголовок3', img:'img/a53.JPG',price:'400'},
     {header: 'заголовок4', img:'img/a54.JPG',price:'500'},
     {header: 'заголовок5', img:'img/a55.JPG',price:'600'},
     {header: 'заголовок6', img:'img/a56.JPG',price:'700'},
     {header: 'заголовок7', img:'img/a57.JPG',price:'800'},
     {header: 'заголовок8', img:'img/a58.JPG',price:'900'},
     {header: 'заголовок9', img:'img/a59.JPG',price:'300'},
 ]
 
for(var i=0; i<arr.length; i++){
    product.paint('.container', arr[i].header, arr[i].img, arr[i].price+' '+'руб.'+'купить');
}



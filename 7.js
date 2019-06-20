// Задание 1


function pclick (event) {
    var firstdiv = document.getElementById("example")
    
      var cat = document.createElement("img")
      cat.setAttribute("src", "img/1.jpg")
      cat.setAttribute("width", "100")
      cat.setAttribute("style", "transition: all 1s ease")
    firstdiv.appendChild(cat)
    cat.onmouseover=function(event){
      cat.setAttribute("width", "200")
    }
    cat.onclick = function (event) {
      firstdiv.removeChild(cat)  
    }
    }
    
    // Задание 2
    
    
    
    function over ( event ) {
      event.target.style.backgroundColor = '#ffff0050'
    }
    function out ( event ) {
      event.target.style.backgroundColor = '#ff00ff50'
    }
    function clickHandler ( event ) {
      event.target.remove()
    }
    
    function clicker (event){
      var collection = []
    var divnames = ["first", "second", "third", "fourth"]
    var seconddiv = document.getElementById("example2")
      for(var item of divnames){
        var elem = document.createElement('div');
        elem.style = `
              display: flex;
              justify-content: center;
              align-items: center;
              width:${400-50*collection.length}px;
              height:${400-50*collection.length}px;
              background-color: #ff00ff50;
              border: dotted 2px yellow;
          `;
          ( collection.length==0?  seconddiv : collection[collection.length - 1]).appendChild(elem);
        collection.push(elem);
        elem.title = item;
        elem.onmouseover = over;
        elem.onmouseout = out;
        elem.onclick = clickHandler;
      }
    }
    
    
    // Задание 3
    
    function enter2 ( event ) {
      event.target.style.backgroundColor = '#ffff0050'
    }
    function leave2 ( event ) {
      event.target.style.backgroundColor = '#ff00ff50'
    }
    function clickHandler2 ( event ) {
      event.stopPropagation()
      var thiselem = document.getElementById(this.id)
      thiselem.firstElementChild === null ? thiselem.remove():
     thiselem.parentNode.appendChild((thiselem.parentNode.removeChild(thiselem)).firstElementChild)
    }
    
    function clicker2 (event){
      var collection2 = []
      var divs = [ 1, 2, 3, 4, 5, 6, 7 ]
      var thirddiv = document.getElementById("example3")
      for(var num of divs){
        var elem = document.createElement('div');
        elem.style = `
              display: flex;
              justify-content: center;
              align-items: center;
              width:${400-50*collection2.length}px;
              height:${400-50*collection2.length}px;
              background-color: #ff00ff50;
              border: dotted 2px yellow;
          `;
          ( collection2.length===0?  thirddiv : collection2[collection2.length - 1]).appendChild(elem);
        collection2.push(elem);
        elem.id = `thirdexdiv-${num}`;
        elem.onmouseover = enter2;
        elem.onmouseout = leave2;
        elem.onclick = clickHandler2;
      }
    }
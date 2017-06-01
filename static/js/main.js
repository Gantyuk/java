var xhttp = new XMLHttpRequest();
var currencyBaseSymbol = 'EUR';
var curFromElement =$("#cur_from");
var curToElement = $("#cur_to");
var curTextElement = $("#cur_text");
var resultElement = $("result");

/*
    Implement function that fills currency from/to select boxes with currency codes
    and fills scrolling text with rates against currencyBaseSymbol
*/

  
     $.getJSON("http://api.fixer.io/latest",function() {
        console.log( "success" )})
        .done(function(data){
          let text="";
         for (var prop in data.rates) {
         text += " " + prop + ":" + data.rates[prop];
         curFromElement.append("<option value = \""+prop+"\" >"+prop+"</option>");
         curToElement.append("<option value = \""+prop+"\" >"+prop+"</option>");
            
    }
          
        curTextElement.html(text);
         
    });

   curFromElement.change(function(){
         $.getJSON("http://api.fixer.io/latest",function() {
        console.log( "success" )})
        .done(function(data){
       
   })
function loadCurrency() {
   /* your code goes here */
}

/*
    Implement function that converts from one selected currency to another filling result text area.
 */
function getRates() {
    /* your code goes here */
}

// Load currency rates when page is loaded
window.onload = function() {
    // Run loadCurrency func to fetch currencies data and set this function to run every 60 sec.
    (() => {loadCurrency(); setInterval(loadCurrency, 1000 * 60);})();
    var btn = document.getElementById('run');
    btn.addEventListener("click", getRates);
};

    

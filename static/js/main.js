var xhttp = new XMLHttpRequest();
var currencyBaseSymbol = 'EUR';
var currencyToSymbol = 'EUR';
var curFromElement =$("#cur_from");
var curToElement = $("#cur_to");
var curTextElement = $("#cur_text");
var resultElement = $("#result");
var kof;

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


///From
   curFromElement.change(function(){
	   currencyBaseSymbol = curFromElement.val();
         $.getJSON("http://api.fixer.io/latest?base=" + currencyBaseSymbol,function() {
        console.log( "success" )})
        .done(function(data){
			text="";
			 for (var prop in data.rates) {
				text += " " + prop + ":" + data.rates[prop];
			 }
       curTextElement.html(text);
   })})


///TO
curToElement.change(function(){
	   currencyToSymbol = curToElement.val();
/*         $.getJSON("http://api.fixer.io/latest?base=" + currencyBaseSymbol,function() {
        console.log( "success" )})
        .done(function(data){
			text="";
			 for (var prop in data.rates) {
				text += " " + prop + ":" + data.rates[prop];
			 }
       curTextElement.html(text);
   })*/
})
function loadCurrency() {
   /* your code goes here */
}

/*
    Implement function that converts from one selected currency to another filling result text area.
 */
function getRates() {
    $.getJSON("http://api.fixer.io/latest?base=" + currencyBaseSymbol+"&symbols="+currencyToSymbol,function() {
        console.log( "success" )})
        .done(function(data){
         for (var prop in data.rates) 
			 kof = data.rates[prop];
        if ($("#cur_amount").val()){
            var test;
            if (kof) {
             test = kof*$("#cur_amount").val();
                resultElement.val(test.toFixed(4));
            }else {resultElement.val($("#cur_amount").val());}
            
    }else {
        $("#cur_amount").val(1)
            if (kof) {
                resultElement.val(kof.toFixed(4));
            }else {resultElement.val(1);}
            
    }
        
   })
    
    
}

// Load currency rates when page is loaded
window.onload = function() {
    // Run loadCurrency func to fetch currencies data and set this function to run every 60 sec.
    (() => {loadCurrency(); setInterval(loadCurrency, 1000 * 60);})();
    var btn = document.getElementById('run');
    btn.addEventListener("click", getRates);
};

    

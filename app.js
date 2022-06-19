
 Eventlar();

function Eventlar(){
    document.getElementById("translate-form").addEventListener("submit",kelimecevirFonksiyonu());
    //change 
    document.getElementById("language").onchange=function(){
        //arayuz islemleri
        ui.changeUI();
    }







}
const cevir=new ceviriFonksiyonu(document.getElementById("word").value,document.getElementById("language").value);
const ui=new UI();
function kelimecevirFonksiyonu(e){

    cevir.changeparameters(document.getElementById("word").value,document.getElementById("language").value);
    cevir.kelimeCevir(function(err,response){
    if(err){
        //null gelmedigi sureece true
       ui.displaytranslat(response);
    }
    else{
        console.log(response);
    }
});
   

    e.preventDefault();//sayfa yenilenmesin diye
}


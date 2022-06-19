function ceviriFonksiyonu(word,lang){
    this.apikey="AIzaSyCP2NNT3g7fbOypHLcxnIxiuchjDxDFFC8"
    this.word=word;
    this.lang=lang;
//https://translation.googleapis.com/language/translate/v2?key=AIzaSyCP2NNT3g7fbOypHLcxnIxiuchjDxDFFC8&q=hayal&source=tr&target=en&format=text
    this.xhr=XMLHttpRequest();
}

ceviriFonksiyonu.prototype.kelimeCevir=function(callback){
    // ajax islmeleri burda olacak eger arrow kullnairsak hataya duseriz
    const endpoint=`https://translation.googleapis.com/language/translate/v2?key=${this.apikey}&q=${this.word}&source=tr&target=${this.lang}&format=text`;
    this.xhr.open("GET",endpoint,true);
    
    this.xhr.onload=function(){
        if(this.status===200){
            //basarili
            const json=JSON.parse(this.xhr.responseText);
            const text=json.text[0];
            callback(null,text);
            // console.log(text);
            // console.log(JSON.parse(this.xhr.responseText).text[0]);
        }else{
            // console.log("hata");
            callback("bir hata ",null);
        }
    }.bind(this); 
    
    
    
    this.xhr.send();
} 
ceviriFonksiyonu.prototype.changeparameters=function(newword,newlang){
this.word=newword;
this.lang=newlang;
}
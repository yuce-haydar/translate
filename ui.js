    function UI(){
        this.outoutimage=document.getElementById("outputImage");
        this.outoutLanguage=document.getElementById("outputLanguage");
        this.outputWord=document.getElementById("outputWord");
        this.LanguageList=document.getElementById("language");
    }

UI.prototype.changeUI=function(){
    this.outoutimage.src=`images/${this.LanguageList.value}.png`;
    this.outoutLanguage.innerHTML=this.LanguageList.options[this.LanguageList.selectedIndex].textContent;

}
UI.prototype.displayTranslate=function(word){
    this.outputWord=word;
}
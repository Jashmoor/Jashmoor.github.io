document.addEventListener("DOMContentLoaded", init);

function init(){
  const element = document.querySelector('#typing');
  const wordArr = ["< HTML />","CSS {};","JAVASCRIPT {//..}"];
  const pause = 2500;
  new Typewriter(element, wordArr, pause);
}

class Typewriter {
  constructor(element, wordArr, pause = 2500){
    this.element = element;
    this.wordArr = wordArr;
    this.txt = "";
    this.index = 0;
    this.pause = parseInt(pause, 10);
    this.type();
    this.onDelete = false;
  }
  type(){
    const current = this.index % this.wordArr.length;
    const fullStr = this.wordArr[current];
    let typeSpeed;
    if (this.onDelete ? typeSpeed = 50 : typeSpeed = 90);
    if (this.onDelete ? this.txt = fullStr.substring(0, this.txt.length - 1) : this.txt = fullStr.substring(0, this.txt.length + 1));
    this.element.innerHTML = this.txt;
    if (!this.onDelete && this.txt == fullStr){
      typeSpeed = this.pause;
      this.onDelete = true;
    } else if (this.onDelete && this.txt == "") {
      this.onDelete = false;
      this.index++;
    }
    setTimeout(()=>this.type(), typeSpeed);
  }
}

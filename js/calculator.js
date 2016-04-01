'use strict';

let numbers = document.querySelector("[data-selector='numbers-key']");
let result = document.querySelector("[data-selector='calculator-value']");
let fValue;
let tValue;
let operatorExpression;


class Calculator{
    constructor(options){
        /*define variables*/
        this._el = options.element;
        this._centerPosition = options.centerPosition;
        this._val = 0;

        

        /*Handle events*/
        if(this._centerPosition === true){
        this.centerPosition();
        }  

        this._el.addEventListener('click', this._clickValueButtonEvent.bind(this));
        this._el.addEventListener('click', this._clearValue.bind(this));
        this._el.addEventListener('click', this._dotValue.bind(this));

        this._el.addEventListener('click', this._clickOperatorEvent.bind(this));
        this._el.addEventListener('click', this._equalEvent.bind(this));
        this._el.addEventListener('click', this._unarEvent.bind(this));
        this._el.addEventListener('click', this._percentEvent.bind(this));
    }


    centerPosition(){
        var calc = this._el;
        var bodyWidth = document.documentElement.clientWidth;
        var mid = bodyWidth/2 - calc.clientWidth/2;
        calc.style.left = mid + "px";
        calc.style.position = "absolute";
    }



    /*event define number*/
    _clickValueButtonEvent(event){
    let num = event.target.closest('[data-selector="num"]');
   

    if (!num) {
      return;
    }

    if(result.innerHTML === "0"){
          result.innerHTML = num.innerHTML; 
         
    } else{

         result.innerHTML += num.innerHTML; 
    }

    let firstArgument = result;

    }


    _clearValue(event){
        let clear = event.target.closest('[data-selector="clear"]');
          
        if(!clear){
            return;
        }

        result.innerHTML = '0';
        fValue += "";
        tValue += "";
        operatorExpression +="";
    }



    _clear(){
        result.innerHTML = '0';
         fValue += "";
        tValue += "";
        operatorExpression +="";
    }



    _resultClear(){
        fValue = "";
        tValue = "";
        operatorExpression ="";
    }



     _dotValue(event){
        let clear = event.target.closest('[data-selector="dot"]');
          
        if(!clear){
            return;
        }

        result.innerHTML += ".";
    }



    _clickOperatorEvent(event){

    let oper = event.target.closest('[data-selector="operator"]');
  

    if (!oper) {
      return;
    }

   
        fValue = result.innerHTML;
        operatorExpression = oper.innerHTML;


        // alert(fValue);
        //  alert(this._val);
        //             alert(operatorExpression);
 
    this._clear();
     
    }



    _equalResult(){
         tValue = result.innerHTML;
        

         if(operatorExpression ==="+"){
                result.innerHTML = +fValue + +tValue;
         } else if(operatorExpression ==="-"){
                result.innerHTML = +fValue - +tValue;
         } else if(operatorExpression ==="/"){
                 result.innerHTML = +fValue / +tValue;
         } else if(operatorExpression ==="*"){
                 result.innerHTML = +fValue * +tValue;
         }

        this._resultClear();
    }


    _equalEvent(event){
        let eq = event.target.closest("[data-selector='equal']");

        if(!eq){
            return;
        }
       
        this._equalResult();
    }



    _unarEvent(event){
         let unar = event.target.closest("[data-selector='unar']");

         if(!unar){
            return;
         }
         result.innerHTML= -result.innerHTML;
    }



    _percentEvent(event){
         let percent = event.target.closest("[data-selector='percent']");

         if(!percent){
            return;
         }
         result.innerHTML = +result.innerHTML/100

    }

}





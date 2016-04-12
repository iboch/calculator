'use strict';

let numbers = document.querySelector('[data-selector="numbers-key"]');
let result = document.querySelector('[data-selector="calculator-value"]');
let fValue;
let tValue;
let operatorExpression = "";


class Calculator{
  constructor(options){

     /*define variables*/
    this._el = options.element;
    this._val = 0;

       
    /*Handle events*/
     this.on('click', this._onDataNumberClick.bind(this));
     this.on('click', this._onDataOperatorClick.bind(this));
     this.on('click', this._onCalculateClick.bind(this));
     this.on('click', this._onClearButtonClick.bind(this));
     this.on('click', this._onUnarClick.bind(this));
     this.on('click', this._onPercentClick.bind(this));   

    }


    on(eventName, handler) {
      this._el.addEventListener(eventName, handler);
    }
        
   _onDataNumberClick(event) {
      if (!event.target.hasAttribute('data-number')) return;

      this._handleNumbers();
    }

    _handleNumbers(){
      var num = event.target;
        
      if(result.innerHTML === "0"){
        result.innerHTML = num.dataset.number; 
         
        } else{

          result.innerHTML += num.dataset.number; 
        }
    }

    _onDataOperatorClick(event) {
        if (!event.target.hasAttribute('data-operator')) return;
        
        this._handleOperators()
    }

    _handleOperators(){
        fValue = result.innerHTML;

        operatorExpression = event.target.dataset.operator;
        console.log(operatorExpression);
        this._nullResult();

       
    }

    _onCalculateClick(event){
        var event = event.target
           if (event.dataset.selector!=="equal") return;

          this._onEqualResult();
       
    }

    _onEqualResult(){
        tValue = result.innerHTML;
      
        let operations = {
         '+': (a, b) => +a + +b,
         '-': (a, b) => +a - +b,
         '/': (a, b) => +a / +b,
         '*': (a, b) => +a * +b
        }

        result.innerHTML = operations[operatorExpression](fValue, tValue)

        this._clear();
    }


    _onClearButtonClick(event){ 
        if (event.target.dataset.selector!=="clear") return;
       
        this._clear();
        this._nullResult();
    }


    _clear(){
        fValue += "";
        tValue += "";
        operatorExpression += "";
    }

    _nullResult(){
        result.innerHTML = '0';
    }


    _onUnarClick(event){
        if (event.target.dataset.selector!=="unar") return;
        result.innerHTML= -result.innerHTML;
    }


    _onPercentClick(event){
        if (event.target.dataset.selector!=="percent") return;
        result.innerHTML = +result.innerHTML/100

    }

}





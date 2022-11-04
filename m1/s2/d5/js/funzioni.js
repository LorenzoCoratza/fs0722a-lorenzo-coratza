////7/////******CREAZIONE CLASSE CALCOLATRICE PER LO SCHERMO******////////////////////
class Calculator 
{/*dentro questa classe metterò tutte le funzioni legate ai singoli tasti per far si che funzionino */
    constructor(previousOperandTextElement, currentOperandTextElement) 
    {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }/*ho messo questi ellementi dentro la classe calcolatrice*/
  
    /*AGGIUNGO LE FUNZIONI AI VARI TASTI*/
    
    /*x tasto AC */
    clear() 
    {
      this.currentOperand = '' /*x cancellare l'operazione corrente*/
      this.previousOperand = ''/*x cancellare quello che c'è sopra */
      this.operation = undefined  /*perchè cancellando non ne selezioniamo nessuna di operazione */
    }
    
  
    /* x tasto DEL*/
    delete() 
    {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)/* prima converte in stringa e poi lo taglia e prende solo l'ultimo valore per cancellarne solo 1 */  
    }
  
    /* creo la funzione per visualizzare e poter operare con i numeri sullo schermo*/
    appendNumber(number) 
    { /* glielo ho cambiato di nuovo per farlo essere un numero */
      if (number === '.' && this.currentOperand.includes('.')) return/*per evitare che ci possano essere + . in una strigna */
      this.currentOperand = this.currentOperand.toString() + number.toString()/*prima converto il valore in stringa per far vedere il calcolo e aggiungo il numero però sempre sotto forma di stringa */
    }
  
    chooseOperation(operation) 
    {
      if (this.currentOperand === '') return/*  per evitare che le operazioni facciano partire il clear*/
      if (this.previousOperand !== '') {/*per far partire il calcolo non direttamente risolto nel previous operando ma farlo comparire nel current operand  */
        this.compute()
      }
      this.operation = operation /*prima settiamo l'operation per permettergli poi di risolverle */
      this.previousOperand = this.currentOperand/*abbiamo smesso con l'operazione passata quindi vogliamo che venga comunque passata in quella auova per poterla usare*/
      this.currentOperand = ''/* per pulire lo spazio della calcolatrice all'operazione attuale*/
    }
    /* IMPLEMENTO COMPUTE */ 
    /*prende i valori dalla calcolatrice e fa effetivamente il calcolo,permette di calcolare mettendo in comuniccazione l'operazione precedente  a quella corrente */
    compute() /* FUNZIONE DI CALCOLO */
    {
      let computation/*prima creo la variabile  */
      const prev = parseFloat(this.previousOperand)/*converto la stringa in numero prima dell'operazione precedente*/
      const current = parseFloat(this.currentOperand)/*poi converto anche l'operazione attuale*/
      if (isNaN(prev) || isNaN(current)) return/* per cancellare la funzione di callcolo se non ci sono calcoli da fare */
      switch (this.operation) {/* per usare più if ma sullo stesso oggetto, */
        case '+':/* aggiungo i case su tutte le operazioni e metto i break per farli uno alla volta */
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
        default: return/* se nessuno di quei casi viene eseguito voglio un return perchè non essendoci simboli,non vogliamo operazioni */
      }
      this.currentOperand = computation/* per rendere il currentOperand il risultato del compute */
      this.operation = undefined/* per lasciare l oschermo vuoto ogni volta */
      this.previousOperand = ''/* sia sopra che sotto lo lasciamo vuoto così */
    }
  
    /* funzione per prendere i numeri e convertirli in stringa*/
    getDisplayNumber(number) 
    {
      const stringNumber = number.toString()/* lo convertiamo a stringa per poter splittare i decimali e prenderne solo alcuni*/
      const integerDigits = parseFloat(stringNumber.split('.')[0])/*prim lo rirendiamo numero e poi lo trasformiamo in array */
      const decimalDigits = stringNumber.split('.')[1]/*qua facciamo la stessa cosa ma senza parsefloat perchè non ci serve un numero e prendendo solo la seconda parte perchè è la prima del decimale */
      let integerDisplay
      if (isNaN(integerDigits)) /*metto un if se non ce niente sullo schermo  */
      {
        integerDisplay = ''
      } else 
      {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })/*se non ho decimali,non li voglio e convertire tutto in numeri*/
      }
      if (decimalDigits != null) 
      {
        return `${integerDisplay}.${decimalDigits}`/* se ho i decimali*/
      } else {
        return integerDisplay
      }
    }
  
    /* funzione che permette l'update del display sia se dentro ci sono numeri che se non c'è nulla come nel caso di AC*/
    updateDisplay() 
    {
      this.currentOperandTextElement.innerText =/* implementiamo la funzione per fari restare i numeri e passarli da operazione attuale a successiva senza cancellarli*/
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) 
      {
        this.previousOperandTextElement.innerText =/*così avremo in altro l'ultima cifra digitata e l'operazione */
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else 
      {
        this.previousOperandTextElement.innerText = ''/*quando sono alla prima operazione */
      }
    }
  }
  
  /*ABBINAMENTO DATA-TYPES ALLE COSTANTI JS*/
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
  
 /*CREAZIONE DEL VERO E PROPRIO ELEMENTO CALCOLATRICE*/
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
  
  
  /*COLLEGO LE FUNZIONI REALIZZATE AI BOTTONI E LE FACCIO PARTIRE CON IL CLICK ATTRAVERSO  button.addEventListener('click', () => e PRIMA FOR EACH SEMPRE CON LAFRECCIA AL POSTO DI .THIS*/

/* EVENTLISTENER PER I TASTI DEI NUMERI,AL CLICK FA 2 COSE*/
  numberButtons.forEach(button => 
    {
    button.addEventListener('click', () => 
    {/*AL CLICK SIA UPDATA IL DISPLAY CHE FAPARTIRE LA FUNZIONE PER VISUALIZZARE I NUMERI  */
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  /* EVENTLISTENER PER I TASTI CHE PERMETTONO DI FARE LE OPERAZIONI*/
  operationButtons.forEach(button => 
    {/*AL CLICK CAPISCE CHE OPERAZIONE HO SELEZIONATO E UPDATA IL DISPLAY */
    button.addEventListener('click', () => 
    {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  /* EVENTLISTENER PER =*/
  equalsButton.addEventListener('click', button => 
  {/*AL CLICK FA IL CALCOLO IN BASE ALL'OPERAZIONE  E UPDATA IL DISPLAY*/
    calculator.compute()
    calculator.updateDisplay()
  })
  
  /* EVENTLISTENER PER AC*/
  allClearButton.addEventListener('click', button => 
  {/* AL CLICK CANCELLA TUTTO E UPDATA IL DISPLAY*/
    calculator.clear()
    calculator.updateDisplay()
  })
  
  /*EVENTLISTENER PER DEL */
  deleteButton.addEventListener('click', button => 
  {/* AL CLICK LANCIA DELETE POI UPDATA IL DISPLAY*/
    calculator.delete()
    calculator.updateDisplay()
  })
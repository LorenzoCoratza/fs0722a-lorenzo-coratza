/*CREAZIONE CLASSE CALCOLATRICE PER LO SCHERMO*/
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
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
  
    /* creo la funzione per visualizzare e poter operare con i numeri sullo schermo*/
    appendNumber(number) 
    { /* glielo ho cambiato di nuovo per farlo essere un numero */
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }
  
    chooseOperation(operation) 
    {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }
  
    /*prende i valori dalla calcolatrice e fa effetivamente il calcolo,permette di calcolare mettendo in comuniccazione l'operazione precedente  a quella corrente */
    compute() 
    {
      let computation
      const prev = parseFloat(this.previousOperand)/*converto in costante il valore visualiizato nell'operazione precedente */
      const current = parseFloat(this.currentOperand)/*e converto in costante per compute anche quello dell'operazione corrente */
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
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
        default:
          return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
    }
  
    getDisplayNumber(number) 
    {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) 
      {
        integerDisplay = ''
      } else 
      {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) 
      {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    /* funzione che permette l'update del display sia se dentro ci sono numeri che se non c'è nulla come nel caso di AC*/
    updateDisplay() 
    {
      this.currentOperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) 
      {
        this.previousOperandTextElement.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else 
      {
        this.previousOperandTextElement.innerText = ''
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
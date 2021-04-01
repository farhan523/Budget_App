let budgetAmount = document.getElementById('input1');  //  Budget
let btn1 = document.getElementById('btn1');
let expenseAmount = document.getElementById('input2') // Expense Details

let ExpenseAmount = document.getElementById('input3')   // expense details
let btn2 = document.getElementById('btn2')

let budgetDetails = document.getElementById('cash');
let expenseDetails = document.getElementById('expense');
let balanceDetails = document.getElementById('balance');

let divToAdd = document.querySelector('.details-box')

let notifyText = document.getElementById("text");
notifyText.style.display = "none"

// variables
let z,x,c,v,b,n,m,a,s,d,f,g,h,j,k,l

// event listeners

btn1.addEventListener('click',(e)=>{
        e.preventDefault();
        budgetCall()
})

btn2.addEventListener('click',(e)=>{
        e.preventDefault();
        expenseCall()
})


// functions

function budgetCall(){
    if(budgetAmount.value == ""){
        notifyText.style.display = "inline"
        notifyText.innerText = "Please Enter Budget Amount"
        setTimeout(()=>{
            notifyText.style.display = "none"
        },2000)
    }else{
        let  budgetAmountInput = budgetAmount.value;
        z = parseInt( budgetAmountInput);
         budgetDetails.innerText = z
        x = parseInt(balanceDetails.innerText)
        c = parseInt(expenseDetails.innerText)
        x = z - c;  //balance = budget - expense
         
         balanceDetails.innerText = x
    }

   
    
}


function expenseCall(){

    if(expenseAmount.value == ""  && ExpenseAmount.value == ""){
        notifyText.style.display = "inline"
        notifyText.innerText = "Please Enter Expense detail and expense amount"
        setTimeout(()=>{
            notifyText.style.display = "none"
        },2000)
    }else if(expenseAmount.value == "" ){
        notifyText.style.display = "inline"
        notifyText.innerText = "Please Enter  expense details"
        setTimeout(()=>{
            notifyText.style.display = "none"
        },2000)
    }else if(ExpenseAmount.value == ""){
        notifyText.style.display = "inline"
        notifyText.innerText = "Please Enter Expense amount"
        setTimeout(()=>{
            notifyText.style.display = "none"
        },2000)
    }else{
        let expenseAmountInput = ExpenseAmount.value;
        v = parseInt(expenseAmountInput)
        b = parseInt(expenseDetails.textContent)
        b += v
        expenseDetails.textContent =  b;
    
        m = parseInt(budgetDetails.innerText)
        balanceDetails.innerText = m - b
    
        createItem()
    }

   
}

function createItem(){
    let div1 = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.textContent = expenseAmount.value;
    p2.textContent = ExpenseAmount.value;
    div1.classList.add('boom')
    div1.appendChild(p1)
    div1.appendChild(p2)

    let div2 = document.createElement('div');
    div2.setAttribute('id','store')

    // let i1 = document.createElement('i')
    // i1.classList.add('fas')
    // i1.classList.add('fa-edit')
    // i1.setAttribute('id','rewrite')

    let i2 = document.createElement('i')
    i2.classList.add('fas')
    i2.classList.add('fa-trash')
    i2.setAttribute('id','delete')

    // div2.appendChild(i1)
    div2.appendChild(i2)

    let div3 = document.createElement('div')
    div3.classList.add('budget-details')

    div3.appendChild(div1)
    div3.appendChild(div2)
    divToAdd.appendChild(div3)
    

    s = document.querySelectorAll('#delete')
  
    s.forEach(function(orange){
        orange.addEventListener('click',(e)=>{
            g = parseInt(expenseDetails.textContent)
            h = e.currentTarget.parentElement.parentElement.firstChild.lastChild.innerText
            j = parseInt(h)

            expenseDetails.textContent = g - j
            
            console.log(h)
            f = e.currentTarget.parentElement.parentElement
            divToAdd.removeChild(f)
            h = parseInt(h)
            k = parseInt(balanceDetails.textContent)
           
            balanceDetails.textContent = k + h
        })
    })  
}


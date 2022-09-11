

let mysel_1 = document.querySelector('.sel_1')
let mysel_2 = document.querySelector('.sel_2')
let myInp = document.querySelector('.inp')
let myRes = document.querySelector('.result')

console.log();
fetch(`../country/country-list.json`)
.then(res => res.json())
.then(data => {
    for (const v in data) {
        // console.log(v);
        let fSelect = `
        <option>${v}</option>
        `
        mysel_1.innerHTML += fSelect
        mysel_2.innerHTML += fSelect

 

    }

    myRes.innerHTML = `${myInp.value} ${mysel_1.value} = 1 ${mysel_2.value}`

    mysel_1.addEventListener('change',()=>{
        let myCurr = mysel_1.value

        fetch(`https://v6.exchangerate-api.com/v6/21a0288b767b14d71a960ac9/latest/${myCurr}`)
        .then(res => res.json())
        .then(data =>{
            // console.log(data.conversion_rates);
            let myCurr = [data.conversion_rates]
            // console.log(myCurr);
            myCurr.forEach(e => {
                
            let myVal = mysel_2.value
            let kar = 'e' +'.'+ myVal
            
            myRes.innerHTML = `${myInp.value} ${mysel_1.value} = ${eval(kar)} ${mysel_2.value}`
            mysel_1.addEventListener('change',()=>{
                let myVal = mysel_2.value
                let kar = 'e' +'.'+ myVal
                myRes.innerHTML = `${myInp.value} ${mysel_1.value} = ${eval(kar)} ${mysel_2.value}`
            })
            mysel_2.addEventListener('change',()=>{
                let myVal = mysel_2.value
                let kar = 'e' +'.'+ myVal
                myRes.innerHTML = `${myInp.value} ${mysel_1.value} = ${eval(kar)} ${mysel_2.value}`
            })
            myInp.addEventListener('input',()=>{
                let myVal = mysel_2.value
                let kar = 'e' +'.'+ myVal
                myRes.innerHTML = `${myInp.value} ${mysel_1.value} = ${eval(kar)} ${mysel_2.value}`
            })
            let myExch = document.querySelector('.ExChange')
            myExch.addEventListener('click',()=>{
                let myVal = mysel_2.value
                let kar = 'e' +'.'+ myVal
                let myF1 = myInp.value
                let myf2 = eval(kar)
                myRes.innerHTML = `${myInp.value} ${mysel_1.value} = ${eval(myF1 * myf2)} ${mysel_2.value}`
            })
            });
    
        })
    })
    })
    
























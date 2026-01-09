const fs  = require('fs');
const path = 'expense.json';

function readData(){
    try{
        const rawData  = fs.readFileSync(path, 'utf-8');
        if(!rawData) {
            console.log("expense.json not exsist yet...")
        }

        const json = JSON.parse(rawData); //return array of object
        
        console.log('ID      Date         Description                   Amount')
        json.forEach(expense => {
            const id = expense.id;
            const date = String(expense.date).slice(0, 10);
            const description = expense.description;
            const amount = expense.amount;

            console.log(`${id}       ${date}   ${description.padEnd(30)}$${amount}`)
        });

    }catch(err){
        throw err
    }
}

function addData(description, amount) {
    try {
        const data = fs.readFileSync(path, 'utf-8'); //error di push karena data ini cuma baca doang, belum berbentuk suatu objek.
        const json = JSON.parse(data);

        let maxId = 0;
        for(let i = 0; i < json.length; i++){
            let currentId = json[i].id;
            if(currentId > maxId){
                maxId = currentId;
            } 
        }

        if (amount < 0) {
            console.log("amount must be a positive number"); //error handling negative number
            return;
        }

        const newData = {
            id: maxId + 1,
            date: String(new Date()).slice(0, 10),
            description: description,
            amount: amount
        }
        if(!data){
            console.log('file gak ada nih, otw bikin');
        }

        json.push(newData);

        fs.writeFileSync(path, JSON.stringify(json, null, 2));
        console.log(`Expenses Added Successfully (ID: ${maxId + 1})`)
    }catch (err){
        throw err
    }
}

function expenseSummary(){
    const raw = fs.readFileSync(path, 'utf-8');
    const datas = JSON.parse(raw); //array

    let total = 0;
    datas.forEach(data => {
        const amount = Number(data.amount);
        total += amount
    });

    console.log(`Total Expense: $${total}`);
}


//Delete Expense Function
function deleteExpense(id){
    const raw = fs.readFileSync(path, 'utf-8');
    let datas = JSON.parse(raw); //array expense

    const index = datas.findIndex(data => Number(data.id) === Number(id));

    if (index === -1) {
        console.log('ID Not Found');
    }else {
        datas.splice(index, 1);
        fs.writeFileSync(path, JSON.stringify(datas, null, 2));
        console.log(`Expenses With ID: ${id} Successfully Deleted`);
    }
}



module.exports = { readData, addData, expenseSummary, deleteExpense };
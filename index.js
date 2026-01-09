#!/usr/bin/env node
const { Command } = require('commander');
const { readData, addData, expenseSummary, deleteExpense } = require('./fileHandler.js')
const program = new Command();

program.name("task-tracker").description("a simple cli based application").version('1.0.0');

program.command('list').description('view all expenses').action(() => {
    readData()
})

program.command('add').description('add a new expenses data').option('-d, --description <description>').option('-a, --amount <amount>').action((options) => {
    const { description, amount } = options;

    if(!description || !amount){
        console.log("enter a valid description or amount")
    }else {
        addData(options.description, options.amount);
    }
})

program.command('summary').description('Check Total Expenses').action(() => {
    expenseSummary();
});

program.command('delete <id>').description('Delete Expenses').action((id) => { 
    deleteExpense(id);
})

program.parse();

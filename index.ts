#! /usr/bin/env node

import inquirer from "inquirer";

let mypin = 1234;

let mybalance = 65000;

let fastcashbalance = 36000;

let pinAnswer = await inquirer.prompt([
    {
        name: "pincode",
        message: "Kindly enter your pincode to initiate the process",
        type: "number",

    },
]);

if (pinAnswer.pincode === mypin) {

    console.log("Congratulations! You have entered the correct pincode. Please proceed futher to complete the transaction");

    let accounttype = await inquirer.prompt([
        {
            name: "type",
            message: "Kindly select the account to proceed for transaction",
            type: "list",
            choices: ["current", "saving"]
        },
    ]);
    
    if (accounttype.type === "current") {
        let currentaccount = await inquirer.prompt([
            {
                name: "current",
                message: "Kindly select option to proceed for transaction",
                type: "list",
                choices: ["fast cash", "balance inquiry"],
            },
    
        ]);
    
        if (currentaccount.current === "fast cash") {
            let fastcash = await inquirer.prompt([
                {
                    name: "cash",
                    message: "Kindly select the amount to complete the transaction",
                    type: "list",
                    choices: ["1000", "5000", "10000", "15000", "20000"],
                },
            ]);
    
    
          fastcashbalance -= fastcash.cash;
          console.log("your remaining balance is:" +fastcashbalance)
            console.log("Your transaction has been completed");
            
    
        }
    
         else if
            (currentaccount.current === "balance inquiry")
            console.log("Your remaining balance is:" + fastcashbalance);
    
            
    
    }
    else if    (accounttype.type === "saving") { 
        let savingaccount = await inquirer.prompt([
        {
            name: "saving",
            message: "Kindly select option to proceed for transaction",
            type: "list",
            choices: ["withdraw amount", "check balance"],
            }    ,
        ]);
    
     if (savingaccount.saving === "withdraw amount") {
        let withdraw = await inquirer.prompt([
            {
                name:"withdraw",
                message: "Kindly enter the amount",
                type: "number",
            }
        ]);

    

  
if (withdraw.withdraw < mybalance)   { 
    mybalance -= withdraw.withdraw;
        console.log(
            "Your remaining balance is"  +mybalance
        );
     }  
        else {
            console.log(
                "Sorry! Insufficient balance in your account. Please try again.")
                console.log(
                "Thankyou for using ATM."
            )
        }
    }
    else if (savingaccount.saving === "check balance")
        console.log("your remaining balance is" + mybalance);    
    }
}
    

else {
    console.log("Incorrect pincode");
}



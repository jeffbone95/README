// read me generator. I want to create a readme that displays a list of questions that I can ask the user about their application 
const inquirer= require("inquirer");  
let lisenceBadge; 

const questions = [ 
    { 
        type: "input", 
        name: "applicationName", 
        message: "what is the name of your application?", 
        filter(val) { 
            if (val === "") { 
                return "README Generator" 
            } 
            return val; 
        }
    } 
    { 
        type: "input", 
        name: "username", 
        message: "please provide your github username", 
        filter(val) { 
            if(val==="") { 
                return "jeffbone95"; 
                
            }
        }
    }
]

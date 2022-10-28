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
        },
    }, 
    { 
        type: "input", 
        name: "username", 
        message: "please provide your github username", 
        filter(val) { 
            if(val==="") { 
                return "jeffbone95"; 
                
            } 
            return val; 
        },
    }, 
   { 
        type: "input",  
        name: "image", 
        message: "Input a supplemental image if disired", 
        filter(val) { 
            if(val=== "") { 
                return "readme.PNG"; 
            } 
            return val; 
        }, 
        {  
            type: "input", 
            name: "email", 
            message:"Please provide your email adress", 
            filter(val) { 
                if (val=== "") { 
                    return "jeffbone95@gmail.com"; 
                }
            return val; 
        }, 
    },  
    {  
        type: "input", 
        name: "installer", 
        message: "What are the installation instructions?", 
        filter(val) { 
            if (val === "") { 
                return '1. Download repo README \n 2. Run "node index.js"'; 
            } 
            return val;
        }, 
    }, 
    { 
        type: "input", 
        name: "information", 
        message: "info on this application", 
        filter(val) { 
            if (val === "") { 
                return "after running node.js in the console, this app will create a README file";

            } 
            return val; 

        },
    }, 
    { 
        type: "input", 
        name: "How", 
        message: "Please follow prompts as given to the user", 
        filter(val) { 
            if (val=== "") { 
                return "To proceed, type node.js in your console and follow instructions for operation";
            } 
            return val;
        },
    }, 
    { 
        type: "input", 
        name: "deployment", 
        message: "would you like to deploy?", 
        filter(val) { 
            if (val === "") { 
                return false; 
            } 
            return true; 
        },
    }, 
    function createMD(answers){ 
        let strngToApnd = ""; 
        let rtn = "\n\n\n"; 
        strngToApnd += "#" + answers.README + rtn;
   strngToApnd += "## Table of Contents \n"; 
   strngToApnd += `1. [How](#How-to)\n`;  
   strngToApnd += `2. [information](#information)\n`; 
   strngToApnd += `3. [deployment](#deployment)\n`; 
   strngToApnd += `4. [installer](#installer)\n`;  
   strngToApnd += "## How \n"; 
   strngToApnd += answers.How + rtn; 
    }
   


   if (answers.deploy) { 
    strngToApnd += 
    "* " + 
    `<a href="https://jeffbone95.github.io/${answers.README}/" target="_blank"> click here to deploy </a> /n/n`; 

   } 
   strngToApnd += "## installer \n"; 
   strngToApnd += answers.installer +rtn; 
   strngToApnd += "## Questions\n"; 
  
   function createMD2(answers){ 
    let rtn = 
    ` 
    #${answers.projectTitle}`
   }




   
  









    





    










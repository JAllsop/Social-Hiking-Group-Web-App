# Design Model and Layout ADR  

## CONTEXT:  
Good development practices requires Separation of Concerns (SoCs) to enable the development of robust code  

## PROBLEM:  
Source code can become unreadable, long and difficult to edit - making testing and maintenance difficult  

## SOLUTION: 
### The Front End utlizes a Model-View-ViewModel View (M-V-VM) architecture pattern
- Model abstracts html methods for API calls
- View-Model utilises model methods to dynamically update views i.e. html pages  
- View refers to the html pages served to the app user

### The Back End Utilizes a Layered Architecture
- Repositories abstracts SQL server database access commands
- Services utilises repositories to create fetch relevant information 
- Routes utilises services to fetch information required by API calls for client 


# Code Review Guide ADR

## CONTEXT: 
###  Quality Assurance when integrating features  

## PROBLEM:  
### Writing Code that is:  
  - Safe from bugs  
  - Easy to understand  
  - Ready for change  

## SOLUTION:  
- Adhere to Coding Style Standards  
- Use of camel casing for variables  
- Adhere to the DRY Principle  
- Check for comments  
- Check Unit and Integration Tests  
- Adhere to the failure fast principle  
  - Static checking fails faster than dynamic checking  
  - Dynamic checking fails faster than producing a wrong answer that   may corrupt subsequent computations  
- Avoid Magic Numbers  
- One purpose for each variable  
- Use good names  
- Use Exceptions rather than return codes  
- Use whitespace for readability  

# Development Practice ADR  

## CONTEXT:  
### Developing an app via Agile methodology (CID).  

## PROBLEM:  
### Cannot have monolithic classes or untested code  

## SOLUTION:  
### Test Driven Development  
- Enables agile quality assurance  
- Requires small slices  
- Minimises need for refactoring (code smells)  

# Javascript Coding Style ADR  

## CONTEXT:  
### Javascript has different formatting styles  

## PROBLEM:  
### One formatting style needs to be chosen to maintain consistency.   

## SOLUTION:  
### Standard JS formatting style chosen  
- Required by course  
- Linter easily setup  
- Team members familiar with it  

# Login/Registration Page ADR

## CONTEXT: 
A user needs to either login or register an account when accessing the app  

## PROBLEM: 
Two related functions are intertwined (logging in and registering)

## SOLUTION:  
### Combine the Login and Registration Page  
- User can login using their username and password  
- User can also register using new details with the input fields dynamically generated  

# Project Library \& Tool Requirements ADR  

## CONTEXT:  
Developing A Web App for ELEN4010  

## PROBLEM:  
Several tools and libraries are needed to develop a web app.  

## SOLUTION:  
### Use specified tools and libraries (as per brief)  
- JavaScript \& Node.js for web development  
- Travis-CI as a CI/CD tool  
- Express Framework with CSS bootstrap  
- Socket.io for websocket message implementation  
- Azure web server deployment  
- MS SQL Database  
- Jest testing framework  
- Coveralls for code coverage and testing history  

# User Story Map Creation, Access \& Editing  

## CONTEXT:  
Agile development involved creating a user story map in order to analyse user needs and develope around them  

## PROBLEM: 
Need a means to create user story map that is easily accessibly by all users, is easily editable and enables the functionality required  

## SOLUTION: 
Using the Miro platform to generate and keep track of user story maps  

# Web Access Requires Login ADR  

## CONTEXT: 
Accessing webpages on the hiking app  

## PROBLEM: 
Accessing the features of the hiking web app requires the user to have an account and for the app to know the user's account details  

## SOLUTION: 
Require the user to be logged in order to access the webpage  

# SQL Server Layout ADR  

## CONTEXT: 


## PROBLEM: 
 

## SOLUTION: 



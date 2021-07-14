# Code Review Guide ADR

## CONTEXT: 
###  Quality Assurance when integrating features

<br>

## PROBLEM: 
### Writing Code that is:
  - Safe from bugs
  - Easy to understand
  - Ready for change
<br>

## SOLUTION:  
- Adhere to Coding Style Standards 
- Use of camel casing for variables
- Adhere to the DRY Principle 
- Check for comments
- Check Unit and Integration Tests
- Adhere to the failure fast principle
  - Static checking fails faster than dynamic checking
  - Dynamic checking fails faster than producing a wrong answer that may corrupt subsequent computations
- Avoid Magic Numbers
- One purpose for each variable
- Use good names
- Use Exceptions rather than return codes
- Use whitespace for readability
# Password-Generator
Given I need a new, secure password
When I click th ebutton to generate a password
Then I am presented with a series of window prompts to select to inlcude in my new password according to the set criteria
When I am prompted for to select the password criteria
Then I am able to select which to include
When prompted for the length of the password I will select a minimum of 8 and maximum of 128 charachters
When prompted to selct characters to use
I confirm whether or not to include lowercase, uppercase, numbers, and/or special characters
When I answer each prompt
Then my input should be validated and at least one character type should be selected
When all prompts are answered
Then a password is generated that matches the selected criteria
When the password is generated 
The password will be displayed in an alert or written to the page

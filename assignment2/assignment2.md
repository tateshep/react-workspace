1. create an input field ( in app component) with a change listener which outputs the length of the entered text below it ( e.g. in a paragraph)
2. Create a new component (=> ValidationComponent) which recieves the text length as a prop.
3. Inside the ValidationComponent, either output "text too short" or "text long enough" depending on the text length (e.g. 5 as min length)
4. Create another component (=> CharComponent ) and style as an inline box
5. Reorder a list of CharComponents where each CharComponent recieves a different letter of the entered text ( in the initial input field) as a prop
6. when you click a CharComponent, it should be removed from the entered text.

Hint: Keep in mind that Javascript strings are basically arrays.

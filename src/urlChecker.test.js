// Import the js file to test
import { urlChecker } from "./client/js/urlChecker"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the handleSubmit() function", () => {
           // Define the input for the function, if any, in the form of variables/array
           // Define the expected output, if any, in the form of variables/array
           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
             function checkForUrl(inputURL) {
                console.log("::: Running checkForName :::", inputURL);
                const expression = new RegExp("https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)");
            
                if (!expression.test(inputURL)) {
                    return false;
                } else {
                    return true;
                }
            
            }          
        
           expect(checkForUrl).toBeDefined(); 
})});


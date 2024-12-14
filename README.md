# Ethan's Standard Library

A scripting/style library full of functions and classes that 
I use often enough to write a library

## Importing

### JS

This library is a javascript module which can import specific classes, functions, variables and other things from a file url.
There are 2 ways this can be done,

First you can do the easy method of importing from a link (this means you will have the latest feature set as soon as we update).
```js
import { body } from "https://ethanillingsworth.github.io/ESL/esl.js"
```

A local file which can be downloaded from [here](https://ethanillingsworth.github.io/ESL/esl.js) (if you want a specific release check the releases tab).
This can then be used to import the required classes, functions, etc like this.

```js
// change "../esl.js" to the filepath of the local file
import { body } from "../esl.js"
```

### CSS
You can import the stylesheet from either a local file which can be found [here](https://ethanillingsworth.github.io/ESL/esl.css)
or from a link

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Local File -->
    <link rel="stylesheet" href="../esl.css">
    <!-- Link -->
    <link rel="stylesheet" href="https://ethanillingsworth.github.io/ESL/esl.css">
</head>

<body>
</body>

</html>
```





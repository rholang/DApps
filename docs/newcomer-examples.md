---
title: Newcomer Examples
---

An example is worth a thousand words.

This section is dedicated to newcomers trying to figure out general idioms & conventions in Reason and BuckleScript. If you're a beginner who's got a good idea for an example, please suggest an edit!

## Using the `option` type

`option` is a [variant](variant.md) that comes with the [standard library](/api/index.html). It obviates the need for null values in other languages.

```reason
let possiblyNullValue1 = None;
let possiblyNullValue2: option(string) = Some("Hello@");

switch (possiblyNullValue2) {
| None => print_endline("Nothing to see here.")
| Some(message) => print_endline(message)
};
```

## Creating a parametrized type

```reason
type universityStudent = {gpa: float};

type response('studentType) = {
  status: int,
  student: 'studentType
};

let result: response(universityStudent) = fetchDataFromServer();
```

## Creating a JS Object

Assuming you're compiling to JavaScript.

```reason
[@bs.deriving abstract]
type payload = {
  name: string,
  age: int
};

let obj1 = payload(~name="John", ~age=30);

/* Compiles to a JS object with the above fields */
```

Note that the above isn't a record; this is a [special BuckleScript feature](https://bucklescript.github.io/docs/en/object.html#record-mode).

## Modeling a JS Module with Default Export

See [here](https://bucklescript.github.io/docs/en/import-export.html#import-a-default-value).

## Checking for JS nullable types using the `option` type

For a function whose argument is passed a JavaScript value that's potentially `null` or `undefined`, it's idiomatic to convert it to a Reason `option`. The conversion is done through the helper functions in Bucklescript's [`Js.Nullable`](http://bucklescript.github.io/bucklescript/api/Js.html#TYPEnullable) module. In this case, `toOption`:

```reason
let greetByName = (possiblyNullName) => {
  let optionName = Js.Nullable.toOption(possiblyNullName);
  switch (optionName) {
  | None => "Hi"
  | Some(name) => "Hello " ++ name
  }
};
```

This check compiles to `possiblyNullName == null` in JS, so checks for the presence of `null` or `undefined`.

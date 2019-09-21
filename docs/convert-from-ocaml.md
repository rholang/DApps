---
title: Converting from OCaml
---

Converting a project from OCaml to Reason is straightforward and doesn't require semantic changes. However, there are a few build setup and miscellaneous changes required.


## Makefile

If your build system executes explicit build commands, then the easiest way to
use Reason with `ocamlopt/ocamlc` is by adding the following flags to each
compilation step:

```sh
# intf-suffix tells the compiler where to look for corresponding interface files
ocamlopt -pp refmt -intf-suffix rei -impl myFile.re
ocamlopt -pp refmt -intf myFile.rei
```

## `ocamlbuild`

There is no official Reason Syntax support for `ocamlbuild` though you can write custom rules for `ocamlbuild` that will use `.re`/`.rei` files correctly. [This diff](https://github.com/facebook/reason/pull/1956) removes a legacy utility which can be used as a reference.

## Dune

If your project uses [Dune](https://github.com/ocaml/dune) then Reason syntax is automatically supported. Add a dependency on the Reason package then Dune will pay attention to `.re`/`.rei` files in your project.

```sh
# If using esy
esy add @esy-ocaml/reason

# If using opam
opam install reason
```

## Converting From OCaml

OCaml code may be (mostly) automatically converted to Reason by using `refmt`. See `refmt --help` for more options:

```sh
refmt --parse ml --print re yourFile.ml > yourFile.re
refmt --parse ml --print re yourFile.mli > yourFile.rei
```

**Cleaning Up The Output:**
The converted Reason code may attach `[@implicit_arity]` to variant constructors, like so: `[@implicit_arity]C(1, 2)`.
This is due to the fact that OCaml has the ambiguous syntax where a multi-arguments
constructor is expecting argument in a tuple form. So it isn't clear if OCaml's
`C (1, 2)` should be translated to Reason Syntax's `C (1, 2)` or `C 1 2`.
By default, `refmt` will convert it to `[@implicit_arity]C(1, 2)`, which tells the compiler
this can be either `C(1, 2)` or `C((1, 2))`. The "implicit arity" tag ensures the output
recreates OCaml's semantics so that it compiles correctly once converted to Reason.

You can easily clean up the `refmt` output by requesting that `[@implicit_arity]` tags be
stripped. Pass the `--assume-explicit-arity` to `refmt` to force the formatter to generate
`C(1, 2)` instead of `[@implicit_arity]C(1,2)`. This approach will generate cleaner Reason
Syntax but you may need to selectively convert some `C(1,2)` variants to `C((1,2))`
to make the type checker happy.

There are already some internal exception rules to cover the common constructors that require
a single tuple as argument so `refmt` will be convert them correctly without requiring your
manual cleanup (e.g., `Some (1, 2)` in OCaml will be converted to `Some((1, 2))` instead of
`Some(1, 2)`).

To provide your own exception list, create a line-separated file that contains all constructors
(without module prefix) in your project that expects a single tuple as argument, and use
`--heuristics-file <filename>` to tell `refmt` that all constructors listed in the file will
be treated as constructor with a single tuple as argument:

```sh
> cat heuristics.txt
  TupleConstructor
  And
  Or
```

```sh
> cat test.ml
```

```ocaml
type tm =
  TupleConstructor of (int * int)
| MultiArgumentsConstructor of int * int
let x = TupleConstructor(1, 2)
let y = MultiArgumentsConstructor(1, 2)
module Test = struct
  type a = | And of (int * int) | Or of (int * int)
end;;
let a = Test.And (1, 2)
let b = Test.Or (1, 2)
let c = Some (1, 2)
```

Then only the constructor identifiers that were listed will be assumed to accept tuples instead of multiple arguments.

```sh
> refmt --heuristics-file \
    ./heuristics.txt --assume-explicit-arity \
    --parse ml --print re test.ml
```


```reason
type tm =
  | TupleConstructor((int, int))
  | MultiArgumentsConstructor(int, int);

let x = TupleConstructor((1, 2));

let y = MultiArgumentsConstructor(1, 2);

module Test = {
  type a =
    | And((int, int))
    | Or((int, int));
};

let a = Test.And((1, 2));

let b = Test.Or((1, 2));

let c = Some((1, 2));
```

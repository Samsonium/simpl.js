# Data types

### Primitives
| Data type | keyword | description                                        |
|-----------|---------|----------------------------------------------------|
| String    | str     | Any character sequence in double or single quotes  |
| Number    | num     | Any numeric types like `123`, `3.14`               |
| Boolean   | bool    | `true` and `false`                                 |
| Object    | obj     | Structures like arrays, dictionaries, maps and etc |

### Nullable types
If variable can be null, character `?` after type keyword is required. For example:
```
num a = null; // exception: types doesn't match
num? a = null; // correct
```

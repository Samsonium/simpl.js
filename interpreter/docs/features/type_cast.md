# Type casting `operator (binary)`
Type casting operator is using to cast value from one type to another

### Entities
- *value* &horbar; value to cast
- *type* &horbar; result type

### Formats
- `value -> type` &horbar; cast type and throw exception if value cannot be cast to specified type
- `value -> try type` &horbar; try to cast value and return null if value cannot be cast to specified type

### Examples
- Cast number to boolean:
  ```
  bool x = 1 -> bool; 
  // x = true;
  ```
- Cast string to number:
  ```
  num x = 'Hello, World!' -> num;
  // exception: string doesn't contain numeric value
  ```
- Try to cast string to number:
  ```
  num x = 'Hello, World!' -> try num;
  // result is null, but type of "x" is not "num?"
  // exception: types doens't match
  ```
- Try to cast string to number with null safe number type
  ```
  num? x = 'Hello, World!' -> try num;
  // x = null
  ```

# Cycles

### For loop

#### With index
```
// Default syntax
for (num i = 0; i < 10; i++) {
    ...
}

// Short syntax
for (num i = 0; i < 10; i++) ... ;
```

#### Map iterator
```
// Examples with Map<str, num>

// Keys iterator
for (str key in someMap) {
    ...
}

// Values iterator
for (num val of someMap) {
    ...
}

// Entries iterator
for (someMap as str key, num val) {
    ...
}
```

#### Array iterator

```
// Example with Array<num>

for (num val of someArray) {
    ...
}
```

### While

#### Default
```
// Default syntax
while (someExpression) {
    ...
}

// Short syntax
while (someExpression) ... ;
```

#### Do-while
```
// Default syntax
do {
    ...
} while (someExpression);

// Short expression
do ... ;
while (someExpression);
```

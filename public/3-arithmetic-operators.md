# 3. Arithmetic Operators

As a high-level programming language, python can be used to do math calculations. Here are all the arithmetic operators available:

<table style="width:100%; text-align: center">
  <tr>
    <th>Operation</th>
    <th>Symbol</th>
    <th>Python</th>
  </tr>
  <tr>
    <td>Addition</td>
    <td>+</td>
    <td>+</td>
  </tr>
  <tr>
    <td>Subtraction</td>
    <td>-</td>
    <td>-</td>
  </tr>
    <tr>
    <td>Multiplication</td>
    <td>&times</td>
    <td>*</td>
  </tr>
  <tr>
    <td>Division</td>
    <td>&divide</td>
    <td>/</td>
  </tr>
  <tr>
    <td>Modulus</td>
    <td></td>
    <td>%</td>
  </tr>
  <tr>
    <td>Exponentiation</td>
    <td></td>
    <td>**</td>
  </tr>
  <tr>
    <td>Floor division</td>
    <td></td>
    <td>//</td>
  </tr>
</table>

Let's first step through how to use the first four operators in the interpreter.

```python
>>> 2 + 5  # Addition
7
>>> 8 - 3  # Subtraction
5
>>> 3 * 4  # Mutiplication
12
>>> 10 / 2  # Division
5.0
```

Notice that `10 / 2` returns `5.0` with an extra `.0` instead of just `5`. Up until now we have only be dealing with numbers as **integers** which are whole numbers like:

- `5`
- `0`
- `256`
- `-12`

However there is in fact another number-like data type called **floats** which are numbers with decimal places like:

- `1.5`
- `5.0`
- `3.1415926`

Floats are necessary when we divide a number by a non-factor:

```python
>>> 7 / 2
3.5
>>> 4.5 / 3
1.5
>>> 10 / 3
3.3333333333333335
```

## The floor division operator

The floor division operator performs ordinary division, then _rounds the result down to the lower integer_.

```python
>>> 10 / 3
3.3333333333333335
>>> 10 // 3
3
```

```python
>>> 8.8 / 4
2.2
>>> 8.8 // 4
2
```

```python
>>> 7 / 2
>>> 3.5
>>> 7 // 2
>>> 3
```

Notice that the final result is not the nearest integer, but rather the lower integer.

If we want to divide integer and return an integer instead of a float we can use the foor operator.

```python
>>> 10 / 2
5.0
>>> 10 // 2
5
```

## The modulo operator

The _modulo operator_, sometimes known as the _remainder operator_ returns the remainder when the first operand is divided by the second.

```python
>>> 5 % 3
2
```

In the above example, `3` goes into `5` once, leaving a remainder of `2`. Therefore the result of `5 % 3` is the remainder `2`.

```python
>>> 23 % 5
4
```

In the above example, `5` goes into `23` four times, leaving a remainder of `3`. Hence the result of `23 % 5` is the remainder `3`.

## The exponent operator

The _exponent operator_ or _power operator_ returns the first operand raised to the power of the second.

```python
>>> 5**2  # Equivalent to 5 * 5
25
>>> 2**3  # Equivalent to 2 * 2 * 2
8
```

## Order of operations

If you use multiple arithmetic operators on a single line, Python will use the conventional order of operations.

In decreasing order of precedence:

1. `*`, `/`, `//`, `%`
2. `+`, `-`

Operators on the same line above are performed in order of occurence.

```python
>>> 3 * 2 + 5  # Equivalent to 6 + 5
11
>>> 4 * 5 - 3 * 4  # Equivalent to 20 - 12
8
>>> 7 / 2 * 3  # Equivalent to 3.5 * 3
10.5
>>> 3 + 10 // 2  # Equivalent to 3 + 5
8
>>> 3 * -5
-15
```

Brackets can be used to specify order of operations.

```python
>>> 3 * (2 + 4)  # Equivalent to 3 * 6
18

>>> 12 / (1 + 2)  # Equivalent to 12 / 3
4.0
>>> (5 + 9) % 3  # Equivalent to 14 % 3
2
```

## Arithmetic operators on variables

We can assign integers and floats to variables and perform arithmetic operations on these variables for the same result.

```python
>>> a = 12
>>> b = 3
>>> c = 1.5
>>> a + b
15
>>> a - b
9
>>> a * b
36
>>> a / c
8.0
>>> a // b
4
>>> c**b
3.375
```

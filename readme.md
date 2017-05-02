#tagnet-log

Node.JS logging utility built for TAGNET by @dperussina

Install:
```javascript
npm install tagnet-log --save
```

Usage:
```javascript
/* Node.JS or in browser using Browserify */
var u = require('tagnet-log');
```
General logging
```javascript
u.log('This is a test log message ', 'test', 3, [1, 2, 3]);
u.logLn('This is an inline test log message ', 'test', 3, [1, 2, 3]);

```
Output:
```
3/30/2017 12:05:18 PM
This is a test log message 
[string]
test
[number]
3
[array]
[
    1,
    2,
    3
]
###(u.log)###

5/2/2017 12:44:22 PM This is an inline test log message  [string] test [number] 3 [array] [1,2,3] ###(u.logLn)###

```
Error logging
```javascript
u.error('This is a test error message ', 'test', 3, [1, 2, 3]);
u.errorLn('This is an inline test error message ', 'test', 3, [1, 2, 3]);
```
Output:
```
3/30/2017 12:05:18 PM *Exception* 
This is a test error message 
[string] 
test
[number] 
3
[array] 
[
    1,
    2,
    3
]
###(u.error)###

5/2/2017 12:45:33 PM *Exception*  This is an inline test error message  [string]  test [number]  3 [array]  [1,2,3] ###(u.errorLn)###

```

Types
```javascript
var myVal = ['I would like to know what Type this is'];
    
    
    u.typeLog(myVal);
    
     
    u.typeLog(myVal, 'myVal');

    
var thisType = u.type(myVal);    
    console.log('thisType', thisType)
```
Output
```
5/2/2017 12:45:33 PM type [array] ###(u.typeLog)###

5/2/2017 12:45:33 PM myVal | type [array] ###(u.typeLog)###

thisType array

```
#tagnet-log

Node.JS logging utility built for TAGNET by @dperussina

Install:
```javascript
npm install tagnet-log --save
```

Usage:
```javascript
var u = require('tagnet-log');
u.log('This is a test log message ', 'test', 3, [1, 2, 3]);
u.error('This is a test error message ', 'test', 3, [1, 2, 3]);
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
```
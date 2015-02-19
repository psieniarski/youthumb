# youthumb

## Installation
```bash
$ npm install youthumb
```

## Examples

```js
// http://img.youtube.com/vi/I9khEhPNbOc/mqdefault.jpg
youthumb('I9khEhPNbOc').get('medium');

// http://img.youtube.com/vi/I9khEhPNbOc/hqdefault.jpg
youthumb('I9khEhPNbOc').get('high'); 

// http://img.youtube.com/vi/I9khEhPNbOc/1.jpg
youthumb('I9khEhPNbOc').get(1);

// http://img.youtube.com/vi/I9khEhPNbOc/default.jpg
youthumb('I9khEhPNbOc').get();
youthumb('I9khEhPNbOc').get('default');  
youthumb('I9khEhPNbOc').get(100);
youthumb('I9khEhPNbOc').get('not exists');

```

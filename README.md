# kyo-yyyymmdd

## Usage example of Node.js API

```javascript
const converter = new KyoYYYYMMDD()

console.log(new Date())
console.log(converter.convert('今日'))
console.log(converter.convert('昨日'))
console.log(converter.convert('来年'))
```

Result:

```
2019-11-15T05:41:01.118Z
2019年11月15日
2019年11月14日
2020年
```

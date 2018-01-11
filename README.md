# both-render
render in server and browser

## 代码

### 模板：assets/views/main.tpl
```html
{{title}}
<footer id="id-auth"></footer>
{{hack}}
<script id="id-tpl" type="text/html">
{{author}}
</script>
<script>
(function(){
  let tpl = document.querySelector('#id-tpl').innerHTML;
  let html = vtpl(tpl, {
    author: 'hitvalley'
  });
  document.querySelector('#id-auth').innerHTML = html;
}());
</script>
{{/hack}}
```

### server端运行
```html
{{title}}
<footer id="id-auth"></footer>
```

### client端运行
```html
{{hack}}
<script id="id-tpl" type="text/html">
{{author}}
</script>
<script>
(function(){
  let tpl = document.querySelector('#id-tpl').innerHTML;
  let html = vtpl(tpl, {
    author: 'hitvalley'
  });
  document.querySelector('#id-auth').innerHTML = html;
}());
</script>
{{/hack}}
```

## run
```
npm start

# 访问：http://localhost:8080
```

## 结果
[!image](https://github.com/hitvalley/both-render/blob/master/assets/static/imgs/result.png)

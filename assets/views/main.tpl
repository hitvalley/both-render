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

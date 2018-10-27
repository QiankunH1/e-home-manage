<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
*{
  margin: 0;
  padding: 0;
}
a { text-decoration: none; }
a:hover { text-decoration: underline; }
ul, ol { list-style: none; }
.fll{
  float: left;
}
.flr{
  float: right;
}
.clearfix::after{
  clear: both;
  content: '';
  display: block;
}
</style>

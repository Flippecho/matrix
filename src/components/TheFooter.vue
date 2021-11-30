<template>
  <div id="footer" class="fixed-bottom">
    <h3 id="quote">:D 正在加载...</h3>
    <h3 id="copyright">© 2021 &nbsp; Baluth</h3>
  </div>
</template>

<script>
fetch('https://v1.hitokoto.cn/?c=d&c=i&c=k')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('quote')
      hitokoto.href = 'https://hitokoto.cn/?c=d&c=i&c=k' + data.uuid
      hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)

export default {
  name: "TheFooter"
}
</script>

<style scoped>
#footer {
  width: 90vw;
  bottom: calc(5vh - 1em);
  left: 5vw;
}

#quote {
  display: table-cell;
  float: left;
  width: 60vw;
  text-align: center;
  white-space: nowrap;
  overflow: auto;
}

#copyright {
  display: table-cell;
  float: right;
  width: 20vw;
  text-align: center;
  white-space: nowrap;
  overflow: auto;
}
</style>
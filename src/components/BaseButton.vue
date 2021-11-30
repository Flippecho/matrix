<template>
  <span class="btn">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "BaseButton"
}
</script>

<style scoped>
.btn {
  font-weight: 700;
  font-size: 1rem;
  border: none;
  outline: none;
  min-width: 150px;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  color: #FFFFFF;
  letter-spacing: 2px;
  width: auto;
  padding: 11px;
  border: 0;
  border-radius: 7px;
  margin-left: 21px;
  box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.8) inset,
  1px 1px 3px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
}

.btn:active {
  position: relative;
  top: 2px;
  background: #80ab5d;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4) inset;
  border-color: #a9db80;
}

.btn:before {
  content: attr(content);
}
</style>
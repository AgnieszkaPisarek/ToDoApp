<script setup lang="ts">
function fun() {
  const optionsMenu = document.getElementById('options-menu')
  if (optionsMenu) {
    optionsMenu.classList.add('style')
  }
}
</script>

<template>
  <div class="container">
    <div class="menu-sign" @click="fun()">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>

  <div class="options-menu" id="options-menu"></div>
</template>

<style scoped>
.container {
  display: grid;
  place-items: center;
}

.style {
  position: absolute;
  width: 200px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #ccc;
}

.dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: black;
  margin: 2px;
}

.menu-sign {
  cursor: pointer;
  position: relative;
}
</style>

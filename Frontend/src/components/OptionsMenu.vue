<script setup lang="ts">
function fun() {
  const optionsMenu = document.getElementById('options-menu')

  if (optionsMenu) {
    optionsMenu.classList.add('style')
    optionsMenu.style.visibility = 'visible'
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

  <div class="options-menu" id="options-menu">
    <div class="delete">Delete task</div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  place-items: center;
}

.options-menu {
  visibility: hidden;
}

.delete {
  font-family: 'Noto Sans', serif;
  font-size: 17px;
}

.style {
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #ccc;
  z-index: 100;
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

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { defineEmits } from 'vue'

const emit = defineEmits<{
  (event: 'undoDeletionEvent'): void
  (event: 'hidePopUpEvent'): void
}>()

const undoDeletion = () => {
  emit("undoDeletionEvent")
}

const hidePopUp = () => {
  emit("hidePopUpEvent")
}
</script>

<template>
  <section class="undoDeletion">
    <div class="deletedTaskText">Task deleted</div>
    <button class="undoButton" @click="undoDeletion">Undo</button>
    <Icon icon="proicons:cancel" class="cross" width="20" height="20" @click="hidePopUp"/>
  </section>
</template>

<style scoped>
.undoDeletion {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 225px;
  height: 30px;
  padding: 5px;
  background-color: #ffffff;
  border-radius: 10px;
}

.deletedTaskText {
  color: #ededed;
  padding-left: 15px;
  padding-right: 15px;
}

.undoButton {
  background: #40404b;
  color: #ededed;
  border-radius: 10px;
  padding-right: 10px;
  border: 0 solid #ccc;
}

.cross {
  padding-left: 15px;
}
</style>

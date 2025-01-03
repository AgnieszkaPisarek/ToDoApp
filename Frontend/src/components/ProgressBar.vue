<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps({
  completedStatus: {
    type: Number,
    required: true,
  },
  numberOfTasks: {
    type: Number,
    required: true,
  }
});
const progress = computed(() => {
  if(props.numberOfTasks === 0) {
    return 100
  }
  return (props.completedStatus / props.numberOfTasks) * 100;
});
</script>

<template>
  <div class="bar-container">
    <div class="bar" :style="{ width: progress + '%'}"></div>
  </div>
</template>

<style scoped>
.bar-container  {
  width: 100%;
}
.bar  {
  height: 15px;
  background-color: #F1C232;
}
</style>

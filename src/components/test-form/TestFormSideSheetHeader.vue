<script setup lang="ts">
defineEmits(["close"]);
defineProps<{ sheetTitle: string }>();
</script>

<template>
  <div class="side-sheet-header flex flex_align-center flex_between">
    <div class="side-sheet-header__title">
      <h3>{{ sheetTitle }}</h3>
    </div>

    <div class="side-sheet-header__close flex flex_center pointer" @click="$emit('close')">X</div>
  </div>
</template>

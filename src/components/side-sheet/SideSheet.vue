<template>
  <transition name="side-sheet">
    <div class="side-sheet" v-if="sheetShowed">
      <div class="sheet-backdrop" @click="$emit('close')"></div>

      <div class="side-sheet__content flex flex_column">
        <div class="side-sheet__header" v-if="$slots.header">
          <slot name="header" />
        </div>

        <div class="side-sheet__body overflow-y-auto overflow-x-hidden">
          <slot name="default" />
        </div>

        <div class="side-sheet__footer" v-if="$slots.footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineEmits(["close"]);
const { sheetShowed = false } = defineProps<{ sheetShowed?: boolean }>();
</script>

<style lang="scss" scoped>
.side-sheet-enter-active,
.side-sheet-leave-active {
  transition: transform 0.15s ease-out;
}

.side-sheet-enter-from,
.side-sheet-leave-to {
  transform: translateX(100%);
}

.side-sheet {
  position: fixed;
  top: 0;
  right: 0;
  left: auto;
  bottom: 0;
  z-index: 10;

  &__content {
    position: relative;
    z-index: 11;
    width: 700px;
    height: 100%;
    background-color: #fff;
    transition: transform 0.15s ease-out;
  }

  &__body {
    position: relative;
    flex-grow: 1;
  }
}
</style>

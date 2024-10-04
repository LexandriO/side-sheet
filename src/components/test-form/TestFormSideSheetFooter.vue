<script setup lang="ts">
import { computed } from "vue";

defineEmits(["complete-connection", "click-previous-step", "click-next-step"]);
const props = defineProps<{
  step: number;
  config: any;
  maxSteps: number;
}>();

const stepsLabel = computed(() => `${props.step} из ${props.maxSteps}`);
</script>

<template>
  <div class="side-sheet-footer__action-steps flex flex_align-center flex_between">
    <div class="side-sheet-footer__action flex flex_align-center">
      <div class="side-sheet-footer__next-step-button" v-if="config.hasNextButton">
        <button @click="$emit('click-next-step')">Следующий шаг</button>
      </div>

      <div class="side-sheet-footer__previous-step-button" v-if="config.hasPrevButton">
        <button @click="$emit('click-previous-step')">Предыдущий шаг</button>
      </div>

      <div class="side-sheet-footer__connect-button" v-if="config.hasConnectButton">
        <button @click="$emit('complete-connection')">Подключить</button>
      </div>
    </div>

    <div class="side-sheet-footer__steps">{{ stepsLabel }}</div>
  </div>
</template>

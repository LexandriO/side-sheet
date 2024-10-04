<script setup lang="ts">
import { useStep } from "../../comopsables/useStep.ts";
import TestFormSideSheetHeader from "./TestFormSideSheetHeader.vue";
import TestFormSideSheetFooter from "./TestFormSideSheetFooter.vue";
import SideSheet from "../side-sheet/SideSheet.vue";

defineEmits<{
  close: [];
  "complete-connection": [];
  "input-completed": [event: any];
  "radio-completed": [event: any];
}>();

const {
  sheetShowed = false,
  config,
  sheetTitle,
} = defineProps<{
  sheetShowed?: boolean;
  config: any;
  sheetTitle: string;
}>();

const { index: step, currentStep, previousStep, nextStep } = useStep(config);
</script>

<template>
  <SideSheet :sheetShowed="sheetShowed" @close="$emit('close')" :key="currentStep.component">
    <template #header>
      <div class="side-sheet__header">
        <TestFormSideSheetHeader :sheetTitle="sheetTitle" @close="$emit('close')" />
      </div>
    </template>

    <template #default>
      <div class="side-sheet__body">
        <transition name="side-sheet-fade-left" mode="out-in">
          <component
            :is="currentStep.component"
            :content="currentStep.content"
            @input-completed="$emit('input-completed', $event)"
            @radio-completed="$emit('radio-completed', $event)"
          />
        </transition>
      </div>
    </template>

    <template #footer>
      <div class="side-sheet__footer">
        <TestFormSideSheetFooter
          :step
          :maxSteps="config.length"
          :config="currentStep"
          @click-previous-step="previousStep"
          @click-next-step="nextStep"
          @complete-connection="$emit('complete-connection')"
        />
      </div>
    </template>
  </SideSheet>
</template>

<style lang="scss" scoped>
@import "../../assets/sheets.scss";

.side-sheet {
  &__footer {
    padding: 32px;
  }
}
</style>

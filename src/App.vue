<script setup lang="ts">
import { ref } from "vue";
import { steps } from "./config/steps.ts";
import TestFormSideSheet from "@/components/test-form/TestFormSideSheet.vue";
import TestFormSideSheetStep from "@/components/test-form/TestFormSideSheetStep.vue";

const sheetShowed = ref(false);
</script>

<template>
  <div class="main">
    <div class="main__button">
      <button @click="sheetShowed = true">Открыть модалку</button>
    </div>

    <div class="main_sheet">
      <TestFormSideSheet
        sheetTitle="Заголовок"
        :sheetShowed="sheetShowed"
        :config="steps.firstStep"
        @close="sheetShowed = false"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

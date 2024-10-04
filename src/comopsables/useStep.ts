import { ref, computed } from "vue";

function useStep(steps: any[]) {
  const index = ref(1);

  const currentStep = computed(() => steps[index.value - 1]);

  function previousStep() {
    if (index.value <= 1) return;

    index.value--;
  }

  function nextStep() {
    if (index.value >= steps.length) return;

    index.value++;
  }

  return {
    index,
    currentStep,
    previousStep,
    nextStep,
  };
}

export { useStep };

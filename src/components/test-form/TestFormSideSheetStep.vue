<script setup lang="ts">
defineProps<{ content: any }>();
</script>

<template>
  <div class="side-sheet-step">
    <template v-for="(contentItem, idx) in content" :key="contentItem.elementType">
      <template v-if="contentItem.elementType === 'image'">
        <div class="side-sheet-step__guide-image">
          <img :src="contentItem.original" :alt="contentItem.alt" />
        </div>
      </template>

      <div class="side-sheet-step__guide-text">
        <template v-if="contentItem.elementType === 'title'">
          <p v-html="contentItem.title"></p>
        </template>

        <template v-if="contentItem.elementType === 'guide'">
          <ul class="side-sheet-step__guide-list h6 h6_regular">
            <li class="side-sheet-step__guide-item" v-for="guide in contentItem.guides" v-html="guide"></li>
          </ul>
        </template>
      </div>

      <template v-if="contentItem.elementType === 'input'">
        <div class="side-sheet-step__guide-input" v-for="input in contentItem.inputs" :key="input.id">
          <template v-for="{ value } in input.options" :key="input.id">
            <input
              type="text"
              v-model="value.value"
              @update:model-value="$emit('input-completed', { key: input.id, value: value.value })"
            />
          </template>
        </div>
      </template>

      <template v-if="contentItem.elementType === 'radioButton'">
        <div class="side-sheet-step__guide-label-radio" v-for="input in contentItem.radioButtons" :key="input.id">
          <div class="side-sheet-step__guide-label">
            {{ input.label }}
          </div>

          <div class="side-sheet-step__guide-radio-group flex">
            <div class="side-sheet-step__guide-radio" v-for="{ value, text, id } in input.options" :key="id">
              <input
                type="radio"
                :value="value.value"
                v-model="input.selectedValue.value"
                @update:model-value="$emit('radio-completed', { key: input.id, value: value.value })"
              />
              {{ text }}
            </div>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

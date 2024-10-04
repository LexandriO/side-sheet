import Image from "../assets/image.webp";

import { defineAsyncComponent, ref } from "vue";

const steps = {
  firstStep: [
    {
      component: defineAsyncComponent(
        () =>
          import(/* webpackChunkName: "TestFormSideSheetStep" */ "../components/test-form/TestFormSideSheetStep.vue")
      ),
      content: [
        {
          elementType: "image",
          alt: "alt",
          original: Image,
        },
        {
          elementType: "radioButton",
          radioButtons: [
            {
              id: "connection",
              label: "Type of connection",
              selectedValue: ref(""),
              options: [
                {
                  value: ref("qr"),
                  text: "qr",
                },
                {
                  value: ref("manual"),
                  text: "manual",
                },
              ],
            },
          ],
        },
      ],
      hasNextButton: true,
    },
    {
      component: defineAsyncComponent(
        () =>
          import(/* webpackChunkName: "TestFormSideSheetStep" */ "../components/test-form/TestFormSideSheetStep.vue")
      ),
      content: [
        {
          elementType: "image",
          alt: "alt",
          original: Image,
        },
        {
          elementType: "input",
          inputs: [
            {
              id: "input_qr",
              label: "type your code here",
              options: [{ value: ref("1"), text: "333" }],
            },
          ],
        },
      ],
      hasNextButton: true,
    },
  ],
  qr: [
    {
      component: defineAsyncComponent(
        () =>
          import(/* webpackChunkName: "TestFormSideSheetStep" */ "../components/test-form/TestFormSideSheetStep.vue")
      ),
      content: [
        {
          elementType: "image",
          alt: "alt",
          original: Image,
        },
        {
          elementType: "input",
          inputs: [
            {
              id: "input_qr",
              label: "type your code here",
              options: [{ value: ref("1"), text: "333" }],
            },
          ],
        },
      ],
      hasNextButton: true,
      hasPrevButton: true,
    },
  ],
  manual: [
    {
      component: defineAsyncComponent(
        () =>
          import(/* webpackChunkName: "TestFormSideSheetStep" */ "../components/test-form/TestFormSideSheetStep.vue")
      ),
      content: [
        {
          elementType: "image",
          alt: "alt",
          original: Image,
        },
        {
          elementType: "radioButton",
          radioButtons: [
            {
              id: "bot",
              label: "Do you have a bot?",
              selectedValue: ref(""),
              options: [
                {
                  value: ref("exist"),
                  text: "pages.channels.telegramBot.sheet.steps.first.actions.variants.existingBot",
                },
                {
                  value: ref("new"),
                  text: "pages.channels.telegramBot.sheet.steps.first.actions.variants.newBot",
                },
              ],
            },
          ],
        },
      ],
      hasNextButton: true,
      hasPrevButton: true,
    },
  ],
};

export { steps };

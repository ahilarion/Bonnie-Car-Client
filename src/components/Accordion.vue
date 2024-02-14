<template>
  <div class="divide-y text-bc-white">
    <div>
      <h2>
        <button
          id="faqs-title-01"
          type="button"
          class="flex items-center justify-between w-full text-left font-semibold bg-bc-gray-dark py-[16px] px-[42px] gap-4 rounded-3xl"
          @click="expanded = !expanded"
          :aria-expanded="expanded.toString()"
          aria-controls="faqs-text-01"
        >
          <span><slot name="title"></slot></span>
          <svg
            class="fill-bc-yellow shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center transition duration-200 ease-out"
              :class="{ 'rotate-180': expanded }"
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              class="transform origin-center rotate-90 transition duration-200 ease-out"
              :class="{ 'rotate-180': expanded }"
            />
          </svg>
        </button>
      </h2>
      <div
        id="faqs-text-01"
        role="region"
        aria-labelledby="faqs-title-01"
        class="grid text-sm text-bc-white overflow-hidden transition-all duration-300 ease-in-out mt-2"
        :class="
          expanded
            ? 'grid-rows-[1fr] opacity-100 mb-2'
            : 'grid-rows-[0fr] opacity-0'
        "
      >
        <div class="overflow-hidden">
          <p class="bg-bc-gray-dark py-[16px] px-[42px] gap-4 rounded-3xl">
            <slot name="content"></slot>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
    };
  },
};
</script>

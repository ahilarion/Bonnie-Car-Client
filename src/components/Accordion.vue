<template>
  <!-- <div
   class="bg-bc-gray-dark flex py-[16px] px-[42px] rounded-3xl justify-between gap-4"
 >
   <div class="text-bc-white text-xs w-[90%]">
     <slot />
   </div>
   <svg
     class="w-[10%]"
     viewBox="0 0 20 19"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
   >
     <path
       d="M10.0452 17.229C14.359 17.229 17.856 13.732 17.856 9.41823C17.856 5.10444 14.359 1.60742 10.0452 1.60742C5.73139 1.60742 2.23438 5.10444 2.23438 9.41823C2.23438 13.732 5.73139 17.229 10.0452 17.229Z"
       stroke="#FFD719"
       stroke-width="1.07738"
       stroke-linecap="round"
       stroke-linejoin="round"
     />
     <path
       d="M10.0449 6.29395V12.5426"
       stroke="#FFD719"
       stroke-width="1.07738"
       stroke-linecap="round"
       stroke-linejoin="round"
     />
     <path
       d="M6.9209 9.41846H13.1695"
       stroke="#FFD719"
       stroke-width="1.07738"
       stroke-linecap="round"
       stroke-linejoin="round"
     />
   </svg>
 </div> -->

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
          <svg class="fill-bc-white shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <rect y="7" width="16" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{'rotate-180': expanded}" />
            <rect y="7" width="16" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{'rotate-180': expanded}" />
          </svg>
        </button>
      </h2>
      <div
          id="faqs-text-01"
          role="region"
          aria-labelledby="faqs-title-01"
          class="grid text-sm text-bc-white overflow-hidden transition-all duration-300 ease-in-out mt-2"
          :class="expanded ? 'grid-rows-[1fr] opacity-100 mb-2' : 'grid-rows-[0fr] opacity-0'"
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
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
  <div class="hs-accordion-group text-bc-white">
    <div class="hs-accordion active" id="hs-basic-heading-one">
      <button
        class="hs-accordion-toggle hs-accordion-active:text-blue-600 px-6 py-3 inline-flex items-center gap-x-3 text-sm w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        aria-controls="hs-basic-collapse-one"
      >
        <svg
          class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block size-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        <svg
          class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14" />
        </svg>
        Accordion #1
      </button>
      <div
        id="hs-basic-collapse-one"
        class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby="hs-basic-heading-one"
      >
        <div class="pb-4 px-6">
          <p class="text-sm text-gray-600 dark:text-gray-200">
            It is hidden by default, until the collapse plugin adds the
            appropriate classes that we use to style each element.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

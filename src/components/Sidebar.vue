<script setup>

</script>

<template>
  <div id="docs-sidebar" class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-bc-gray border-r-2 border-bc-yellow pt-7 pb-10 overflow-y-auto lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-bc-gray [&::-webkit-scrollbar-thumb]:bg-bc-gray sm:hidden">
    <div class="px-6">
      <RouterLink id="logo" to="/" class="sidebar-button flex-none text-xl font-semibold flex items-center justify-center">
        <img class="h-16" src="../assets/img/logo.svg" alt="Logo" />
      </RouterLink>
    </div>
    <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
      <ul class="space-y-1.5">
        <li>
          <a class="flex items-center gap-x-3.5 py-2 px-2.5 bg-bc-yellow text-sm text-bc-black rounded-[24px] hover:bg-bc-gray-hover rounded-" href="#">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Déposer une annonce
          </a>
        </li>
        <li class="flex items-center justify-center py-2">
          <div class="w-10 h-0.5 bg-bc-yellow"></div>
        </li>
        <li>
          <RouterLink to="/" id="home" class="sidebar-button flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-bc-white rounded-lg hover:bg-bc-gray-hover">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Accueil
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/annonces" class="sidebar-button flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-bc-white rounded-lg hover:bg-bc-gray-hover">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
            Nos annonces
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/nos-guides" class="sidebar-button flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-bc-white rounded-lg hover:bg-bc-gray-hover">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/></svg>
            Nos guides
          </RouterLink>
        </li>
        <li class="hs-accordion" id="projects-accordion">
          <button type="button" class="hs-accordion-toggle hs-accordion-active:bg-bc-gray-hover hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-bc-white rounded-lg hover:bg-bc-gray-hover">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" /></svg>
            À propos

            <svg class="hs-accordion-active:block ms-auto hidden w-4 h-4 text-bc-white group-hover:text-bc-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /></svg>

            <svg class="hs-accordion-active:hidden ms-auto block w-4 h-4 text-bc-white group-hover:text-bc-white"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
          </button>

          <div id="projects-accordion" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
            <ul class="pt-2 ps-2">
              <li>
                <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-bc-white rounded-lg hover:bg-bc-gray-hover" href="#">
                  Qui sommes-nous ?
                </a>
              </li>
              <li>
                <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-bc-white rounded-lg hover:bg-bc-gray-hover" href="#">
                  Comment ça marche ?
                </a>
              </li>
              <li>
                <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-bc-white rounded-lg hover:bg-bc-gray-hover" href="#">
                  Diagnostic
                </a>
              </li>
              <li>
                <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-bc-white rounded-lg hover:bg-bc-gray-hover" href="#">
                  F.A.Q
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li class="flex items-center justify-center py-2">
          <div class="w-10 h-0.5 bg-bc-yellow"></div>
        </li>
        <li>
          <RouterLink to="/se-connecter" class="sidebar-button flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-bc-white rounded-lg hover:bg-bc-gray-hover">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"/></svg>
            Connexion
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/inscription" class="sidebar-button flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-bc-white rounded-lg hover:bg-bc-gray-hover">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg>
            Inscription
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
 export default {
   mounted() {
     document.querySelectorAll(".sidebar-button").forEach((button) => {
       button.addEventListener("click", (e) => {
          document.title = "Bonnie & Car : " + e.target.textContent;
       });
     });
   }
 }
</script>
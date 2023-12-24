
<script setup>
import { ref } from 'vue'
import { RouterLink } from "vue-router";
import { usePageNameStore } from "../stores/pageName";

const { pageName } = usePageNameStore();

const downSticky = ref(false);
const dropdown = ref(false);

const navbarSticky = () => {
  downSticky.value = !downSticky.value;
};

const dropdownNavbar = () => {
  dropdown.value = !dropdown.value;
  console.log(pageName);
};
</script>

<template>
  <nav class="bg-indigo-600 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
      <a to="/" :class="pageName === 'pacifico' ? 'flex items-center' : 'hidden'">
        <img src="../assets/icono-inventas.png" class="h-12 mr-2" alt="Inventas-app" />
        <h1 class="self-center text-2xl font-semibold whitespace-nowrap text-white">
          Tecnologia Pacifica</h1>
      </a>
      <a to="/" :class="pageName === 'inventas' ? 'flex items-center' : 'hidden'">
        <img src="../assets/icono-inventas.png" class="h-12 mr-2" alt="Inventas-app" />
        <h1 class="self-center text-2xl font-semibold whitespace-nowrap text-white">
          INVENTAS-APP</h1>
      </a>
      <a to="/" :class="pageName === 'artesanias' ? 'flex items-center' : 'hidden'">
        <img src="../assets/icono-inventas.png" class="h-12 mr-2" alt="Inventas-app" />
        <h1 class="self-center text-2xl font-semibold whitespace-nowrap text-white">
          Arte-Sanias</h1>
      </a>
      <a to="/" :class="pageName === 'design' ? 'flex items-center' : 'hidden'">
        <img src="../assets/icono-inventas.png" class="h-12 mr-2" alt="Inventas-app" />
        <h1 class="self-center text-2xl font-semibold whitespace-nowrap text-white">
          design</h1>
      </a>
      <a to="/" :class="pageName === 'chango' ? 'flex items-center' : 'hidden'">
        <img src="../assets/icono-inventas.png" class="h-12 mr-2" alt="Inventas-app" />
        <h1 class="self-center text-2xl font-semibold whitespace-nowrap text-white">
          ChanGo Pro</h1>
      </a>
      <div class="flex md:order-2">
        <button type="button"
          class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 ">
          Suscribete
        </button>
        <button @click="navbarSticky" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-indigo-700 cus:outline-none focus:ring-2 focus:ring-indigo-800">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div :class="`items-center justify-between ${downSticky ? '' : 'hidden'
        } w-full md:flex md:w-auto md:order-1`">
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-indigo-700 rounded-lg bg-indigo-600 md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <RouterLink to="/"
              active-class="block py-2 pl-3 pr-4 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-300 md:p-0"
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-300 md:p-0"
              aria-current="page">Inicio</RouterLink>
          </li>
          <li>
            <a active-class="block py-2 pl-3 pr-4 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-300 md:p-0"
              href="#informacion"
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-300 md:p-0">Informacion</a>
          </li>

          <li>
            <a active-class="block py-2 pl-3 pr-4 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-300 md:p-0"
              href="#caracteristicas"
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-300 md:p-0">Caracteristicas</a>
          </li>
          <li>
            <button @click="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-blue-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 md:w-auto">
              Servicios
              <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div :class="`z-10 ${dropdown ? '' : 'hidden'
              } absolute font-normal bg-blue-500 divide-y divide-indigo-600 rounded-lg shadow w-44`">
              <ul class="py-2 text-sm text-white" aria-labelledby="dropdownLargeButton">
                <li>
                  <RouterLink active-class="block px-4 py-2 bg-blue-600" to="/inventas"
                    class="block px-4 py-2 hover:bg-blue-600">Inventas</RouterLink>
                </li>
                <li>
                  <RouterLink active-class="block px-4 py-2 bg-blue-600" to="/artesanias"
                    class="block px-4 py-2 hover:bg-blue-600">Arte-Sanias</RouterLink>
                </li>
                <li>
                  <RouterLink active-class="block px-4 py-2 bg-blue-600" to="/design"
                    class="block px-4 py-2 hover:bg-blue-600">Diseno</RouterLink>
                </li>
              </ul>
              <div class="py-1">
                <RouterLink to="/chango" class="block px-4 py-2 text-sm text-white hover:bg-blue-600">ChanGO Pro
                </RouterLink>
              </div>
            </div>
          </li>
          <li>
            <a href="#paquetes"
              class="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-300 md:p-0">Paquetes</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

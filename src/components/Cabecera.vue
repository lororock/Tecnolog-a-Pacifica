<template>
    <section class="pt-10 overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                    Descubre el Futuro con Tecnología Pacífica: Innovación que Transforma
                </h2>

                <p class="hidden text-gray-500 md:mt-4 md:block">
                    Somos una startup apasionada comprometida con ofrecer soluciones tecnológicas vanguardistas que cambien
                    la forma en que vivimos, trabajamos y nos conectamos. En Tecnología Pacífica, exploramos las fronteras
                    de la tecnología para brindar experiencias que sean revolucionarias.


                </p>
                <p class="hidden text-gray-500 md:mt-4 md:block">
                    Nuestra misión es crear un impacto positivo en la sociedad a través de soluciones tecnológicas
                    inteligentes y sostenibles. Nos esforzamos por construir un futuro donde la tecnología impulse
                    la eficiencia. En un mundo en constante cambio,
                    creemos que la tecnología puede ser el puente hacia un futuro más automatizado y versatil para todos.
                </p>

                <div class="mt-4 md:mt-8">
                    <button @click="openModal"
                        class="inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
                        Nuestros Proyectos
                    </button>
                </div>
            </div>
        </div>

        <!-- El Modal -->
        <div ref="modal" class="hidden fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50">
            <div class="flex items-center justify-center min-h-screen">
                <div class="bg-white p-8 rounded">
                    <!-- Contenido del Modal -->
                    <p>Contenido del modal...</p>
                    <!-- Botón para cerrar el modal -->
                    <button @click="closeModal"
                        class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>

        <img alt="Violin" src="../assets/inicial.jpg"
            class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]" />
    </section>
</template>

<script setup>

import { ref } from 'vue';

// Se utiliza ref para crear una referencia al modal
const modal = ref(null);

// Método para abrir el modal
const openModal = () => {
    modal.value.classList.remove('hidden');
};

// Método para cerrar el modal
const closeModal = () => {
    modal.value.classList.add('hidden');
};
</script>
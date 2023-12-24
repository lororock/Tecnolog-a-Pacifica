
<script setup>

import { ref } from 'vue';
import { usePageNameStore } from "../stores/pageName";

const { pageName } = usePageNameStore();


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

<template>
    <section class="pt-10 overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                    Innovación que Transforma
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
                        class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                        Nuestro Enfoque
                    </button>
                </div>
            </div>
        </div>

        <!-- El Modal -->
        <div ref="modal" class="hidden fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50">
            <div class="flex items-center justify-center min-h-screen">
                <div class="bg-white p-8 rounded">
                    <!-- Contenido del Modal -->
                    <div
                        class="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white max-w-screen-sm mx-auto">
                        <details class="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
                            <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                <h2 class="text-lg font-medium">Plataforma de Gestión Empresarial</h2>

                                <span class="relative h-5 w-5 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </summary>

                            <p class="mt-4 leading-relaxed text-gray-700">
                                Gestiona todos los aspectos de tu negocio en un solo lugar. Desde la contabilidad hasta
                                la gestión de inventarios, nuestra plataforma integral te proporciona el control total
                                para tomar decisiones informadas y estratégicas.
                            </p>
                        </details>

                        <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                <h2 class="text-lg font-medium">Marketing Digital Personalizado</h2>

                                <span class="relative h-5 w-5 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </summary>

                            <p class="mt-4 leading-relaxed text-gray-700">
                                Maximiza tu presencia en línea con nuestras herramientas de marketing digital. Desde
                                campañas de redes sociales hasta estrategias de correo electrónico, te ayudamos a llegar
                                a tu audiencia objetivo y a construir una marca sólida.
                            </p>
                        </details>

                        <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
                            <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                <h2 class="text-lg font-medium">Automatización de Procesos Empresariales</h2>
                                <span class="relative h-5 w-5 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </summary>

                            <p class="mt-4 leading-relaxed text-gray-700">
                                Ahorra tiempo y recursos con nuestras soluciones de automatización. Desde la gestión de
                                tareas repetitivas hasta la optimización de flujos de trabajo, liberamos tu tiempo para
                                que puedas concentrarte en lo que realmente importa: hacer crecer tu negocio.
                            </p>
                        </details>

                    </div>
                    <!-- Botón para cerrar el modal -->
                    <button @click="closeModal"
                        class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
        <img src="../assets/inicial.jpg"
            :class="pageName === 'pacifico' ? 'h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]' : 'hidden'">
        <img alt="inventas" src="../assets/inventas.jpg"
            :class="pageName === 'inventas' ? 'h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]' : 'hidden'">
    </section>
</template>

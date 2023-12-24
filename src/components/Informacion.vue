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

<template>
    <section id="informacion">
        <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                <div class="relative z-10 lg:py-16">
                    <div class="relative h-64 sm:h-80 lg:h-full">
                        <img alt="House" src="../assets/trabajo.jpeg" class="absolute inset-0 h-full w-full object-cover" />
                    </div>
                </div>

                <div class="relative flex items-center bg-gray-100">
                    <span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                    <div class="p-8 sm:p-16 lg:p-24">
                        <h2 class="text-2xl font-bold sm:text-3xl">
                            Empoderando a Pequeños Empresarios: Soluciones Tecnológicas a tu Medida
                        </h2>

                        <p class="mt-4 text-gray-600">
                            Nos centramos en un compromiso fundamental: potenciar el desempeño de pequeños empresarios en el
                            mercado actual. Sabemos que para las pequeñas empresas, cada decisión cuenta y cada recurso es
                            invaluable. Nuestras soluciones tecnológicas están diseñadas pensando en ustedes, ofreciendo
                            herramientas que no solo resuelven desafíos, sino que también impulsan el crecimiento
                            sostenible.
                        </p>

                        <button @click="openModal"
                            class="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                            Nuestro Compromiso
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
                                    <h2 class="text-lg font-medium">Digitalización Empresarial</h2>

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
                                    Ayudamos a superar la brecha digital, facilitando la transición hacia operaciones más
                                    digitalizadas para mejorar la eficiencia y la competitividad.
                                </p>
                            </details>

                            <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 class="text-lg font-medium">Eficiencia Empresarial</h2>

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
                                    Optimizar tus operaciones diarias y mejora la eficiencia con nuestras soluciones
                                    tecnológicas
                                    intuitivas y fáciles de usar.
                                </p>
                            </details>

                            <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 class="text-lg font-medium">Visibilidad en el Mercado</h2>

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
                                    Aumentar tu presencia en el mercado y llega a nuevos clientes mediante estrategias de
                                    marketing y herramientas de análisis de datos personalizadas.
                                </p>
                            </details>

                            <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 class="text-lg font-medium">Automatización de Procesos</h2>
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
                                    Implementamos soluciones de automatización para liberar tiempo valioso, permitiéndote
                                    concentrarte en hacer crecer tu negocio.
                                </p>
                            </details>

                            <details class="group p-6 [&_summary::-webkit-details-marker]:hidden">
                                <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                                    <h2 class="text-lg font-medium">Adaptabilidad a tus Necesidades</h2>
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
                                    Entendemos que cada negocio es único. Por eso, ofrecemos soluciones personalizadas y
                                    escalables que crecen contigo.
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
        </div>
    </section>
</template>
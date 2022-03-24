<template>
  <div class="min-h-full">
    <Navigation />

    <div class="container max-w-screen-lg mt-12 space-y-12">
      <div class="flex items-center space-x-4">
        <h1 class="text-3xl font-semibold">Events</h1>
        <router-link
          to="/create"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 space-x-1"
        >
          <PlusSmIcon class="w-6 h-6" />
          <span>New</span>
        </router-link>
      </div>

      <div class="flex flex-col">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      class="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="event in events" :key="event.id">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {{ event.name }}
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ event.date }}</td>
                    <td class="whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6 space-x-4">
                      <router-link :to="'/edit/' + event.id" class="text-indigo-600 hover:text-indigo-900"
                        >Edit</router-link
                      >
                      <a @click="openModal(event)" class="text-red-600 hover:text-red-900 cursor-pointer"
                        >Delete</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Dialog :open="modalOpen" :current-event="event" @delete-event="deleteEvent" @close="close" />
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useStorage } from "@vueuse/core";

  import Navigation from "../components/Navigation.vue";
  import Dialog from "../components/Dialog.vue";
  import { PlusSmIcon } from "@heroicons/vue/outline";

  const events = useStorage("events", []);
  const event = ref();
  const modalOpen = ref(false);

  function openModal(value) {
    event.value = value;

    modalOpen.value = true;
  }

  function close() {
    modalOpen.value = false;
  }

  function deleteEvent(event) {
    events.value = events.value.filter((item) => item.id != event.id);
    modalOpen.value = false;
  }
</script>

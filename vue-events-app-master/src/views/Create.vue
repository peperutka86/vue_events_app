<template>
  <div class="min-h-full">
    <Navigation />

    <div class="container max-w-screen-lg mt-12 space-y-12">
      <div class="flex items-center space-x-4">
        <router-link
          to="/home"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 space-x-1"
        >
          <ArrowSmLeftIcon class="w-6 h-6" />
          <span>Back</span>
        </router-link>
        <h1 class="text-3xl font-semibold">Creating an event</h1>
      </div>
      <form @submit.prevent="submit">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">Event details</h3>
              <p class="mt-1 text-sm text-gray-500">All form fields are required.</p>
            </div>

            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  v-model="form.date"
                  id="date"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div class="col-span-full">
                <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                <div class="mt-1">
                  <textarea
                    rows="10"
                    v-model="form.description"
                    id="description"
                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
  import { reactive } from "vue";
  import { useStorage } from "@vueuse/core";
  import { useRouter } from "vue-router";

  import Navigation from "../components/Navigation.vue";
  import { ArrowSmLeftIcon } from "@heroicons/vue/outline";

  const router = useRouter();
  const user = useStorage("user", {});
  const events = useStorage("events", []);

  const form = reactive({
    name: "",
    date: "",
    description: "",
  });

  function submit() {
    /**
     * We use parse & stringify to create a deep copy of the object
     * and to remove vue reactivity so it doesn't change after
     * being pushed to the events array.
     */

    form.id = Date.now();
    events.value.push(JSON.parse(JSON.stringify(form)));

    // Reset form values
    form.name = "";
    form.date = "";
    form.description = "";
  }
</script>

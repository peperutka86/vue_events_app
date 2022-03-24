<template>
  <nav class="bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
          </div>
          <div class="flex -my-px ml-6 space-x-8">
            <a
              href="/home"
              class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Dashboard
            </a>
          </div>
        </div>
        <div class="flex items-center justify-center space-x-8">
          <span class="text-sm font-medium">{{ user.firstname }} {{ user.lastname }}</span>
          <div @click="logout" class="flex items-center hover:cursor-pointer">
            <LogoutIcon class="h-6 w-6 text-red-500" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { useStorage } from "@vueuse/core";
  import { LogoutIcon } from "@heroicons/vue/outline";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const user = useStorage("user", {});

  function logout() {
    router.push("/");
  }
</script>

<template>
  <Dialog :open="open" class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen">
      <DialogOverlay class="fixed inset-0 bg-black opacity-30" />
      <div class="relative max-w-sm mx-auto bg-white p-6 shadow-xl rounded-2xl space-y-5">
        <DialogTitle class="text-xl font-medium leading-6 text-gray-900">Delete event</DialogTitle>
        <DialogDescription class="text-sm text-gray-600">
          Are you sure you want to delete this event? This action cannot be undone.
        </DialogDescription>
        <div class="flex items-center justify-end space-x-4">
          <button
            @click="$emit('deleteEvent', currentEvent)"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none"
          >
            Delete
          </button>
          <button
            @click="$emit('close')"
            class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
  import { toRefs } from "vue";
  import { Dialog, DialogOverlay, DialogTitle, DialogDescription } from "@headlessui/vue";

  const props = defineProps({
    open: Boolean,
    currentEvent: Object,
  });

  const { open, currentEvent } = toRefs(props);
</script>

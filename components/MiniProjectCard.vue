<template>
  <div
    class="
      max-w-sm
      overflow-hidden
      transition
      duration-300
      ease-in-out
      delay-150
      rounded-md
      hover:shadow-lg
      dark:bg-rich-black-500
      hover:-translate-y-1
      border
      dark:border-rich-black-600
      hover:border-smoky_black-200
      dark:hover:border-cambridge_blue-500
      shadow-off-white
    "
  >
    <img class="w-full" :src="project.img_src" alt="Sunset in the mountains" />
    <div class="px-6 py-4">
      <div class="mb-2 text-xl font-bold dark:text-off-white">
        {{ project.title }}
      </div>
      <p class="text-base text-gray-700 dark:text-off-white">
        {{ project.description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="
          inline-block
          px-3
          py-1
          mb-2
          mr-2
          text-sm
          font-semibold
          text-gray-700
          bg-gray-200
          rounded-full
        "
        >#photography</span
      >
      <span
        class="
          inline-block
          px-3
          py-1
          mb-2
          mr-2
          text-sm
          font-semibold
          text-gray-700
          bg-gray-200
          rounded-full
        "
        >#travel</span
      >
      <span
        class="
          inline-block
          px-3
          py-1
          mb-2
          mr-2
          text-sm
          font-semibold
          text-gray-700
          bg-gray-200
          rounded-full
        "
        >#winter</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style>
</style>

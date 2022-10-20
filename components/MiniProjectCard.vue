<template>
  <div
    class="
      group
      max-w-sm
      transition
      duration-300
      ease-in-out
      delay-150
      rounded-md
      shadow-lg
      hover:shadow-xl
      dark:bg-oxford_blue_two
      hover:-translate-y-1
      bg-cultured
      hover:border-smoky_black-200
      dark:hover:border-cambridge_blue-500
      shadow-off-white
      dark:shadow-none
    "
  >
    <!-- <img class="w-full" :src="project.img_src" alt="Sunset in the mountains" /> -->
    <div class="px-6 py-9">
      <div class="relative">
        <div class="absolute -top-20">
          <div class="flex flex-row justify-center space-x-32">
            <div
              class="
                group-hover:outline-offset-0
                duration-300
                ease-in-out
                delay-50
                transition-all
                p-6
                outline outline-offset-4 outline-offset-cultured
                dark:outline-offset-rich-black-500
                rounded-full
                bg-cultured
                dark:bg-oxford_blue dark:outline-rich-black-500
                outline-cultured
                drop-shadow-lg
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10 dark:stroke-cambridge_blue-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>

            <!-- <img
              class="w-20 h-20 rounded-full drop-shadow-lg"
              src="/images/me_1.png"
              alt="Avatar of Jonathan Reinink"
            /> -->

            <div class="flex pt-8 space-x-5">
              <!-- <img
                class="w-10 h-10 rounded-full drop-shadow-lg"
                src="/images/me_1.png"
                alt="Avatar of Jonathan Reinink"
              /> -->
              <div class="h-min">
                <a :href="project.url">
                  <button
                    class="
                      duration-300
                      ease-in-out
                      delay-50
                      p-1
                      transition-all
                      outline outline-offset-4 outline-offset-cultured
                      dark:outline-offset-rich-black-500
                      rounded-full
                      bg-cultured
                      dark:bg-oxford_blue dark:outline-rich-black-500
                      outline-cultured
                      drop-shadow-lg
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="
                        w-6
                        h-6
                        inline-block
                        dark:stroke-cambridge_blue-500
                      "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-7">
        <div class="mb-2 text-xl font-bold dark:text-off-white">
          {{ project.title }}
        </div>
        <p class="text-base text-gray-700 dark:text-off-white">
          {{ project.description }}
        </p>
      </div>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        v-for="(tag, index) in project.tags"
        :key="index"
        class="
          border
          dark:border-off-white dark:text-off-white
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
        >#{{ tag }}</span
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

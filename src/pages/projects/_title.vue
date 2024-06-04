<template>
  <div>
    <div
      class="
        py-52
        transition
        duration-300
        ease-in-out
        delay-150
        bg-cultured
        dark:bg-rich-black-600
        space-y-10
        px-4
        md:px-20
      "
    >
      <div class="flex flex-col justify-left md:space-y-5">
        <div class="pb-6">
          <nuxt-link
            :to="`${$nuxt.context.from.path}`"
            class="
              px-4
              py-2
              transition
              duration-300
              ease-in-out
              delay-150
              dark:text-off-white dark:border-off-white
              animate-bounce
            "
          >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="0.5"
                stroke="currentColor"
                class="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </nuxt-link>
        </div>
        <h2
          class="
            text-left text-5xl
            font-semibold
            text-fire_opal-500
            transition
            duration-300
            ease-in-out
            delay-150
            dark:text-orange_soda-500
          "
        >
          // {{ project_title }}
        </h2>
      </div>
      <div class="dark:text-white-100">
        <h2>Details Coming Soon</h2>
      </div>
      <hr class="dark:text-orange_soda-500" />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log("hre");
  },
  data() {
    return {
      project_title: this.$route.params.title,
    };
  },
};
</script>

<style>
</style>

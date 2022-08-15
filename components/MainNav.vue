<template>
  <nav class="sticky top-0 z-50 bg-off-white dark:bg-rich-black py-4">
    <div class="md:p-5 md:pl-10 md:pr-10 pl-3 pr-3 text-white">
      <div class="flex justify-between items-center">
        <div class="">
          <!-- <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox" value="" id="default-toggle" class="sr-only peer">
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span class="ml-3 text-sm font-medium">Toggle me</span>
                </label> -->
          <div
            class="flex items-center justify-center w-full dark:text-off-white"
          >
            <label for="toggleB" class="flex items-center cursor-pointer pt-5">
              <div class="text-gray-700 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  :class="{ 'fill-gold stroke-gold': !dark_mode_is_on }"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <!-- toggle -->
              <div class="relative">
                <!-- input -->
                <input
                  type="checkbox"
                  @click="toggleDarkMode()"
                  id="toggleB"
                  class="sr-only"
                />
                <!-- line -->
                <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <!-- dot -->
                <div
                  class="
                    dot
                    absolute
                    left-1
                    top-1
                    bg-white
                    w-6
                    h-6
                    rounded-full
                    transition
                  "
                ></div>
              </div>
              <!-- label -->
              <div class="ml-3 text-gray-700 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  :class="{ 'fill-gold': dark_mode_is_on }"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                  />
                </svg>
              </div>
            </label>
          </div>
          <!-- <button class="relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none bg-cyan-500 text-cyan-200 focus-visible:ring-cyan-600" id="headlessui-switch-5" role="switch" type="button" tabindex="0" aria-checked="false">
                    <span class="sr-only">
                    Disable dark mode</span>
                        <svg width="24" height="24" fill="none" aria-hidden="true" class="transform transition-transform scale-0 duration-500">
                            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <svg width="24" height="24" fill="none" aria-hidden="true" class="ml-3.5 transform transition-transform scale-100 duration-300">
                            <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <span class="absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform"><svg width="24" height="24" fill="none" aria-hidden="true" class="flex-none transition duration-500 transform text-cyan-500 opacity-100 scale-100">
                                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg><svg width="24" height="24" fill="none" aria-hidden="true" class="flex-none -ml-6 transition duration-500 transform text-slate-700 opacity-0 scale-0">
                                <path d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            </span>
                            </button> -->
        </div>

        <!-- <div class="flex space-x-6 hidden md:block">
                    <nuxt-link to="/" class="nav"> Home </nuxt-link>
                    <nuxt-link to="/about" class="nav"> About </nuxt-link>
                    <nuxt-link to="/team" class="nav"> Our Team </nuxt-link>
                    <nuxt-link to="/services" class="nav"> Our Services </nuxt-link>

                    <a href="mailto:csdcltd@gmail.com">Email Us</a>
                    <nuxt-link to="/publications" class="nav"> Publications </nuxt-link>
                </div> -->

        <div>
          <div
            class="
              flex
              space-x-8
              hidden
              md:block
              text-lg text-black
              dark:text-off-white
            "
          >
            <nuxt-link
              to="/"
              class="
                transition
                ease-in-out
                delay-150
                duration-300
                nav
                hover:-translate-y-1
                hover:scale-110
                hover:border
                hover:border-primary
                hover:rounded-lg
                hover:py-2
                hover:px-4
              "
            >
              Work
            </nuxt-link>
            <nuxt-link
              to="/about"
              class="
                nav
                transition
                ease-in-out
                delay-150
                hover:border
                hover:border-primary
                hover:rounded-lg
                hover:py-2
                hover:px-4
              "
              >More About Me
            </nuxt-link>
            <!-- <nuxt-link to="/team" class="nav"> Our Team </nuxt-link> -->
            <nuxt-link
              to="/services"
              class="
                nav
                transition
                ease-in-out
                delay-150
                hover:border
                hover:border-primary
                hover:rounded-lg
                hover:py-2
                hover:px-4
              "
            >
              CV
            </nuxt-link>
            <button
              class="
                md:visible
                invisible
                bg-transparent
                hover:bg-primary
                text-primary
                font-semibold
                hover:text-white
                py-2
                px-4
                border border-primary
                hover:border-transparent
                rounded-lg
              "
            >
              <a href="mailto:csdcltd@gmail.com"> Get In Touch </a>
            </button>
          </div>

          <button
            class="
              md:hidden
              outline outline-offset-2
              text-primary
              outline-primary
              mtt-4
            "
            @click="$emit('openNav')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNav",
  props: ["dark_mode_is_on"],
  data() {
    return {};
  },
  methods: {
    toggleDarkMode() {
      this.$emit("toggleDarkMode");
    },
  },
};
</script>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  /** background-color: #48bb78; **/
  background-color: #efc69b;
}
</style>

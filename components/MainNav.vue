<template>
  <div class="dark:bg-rich-black-500">
    <nav
      :class="{ 'bg-cambridge_blue-100': $nuxt.$route.path == '/about' }"
      class="
        md:px-10
        pb-3
        bg-cultured
        rounded-b-2xl
        dark:bg-rich-black-500
        transition
        ease-in-out
        delay-150
        duration-300
        dark:shadow-lg
      "
    >
      <!-- border-b-indigo-500
        dark:border-b-orange_soda-500
        dark:bg-rich-black-500
        border

         -->
      <!-- :class="{ 'shadow-lg': scrolling_down }" -->
      <div class="md:p-5 md:pl-10 md:pr-10 pl-3 pr-3 text-white">
        <div class="flex justify-between items-center">
          <div class="pt-8">
            <p class="font-medium text-2xl dark:text-orange_soda-400">
              Yusuf Shehu
            </p>
          </div>

          <div class="flex text-lg text-black dark:text-off-white">
            <div class="hidden md:block pt-5 space-x-8">
              <nuxt-link
                to="/"
                class="
                  transition-all
                  ease-in-out
                  delay-50
                  duration-200
                  nav
                  border-b-0 border border-t-0 border-r-0 border-l-0
                  hover:border-b-2
                  dark:border-cambridge_blue-500
                  dark:outline-deep_space_sparkle-100
                  rounded
                  py-2
                  px-4
                "
              >
                Home
              </nuxt-link>
              <nuxt-link
                to="/projects"
                class="
                  transition-all
                  ease-in-out
                  delay-50
                  duration-200
                  nav
                  border-b-0 border border-t-0 border-r-0 border-l-0
                  hover:border-b-2
                  dark:border-cambridge_blue-500
                  dark:outline-deep_space_sparkle-100
                  rounded
                  py-2
                  px-4
                "
              >
                Projects
              </nuxt-link>
              <nuxt-link
                to="/about"
                class="
                  transition-all
                  ease-in-out
                  delay-50
                  duration-200
                  nav
                  border-b-0 border border-t-0 border-r-0 border-l-0
                  hover:border-b-2
                  dark:border-cambridge_blue-500
                  dark:outline-deep_space_sparkle-100
                  rounded
                  py-2
                  px-4
                "
              >
                About Me
              </nuxt-link>
              <a
                href="https://ys-portfolio-site.s3.eu-west-1.amazonaws.com/Resume.pdf"
                target="_blank"
                class="
                  transition-all
                  ease-in-out
                  delay-50
                  duration-200
                  nav
                  border-b-0 border border-t-0 border-r-0 border-l-0
                  hover:border-b-2
                  dark:text-cambridge_blue-500
                  dark:border-cambridge_blue-500
                  dark:outline-deep_space_sparkle-100
                  rounded
                  py-2
                  px-4
                "
              >
                CV
              </a>
              <button
                class="
                  transition
                  ease-in-out
                  delay-150
                  duration-300
                  md:visible
                  invisible
                  bg-transparent
                  hover:border hover:bg-primary
                  text-primary
                  font-semibold
                  border-rich-black
                  dark:border-cambridge_blue-500
                  hover:-translate-y-1
                  hover:bg-dark_purple-400
                  hover:text-off-white
                  dark:hover:bg-cambridge_blue-500
                  dark:hover:text-smoky_black-500
                  py-2
                  px-4
                  border border-primary
                  rounded-lg
                "
              >
                <a href="mailto:yusufgshehu@gmail.com"> Get In Touch </a>
              </button>
            </div>
            <div class="inline-block pt-2 ml-5">
              <label
                for="toggleB"
                class="flex items-center cursor-pointer pt-5"
              >
                <div class="text-gray-700 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    :class="{
                      'fill-orange_soda-400 stroke-orange_soda-400':
                        !dark_mode_is_on,
                    }"
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
                  <div
                    class="block bg-smoky_black-200 w-14 h-8 rounded-full"
                  ></div>
                  <!-- dot -->
                  <div
                    class="
                      dot
                      absolute
                      left-1
                      top-1
                      bg-orange_soda-400
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
                    :class="{ 'fill-cambridge_blue-500': dark_mode_is_on }"
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
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainNav",
  props: ["dark_mode_is_on", "scrolling_down"],
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
  background-color: #c0d0c1;
}
</style>

<style scoped>
/* home route and active route will show in bold as it matches / and /about
a.nuxt-link-active {
  font-weight: bold;
}
*/

a.nuxt-link-exact-active {
  color: #f95738;
  font-weight: 600;
  border-bottom-width: 4px;
}
</style>

<template>
  <div class="dark:bg-rich-black-500">
    <nav
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
            <nuxt-link
              to="/"
              class="font-medium text-2xl dark:text-orange_soda-400"
            >
              Yusuf Shehu</nuxt-link
            >
          </div>

          <div class="flex text-lg text-black dark:text-off-white">
            <div class="hidden md:block pt-5 space-x-8">
              <nuxt-link
                to="/projects"
                class="
                  transition
                  ease-in-out
                  delay-50
                  duration-200
                  nav
                  hover:ring-1 hover:border
                  ring-offset-4
                  hover:ring-rich-black-500
                  dark:ring-deep_space_sparkle-100
                  hover:ring-offset-0
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
                  transition
                  ease-in-out
                  delay-50
                  hover:border
                  duration-200
                  nav
                  hover:ring-1
                  ring-offset-4
                  hover:ring-rich-black-500
                  dark:ring-deep_space_sparkle-100
                  hover:ring-offset-0
                  rounded
                  py-2
                  px-4
                "
              >
                About Me
              </nuxt-link>
              <a
                href="https://s3.us-east-2.amazonaws.com/www.inspireworks.com/Resume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCWV1LXdlc3QtMyJIMEYCIQDWd65h7a0R%2FhWSOAnZY%2FZh7eT5%2FdVYJEV3JeTIAnXpHQIhAMxx1kBAOuANCgamvDtmMdLnwlHHYTLHH%2Bzz8j1evON1KuQCCEAQAhoMNDg3NDU3NDIxMDExIgylgwOfffgUeKRK4hEqwQLpNNdhSFkixp5LBceXFCOxkvtRsO8Fk00RuVJkI2FhV3AikfWUVS993o1CuuzfB6SdiS9Ou10C4fXSO09nJDB%2Fk%2B1mWsItJPXukeUZ6QA9a5qi2NbioQ2mEhljdU8BJr649uNFzPMmzEDKiKXOukR8vlp3S6i8SR94oU3CMEXIlBN0L9spsV0ViFyuqQszU8DkoIGcSVkirg5JlNsv%2FU%2B5j%2FuIVkAdLfomtHj4jTZtYYk8k8GcMXyxqVUGQywY0fTBIlpdOAcoyJX8464d9Oe6QFxYiLmKHyyuyv%2BHpNveNM6N4Kmdv70xSMqoAPiNMvyED2OMngCTuD4SLp%2BPH3WamYjGTRji6tP3Aqcn2dJeK1lVdIwd7SGvux6PWURq9PauPTCSiNC03ReDWf9MgHvCwkiIFP4C11NzUQXBr2drAPQw%2Bpi%2BmgY6sgJNH7noEVkY0Io2NfE%2FBoPY5b3d6PpwKhB%2BmmdzPOQ%2BJGdKOhIeiK2GyVdhBOIHnFHrCWRjT7ScOJX86ZsZUizizGHo71ZmItbWG4uVPPB95S4kEYNzU8ekzVH2RRTk0PigADfOVKCaYlmX7KkGx6JaMH20rlOzGRUIsDtmmjVIw1EzI5juxmSj9F%2BzDLryB9ps5mPJAbFNdPlh8HLXPFJF4uMtGSYWOihpBquLqM8YQZsqZnwUA%2BAOeu4xu6vfmZYhcXNoq0ZWuADSC4YraMMyxrQbqpEYylYwuy96IBSrtpT6iAmz8RNVivGOflKFf9bZYQn9ej78cIBpMwg6gqP2xLYMRuv7SFuZXHiFw7DuEp8JYcrCXi5SBO7AEAT4jiDzTtB%2FbAznu8BteiNArTGpoYY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221019T121901Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAXC7VZ63J735DRQFV%2F20221019%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=d9a209880f4155b665d05250ebdbac92e1129b9858ffda6fadb69782d1cc2762"
                target="_blank"
                class="
                  transition
                  ease-in-out
                  delay-50
                  duration-200
                  nav
                  hover:border hover:ring-1
                  ring-offset-4
                  hover:ring-rich-black-500
                  dark:ring-deep_space_sparkle-100
                  hover:ring-offset-0
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
                  dark:border-off-white
                  hover:-translate-y-1
                  hover:bg-dark_purple-400
                  hover:text-off-white
                  dark:hover:bg-orange_soda-500 dark:hover:text-smoky_black-500
                  py-2
                  px-4
                  border border-primary
                  dark:hover:border-orange_soda-500
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
  background-color: #efc69b;
}
</style>

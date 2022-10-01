<!-- Please remove this file from your project -->
<template>
  <div>
    <div
      class="
        relative
        flex
        justify-start
        min-h-screen
        transition
        duration-300
        ease-in-out
        delay-150
        md:items-center md:pb-52
        pt-24
        sm:pb-0
        bg-cultured
        dark:bg-rich-black-500 dark:text-off-white
      "
    >
      <svg
        style=""
        class="
          absolute
          md:w-3/5
          -left-72
          transition
          ease-in-out
          delay-150
          duration-300
        "
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="
            fill-indigo-200
            dark:fill-orange_soda-700
            transition
            ease-in-out
            delay-150
            duration-300
          "
          d="M46.9,-73.1C58,-65.8,62.3,-48.1,60.2,-33.2C58.2,-18.3,49.9,-6.2,51.3,9.8C52.7,25.7,63.9,45.4,61.5,59.7C59,73.9,43,82.8,27.8,80.9C12.7,79,-1.5,66.4,-15.7,59.4C-29.8,52.5,-43.7,51.3,-52.7,44C-61.7,36.7,-65.6,23.3,-62.4,12.1C-59.2,0.8,-49,-8.5,-42.3,-17.7C-35.5,-26.9,-32.4,-36.2,-25.9,-45.6C-19.5,-55,-9.7,-64.6,4.1,-70.9C17.9,-77.3,35.8,-80.4,46.9,-73.1Z"
          transform="translate(100 100)"
        />
      </svg>

      <div class="max-w-4xl mx-auto px-6 md:px-2 z-10">
        <div class="flex flex-col justify-left">
          <h2
            class="
              pt-8
              text-opacity-50 text-xl text-left
              transition
              duration-300
              ease-in-out
              delay-150
              sm:pt-0
              md:text-2xl
            "
          >
            Hello I'm, <br />
            <span class="font-bold text-6xl"> Yusuf Shehu.</span>
          </h2>

          <h2
            class="
              pt-4
              text-dark_purple-300
              dark:text-orange_soda-500
              text-xl text-left
              transition
              duration-300
              ease-in-out
              delay-150
              md:text-2xl
            "
          >
            <span class="font-bold text-6xl"> I build apps for the web.</span>
          </h2>

          <p
            class="
              text-2xl
              font-light
              text-left
              transition
              duration-300
              ease-in-out
              delay-150
              mt-14
            "
          >
            I’m a fullstack developer. I enjoy vue and laravel, I also design
            things.
          </p>
          <br />
          <p
            class="
              italic
              text-left
              transition
              duration-300
              ease-in-out
              delay-150
            "
          >
            Currently a lead developer @ UBTConsults
            <span> <div id="cursor"></div></span>
          </p>

          <!-- <div
          style="right: -15rem"
          class="
            h-screen
            absolute
            transition
            duration-300
            ease-in-out
            delay-150
            top-60
          "
        > -->

          <!-- <animated-blob
            class="
              absolute
              transition
              duration-300
              ease-in-out
              delay-150
              top-60
              md:left-30
            "
          >
          </animated-blob> -->
          <!-- </div> -->
        </div>

        <!-- <div class="flex justify-start pt-4 space-x-2">
          <a href="https://github.com/nuxt/nuxt.js" target="_blank"
            ><svg
              class="w-6 h-6 text-gray-600 hover:text-gray-800 button--github"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z"
                fill="currentColor"
              /></svg
          ></a>
          <a href="https://twitter.com/nuxt_js" target="_blank"
            ><svg
              class="w-6 h-6 text-gray-600 hover:text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z"
                fill="currentColor"
              /></svg
          ></a>
        </div> -->
        <div class="flex justify-start py-5 space-x-4">
          <a
            href="mailto:yusufgshehu@gmail.com"
            class="
              px-6
              py-4
              transition
              duration-300
              ease-in-out
              delay-150
              rounded-lg
              bg-dark_purple-400
              text-off-white
              dark:bg-off-white dark:text-rich-black-500
            "
          >
            Work with me
          </a>

          <a
            href="#featured_projects"
            class="
              px-4
              py-2
              transition
              duration-300
              ease-in-out
              delay-150
              border
              rounded-full
              dark:text-off-white
              border-rich-black-500
              dark:border-off-white
              animate-bounce
            "
          >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mt-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AnimatedBlob from "./AnimatedBlob.vue";
export default {
  components: { AnimatedBlob },
  name: "NuxtTutorial",
};
</script>

<style scoped>
/* blinking cursor */
#cursor {
  background: black;
  line-height: 17px;
  -webkit-animation: blink 0.8s infinite;
  width: 2px;
  height: 10px;
  display: inline-block;
}

@-webkit-keyframes blink {
  0% {
    background: #222;
  }
  50% {
    background: #e6e6e6;
  }
  100% {
    background: #222;
  }
}
</style>

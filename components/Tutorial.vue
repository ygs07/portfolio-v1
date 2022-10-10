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

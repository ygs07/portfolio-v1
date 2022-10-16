<template>
 <canvas  id="canvas" width="400" height="400"></canvas>


</template>

<script>
export default {
  mounted (){
let layout = new rive.Layout({
        fit: rive.Fit.Contain,
        minX: 250,
        minY: 250,
        maxX: 400,
        maxY: 400,
    });
        new rive.Rive({
        // src: "https://cdn.rive.app/animations/vehicles.riv",
        src: "new_file-9.riv",
        // src: "animation.riv",
        layout: layout,

        // Or the path to a local Rive asset
        // src: './example.riv',
        canvas: document.getElementById("canvas"),
        autoplay: true
    });

  }
}
</script>

<style>

</style>


 <div
          class="
            group
            flex
            md:flex-row
            flex-col
            justify-center
            pt-20
            md:space-x-10 md:space-y-5
            px-4
            md:px-20
          "
        >
          <div
            class="
              w-full
              md:w-1/2 md:group-hover:translate-x-5
              transition
              duration-300
              ease-in-out
              delay-150
            "
          >
            <div class="">
              <img
                class="w-full md:w-4/5 rounded-lg border shadow-2xl"
                src="images/sample.jpg"
                alt="Sunset in the mountains"
              />
            </div>
          </div>

          <div class="relative w-full md:w-1/2">
            <div class="md:absolute md:top-10 md:-left-20">
              <div
                class="
                  md:w-5/6
                  w-full
                  transition
                  duration-300
                  ease-in-out
                  delay-150
                  rounded-md
                  group-hover:shadow-lg
                  shadow-md
                  bg-white
                  dark:bg-rich-black-500
                  md:group-hover:-translate-x-5
                  dark:border-rich-black-600
                  group-hover:border-smoky_black-200
                  dark:group-hover:border-cambridge_blue-500
                "
              >
                <div class="px-6 py-4">
                  <div
                    class="mb-4 text-2xl font-bold dark:text-orange_soda-500"
                  >
                    Schooltry
                  </div>
                  <p
                    class="
                      text-lg
                      leading-relaxed
                      text-gray-700
                      dark:text-off-white
                    "
                  >
                    Schooltry is an innovative app that automates the whole
                    schooling process for schools, parents, students and
                    teachers.
                  </p>
                </div>
              </div>
              <div>
                <div class="pt-4 pb-2">
                  <span
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
                    >#Webapp</span
                  >
                  <span
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
                    >#Mobileapp</span
                  >
                  <button>
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
                  <!-- </span> -->
                </div>
                <button
                  class="
                    mt-4
                    px-3
                    py-3
                    transition
                    ring-offset-2 ring-2
                    hover:ring-offset-0
                    duration-300
                    dark:ring-offset-orange_soda-500
                    ease-in-out
                    delay-50
                    rounded-lg
                    ring-rich-black-500
                    text-rich-black-500
                    dark:ring-orange_soda-500 dark:text-orange_soda-500
                  "
                >
                  <nuxt-link to="/"> Read More </nuxt-link>
                </button>
              </div>
            </div>
          </div>
          <!-- <div v-for="n in 3" :key="n"> -->
          <!-- <project-card
          v-for="(project, index) in projects"
          :key="index"
          :description="project.description"
          :title="project.title"
          :src="project.img_src"
        >
        </project-card> -->
          <!-- </div> -->
          <!-- <div
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
          <img
            class="w-full"
            src="images/sample.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="mb-2 text-xl font-bold dark:text-off-white">
              Schooltry
            </div>
            <p class="text-base text-gray-700 dark:text-off-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
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
        </div> -->
        </div>

        <div
          class="
            group
            flex
            md:flex-row-reverse
            flex-col
            justify-center
            pt-20
            md:space-x-10 md:space-y-5
            px-4
            md:px-20
          "
        >
          <div
            class="
              w-full
              md:w-1/2 md:group-hover:-translate-x-5
              transition
              duration-300
              ease-in-out
              delay-150
            "
          >
            <div class="">
              <img
                class="w-full md:w-4/5 rounded-lg border shadow-2xl"
                src="images/sample.jpg"
                alt="Sunset in the mountains"
              />
            </div>
          </div>

          <div class="relative w-full md:w-1/2">
            <div class="md:absolute md:top-10 md:-left-20">
              <div
                class="
                  md:w-5/6
                  w-full
                  transition
                  duration-300
                  ease-in-out
                  delay-150
                  rounded-md
                  group-hover:shadow-lg
                  shadow-md
                  bg-white
                  dark:bg-rich-black-500
                  md:group-hover:translate-x-5
                  dark:border-rich-black-600
                  group-hover:border-smoky_black-200
                  dark:group-hover:border-cambridge_blue-500
                "
              >
                <div class="px-6 py-4">
                  <div
                    class="mb-4 text-2xl font-bold dark:text-orange_soda-500"
                  >
                    Schooltry Tertiary
                  </div>
                  <p
                    class="
                      text-lg
                      leading-relaxed
                      text-gray-700
                      dark:text-off-white
                    "
                  >
                    Schooltry is an innovative app that automates the whole
                    schooling process for schools, parents, students and
                    teachers.
                  </p>
                </div>
              </div>
              <div class="pl-3">
                <div class="pt-4 pb-2">
                  <span
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
                    >#Webapp</span
                  >
                  <span
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
                    >#Mobileapp</span
                  >
                  <button>
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
                  <!-- </span> -->
                </div>
                <button
                  class="
                    mt-4
                    px-3
                    py-3
                    transition
                    ring-offset-2 ring-2
                    hover:ring-offset-0
                    duration-300
                    dark:ring-offset-orange_soda-500
                    ease-in-out
                    delay-50
                    rounded-lg
                    ring-rich-black-500
                    text-rich-black-500
                    dark:ring-orange_soda-500 dark:text-orange_soda-500
                  "
                >
                  <nuxt-link to="/"> Read More </nuxt-link>
                </button>
              </div>
            </div>
          </div>
        </div>


          <div
          class="
            group
            flex
            md:flex-row
            flex-col
            justify-center
            pt-20
            md:space-x-10 md:space-y-5
            px-4
            md:px-20
          "
        >
          <div
            class="
              w-full
              md:w-1/2 md:group-hover:translate-x-5
              transition
              duration-300
              ease-in-out
              delay-150
            "
          >
            <div class="">
              <img
                class="w-full md:w-4/5 rounded-lg border shadow-2xl"
                src="images/sample.jpg"
                alt="Sunset in the mountains"
              />
            </div>
          </div>

          <div class="relative w-full md:w-1/2">
            <div class="md:absolute md:top-10 md:-left-20">
              <div
                class="
                  md:w-5/6
                  w-full
                  transition
                  duration-300
                  ease-in-out
                  delay-150
                  rounded-md
                  group-hover:shadow-lg
                  shadow-md
                  bg-white
                  dark:bg-rich-black-500
                  md:group-hover:-translate-x-5
                  dark:border-rich-black-600
                  group-hover:border-smoky_black-200
                  dark:group-hover:border-cambridge_blue-500
                "
              >
                <div class="px-6 py-4">
                  <div
                    class="mb-4 text-2xl font-bold dark:text-orange_soda-500"
                  >
                    Schooltry
                  </div>
                  <p
                    class="
                      text-lg
                      leading-relaxed
                      text-gray-700
                      dark:text-off-white
                    "
                  >
                    Schooltry is an innovative app that automates the whole
                    schooling process for schools, parents, students and
                    teachers.
                  </p>
                </div>
              </div>
              <div>
                <div class="pt-4 pb-2">
                  <span
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
                    >#Webapp</span
                  >
                  <span
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
                    >#Mobileapp</span
                  >
                  <button>
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
                  <!-- </span> -->
                </div>
                <button
                  class="
                    mt-4
                    px-3
                    py-3
                    transition
                    ring-offset-2 ring-2
                    hover:ring-offset-0
                    duration-300
                    dark:ring-offset-orange_soda-500
                    ease-in-out
                    delay-50
                    rounded-lg
                    ring-rich-black-500
                    text-rich-black-500
                    dark:ring-orange_soda-500 dark:text-orange_soda-500
                  "
                >
                  <nuxt-link to="/"> Read More </nuxt-link>
                </button>
              </div>
            </div>
          </div>

        </div>

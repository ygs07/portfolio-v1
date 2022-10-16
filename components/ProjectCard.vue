<template>
  <div>
    <!-- <svg
      class="absolute md:w-3/5 transition ease-in-out delay-150 duration-300"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FF0066"
        d="M33.3,-44.3C39.6,-41.3,38.5,-26.8,41,-14.4C43.5,-2.1,49.5,8,51,20.6C52.4,33.3,49.4,48.6,40.2,54C30.9,59.5,15.5,55,1.6,52.8C-12.2,50.6,-24.4,50.5,-29.8,43.8C-35.1,37.1,-33.6,23.8,-38.5,11.8C-43.3,-0.2,-54.6,-10.8,-51.9,-16.1C-49.1,-21.5,-32.4,-21.6,-21.5,-23C-10.5,-24.5,-5.2,-27.3,4.1,-33C13.5,-38.7,27.1,-47.3,33.3,-44.3Z"
        transform="translate(100 100)"
      />
    </svg> -->
    <div
      :class="{
        'md:flex-row-reverse': row_reversed,
        group: !project.details_coming_soon,
      }"
      class="
        flex
        md:flex-row
        flex-col
        justify-center
        pt-20
        md:space-x-10 md:space-y-5
        px-4
        md:px-20
        z-10
      "
    >
      <div
        :class="{
          'md:group-hover:-translate-x-5': row_reversed,
          'md:group-hover:translate-x-5': !row_reversed,
        }"
        class="w-full md:w-1/2 transition duration-300 ease-in-out delay-150"
      >
        <div class="">
          <img
            :class="{
              'shadow-2xl': !project.details_coming_soon,
              grayscale: project.details_coming_soon,
            }"
            class="w-full md:w-4/5 rounded-lg"
            :src="project.img_src"
            alt="Sunset in the mountains"
          />
        </div>
      </div>

      <div class="relative w-full md:w-1/2">
        <div class="md:absolute md:-left-20 w-full">
          <div
            :class="{
              'md:group-hover:translate-x-5': row_reversed,
              'shadow-md': !project.details_coming_soon,
              'dark:bg-oxford_blue': !project.details_coming_soon,
            }"
            class="
              md:w-5/6
              w-full
              transition
              duration-300
              ease-in-out
              delay-150
              rounded-md
              group-hover:shadow-lg
              bg-white
              md:group-hover:-translate-x-5
              dark:border-rich-black-600
              group-hover:border-smoky_black-200
              dark:group-hover:border-cambridge_blue-500
            "
          >
            <div class="py-4" :class="{ 'px-6': !project.details_coming_soon }">
              <div class="mb-4 text-2xl font-bold dark:text-off-white">
                {{ project.title }}
                <br />
                <span class="text-sm font-normal"> {{ project.date }} </span>
              </div>
              <p
                class="
                  text-lg
                  leading-relaxed
                  text-gray-700
                  dark:text-off-white
                "
              >
                {{ project.description }}
              </p>
            </div>
          </div>
          <div :class="{ 'pl-4': row_reversed }">
            <div class="pt-4 pb-2">
              <div v-show="!project.details_coming_soon">
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

                <a :href="project.url" v-if="project.url">
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
                </a>
              </div>
              <!-- </span> -->
            </div>
            <nuxt-link
              :to="'/projects/' + project.title"
              v-if="!project.details_coming_soon"
            >
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
                Read More
              </button>
            </nuxt-link>

            <div v-else>
              <span
                class="
                  border
                  dark:border-off-white dark:text-off-white
                  inline-block
                  mt-4
                  px-3
                  py-3
                  text-sm
                  font-semibold
                  text-gray-700
                  bg-gray-200
                  rounded-full
                "
                >Details Coming Soon</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project", "row_reversed"],
};
</script>

<style>
</style>

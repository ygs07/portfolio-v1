<template>
  <div>
    <!-- <main-nav
      :dark_mode_is_on="dark_mode_is_active"
      @toggleDarkMode="toggleDarkMode()"
    >
    </main-nav> -->
    <Tutorial />

    <div
      id="featured_projects"
      class="
        py-52
        transition
        duration-300
        ease-in-out
        delay-150
        bg-cultured
        md:px-16
        dark:bg-rich-black-600
      "
    >
      <div class="px-5">
        <h1
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
          // Featured Projects
        </h1>
      </div>
      <div class="space-y-32">
        <project-card
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
          :row_reversed="project.row_reversed"
        >
        </project-card>
      </div>

      <div class="py-48">
        <h1
          class="
            text-center text-2xl
            font-semibold
            text-smoky_black-300
            transition
            duration-300
            ease-in-out
            delay-150
            dark:text-orange_soda-500
          "
        >
          <code> // </code>Other Projects
        </h1>

        <div class="flex flex-wrap justify-center md:space-x-5 py-20">
          <mini-project-card
            class="w-full md:w-1/3"
            v-for="(project, index) in other_projects"
            :project="project"
            :key="index"
          >
          </mini-project-card>
        </div>
      </div>
    </div>

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
        bg-off-white
        dark:bg-rich-black-500 dark:text-off-white
      "
    >
      <div class="mx-auto max-w-7xl px-6 md:px-8">
        <!-- <div class="flex flex-col justify-left"> -->
        <div class="flex flex-wrap justify-center">
          <div class="w-full md:w-1/2">
            <h2
              class="
                pt-8
                text-smoky_black-400
                dark:text-cambridge_blue-500
                text-2xl
                font-bold
                text-left
                transition
                duration-300
                ease-in-out
                delay-150
                sm:pt-0
                md:text-4xl
              "
            >
              // About Me
            </h2>

            <div class="pt-20 flex flex-wrap">
              <div>
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p class="ml-2">Nigeria</p>
              </div>

              <div class="pl-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
                <p class="mt-1">Yusufgshehu@gmail.com</p>
              </div>
            </div>
            <ul
              class="
                flex
                border-b
                mt-5
                tabs
                transition
                duration-300
                ease-in-out
                delay-150
              "
            >
              <li
                class="
                  -mb-px
                  mr-1
                  transition
                  duration-300
                  ease-in-out
                  delay-150
                "
              >
                <button
                  v-bind:class="{
                    ' border-l border-t border-r rounded-t transition   ease-in-out duration-300':
                      technical_tab_is_active,
                  }"
                  @click="switchTab(0)"
                  class="
                    bg-white
                    inline-block
                    py-2
                    px-4
                    text-blue-700
                    font-semibold
                  "
                >
                  Technical
                </button>
              </li>
              <li class="mr-1 transition duration-300 ease-in-out delay-150">
                <button
                  v-bind:class="{
                    'border-l border-t border-r rounded-t':
                      personal_tab_is_active,
                  }"
                  @click="switchTab(1)"
                  class="
                    bg-white
                    inline-block
                    py-2
                    px-4
                    text-blue-500
                    hover:text-blue-800
                    font-semibold
                  "
                >
                  Personal
                </button>
              </li>
            </ul>
            <div
              v-show="personal_tab_is_active"
              class="transition duration-300 ease-in-out delay-150"
            >
              <p
                v-bind:class="{
                  'transition duration-300 ease-in-out delay-150':
                    personal_tab_is_active,
                }"
                class="text-xl font-light text-left mt-14"
              >
                I Like all things tech, I enjoy gaming and sports (mostly
                football).
              </p>
            </div>
            <div
              v-show="technical_tab_is_active"
              class="transition duration-300 ease-in-out delay-150"
            >
              <p
                class="
                  text-xl
                  font-light
                  text-left
                  transition
                  duration-300
                  ease-in-out
                  delay-150
                  mt-14
                "
              >
                Hello! my name is Yusuf Shehu, I'm a laravel and vue developer.
                I've been building things for the web for 4 years(and counting).
                I live in Nigeria and currently work as a fullstack developer
                and Lead developer at UBTConsults.
              </p>

              <p
                class="
                  text-xl
                  font-light
                  text-left
                  transition
                  duration-300
                  ease-in-out
                  delay-150
                  mt-5
                "
              >
                I specialize in web dev with vue and laravel but I also dabble
                in Graphics Design, UI/UX Design and Mobile dev. I enjoy working
                on developing User friendly experiences for the web and
                collaborating with designers to do so.
              </p>

              <p
                class="
                  text-xl
                  font-light
                  text-left
                  transition
                  duration-300
                  ease-in-out
                  delay-150
                  mt-5
                "
              >
                Over the course of my career i've been privileged to work at a
                Startup, develop multiple applications for Government
                Organisations, high profile Organisations, build applications
                for new companies, ran a small graphics design brand and
                designed for individuals. I along with my teammates also
                maintain a codebase that services schools and colleges across
                Africa, in Sweden, UK and US.
              </p>
              <div class="mt-5">
                <p
                  class="
                    text-xl
                    font-light
                    text-left
                    transition
                    duration-300
                    ease-in-out
                    delay-150
                  "
                >
                  Here are some technologies that I work with:
                </p>

                <div class="flex py-2 px-4 space-x-8">
                  <ul class="list-disc">
                    <li>Vue</li>
                    <li>Laravel</li>
                    <li>MySql</li>
                  </ul>
                  <ul class="list-disc">
                    <li>Node JS</li>
                    <li>Mongo DB</li>
                    <li>Express JS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div
              class="
                md:ml-5
                mt-20
                ring ring-offset-4 ring-rich-black-500
                dark:ring-orange_soda-300
                hover:ring-offset-0
                transition
                duration-300
                ease-in-out
                delay-150
                max-w-sm
                rounded
                overflow-hidden
                hover:shadow-lg
                grayscale
                hover:grayscale-0
              "
            >
              <img
                class="w-full transition duration-300 ease-in-out delay-150"
                src="images/me_1.png"
                alt="Sunset in the mountains"
              />
            </div>
          </div>
        </div>
        <br />

        <div>
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
        </div>
        <!-- </div> -->

        <div class="flex justify-start pt-4 space-x-2">
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
        </div>
        <div class="flex justify-start py-5 space-x-4">
          <nuxt-link
            to="/"
            class="
              px-6
              py-4
              transition
              duration-300
              ease-in-out
              delay-150
              rounded-lg
              bg-rich-black-500
              text-off-white
              dark:bg-off-white dark:text-rich-black-500
            "
          >
            Resume
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainNav from "../components/MainNav.vue";
import MiniProjectCard from "../components/MiniProjectCard.vue";
import ProjectCard from "../components/ProjectCard.vue";
export default {
  components: { MainNav, ProjectCard, MiniProjectCard },
  name: "IndexPage",
  methods: {
    switchTab(index) {
      if (index == 0) {
        this.technical_tab_is_active = true;
        this.personal_tab_is_active = false;
      }
      if (index == 1) {
        this.personal_tab_is_active = true;
        this.technical_tab_is_active = false;
      }
    },
  },
  data() {
    return {
      personal_tab_is_active: false,
      technical_tab_is_active: true,

      //
      projects: [
        {
          title: "Schooltry",
          description:
            "Schooltry is an innovative app that automates the whole schooling process for schools, parents, students and teachers it also serves as the School mangement software for The Nigeria Army's Command Secondary Schools.",
          img_src: "images/schooltry_screenshot.png",
          row_reversed: false,
          url: "https://www.schooltry.com/",
          tags: ["Work", "WebApp", "MobileApp"],
        },
        {
          title: "GoHealth",
          description:
            "Short for Gombe State Contributory Healthcare Management Scheme is a an webapp that provides that's used by Gombe State to provide reliable and innovative healthcare services to the citizens of Gombe state.",
          img_src: "images/Gohealth_screenshot.png",
          row_reversed: true,
          url: "https://gmchma.gm.gov.ng/",
          tags: ["Work", "WebApp", "MobileApp", "PWA"],
        },
        {
          title: "Digital Registry",
          description:
            "Also used by Gombe State government is a nation-wide database for used to identify and qualify poverty-stricken citizens in Gombe State and then qualify them for the healthcare services being offered to the poverty-stricken in Gombe State.   ",
          img_src: "images/dr_screenshot.png",
          row_reversed: false,
          url: "https://digital-registry.gmchma.gm.gov.ng/",
          tags: ["Work", "WebApp", "MobileApp", "PWA"],
        },
        // {
        // title: "Schooltry Tertiary",
        // description: "Lorem ipsum text dorem",
        // img_src: "images/schooltry-logo.png",
        // row_reversed: true,
        // },
        // {
        //   title: "NUE Enroller",
        //   description: "Lorem ipsum text dorem",
        //   img_src: "images/schooltry-logo.png",
        //   row_reversed: false,
        // },

        // GoHealth: {
        //   title: "GoHealth",
        //   description: "Lorem ipsum text dorem",
        //   img_src: "images/schooltry-logo.png",
        // },
      ],
      other_projects: [
        {
          title: "Schooltry Tertiary",
          description: "Lorem ipsum text dorem",
          img_src: "images/schooltry-logo.png",
          tags: ["Work", "WebApp", "MobileApp"],
        },
        {
          title: "NUE Enroller",
          description:
            "Schooltry is an innovative app that automates the whole schooling process for schools, parents, students and teachers.",
          img_src: "images/schooltry-logo.png",

          tags: ["Work", "WebApp", "MobileApp"],
        },
        {
          title: "NAPPS Dues",
          description:
            "Schooltry is an innovative app that automates the whole schooling process for schools, parents, students and teachers.",
          img_src: "images/schooltry-logo.png",
          tags: ["Work", "WebApp", "MobileApp"],
        },
      ],
    };
  },
};
</script>

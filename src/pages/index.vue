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
        py-10
        pb-52
        transition
        duration-300
        ease-in-out
        delay-150
        bg-cultured
        md:px-16
        dark:bg-rich-black-500
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
          <span class="text-smoky_black-500 dark:text-cambridge_blue-500"
            >//</span
          >
          Featured Projects<span
            class="text-smoky_black-500 dark:text-cambridge_blue-500"
            >...</span
          >
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
    </div>
    <div class="py-48 pt-20 md:px-16 pb-52 bg-platinum dark:bg-rich-black-500">
      <div class="flex justify-center">
        <h1
          class="
            text-left
            md:pl-14
            text-2xl
            font-semibold
            text-smoky_black-300
            transition
            duration-300
            ease-in-out
            delay-150
            dark:text-orange_soda-500
          "
        >
          //Other Projects
        </h1>
      </div>
      <div
        class="
          flex flex-wrap
          justify-center
          space-y-20
          px-4
          md:space-y-0 md:space-x-5
          py-20
        "
      >
        <mini-project-card
          class="w-full md:w-1/3"
          v-for="(project, index) in other_projects"
          :project="project"
          :key="index"
        >
        </mini-project-card>
      </div>
      <div class="flex justify-center">
        <button
          class="
            mt-4
            px-3
            py-3
            transition-all
            outline-offset-2 outline-2
            hover:outline-offset-0
            duration-300
            dark:outline-offset-orange_soda-500
            ease-in-out
            outline
            delay-50
            rounded-lg
            outline-rich-black-500
            text-rich-black-500
            dark:outline-orange_soda-500 dark:text-orange_soda-500
          "
        >
          <nuxt-link to="/projects"> View Archives </nuxt-link>
        </button>
      </div>
    </div>

    <!-- <div
      class="
        pb-52
        pt-20
        transition
        duration-300
        ease-in-out
        delay-150
        bg-cultured
        md:px-16
        dark:bg-rich-black-600
        bg-off-white
        dark:bg-rich-black-500 dark:text-off-white
      "
    >
      <div
        class="
          pb-52
          transition
          duration-300
          ease-in-out
          rounded-lg
          delay-150
          bg-cambridge_blue-200
          md:px-16
          dark:bg-rich-black-500 dark:text-off-white
        "
      >
        <div class="mx-auto ml-10">
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
            // Reviews
          </h1>
        </div>
        <div
          class="
            flex flex-wrap
            justify-center
            space-x-0 space-y-4
            md:space-y-0 md:space-x-6
            pt-10
            px-4
          "
        >
          <div class="max-w-sm w-full md:w-1/3">
            <div
              class="
                rounded-xl
                bg-cultured
                dark:bg-oxford_blue
                drop-shadow-md
                p-4
                py-16
                flex flex-col
                justify-between
                leading-normal
              "
            >
              <div class="mb-8">
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="flex items-center">
                <img
                  class="w-14 h-14 rounded-full mr-4 drop-shadow-lg"
                  src="/images/me_1.png"
                  alt="Avatar of Jonathan Reinink"
                />
                <div class="text-lg">
                  <p class="font-bold leading-none">Client</p>
                </div>
              </div>
            </div>
          </div>
          <div class="max-w-sm w-full md:w-1/3">
            <div
              class="
                rounded-xl
                bg-cultured
                dark:bg-oxford_blue
                drop-shadow-md
                p-4
                py-16
                flex flex-col
                justify-between
                leading-normal
              "
            >
              <div class="mb-8">
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="flex items-center">
                <img
                  class="w-14 h-14 rounded-full mr-4 drop-shadow-lg"
                  src="/images/me_1.png"
                  alt="Avatar of Jonathan Reinink"
                />
                <div class="text-lg">
                  <p class="font-bold leading-none">Client</p>
                </div>
              </div>
            </div>
          </div>
          <div class="max-w-sm w-full md:w-1/3">
            <div
              class="
                rounded-xl
                bg-cultured
                dark:bg-oxford_blue
                drop-shadow-md
                p-4
                py-16
                flex flex-col
                justify-between
                leading-normal
              "
            >
              <div class="mb-8">
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="flex items-center">
                <img
                  class="w-14 h-14 rounded-full mr-4 drop-shadow-lg"
                  src="/images/me_1.png"
                  alt="Avatar of Jonathan Reinink"
                />
                <div class="text-lg">
                  <p class="font-bold leading-none">Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import MainNav from "../components/MainNav.vue";
import MiniProjectCard from "../components/MiniProjectCard.vue";
import ProjectCard from "../components/ProjectCard.vue";
export default {
  components: { MainNav, ProjectCard, MiniProjectCard },
  name: "IndexPage",

  data() {
    return {
      personal_tab_is_active: false,
      technical_tab_is_active: true,

      //
      projects: [
        {
          title: "Schooltry",
          description:
            "Schooltry is an innovative app that automates the whole schooling process for schools, parents, students and teachers. Currently it is used as the School management software for The Nigeria Army's Command Secondary Schools and also currently being used all across Africa.",
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
          description:
            "A newer version of the schooltry app built for colleges and higher level educational settings. It is built with newer versions of the technologies used in schooltry including a payments system, a virtual classroom, a grading system and more.",
          img_src: "images/schooltry-logo.png",
          tags: ["Work", "WebApp", "MobileApp"],
        },
        {
          title: "NUE Enroller",
          description:
            "This is a payment portal developed for The Nigerian National Association of Proprietors of Private Schools (NAPPS) for private schools in Nigeria to register for the National Unified Examination. ",
          img_src: "images/schooltry-logo.png",
          url: "https://napps-enroller.withschooltry.com/",
          tags: ["Work", "WebApp", "MobileApp"],
        },
        {
          title: "NAPPS Dues",
          url: "https://napps-dues.withschooltry.com/",
          description:
            "This is a payment portal for The Nigerian National Association of Proprietors of Private Schools (NAPPS), it is used by private schools in Nigeria to pay any outstanding fees for the National Unified Examination and upcoming National conferences being hosted by NAPPS",
          img_src: "images/napps.png",
          tags: ["Work", "WebApp", "MobileApp"],
        },
      ],
    };
  },
};
</script>

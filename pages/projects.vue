<template>
  <div>
    <!-- <main-nav
      :dark_mode_is_on="dark_mode_is_active"
      @toggleDarkMode="toggleDarkMode()"
    >
    </main-nav> -->

    <div
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
      <div class="flex justify-left md:space-x-10 md:space-y-5 px-4 md:px-20">
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
          // Projects
        </h2>
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
  </div>
</template>

<script>
import MainNav from "../components/MainNav.vue";
import ProjectCard from "../components/ProjectCard.vue";
export default {
  components: { MainNav, ProjectCard },

  methods: {
    toggleDarkMode() {
      if (this.dark_mode_is_active) {
        this.dark_mode_is_active = false;
      } else {
        this.dark_mode_is_active = true;
      }
    },
  },

  data() {
    return {
      //
      dark_mode_is_active: false,

      //projects
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
          row_reversed: false,
          url: "https://gmchma.gm.gov.ng/",
          tags: ["Work", "WebApp", "MobileApp"],
        },
        {
          title: "Digital Registry",
          description:
            "Also used by Gombe State government is a nation-wide database for used to identify and qualify poverty-stricken citizens in Gombe State and then qualify them for the healthcare services being offered to the poverty-stricken in Gombe State.   ",
          img_src: "images/dr_screenshot.png",
          row_reversed: false,
          url: "https://digital-registry.gmchma.gm.gov.ng/",
          tags: ["Work", "WebApp", "MobileApp"],
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <div
      class="
        pt-24
        transition
        duration-300
        ease-in-out
        delay-150
        bg-cultured
        md:px-16
        dark:bg-rich-black-500
      "
    >
      <div class="flex flex-col justify-left px-4 md:px-20 pb-20">
        <div class="md:w-2/3 flex flex-col">
          <h2
            class="
              text-left text-3xl
              md:text-5xl
              font-semibold
              text-fire_opal-500
              transition
              duration-300
              ease-in-out
              delay-150
              pb-9
              dark:text-orange_soda-500
            "
          >
            <span class="text-smoky_black-500 dark:text-cambridge_blue-500"
              >//</span
            >About My Projects<span
              class="text-smoky_black-500 dark:text-cambridge_blue-500"
              >.</span
            >
          </h2>

          <p class="text-xl leading-9 dark:text-white-100">
            I work with self-made designs and collaborating with designers to
            build interactive, accessible and user friendly products. From
            working with small scale local businesses to international scale
            products like Schooltry, Schooltry Tertiary, GoHealth for the Gombe
            State government and the National Digital Registry for Nigeria, I've
            worked on, debugged, created and designed features and products used
            by thousands in their daily lives and professional lives.
          </p>
        </div>
      </div>

      <div class="space-y-32 justify-self-center">
        <project-card
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
          :row_reversed="project.row_reversed"
        >
        </project-card>
      </div>

      <!-- <div class="flex justify-left md:space-x-10 md:space-y-5 px-4 md:px-20">
        <h2
          class="
            text-left text-sm
            font-semibold
            text-fire_opal-500
            transition
            duration-300
            ease-in-out
            delay-150
            dark:text-orange_soda-500
          "
        >
          // more coming soon
        </h2>
      </div> -->
    </div>
  </div>
</template>

<script>
import ProjectCard from "../../components/ProjectCard.vue";
export default {
  components: { ProjectCard },

  data() {
    return {
      //

      //projects
      projects: [
        {
          title: "Schooltry",
          date: "2020",
          description:
            "Schooltry is an innovative app that automates the whole schooling process for schools, parents, students and teachers it also serves as the School mangement software for The Nigeria Army's Command Secondary Schools.",
          img_src: "images/schooltry_screenshot.png",
          details_coming_soon: true,
          row_reversed: false,
          url: "https://www.schooltry.com/",
          tags: ["Work", "WebApp", "MobileApp"],
        },
        {
          title: "GoHealth",
          date: "2021",
          details_coming_soon: true,
          description:
            "Short for Gombe State Contributory Healthcare Management Scheme is a an webapp that provides that's used by Gombe State to provide reliable and innovative healthcare services to the citizens of Gombe state.",
          img_src: "images/Gohealth_screenshot.png",
          row_reversed: false,
          url: "https://gmchma.gm.gov.ng/",
          tags: ["Work", "WebApp", "MobileApp", "PWA"],
        },
        {
          title: "Digital Registry",
          date: "2022",
          details_coming_soon: true,

          description:
            "Also used by Gombe State government is a nation-wide database for used to identify and qualify poverty-stricken citizens in Gombe State and then qualify them for the healthcare services being offered to the poverty-stricken in Gombe State.   ",
          img_src: "images/dr_screenshot.png",
          row_reversed: false,
          url: "https://digital-registry.gmchma.gm.gov.ng/",
          tags: ["Work", "WebApp", "MobileApp", "PWA"],
        },
        {
          title: "Schooltry Tertiary",
          date: "2021",
          details_coming_soon: true,
          description:
            "A newer version of the schooltry app built for colleges and higher level educational settings. It is built with newer versions of the technologies used in schooltry including a payments system, a virtual classroom, a grading system and more.",
          row_reversed: false,
          img_src: "images/code_screen.svg",
          tags: ["Work", "WebApp", "MobileApp"],
        },
        {
          title: "NUE Enroller",
          date: "2020",
          details_coming_soon: true,

          description:
            "This is a payment portal developed for The Nigerian National Association of Proprietors of Private Schools (NAPPS) for private schools in Nigeria to register for the National Unified Examination",
          img_src: "images/nue_enroller.png",
          row_reversed: false,
          tags: ["Work", "WebApp", "MobileApp"],
        },
        {
          title: "NAPPS Dues",
          date: "2020",
          details_coming_soon: true,

          url: "https://napps-dues.withschooltry.com/",
          description:
            "This is a payment portal for The Nigerian National Association of Proprietors of Private Schools (NAPPS), it is used by private schools in Nigeria to pay any outstanding fees for the National Unified Examination and upcoming National conferences being hosted by NAPPS",
          row_reversed: false,
          img_src: "images/napps.png",
          tags: ["Work", "WebApp", "MobileApp"],
        },
        // {
        //   title: "Contactutors",
        //   date: "2020",
        //   description:
        //     "Contactutors is a platform that helps people with teaching skills find tutoring jobs and also provides ",
        //   img_src: "images/dr_screenshot.png",
        //   row_reversed: false,
        //   url: "https://digital-registry.gmchma.gm.gov.ng/",
        //   tags: ["Personal", "WebApp"],
        // },
        {
          title: "Recipelal",
          date: "2022",
          details_coming_soon: true,

          description: "More details will Be available soon...👨‍💻",
          img_src: "images/recipelal_screenshot.png",
          row_reversed: false,
          // url: "https://digital-registry.gmchma.gm.gov.ng/",
          tags: ["Personal", "WebApp"],
        },
        {
          title: "Iworks",
          details_coming_soon: true,

          date: "2018",
          description:
            "Iworks is a website for a design brand, it specializes in Graphics Design and web design. ",
          img_src: "images/iworks-screenshot.png",
          row_reversed: false,
          url: "https://funny-kitten-cf395b.netlify.app",
          tags: ["Personal", "WebApp"],
        },
        {
          title: "Kadverts",
          date: "2020",
          details_coming_soon: true,

          description: "More details will Be available soon...👨‍💻",
          // img_src: "images/dr_screenshot.png",
          img_src: "images/code_screen.svg",
          row_reversed: false,
          // url: "https://digital-registry.gmchma.gm.gov.ng/",
          tags: ["Personal", "WebApp"],
        },
        {
          title: "Kadverts Coming Soon",
          date: "2019",
          details_coming_soon: true,

          description:
            "This was built as a coming soon page for another project that I worked on. It has simple animations and a newsletter to notify people who were interested in the upcoming project. ",
          img_src: "images/kadverts-coming-soon.png",
          row_reversed: false,
          url: "https://kadverts.herokuapp.com/comingSoon",
          tags: ["Personal", "WebApp"],
        },
        {
          title: "CSDC",
          details_coming_soon: true,

          description:
            "A fullstack webapp built for a private security organization.",
          img_src: "images/csdc_2.png",
          row_reversed: false,
          url: "https://csdcltd.com",
          tags: ["Personal", "WebApp"],
        },
      ],
    };
  },
};
</script>

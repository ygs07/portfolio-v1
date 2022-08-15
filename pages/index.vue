<template>
  <div :class="{ dark: dark_mode_is_active }">
    <main-nav
      :dark_mode_is_on="dark_mode_is_active"
      @toggleDarkMode="toggleDarkMode()"
    >
    </main-nav>
    <Tutorial />

    <div class="md:px-16 py-8">
      <div class="px-5">
        <h1 class="text-5xl font-semibold">
          Here're Some of the things I've worked on
        </h1>
      </div>

      <div class="flex flex-wrap justify-center pt-6">
        <div class="rounded overflow-hidden w-full md:w-1/2 p-4">
          <img class="" src="images/sample.jpg" alt="Sunset in the mountains" />
        </div>
        <div class="rounded overflow-hidden p-4 w-full md:w-1/2">
          <img class="" src="images/sample.jpg" alt="Sunset in the mountains" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainNav from "../components/MainNav.vue";
export default {
  components: { MainNav },
  name: "IndexPage",
  methods: {
    toggleDarkMode() {
      if (this.dark_mode_is_active) {
        // console.log('toggle true')
        this.dark_mode_is_active = false;
      } else {
        // console.log('toggle false')
        this.dark_mode_is_active = true;
      }
    },
  },
  data() {
    return {
      dark_mode_is_active: false,
    };
  },
};
</script>

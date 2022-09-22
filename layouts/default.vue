<template>
  <div
    :class="{ dark: dark_mode_is_active }"
    class="scroll-smooth dark:bg-rich-black-500"
  >
    <nav
      style="position: fixed; bottom: 0"
      class="md:hidden w-full z-50 flex p-4 justify-center"
    >
      <div
        class="
          text-sm
          drop-shadow-2xl
          py-4
          flex
          justify-evenly
          rounded-2xl
          space-x-2
          w-full
          text-center
          bg-cultured
          dark:bg-oxford_blue dark:text-cultured
        "
      >
        <div class="text-center">
          <nuxt-link to="/" class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 m-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
              />
            </svg>
            <span> Home </span>
          </nuxt-link>
        </div>
        <div class="text-center">
          <nuxt-link to="/projects" class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 m-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>

            <span> Projects </span>
          </nuxt-link>
        </div>

        <div class="text-center">
          <a href="/Resume.pdf" class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 m-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>

            <span> Resume </span>
          </a>
        </div>

        <div class="text-center">
          <a href="mailto:yusufgshehu@gmail.com" class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 m-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>

            <span> Mail Me </span>
          </a>
        </div>
      </div>
    </nav>
    <main-nav
      class="sticky top-0 z-50"
      :scrolling_down="scrolling_down"
      :dark_mode_is_on="dark_mode_is_active"
      @toggleDarkMode="toggleDarkMode()"
    >
    </main-nav>
    <Nuxt class="relative dark:bg-rich-black-500" />
    <footer class="md:px-40 py-20 dark:bg-rich-black-600 dark:text-off-white">
      <!-- <div class="absolute w-full -left-1 -bottom-8 onl">
        <img src="waves-3.svg" class="w-full" />
      </div> -->
      <div class="flex flex-col justify-center text-center z-20">
        <h1 class="text-4xl font-bold">Get In Touch</h1>

        <div class="flex flex-wrap justify-center space-x-4 pt-4">
          <a class="" href="mailto:yusufgshehu@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </a>
          <a class="" href="https://www.linkedin.com/in/yusuf-shehu-646a8016b/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
        </div>

        <div>
          <h1 class="mt-5">
            Copyright 2022. Yusuf Shehu. All rights reserved.
          </h1>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import MainNav from "../components/MainNav.vue";
export default {
  components: { MainNav },
  // created() {
  //   window.addEventListener("scroll", this.handleScroll);
  // },
  // destroyed() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 900);
    });
  },
  loading: true,
  loading: {
    color: "#f09f9d",
    height: "15px",
  },
  data() {
    return {
      dark_mode_is_active: false,
      scrolling_down: false,
    };
  },
  methods: {
    toggleDarkMode() {
      if (this.dark_mode_is_active) {
        this.dark_mode_is_active = false;
      } else {
        this.dark_mode_is_active = true;
      }
    },
    handleScroll(event) {
      this.scrolling_down = window.scrollY > 0 ? true : false;
      console.log("scrolling");
    },
  },
  head() {
    return {
      title: "Yusuf Shehu",
      meta: [
        {
          hid: "description",
          name: "home a",
          content: "My App Description",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* home route and active route will show in bold as it matches / and /about
a.nuxt-link-active {
  font-weight: bold;
}
*/

a.nuxt-link-exact-active {
  color: #f95738;
  font-weight: 600;
}
</style>

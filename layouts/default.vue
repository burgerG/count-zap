<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>CountZap</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid class="pa-2 fill-height justify-center">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <span>&copy; {{ $dayjs().year() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

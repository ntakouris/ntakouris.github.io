<template>
    <v-app>
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>
          <v-list-item v-for="item in menuItems" :key="item.title" :href="item.href" :target="item.target ? item.target : ''">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}  
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
          <v-icon>menu</v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title>@zarkopafilis</v-toolbar-title>

        <v-spacer />

        <v-switch v-model="darkMode" label="Dark Mode" style="margin-top: 26px;"></v-switch>

        <v-btn icon class="mx-1" v-for="entry in socialEntries" :key="entry.href" :href="entry.href" 
          target="_blank">
          <v-icon> {{ entry.icon }} </v-icon>
        </v-btn>
      </v-app-bar>

      <v-content>
        <v-container fluid fill-height>
          <v-layout fill-width>
            <div class="col-10 mx-auto">
              <slot />
            </div>
          </v-layout>
        </v-container>
      </v-content>

      <v-footer app inset>
        <span class="footer">Copyright &copy; Theodoros Ntakouris 2019</span>
      </v-footer>
    </v-app>
</template>

<script>
import menuItems from "~/data/menu.json"
import socialEntries from "~/data/social.json"

export default {
  name: "Default",
  created () {
    this.$vuetify.theme.dark = true
  },
  data() {
    return {
      menuItems,
      socialEntries,
      darkMode: true,
      drawer: null
    };
  },
  watch: {
    darkMode(newVal) {
      this.$vuetify.theme.dark = newVal
    }
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Noto Sans', sans-serif;
}

.fill-width {
  width: 100%;
}

.footer {
  font-size: 14px;
}
</style>

<template>
  <v-app id="inspire">

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Administrador</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
      icon
      class="mr-5"
      @click="salir()"
      >
        <v-icon>mdi-logout</v-icon>
        <span>Salir</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-card class="mx-auto" width="300">
          <v-list>
            <v-list-item :to="{name: 'User'}" exact>
              <v-list-item-icon>
                <v-icon> mdi-clipboard-account</v-icon>
              </v-list-item-icon>

              <v-list-item-title>Cuenta</v-list-item-title>
            </v-list-item>


            <v-list-group prepend-icon="mdi-folder-multiple-outline">
              
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Productos</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item v-for="([title, icon, route], i) in admins" :key="i" :to="{name: route}">
                  <v-list-item-title v-text="title"></v-list-item-title>

                  <v-list-item-icon>
                    <v-icon v-text="icon"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>

              <v-list-group prepend-icon="mdi-cog-outline">
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Administrador</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item v-for="([title, icon, route], i) in cruds" :key="i" :to="{name: route}">
                  <v-list-item-title v-text="title"></v-list-item-title>

                  <v-list-item-icon>
                    <v-icon v-text="icon"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>
          </v-list>
        </v-card>
    </v-navigation-drawer>
    
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: "SeguraComponent",

  components: {
  },

  data: () => ({
    drawer: null,
    admins: [
      ["Categoria", "mdi-google-circles-extended", "Categoria"],
      ["Articulo", "mdi-bookmark-outline", "Articulo"],
    ],
    cruds: [
      ["Usuarios", "mdi-account-multiple-outline", "Usuario"]
    ],
  }),
  beforeCreate(){
    this.$store.dispatch('autoLogin')
  },
  methods: {
    salir(){
      this.$store.dispatch('salir');
    }
  }
};
</script>

<style >
.container-table100 {
  width: 100%;  
  min-height: 90vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 0;  
}

.container-table100::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255,255,255,0.9);
}
</style>

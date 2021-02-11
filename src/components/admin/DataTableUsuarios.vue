<template>
  <v-main class="container-table100" style="background-image: url('/images/bg-02.jpg'); padding:0px">
    <v-container>
      <div id="app">
          <v-data-table
            :headers="headers"
            :items="usuarios"
            :items-per-page="5"
            class="elevation-1"
            :loading="endCharge"
            loading-text="Cargando... Por favor espere"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>CRUD Usuarios</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Agregar Usuario
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="12" md="12">
                            <v-text-field
                              v-model="editedItem.name"
                              label="Nombre"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12" md="12">
                            <v-text-field
                              v-model="editedItem.email"
                              label="Correo Electronico"
                              auto-grow
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12" md="12">
                            <v-select
                              v-model="rol"
                              label="Roles"
                              :items="roles"
                              item-value="item"
                              item-text="item"
                              return-object
                            ></v-select>
                          </v-col>
                          <v-col
                            v-if="editedIndex == -1"
                            cols="12"
                            sm="12"
                            md="12"
                          >
                            <v-text-field
                              v-model="newPassword"
                              label="Contraseña"
                              auto-grow
                              no-resize
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close">
                        Cancelar
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="save">
                        Guardar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="headline"
                      >¿Está seguro de que quiere cambiar el estado este
                      usuario?</v-card-title
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete"
                        >Cancelar</v-btn
                      >
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="deleteItemConfirm"
                        >OK</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:[`item.estado`]="{ item }">
              <span class="group pa-2">
                <v-icon
                  v-if="item.estado"
                  medium
                  class="mr-2"
                  dense
                  color="#65BB88"
                >
                  mdi-account
                </v-icon>
                <v-icon v-else medium dense color="#B86060">
                  mdi-account-alert
                </v-icon>
              </span>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon medium class="mr-2" dense @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon medium class="mr-2" @click="deleteItem(item)">
                <template v-if="item.estado">
                  mdi-toggle-switch
                </template>
                <template v-else>
                  mdi-toggle-switch-off-outline
                </template>
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="list">
                Reset
              </v-btn>
            </template>
          </v-data-table>
      </div>
    </v-container>
  </v-main>
</template>
<script>

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "ID", value: "id" },
      {
        text: "Nombre",
        align: "start",
        sortable: true,
        value: "name",
      },
      { text: "Email", value: "email" },
      { text: "Rol", value: "rol" },
      { text: "Estado", value: "estado" },
      { text: "Acciones", value: "actions", sortable: false },
    ],
    usuarios: [],
    newPassword: "",
    roles: ["Administrador", "Vendedor", "Almacenista"],
    rol: "", //Rol seleccionado
    editedIndex: -1,
    editedItem: {
      id: 0,
      name: "",
      email: "",
      rol: "",
      estado: 0,
    },
    defaultItem: {
      id: 0,
      name: "",
      email: "",
      rol: "",
      estado: 0,
    },
    endCharge: true,
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Agregar Usuario" : "Editar Usuario";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.list();
  },

  methods: {
    getColor(state) {
      if (state == 0) return "red";
      else return "green";
    },
    list() {
      axios
        .get("/api/usuario/list")
        .then((response) => {
          this.usuarios = response.data;
          this.endCharge = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editItem(item) {
      this.editedIndex = item.id;
      this.rol = item ? item.rol : "";
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      let method = "activate";
      if (this.editedItem.estado) {
        method = "deactivate";
      }
      // Modify (PUT)
      axios
        .put("/api/usuario/" + method, {
          id: this.editedIndex,
        })
        .then((response) => {
          this.list();
        })
        .catch((error) => {
          return error;
        });
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.rol = "";
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.rol = "";
      });
    },

    save() {
      if (this.editedIndex > -1) {
        // Modify (PUT)
        axios
          .put("/api/usuario/update", {
            id: this.editedIndex,
            name: this.editedItem.name,
            email: this.editedItem.email,
            rol: this.rol,
          })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            return error;
          });
      } else {
        // Add (POST)
        axios
          .post("/api/usuario/add", {
            name: this.editedItem.name,
            email: this.editedItem.email,
            password: this.newPassword,
            rol: this.rol,
          })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            return error;
          });
      }
      this.close();
    },
  },
};
</script>

<style lang="css" scoped> 
    .application--wrap{     
        min-height: 0px;   
    } 
</style> 

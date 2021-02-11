<template>
  <v-main class="container-table100" style="background-image: url('/images/bg-02.jpg'); padding:0px">
    <v-container>
      <div id="app">
          <v-data-table
            :headers="headers"
            :items="articulos"
            :items-per-page="5"
            sort-by="calories"
            class="elevation-1"
            :loading="endCharge"
            loading-text="Loading... Please wait"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>CRUD Articulos</v-toolbar-title>
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
                      Agregar Categoria
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
                              v-model="editedItem.nombre"
                              label="Nombre"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12" md="12">
                            <v-textarea
                              v-model="editedItem.descripcion"
                              label="Descripcion"
                              rows="3"
                              no-resize
                              counter="150"
                            ></v-textarea>
                          </v-col>
                          <v-col cols="12" sm="12" md="12">
                            <v-select
                              v-model="categoria"
                              label="Categoria"
                              :items="categorias"
                              item-value="id"
                              item-text="nombre"
                              return-object
                            ></v-select>
                          </v-col>
                          <v-col cols="12" sm="12" md="12">
                            <v-text-field
                              v-model="editedItem.codigo"
                              label="Codigo"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12" md="12">
                            <v-text-field
                              v-model="editedItem.imgPath"
                              label="Ruta Imagen"
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
                      articulo?</v-card-title
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
            <template v-slot:[`item.descripcion`]="{ item }">
              <div style="padding:10px 0px">
                {{item.descripcion}}
              </div>
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
                  mdi-database-plus
                </v-icon>
                <v-icon v-else medium dense color="#B86060">
                  mdi-database-minus
                </v-icon>
              </span>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon medium dense class="mr-1" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon medium @click="deleteItem(item)">
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
        value: "nombre",
      },
      { text: "Descripcion", value: "descripcion" },
      { text: "Categoria", value: "categoria.nombre" },
      { text: "Codigo", value: "codigo" },
      { text: "Estado", value: "estado" },
      { text: "Acciones", value: "actions", sortable: false },
    ],
    articulos: [],
    categorias: [],
    categoria: "", //Categoria seleccionada
    editedIndex: -1,
    editedItem: {
      nombre: "",
      descripcion: "",
      codigo: "",
      categoria: {
        id: 0,
        nombre: "",
      },
    imgPath:"",
    },
    defaultItem: {
      nombre: "",
      descripcion: "",
      codigo: "",
      categoria: {
        id: 0,
        nombre: "",
      },
      imgPath:"",
    },
    endCharge: true,
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Agregar Categoria" : "Editar Categoria";
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
    this.listCategorias();
  },

  methods: {
    list() {
      axios
        .get("/api/articulo/list")
        .then((response) => {
          this.articulos = response.data;
          this.endCharge = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    listCategorias() {
      axios
        .get("/api/categoria/list")
        .then((response) => {
          this.categorias = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editItem(item) {
      this.editedIndex = item.id;
      this.categoria = item ? item.categoria : "";
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
        .put("/api/articulo/" + method, {
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
        this.categoria = "";
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.categoria = "";
      });
    },

    save() {
      if (this.editedIndex > -1) {
        // Modify (PUT)
        
      console.log('asda', this.editedItem)
        axios
          .put("/api/articulo/update", {
            id: this.editedIndex,
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion,
            codigo: this.editedItem.codigo,
            imgPath: this.editedItem.imgPath,
            categoriaId: this.categoria.id,
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
          .post("/api/articulo/add", {
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion,
            codigo: this.editedItem.codigo,
            imgPath: this.editedItem.imgPath,
            categoriaId: this.categoria.id,
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

<style>
  .text-start:nth-child(3){
    width: 33%;
  }
  
</style>
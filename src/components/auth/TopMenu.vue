<template>
  <div class="init-menu nav-active">
    <div class="site-content">
      <h1 class="site-content__headline">Bienvenido {{ name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
  props: {
    name: {
      type: String,
    },
  },
  methods: {
    deployMenu() {
      document.body.classList.toggle("nav-active");
    },
  },
  mounted() {
    document.body.classList.remove("nav-active");
  },
};
</script>

<style scoped>
.init-menu {
  background-color: #477A71;
}
.site-content {
  height: 50vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.site-content__headline {
  font-weight: 200;
  color: #ffffff;
  font-size: calc(2vw + 10px);
}

</style>

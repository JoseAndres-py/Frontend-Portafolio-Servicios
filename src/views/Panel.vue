<template>
  <div class="panel">
    <PanelUser msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import PanelUser from "@/components/auth/PanelUser.vue";

export default {
  name: "Panel",
  components: {
    PanelUser
  }
};
</script>

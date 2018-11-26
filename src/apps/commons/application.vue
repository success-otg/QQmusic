<style type='text/scss' lang="scss">
  @import "../../scss/index.scss";

  .app-application {
    height: 100%;
  }
</style>

<script>
  export default {
    name: 'login',
    template: '<div class="app-application"><keep-alive><router-view v-if="$route.meta.keepAlive"></router-view></keep-alive><router-view v-if="!$route.meta.keepAlive"></router-view></div>',

  };
</script>


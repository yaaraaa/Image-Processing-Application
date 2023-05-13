
<template>
  <div id="wrapper">
      <div class="column is-mobile">
        <router-link to="/" class="title is-spaced"><strong>Image Processing</strong></router-link>
      </div>

    <section class="section">
      <router-view/>
    </section>
  </div>
</template>

<style lang="scss">
@import '../node_modules/bulma';
</style>

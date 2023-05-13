<template>
  <div>
      <div class="columns is-mobile is-multiline is-centered">
        <div class="column is-narrow">
            <router-link to="/histogram-calculation" class="button is-info is-medium">Histogram calculation</router-link>
        </div>
      </div>

      <div class="columns is-mobile is-multiline is-centered">
        <div class="column is-narrow">
            <router-link to="/histogram-equalization" class="button is-info is-medium">Histogram equalization</router-link>
        </div>
      </div>

      <div class="columns is-mobile is-multiline is-centered">
        <div class="column is-narrow">
            <router-link to="/sobel-filter" class="button is-info is-medium">Sobel filter</router-link>
        </div>
      </div>

      <div class="columns is-mobile is-multiline is-centered">
        <div class="column is-narrow">
            <router-link to="/laplace-filter" class="button is-info is-medium">Laplace filter</router-link>
        </div>
      </div>

      <div class="columns is-mobile is-multiline is-centered">
        <div class="column is-narrow">
            <router-link to="/fourier-transform" class="button is-info is-medium">Fourier transform</router-link>
        </div>
      </div>

      <div class="columns is-mobile is-multiline is-centered">
        <div class="column is-narrow">
            <router-link to="/add-salt-&-pepper-noise" class="button is-info is-medium">Add salt & pepper noise</router-link>
        </div>
      </div>

      <div class="columns is-mobile is-multiline is-centered">
        <div class="column is-narrow">
            <router-link to="/remove-salt-&-pepper-noise" class="button is-info is-medium">Remove salt & pepper noise</router-link>
        </div>
      </div>

      <div class="columns is-mobile is-multiline is-centered">
        <div class="column is-narrow">
            <router-link to="/add-periodic-noise" class="button is-info is-medium">Add periodic noise</router-link>
        </div>
      </div>

      <div class="columns is-mobile is-multiline is-centered">
        <div class="column is-narrow">
            <router-link to="/remove-periodic-noise" class="button is-info is-medium">Remove periodic noise</router-link>
        </div>
    </div>
  </div>
</template>

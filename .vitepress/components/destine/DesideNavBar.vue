<script setup>
import { onMounted } from 'vue';
import { useData } from 'vitepress';

onMounted(async () => {
  if (!import.meta.env.SSR) {
    await import("./header.js")
  }
});

const {theme} = useData();
</script>

<style>
@import url('./header.css');
.VPNav {
  pointer-events: all !important;
}
</style>

<template>
  <!-- Header -->
  <div id="desp-header-container">
    <div id="desp-header-inner-container">

      <!-- Left container -->
      <div id="left-container">
        <a href="https://platform.destine.eu/">
          <img id="eu-flag-de" alt="destine platform home" src="/assets/destine/destination_earth_logo.svg">
        </a>
        <a href="#">
          <img id="service-logo" alt="service-home" :src="theme.logo">
        </a>
      </div>

      <!-- Central container -->
      <div id="central-container">
        <a
          v-for="nav in theme.nav"
          class="header-link"
          :href="nav.link"
        >
          {{ nav.text }}
        </a>
      </div>

      <!-- Right container -->
      <div id="right-container">
        <div id="info-container">
          <div id="info-button">
            <i data-feather="info" id="info-icon"></i>
          </div>

          <!-- Info Menu -->
          <div id="info-frame">
            <a class="frame-link" href="https://deside.polarview.org/" target="_blank">About DESIDE</a>
            <a class="frame-link" href="https://eodash.github.io/eodash/" target="_blank">eodash Documentation</a>
          </div>

        </div>

        <!-- Mobile menu icon -->
        <div id="menu-icon-container">
          <i data-feather="menu" id="menu-icon"></i>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Menu Container -->
  <div id="dropdown-menu-container">
    <div
      v-for="nav in theme.nav"
      class="dropdown-link"
    >
      <a :href="nav.link">{{ nav.text }}</a>
    </div>
  </div>
</template>

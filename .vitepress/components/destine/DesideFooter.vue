<script setup>
import { onMounted } from 'vue';

onMounted(async () => {
  if (!import.meta.env.SSR) {
    await import("./footer.js")
  }
});
</script>

<style>
@import url('./footer.css');
</style>

<template>
  <!-- Footer Container -->
  <div id="footer-container">
    <div id="footer-inner-container">

      <!-- Left Container -->
      <div id="footer-left-container">
        <a href="https://destination-earth.eu/">
          <img id="footer-desp-logo" alt="desp-home" src="/assets/destine/desp_logo.svg">
        </a>
      </div>

      <!-- Central Container -->
      <div id="footer-central-container">
        <a href="https://destination-earth.eu" target="_blank">
          <img class="footer-logo" alt="destination earth" src="/assets/destine/destination-earth.png">
        </a>
        <a href="https://european-union.europa.eu/" target="_blank">
          <img class="footer-logo" alt="eu commission" src="/assets/destine/funded-by-EU.png">
        </a>
        <a>
          <img class="footer-logo" alt="implemented by" src="/assets/destine/implemented-by.png">
        </a>
        <a href="https://www.ecmwf.int/" target="_blank">
          <img class="footer-logo" alt="ecmwf" src="/assets/destine/ecmwf.png">
        </a>
        <a href="https://www.esa.int/" target="_blank">
          <img class="footer-logo" alt="esa" src="/assets/destine/esa.png">
        </a>
        <a href="https://www.eumetsat.int/" target="_blank">
          <img class="footer-logo" alt="eumetsat" src="/assets/destine/eumetsat.png">
        </a>
      </div>

      <!-- Right Container -->
      <div id="footer-right-container">
        <i data-feather="menu" id="footer-menu-icon"></i>
      </div>
    </div>

    <!-- Footer menu -->
    <div id="footer-menu">
      <a class="frame-link" href="https://platform.destine.eu/code-of-conduct/" target="_blank">Code of Conduct</a>
      <a class="frame-link" href="https://platform.destine.eu/terms-and-conditions/" target="_blank">Terms and Conditions</a>
      <a class="frame-link" href="https://platform.destine.eu/privacy-policies/" target="_blank">Privacy Policies</a>
      <a class="frame-link" href="https://platform.destine.eu/cookie-policy/" target="_blank">Cookie Policy</a>
      <a class="frame-link" href="https://platform.destine.eu/legal-notice/" target="_blank">Legal Notice</a>
      <div class="mobile-link">
        <hr>
        <a class="footer-frame-link" href="https://destination-earth.eu">
          <img class="mobile-footer-logo" alt="destination earth" src="/assets/destine/destination-earth.png">
        </a>
        <a class="footer-frame-link" href="https://european-union.europa.eu/">
          <img class="mobile-footer-logo" alt="eu commission" src="/assets/destine/funded-by-EU.png">
        </a>
        <a class="footer-frame-link">
          <img class="mobile-footer-logo" alt="implemented by" src="/assets/destine/implemented-by.png">
        </a>
        <a class="footer-frame-link" href="https://www.ecmwf.int/">
          <img class="mobile-footer-logo" alt="ecmwf" src="/assets/destine/ecmwf.png">
        </a>
        <a class="footer-frame-link" href="https://www.esa.int/">
          <img class="mobile-footer-logo" alt="esa" src="/assets/destine/esa.png">
        </a>
        <a class="footer-frame-link" href="https://www.eumetsat.int/">
          <img class="mobile-footer-logo" alt="eumetsat" src="/assets/destine/eumetsat.png">
        </a>
      </div>
    </div>
  </div>
</template>
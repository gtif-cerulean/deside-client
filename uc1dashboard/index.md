---
layout: false
---

<script setup>
    import { withBase } from 'vitepress';
    import DesideNavBar from '../.vitepress/components/destine/DesideNavBar.vue';
</script>
<DesideNavBar/>
<eo-dash :config="withBase('/configs/firstconfig.js')"/>

<style scoped>
  eo-dash {
    display:block;
    position: relative;
    height: calc(100dvh - var(--vp-nav-height)) !important;
  }
  @media (max-width: 960px) {
    eo-dash {
      top: 0;
    }
  }
</style>

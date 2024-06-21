<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/evaluation">Evaluation</RouterLink> |
        <RouterLink to="/project">Projekt</RouterLink> |
        <RouterLink to="/person">Person</RouterLink> |
        <RouterLink to="/time-tracking">Zeiterfassung</RouterLink> 
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>

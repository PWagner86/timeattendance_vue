
<template>
  <header>
    <div class="card">
      <TabMenu :model="routerItems">
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span v-bind="props.icon" />
          <span v-bind="props.label">{{ item.label }}</span>
        </a>
      </template>
    </TabMenu>
    </div>
  </header>
  <router-view/>
  </template>
  
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const routerItems = ref([
  {
    label: 'Evaluation',
    icon: 'pi pi-exchange',
    route: '/evaluation',
  },
  {
    label: 'Project',
    icon: 'pi pi-folder',
    route: '/project'
  },
  {
    label: 'Person',
    icon: 'pi pi-user',
    route: '/person'
  }
])
</script>

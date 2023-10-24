<script setup lang="ts">
import {RouterLink} from 'vue-router'

interface Props {
  path: string,
  isFirst: boolean;
  isLast: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  path: '/',
  isFirst: false,
  isLast: false,
});

console.log(props);

import CommitIcon from "./icons/CommitIcon.vue";
</script>
<template>
  <li>
    <CommitIcon :isFirst="isFirst" :isLast="isLast" />
    <router-link :to="path">
      <slot></slot>
    </router-link>
  </li>
</template>

<style scoped>
li {
  list-style-type: none;
  line-height: 1.5rem;
  padding-left: 2rem;
  margin: 0;
  transition: color 0.4s ease-in-out, background-color 0.4s ease-in-out;
}

li a {
  text-decoration: none;
  color: inherit;
  vertical-align: middle;
}

svg {
  width: 1.75rem;
  vertical-align: middle;
  height: 1.75rem;
  stroke: var(--secondary);
  transition: stroke 0.4s ease-in-out;
}
li:hover svg {
  stroke: var(--zombie);
}
li:hover {
 background-color: var(--xanadu);
}
li:hover a {
  /* background-color: var(--xanadu);
  color: var(--zombie); */
  background: -webkit-linear-gradient(105deg, var(--zombie), var(--bright-lichen));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

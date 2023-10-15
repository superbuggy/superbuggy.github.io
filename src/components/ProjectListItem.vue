<script setup lang="ts">
interface Props {
  text: string;
  isFirst: boolean;
  isLast: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  text: "",
  isFirst: false,
  isLast: false,
});

console.log(props);

import CommitIcon from "./icons/CommitIcon.vue";
</script>
<template>
  <li>
    <CommitIcon :isFirst="isFirst" :isLast="isLast" />
    <!-- {{ props.text }} -->
    <a href="">
      <slot></slot>
    </a>
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
  color: var(--zombie);
}
</style>

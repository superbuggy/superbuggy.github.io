<script setup lang="ts">
const props = defineProps<{ text: string }>();
import CommitIcon from "./icons/CommitIcon.vue";
</script>
<template>
  <li>
    <!-- <img src="../assets/icons/git-commit.svg" alt=""> -->
    <CommitIcon />
    {{ props.text }}
  </li>
</template>

<style scoped>
li {
  list-style-type: none;
  line-height: 1.5rem;
  padding-left: 2rem;
  margin: 0;
  transition: background-color .4s ease-in-out;
}

svg {
  width: 1.75rem;
  vertical-align: middle;
  height: 1.75rem;
  stroke: var(--secondary);
}
li:hover svg {
  stroke: var(--zombie);
}
li:hover {
  background-color: var(--xanadu);
  color: var(--zombie);
}
</style>

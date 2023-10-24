<template>
  <section>
    <h2>
      <a target="_blank" href="https://superbuggy.github.io/euclidean-rhythm-visualizer/"
        >Euclidean Rhythms</a
      >
    </h2>
    <p>
      An algorithm adapted from Euclid that times the firing of neutrons in a particle
      accelerator also generates (describes) rhythms of musical traditions found in
      various cultures around the world. Uses ToneJS, vanilla JavaScript.
    </p>
  </section>
  <section>
    <h2>Euclidean Tones</h2>
    <p>
      I found that the Euclidean-Bjorklund algorithm can be used to generate the major
      scale, its modes, and some symmetrical scales as well. On a side-note, I also
      discovered it happens to coincide with the spacing of months with 31 days.
    </p>
  </section>
  <section>
    <h2>
      <a target="_blank" href="https://superbuggy.github.io/react-game-of-life">
        Game of Life Microtonal Lattice
      </a>
      <p>
        Conway's Game of Life cellular automata model adapted for a 5-limit
        Just-Intonation lattice. Uses ToneJS, React.
      </p>
    </h2>
  </section>
</template>
<style lang="scss" scoped>
h2 {
  @import "../stylesheets/main.scss";
  @include gradient;
  margin-top: 0;
  border-bottom: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(105deg, var(--zombie), var(--bright-lichen));
  padding-top: 1px;
  &:hover {
    border-bottom: 2px solid;
    padding-top: 0px;
  }
}
</style>

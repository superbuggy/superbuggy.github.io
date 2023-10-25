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
      various cultures around the world. Uses ToneJS and vanilla JavaScript.
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
    </h2>
    <p>
      Conway's Game of Life cellular automata model adapted for a 5-limit Just-Intonation
      lattice. Uses TypeScript, ToneJS, and React.
    </p>
  </section>
  <section>
    <h2>
      <a target="_blank" href="https://superbuggy.github.io/microtab"> Microtonal Guitar Tool </a>
    </h2>
    <p>
      A xenharmonic scale visualizer for microtonal and fretless guitars. Uses TypeScript,
      Vue3, and ToneJS.
    </p>
  </section>
</template>
<style lang="scss" scoped>
h2 {
  @import "../stylesheets/main.scss";
  @include gradient;
  margin-top: 0;
  margin-bottom: 0.75rem;
  // margin-bottom: 0;
  border-bottom: 1px solid transparent;
  // padding-top: 1px;
  &:hover {
    border-bottom: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(105deg, var(--zombie), var(--bright-lichen));
    // padding-top: 0px;
  }
}

p {
  // padding-top: .5rem;
  padding-left: 0.75rem;
  border-left: 4px dotted;
  border-image-slice: 1;
  border-image-source: linear-gradient(105deg, var(--zombie), var(--bright-lichen));
}

section {
  margin-bottom: 2rem;
}
</style>

<template>
  <section>
    <h3 class="gradient">Front End</h3>
    <p class="gradient">ReactJS, VueJS, JavaScript, TypeScript, CSS, SCSS</p>
    <h3 class="gradient">Back End</h3>
    <p class="gradient">
      NodeJS, TypeScript, Python, Ruby, PHP, AWS, GCP, Azure, Django, Rails
    </p>
  </section>
  <p>
    I am an experienced computer programmer with over 7 years of professional web
    development experience, who started programming for fun at the age of 8. I have a
    passion for learning tricky concepts and expressing them with lucid simplicity. I
    thrive on collaboration and the collective synthesis of ideas. My interests in
    education, computer science, language, and music composition revolve around complex
    systems that facilitate creative collaboration.
  </p>
  <p>
    Working with others to distill ideas, talents, and passions into creative solutions is
    vital for me as a person and a worker. I am looking for a role as a senior or lead
    developer on a team with a strong spirit of creative collaboration and excellence in
    engineering.
  </p>

  <!-- <main>
    <h1>James Reichard</h1>
    <p>Senior Software Engineer</p>
  </main> -->
</template>

<style lang="scss" scoped>
section {
  margin-top: 0;
  display: grid;
  grid-template-columns: 7rem auto;
  grid-template-rows: repeat(2, 1.5rem);
  row-gap: .25rem;

  &:nth-of-type(2) {
    margin-bottom: 2rem;
    padding: 0;
  }
h3, p {
  margin-top: 0;
  margin-bottom: 0;

}
  p {
    line-height: 1.5rem;
    vertical-align: bottom;
    grid-column: 2 / 3;
  }
  h3 {
    grid-column: 1 / 2;
  }

}

p {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
</style>

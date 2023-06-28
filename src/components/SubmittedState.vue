<script lang="ts" setup>
import { inject } from "vue";

const email = inject("email");

defineEmits(["dismiss"]);
</script>

<template>
  <section>
    <div>
      <img src="/icon-success.svg" alt="" />
      <h2>Thanks for subscribing</h2>
      <p>
        A confirmation email has been sent to
        <strong>{{ email }}</strong
        >. Please open it and click the button inside to confirm your
        subscription
      </p>
    </div>
    <button @click="$emit('dismiss')">Dismiss message</button>
  </section>
</template>

<style lang="scss" scoped>
section {
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem 2.4rem;
  background-color: white;
}

div {
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
  padding-top: 15rem;
}

img {
  width: 6.4rem;
  height: 6.4rem;
}

h2 {
  margin-top: 1.6rem;
  font-size: 4rem;
  font-weight: 700;
  line-height: 100%;
}

p {
  font-size: 1.6rem;
  line-height: 150%;
}

button {
  color: white;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 150%;
  padding-block: 1.6rem;
  border-radius: 0.8rem;
  background-color: var(--dark-navy);
}

@media screen and (min-width: 1024px) {
  section {
    min-height: unset;
    padding: 4.8rem 6.4rem 6.4rem;
    width: 50.4rem;
    height: 52rem;
    border-radius: 3.6rem;
    box-shadow: 0px 15px 60px 0px rgba(0, 0, 0, 0.25);
  }

  div {
    padding-top: unset;
  }

  h2 {
    font-size: 5.6rem;
  }
}
</style>

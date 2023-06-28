<script lang="ts" setup>
import { inject } from "vue";

const email = inject("email");

defineEmits(["formSubmit"]);
</script>

<template>
  <section>
    <picture>
      <source
        media="(min-width: 1024px)"
        srcset="/illustration-sign-up-desktop.svg"
      />
      <img src="/illustration-sign-up-mobile.svg" alt="" />
    </picture>
    <form @submit.prevent="$emit('formSubmit')">
      <h2>Stay updated!</h2>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
      <div class="form__group">
        <label for="email">Email address</label>
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          placeholder="email@company.com"
          required
        />
        <span>Valid email required</span>
      </div>
      <button>Subscribe to monthly newsletter</button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: white;
}

img {
  width: 100%;
}

form {
  padding: 4rem 2.4rem;
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
}

h2 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 100%;
}

p {
  font-size: 1.6rem;
  line-height: 150%;
}

ul {
  font-size: 1.6rem;
  line-height: 150%;
}

li {
  display: flex;
  column-gap: 1.6rem;

  &:not(:first-child) {
    margin-top: 1rem;
  }

  &::before {
    content: url(/icon-list.svg);
  }
}

.form__group {
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  position: relative;

  label {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 150%;
  }

  input {
    font-size: 1.6rem;
    line-height: 150%;
    padding: 1.6rem 2.4rem;
    border-radius: 8px;
    border: 1px solid rgba(25, 24, 43, 0.25);

    &::placeholder {
      opacity: 0.5;
    }

    &:invalid {
      color: var(--vermellion);
      background-color: rgba(255, 97, 85, 0.15);
      border: 1px solid var(--vermellion);

      & + span {
        display: block;
      }
    }
  }

  span {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    color: var(--vermellion);
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 150%;
  }
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
    width: 92.8rem;
    height: 64.1rem;
    border-radius: 3.6rem;
    box-shadow: 0px 15px 60px 0px rgba(0, 0, 0, 0.25);
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 2.4rem;
  }

  picture {
    order: 2;
    height: 100%;
    justify-self: flex-end;
  }

  img {
    width: unset;
  }

  form {
    padding: 7.4rem 4rem;
    row-gap: 2.4rem;
  }

  h2 {
    font-size: 5.6rem;
  }
}
</style>

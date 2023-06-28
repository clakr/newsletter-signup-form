<script setup lang="ts">
import { inject, onBeforeMount, provide, ref } from "vue";
import DefaultStateForm from "@/components/DefaultStateForm.vue";
import SubmittedState from "@/components/SubmittedState.vue";
const addSRHeading = inject("addSRHeading") as () => void;

onBeforeMount(() => {
  addSRHeading();
});

const email = ref("");
provide("email", email);

const formState = ref<"toSubmit" | "submitted">("toSubmit");

function handleSubmit() {
  formState.value = "submitted";
}
</script>

<template>
  <DefaultStateForm
    v-if="formState === 'toSubmit'"
    @form-submit="handleSubmit"
  />
  <SubmittedState v-else />
</template>

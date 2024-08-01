<script setup>
import BaseForm from "~/components/base/BaseForm";
import BaseButton from "~/components/base/BaseButton";
import BaseInput from "~/components/base/BaseInput";
import { useVuelidate } from "@vuelidate/core";
import {required, alpha, email} from "@vuelidate/validators";

const form = reactive({
  name: '',
  email: ''
});

const rules = {
  name: { required, alpha },
  email: { required, email }
};

const v$ = useVuelidate(rules, form);

const emailErrorMessage = computed(() => {
  if (!v$.value.$pending) {
    if (v$.value.email.$error) {
      return 'Valid email is required';
    }
  }
  return '';
});

const nameErrorMessage = computed(() => {
  if (!v$.value.$pending) {
    if (v$.value.name.$error) {
      return 'Name is required and must contain only letters';
    }
  }
  return '';
});

function handleSubmit() {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    console.log('Form submitted');
  }
}

</script>

<template>
  <BaseForm @submit.prevent="handleSubmit">
    <div class="flex flex-col gap-[16px]">
      <BaseInput
          id="email"
          type="email"
          v-model="form.email"
          placeholder="Email"
          :errorMessage="emailErrorMessage"
      />
      <BaseInput
          id="name"
          v-model="form.name"
          placeholder="Name"
          :errorMessage="nameErrorMessage"
      />
      <BaseButton class="mt-[16px]">Apply</BaseButton>
    </div>
  </BaseForm>
</template>
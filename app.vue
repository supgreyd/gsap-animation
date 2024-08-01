<script setup>
  import PageTitle from "~/components/PageTitle";
  import ApplyForm from "~/components/ApplyForm";
  import CoinAnimation from "~/components/CoinAnimation";

  const pageTitle = 'Test form'
  const pageDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

</script>
<template>
  <div class="flex flex-col md:grid md:grid-cols-3">
    <div class="order-1 md:col-span-1">
      <PageTitle :title="pageTitle" :description="pageDescription" />
    </div>
    <div class="order-2 md:col-span-2 flex items-center justify-center">
      <CoinAnimation />
    </div>
    <div class="order-3 md:col-span-1">
      <ApplyForm />
    </div>
  </div>
</template>

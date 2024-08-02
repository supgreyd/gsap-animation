<script setup>
  import PageTitle from "~/components/PageTitle";
  import ApplyForm from "~/components/ApplyForm";
  import CoinAnimation from "~/components/CoinAnimation";

  const pageTitle = 'Test form'
  const pageDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

</script>
<template>
  <div class="page-wrap max-w-6xl">
    <PageTitle class="page-header" :title="pageTitle" :description="pageDescription" />
    <ApplyForm class="page-form" />
    <CoinAnimation class="page-animation" />
  </div>
</template>

<style scoped>
.page-wrap {
  display: grid;
  grid-template-areas:
    "title"
    "animation"
    "form";
}
.page-header {
  grid-area: title;
}
.page-form {
  grid-area: form;
}
.page-animation {
  grid-area: animation;
}
@media only screen and (min-width: 768px) {
  .page-wrap {
    grid-template-areas:
    "title animation"
    "form animation";
    grid-template-columns: 30% 70%;
    margin: 0 auto;
  }
  .page-header {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
}
</style>
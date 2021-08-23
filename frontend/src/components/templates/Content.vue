<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style>
.content {
  grid-area: content; /* nome referencia do grid-template-area no App.vue */
  background-color: #efefef;
  padding: 20px;
}
</style>
<template>
  <footer class="footer">
    <span>Copyright<strong>Rafalindo</strong>© 2020-2021</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  grid-area: footer; /* nome referencia do grid-template-area no App.vue */
  background-color: #ddd;
  color: #333;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
}
</style>
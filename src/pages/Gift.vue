<template>
  <div>
    <h2>小米礼品卡</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/Gift/Binding"
          >绑定礼品卡</router-link
        >
      </li>
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/Gift/MyGift"
          >我的礼品卡</router-link
        >
      </li>

      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/Gift/Issue"
          >常见问题</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Gift",
};
</script>

<style>
</style>
<template>
  <div>
    <h2>优惠券</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/Discounts/UnuseQ"
          >未使用</router-link
        >
      </li>
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/Discounts/UseQ"
          >已使用</router-link
        >
      </li>
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/Discounts/GuseQ"
          >已过期</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Discounts",
};
</script>

<style>
</style>
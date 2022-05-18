<template>
  <div>
    <h2>现金券</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/Coupon/MyCoupon"
          >绑定礼品卡</router-link
        >
      </li>
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/Coupon/CoupoIssue"
          >常见问题</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Coupon",
};
</script>

<style>
</style>
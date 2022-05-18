<template>
  <div>
    <h2>消息通知</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/Information/AllTheNews"
          >全部信息</router-link
        >
      </li>
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/Information/Logistics"
          >物流动态</router-link
        >
      </li>
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/Information/Activity"
          >特惠活动</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Information",
};
</script>

<style>
</style>
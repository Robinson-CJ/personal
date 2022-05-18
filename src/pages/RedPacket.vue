<template>
  <div>
    <h2>这是红包内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/RedPacket/Unused"
          >未使用</router-link
        >
      </li>
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/RedPacket/Use"
          >已使用/已过期</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "RedPacket",
};
</script>

<style>
h3 {
  color: #b0b0c2;
  text-align: center;
}
</style>
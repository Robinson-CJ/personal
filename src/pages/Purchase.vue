<template>
  <div>
    <h2>购买资格</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/Purchase/Unused"
          >未使用</router-link
        >
      </li>
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/Purchase/Use"
          >已使用/已过期</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
    <div>
      <h4 class="introduce">什么是购买资格？</h4>
      <p>购买资格是优先购买新品的特权。</p>
      <p>拥有新品的购买资格可以无需预约或抢购，直接下单购买。</p>
      <p>
        每个购买资格只可使用一次，商品加入购物车后购买资格即刻失效，请勿将其从购物车中删除。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Purchase",
};
</script>

<style scoped>
h3 {
  color: #b0b0c2;
  text-align: center;
  line-height: center;
}
.introduce {
  padding-top: 10px;
}
p {
  text-align: left;
  margin-top: 20px;
}
</style>
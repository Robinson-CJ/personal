<template>
  <div>
    <h4><a href="#" id="home">返回首页</a></h4>
    <div class="row">
      <Banner />
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 页面跳转 -->
          <router-link
            class="list-group-item"
            active-class="active"
            to="/MyPersonal"
            >我的个人中心</router-link
          >
          <router-link
            class="list-group-item"
            active-class="active"
            to="/Information/AllTheNews"
            >信息通知</router-link
          >
          <router-link
            class="list-group-item"
            active-class="active"
            to="/Purchase/Unused"
            >购买资格</router-link
          >
          <router-link class="list-group-item" active-class="active" to="/Cash"
            >现金账户</router-link
          >
          <router-link
            class="list-group-item"
            active-class="active"
            to="/Gift/Binding"
            >小米礼品卡</router-link
          >
          <router-link
            class="list-group-item"
            active-class="active"
            to="/Coupon/MyCoupon"
            >现金券</router-link
          >
          <router-link
            class="list-group-item"
            active-class="active"
            to="/Favorite"
            >喜欢的商品</router-link
          >
          <router-link
            class="list-group-item"
            active-class="active"
            to="/Discounts/UnuseQ"
            >优惠券</router-link
          >
          <router-link
            class="list-group-item"
            active-class="active"
            to="/Address"
            >收货地址</router-link
          >
          <router-link
            class="list-group-item"
            active-class="active"
            to="/RedPacket/Unused"
            >红包</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: {
    Banner,
  },
};
</script>

<style scoped>
#home {
  margin: 10px;
}
</style>

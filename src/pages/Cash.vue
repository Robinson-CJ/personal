<template>
  <div>
    <h2>我的现金账户</h2>
    <div>
      <h2 class="format">您尚未开通小米现金账户</h2>
      <p class="format">使用现金账户会让您在小米网购物、支付更加便捷。</p>
      <button>免费安全开通</button>
    </div>
    <div>
      <ul>
        <li>
          <div>
            <img src="../assets/image/cash-welcome-safe.png" alt="" />
          </div>
        </li>
        <li>
          <div><img src="../assets/image/cash-welcome-fast.png" alt="" /></div>
        </li>
        <li>
          <div><img src="../assets/image/cash-welcome-easy.png" alt="" /></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cash",
};
</script>

<style scoped>
.format {
  text-align: center;
}
button {
  display: block;
  width: 150px;
  height: 40px;
  margin: 0 auto;
  pointer-events: none;
  color: #b0b0b0;
}
div ul li {
  list-style: none;
  float: left;
  margin-top: 30px;
  margin-left: 105px;
}
</style>

<template>
  <div>
    <h2>喜欢的商品</h2>
    <div id="home">
      <div class="format">
        <img src="../assets/image/pms_1.jpg" alt="" />
        <p>小米路由器AX9000</p>
        <p><a href="#">1299￥</a></p>
      </div>
      <div class="format">
        <img src="../assets/image/pms_16.png" alt="" />
        <p>K50 电竞版</p>
        <p><a href="#">3299￥</a></p>
      </div>
      <div class="format">
        <img src="../assets/image/pms_163.jpg" alt="" />
        <p>Redmi G 2021</p>
        <p><a href="#">5499￥</a></p>
      </div>
    </div>
    <link rel="stylesheet" href="../../public/js/index.js" />
  </div>
</template>

<script>
export default {
  name: "Favorite",
};
</script>

<style  scoped>
.format {
  width: 250px;
  height: 210px;
}
.format > div button {
  width: 98px;
  height: 31px;
  margin-left: 12px;
}
.btnleft {
  background-color: #fff;
  color: #b0b0b0;
  border: 1px solid #b0b0b0;
}
.btnright {
  background-color: #f25807;
  color: #ffffff;
  border: 1px solid #b0b0b0;
}
.format img {
  width: 100%;
}
.format p {
  size: 16px;
  text-align: center;
}
.format p a {
  color: #ff6700;
}
#home {
  display: flex;
}
</style>
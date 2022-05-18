<template>
  <div>
    <div class="format">
      <div class="left">
        <img src="../assets/image/zz.jpg" alt="zz" />
      </div>
      <div class="center">
        <h2>智子</h2>
        <p>下午好~</p>
        <a href="#">修改个人信息 &gt;</a>
      </div>
      <div class="right">
        <p>账户安全：<span>普通</span></p>
        <p>绑定手机：15*******23</p>
        <p>绑定邮箱：未绑定</p>
      </div>
    </div>
    <hr />
    <div class="end">
      <ul>
        <li class="location">
          <img src="../assets/image/portal-icon-1.png" alt="" />
          <div>
            <p>待支付的订单：<span>0</span></p>
            <a href="#">查看待支付订单 &gt;</a>
          </div>
        </li>
        <li class="location">
          <img src="../assets/image/portal-icon-2.png" alt="" />
          <div>
            <p>待收货的订单：<span>0</span></p>
            <a href="#">查看待收货订单 &gt;</a>
          </div>
        </li>
        <li class="location">
          <img src="../assets/image/portal-icon-3.png" alt="" />
          <div>
            <p>待评价商品数：<span>0</span></p>
            <a href="#">查看待评价商品 &gt;</a>
          </div>
        </li>
        <li class="location">
          <img src="../assets/image/portal-icon-4.png" alt="" />
          <div>
            <p>喜欢的商品：<span>1</span></p>
            <a href="#">查看喜欢的商品 &gt;</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPersonal",
};
</script>

<style scoped>
.format {
  display: flex;
}
.left img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
}
.center h2 {
  margin-left: 25px;
  margin-top: 30px;
}
.center p {
  margin-left: -7px;
  margin-top: -7px;
  color: #b0b0b0;
}
.center a {
  color: #ff6700;
  margin-left: 25px;
}
.right {
  margin-top: 15px;
  margin-left: 130px;
}
.right span {
  color: #ff6700;
}
.location {
  position: relative;
}
.location div {
  position: absolute;
  right: 65px;
  top: 0px;
}
.end ul li {
  width: 300px;
  list-style: none;
  float: left;
  margin-top: 20px;
}

.end p {
  margin-left: 15px;
  margin-top: 25px;
}
.end a {
  margin-left: 15px;
  margin-top: 25px;
  color: #757575;
}
.end span {
  color: #ff6700;
}
</style>
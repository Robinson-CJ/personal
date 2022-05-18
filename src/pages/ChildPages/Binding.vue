<template>
  <div>
    <div class="pass">密码：<input type="password" /></div>
    <div>
      验证码：<input type="text" />
      <img src="../../assets/image/captcha.png" alt="" /><button>换一张</button>
    </div>
    <div><button class="btn">绑定礼品卡</button></div>
    <div>
      <h4>礼品卡使用前需先绑定，确认已设置安全手机</h4>
      <p>
        无论是电子礼品卡还是实物礼品卡，在绑定时只需要输入礼品卡密码，点击确认即可绑定。
      </p>
      <p>
        礼品卡在使用之前，需要与小米ID绑定，每个礼品卡密码只可绑定一次，绑定后不可解绑，礼品卡内金额无需一次用完，您可以在有效期内不限次数重复使用。
      </p>
      <p>
        礼品卡在绑定之前，请确认您的小米ID已经设置了安全手机，为保证您的资金安全，在使用礼品卡消费时，需要向您的安全手机发送验证码，验证通过以后才可以使用。
      </p>
      <h4>下单时选择礼品卡即可抵扣，暂不支持抵扣物流费</h4>
      <p>
        您可以像以前一样在小米网选购商品，在订单结算时，填写完地址、电话等信息后，在页面的下方点击使用礼品卡，勾选您希望用来支付的礼品卡，提交订单并支付余款就可完成交易。
      </p>
      <p>
        在小米网购买商品，满69元免运费（大家电及其他特殊说明情况除外），礼品卡暂不支持抵扣物流费，如果订单未满69元，需要支付10元运费，并通过在线支付的方式支付。
      </p>
      <h4>礼品卡的使用范围是什么？</h4>
      <p>
        礼品卡可用于购买实物商品，暂不支持抵扣邮费、意外保、充话费、小米移动电话卡等。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Binding",
};
</script>

<style scoped>
.pass input {
  margin: 12px;
}
.btn {
  width: 161px;
  height: 41px;
  background-color: #ff6700;
  color: #ffffd6;
  margin-left: 57px;
}
h4 {
  margin-top: 20px;
}
p {
  color: #757575;
}
</style>
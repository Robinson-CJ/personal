<template>
  <div>
    <h3>暂无记录</h3>
    <div class="format">
      <h4>有效期内重复使用，可查询消费记录</h4>
      <p>
        您可以在礼品卡的有效期内，不限次数重复使用。如果您对余额有疑问，可以在我的礼品卡里查询到当前礼品卡的消费记录。
      </p>
      <h4>礼品卡只能绑定一次，不可解绑</h4>
      <p>考虑到礼品卡余额的安全问题，礼品卡只能绑定一次，绑定以后不可解绑。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyGift",
};
</script>

<style scoped>
h3 {
  color: #b0b0c2;
  text-align: center;
  line-height: center;
}
.format {
  margin-top: 40px;
}
p {
  color: #757575;
}
</style>
<template>
  <div>
    <h2>收货地址</h2>
    <div class="layout">
      <div class="location">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          />
        </svg>
        <span>添加新地址</span>
      </div>
      <div>
        <h4>吴彦祖</h4>
        <p>15*******23</p>
        <p>广东 广州 白云区 江高镇</p>
        <p>广东白云学院(西校区)</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Address",
};
</script>

<style scoped>
.layout {
  display: flex;
}
.layout div {
  width: 255px;
  height: 180px;
  border: 2px solid #e0e0e0;
  margin-top: 30px;
  margin-right: 20px;
}
.location {
  position: relative;
}
.location svg {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 35%;
  left: 43%;
  color: #e0e0e0cb;
}
.location span {
  position: absolute;
  top: 55%;
  left: 35%;
  color: #e0e0e0;
}
h4 {
  margin-top: 20px;
  margin-left: 30px;
}
p {
  text-align: left;
  margin-left: 30px;
}
</style>
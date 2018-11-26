<style type="text/scss" lang="scss">
  @import "../../scss/variables";

  .page-develop {
    text-align: center;
    padding: .27rem;
    .develop-content {
      height: 1.62rem;
      margin-top: .3rem;
      border: 1px solid $border-color;
      padding: .46rem 0.07rem .26rem .07rem;
      box-shadow: 0 0 20px #97BEFD;
      img {
        width: 1.78rem;
        height: .35rem;
      }
      span {
        font-size: $font-size-middle;
        color: #888;
      }
      .develop-content-text {
        margin-top: .05rem;
      }
      .develop-content-btn {
        margin-top: .4rem;
      }
    }
  }
</style>
<template>
  <div class="page-develop">
    <div class="develop-content">
      <div>
        <div>
          <!--<img src="../../assets/404.png"/>-->
        </div>
        <div class="develop-content-text">
          <span>系统维护中</span>
        </div>
      </div>
      <div class="develop-content-btn">
        <router-link :to="{name: '/'}">
          <button class="am-button tiny-blue">返回首页</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'not-found'
  };
</script>

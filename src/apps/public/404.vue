<style type="text/scss" lang="scss">
  @import "../../scss/variables";

  .page-notFound {
    text-align: center;
    padding: .27rem;
    .notFound-content {
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
      .notFound-content-text {
        margin-top: .05rem;
      }
      .notFound-content-btn {
        margin-top: .4rem;
      }
    }
  }
</style>
<template>
  <div class="page-notFound">
    <div class="notFound-content">
      <div>
        <div>
          <!--<img src="../../assets/404.png"/>-->
        </div>
        <div class="notFound-content-text">
          <span>很抱歉，页面不小心迷路了</span>
        </div>
      </div>
      <div class="notFound-content-btn">
        <router-link :to="{name: 'web'}">
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

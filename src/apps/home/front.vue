<style type='text/scss' lang="scss">
  @import "../../scss/variables";
  @import "../../scss/minix";
  .page-home{
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    .page-home-box{
      height: 100%;
      background: rgba(0,0,0,0.5);
      padding-top: .85rem;
      position: relative;
      .user{
        height: 1.3rem;
        width: 95%;
       box-shadow: 0 1px 5px 1px grey;
        left: 2.5%;
        position: absolute;
        top:.9rem;
        z-index: 99999;
        .information{
          width: 70%;
          display: flex;
          flex-wrap: wrap;
          margin: .25rem auto .15rem;
          justify-content: center;
          .poto{
            position: relative;
            margin-right: .05rem;
            img{
              width: .35rem;
              height: .35rem;
              border-radius: 50%;
            }
            span{position: absolute;bottom: 0;right: 0;
              .iconfont{
              font-size: .2rem;
                color: #fff;
            }
            }
          }
          p{
            font-size: .18rem;
            color: #ffffff;
            line-height: .35rem;
            span>i{font-size: .2rem;margin-left: .05rem;}
          }
        }
        .hd{
          display: flex;
          padding:0  .15rem;
          .solid{
            display: inline-block;
            height: .2rem;
            width: 1px;
            margin-top: .1rem;
            background: #999;
          }
          .hd-item{
            text-align: center;
            width: 50%;
            span{
              font-size: .14rem;
              color: #ffffff;
              .iconfont{
                vertical-align: middle;
                font-size: .18rem;
                margin-right: .05rem;
              }
            }
            p{
              font-size: .11rem;
              color: #999999;
              span{
                display: inline-block;
                width: .06rem;
                height: .06rem;
                background: red;
                border-radius: 50%;
                margin-right: .03rem;
              }
            }
          }
        }
      }
      .application{
        margin-top: 1.4rem;
        ul{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          li{
            width: 33%;
            text-align: center;
            margin: .28rem 0;
            i{
              font-size: .45rem;
              /*font-weight: 600;*/
              display: inline-block;
              color: rgb(49,129,94);
              line-height: .5rem;
            }
            span{
              display: block;
              font-size: 17px;
              color: #999999;
            }
          }
        }
      }
      .music{
        margin-top: .15rem;
        display: flex;
        flex-wrap: wrap;
        >p{width: 85%;margin-left: .1rem;line-height: .3rem;
          span{
            font-size: .15rem;
            color: #999999;
            padding: 0 .1rem;
          }
          span:nth-of-type(1){
            border-right: 1px solid #999999;
          }
        }
        .iconfont{
          font-size: .25rem;
          color: #dddddd;
        }
        .container{
          width: 100%;
          padding: 0 .1rem;
          .music-list{
            height: 100%;
            .list-box{
              height: 100%;
              .list-item{
                margin-bottom: .1rem;
                padding-left: .1rem;
                position: relative;
                display: flex;
                img{
                  width: .6rem;
                  height: .6rem;
                  display: block;
                }
                .item-title{
                  padding:.1rem .2rem;
                  p{font-size: .16rem;color: #fffdef;letter-spacing: 2px;}
                  span{font-size: .13rem;color: #999999;display: inline-block;margin-top: .05rem}
                }
                >p{
                  line-height: .6rem;
                  position: absolute;
                  top: 0;
                  right: .1rem;
                }
              }
            }
          }
          .music-collection{
            height: 100%;
            .tips{
              font-size: .16rem;
              color: #999999;
              text-align: center;
              line-height: .6rem;
              margin-top: .1rem;
            }
          }
        }
      }
    }
  }

</style>
<template>
  <div class="page-home">
    <div class="page-home-box">
      <div class="user">
          <div class="information">
            <div class="poto">
              <img src="http://img4.imgtn.bdimg.com/it/u=1853773920,3347263160&fm=26&gp=0.jpg" alt="">
              <span><i class="iconfont icon-VIP"></i></span>
            </div>
            <p>搁浅、那曾经 <span><i class="iconfont icon-VIP"></i><i class="iconfont icon-VIP"></i></span></p>
          </div>
        <ul class="hd">
          <li class="hd-item">
            <span><i class="iconfont icon-VIP"></i>活动中心</span>
            <p>活动中心焕然升级</p>
          </li>
          <span class="solid"></span>
          <li class="hd-item">
            <span><i class="iconfont icon-VIP"></i>会员中心</span>
            <p><span></span>周年狂欢多送一年VIP</p>
          </li>
        </ul>
      </div>
      <div class="application">
        <ul>
          <li>
            <i class="iconfont icon-bendiyinle"></i>
            <span>全部音乐</span>
          </li>
          <li>
            <i class="iconfont icon-xiazai"></i>
            <span>下载音乐</span>
          </li>
          <li>
            <i class="iconfont icon-zuijinlianxi"></i>
            <span>最近播放</span>
          </li>
          <li>
            <i class="iconfont icon-woxihuan"></i>
            <span>我喜欢</span>
          </li>
          <li>
            <i class="iconfont icon-yinle"></i>
            <span>已购音乐</span>
          </li>
          <li>
            <i class="iconfont icon-paobu"></i>
            <span>跑步电台</span>
          </li>
        </ul>
      </div>
      <div class="music">
        <p>
          <span @click="changeIndex(0)"  class="font-number">自建歌单 4</span>
          <span @click="changeIndex(1)">收藏歌单</span>
        </p>
        <span><i class="iconfont icon-liebiaomoshi"></i></span>
        <div class="container">
            <div v-if="index === 0" class="music-list">
              <ul class="list-box">
                <li class="list-item">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542557028004&di=1933d979347df17b890744b927b894d4&imgtype=0&src=http%3A%2F%2Fpic-cdn.35pic.com%2F58pic%2F14%2F74%2F04%2F00658PIC5Vz.jpg" alt="">
                  <div class="item-title">
                    <p>最爱</p>
                    <span>1首</span>
                  </div>
                  <p><i class="iconfont icon-arrow-right"></i></p>
                </li>
              </ul>
            </div>
          <div v-if="index === 1" class="music-collection">
            <p class="tips">没有收藏歌单</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 let echarts = require('echarts/lib/echarts')
                require('echarts/lib/chart/gauge')
  export default {
    name: 'home_front',
    data() {
      return {
        index:1,
        isShow:false
      }
    },
    mounted(){
    },
    methods:{
      changeIndex(index){
        this.index = index
        console.log(this.index)
      }
    },
  }
</script>

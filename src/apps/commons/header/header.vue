<style lang="scss" type="text/scss">
  .app-application{
    /*height: 100%;*/
    background:url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542349925014&di=462e27a26979a82c376a4acb32d4fdce&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fbf346b5c0f1bce662151a9bff813aa26c5884542.jpg");
    background-size: 100% 100%;
  }
    .header{
      width: 100%;
      box-sizing: border-box;
      background: rgba(0,0,0,0.5);
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
     .tab-nav{
       padding: 0 .15rem;
       display: flex;
       justify-content: space-between;
       span{
         margin-top: .14rem;
         i{font-size: .25rem;color: #f3f3f3}
       }
       .nav{
         display: flex;
         font-size: .19rem;
         font-weight: 500;
         color: #f8f8f8;
         li{
           margin:.18rem .1rem 0;
           color: #e4e4e4;
         }
       }
     }
      .search-box{
        padding: .1rem .1rem .2rem;
        box-sizing: border-box;
        .search{
          height: .25rem;
          background: rgba(122,139,139,0.5);
          text-align: center;
          border-radius: 3px;
          span{
            display: inline-block;
            line-height: .25rem;
            font-size: .15rem;
            color: #ffffff;
            i{
              font-size: .15rem;margin-right: .05rem;color: rgb(34,139,34);}
          }
        }
      }
    }
    .mint-switch{
      height: 15px;
    }
    .mint-switch-core{

      height: 15px;
    }
    .mint-switch-core::before{
      width: 15px;
      height: 15px;
    }
    .mint-switch-core::after{
      height: 15px;
    }
    .mint-switch-input:checked + .mint-switch-core{
      background: rgb(34,139,34);
      color: rgb(34,139,34);
    }
  .slide{
    width: 85%;
    height: 100%;
    /*padding:.5rem  .3rem ;*/
    position: fixed;
    top: 0;
    left: 0;
    /*padding: .1rem .3rem;*/
    background:url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542349925014&di=462e27a26979a82c376a4acb32d4fdce&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fbf346b5c0f1bce662151a9bff813aa26c5884542.jpg");
    background-size: 100% 100%;
   background-repeat: no-repeat;
    box-sizing: border-box;
    z-index: 999999999;

    .setting{
        margin-top: .4rem;
      padding: 0 .3rem;
      .item{
        margin: .15rem 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        span:nth-of-type(1){
          font-size: .16rem;
          color: gray;
        }
        span:nth-of-type(2){
          margin-top: 3px;
          font-size: .13rem;
          color: grey;
        }
      }
      .time{
        width: 100%;
        height: .75rem;
        position: relative;
        padding-top: .2rem;
        margin-bottom: .1rem;
        .time-zhou{
          width: 90%;
          background: #fff;
          height: 2px;
          margin-left: 10%;
          display: flex;
          justify-content: space-between;
           li{
             position: relative;
             font-size: 12px;
             .time-dian{
               width: 8px;
               height: 8px;
               position: absolute;
               top: -2px;
               background: #fff;
               border-radius: 50%;
             }
             .time-title{
               width: 60px;
               font-size: .13rem;
               position: absolute;
               top: .2rem;
               left: -25px;
             }
             .time-dian:nth-of-type(1){left: 0;}
             .time-dian:nth-of-type(2){left: 25%;}
             .time-dian:nth-of-type(3){left: 50%;}
             .time-dian:nth-of-type(4){left: 75%;}
             .time-dian:nth-of-type(5){left: 100%;}
           }
           }
        span:nth-of-type(1){
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 14px;
        }
        span:nth-of-type(2){
          position: absolute;
          bottom: 0;
          right: 0;
          font-size: 14px;
        }
      }
    }
    .foot{
      height: .6rem;
      position: fixed;
      bottom: 0;
      width: 85%;
      box-sizing: border-box;
      background: rgba(0,0,0,0.5);
      padding: 8px .3rem 0;
      .foot-box{
        width: 100%;
        border-top: 1px solid #efefef;
        display: flex;
        justify-content: space-between;
        font-size: .17rem;
        color: #ddd;
        >div{
          height: .3rem;
          line-height: .5rem;
          i{
            font-size: .2rem;
            color: rgb(34,139,34);
            margin-right: 5px;
            font-weight: 600;
            vertical-align: middle;
          }
        }
      }
    }
    .mengban{
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0,0,0,0.5);
      z-index: -5;
    }
  }

</style>
<template>
    <div class="page-header">
        <div class="header">
          <div class="tab-nav">
            <span @click="openSlide()"><i class="iconfont icon-caidan"></i></span>
            <ul class="nav">
             <router-link :to="{name:'home_front'}"> <li>我的</li></router-link>
              <router-link :to="{name:'home_front'}"> <li>音乐馆</li></router-link>
              <router-link :to="{name:'home_front'}"> <li>发现</li></router-link>
            </ul>
            <span><i class="iconfont icon-jia"></i></span>
          </div>
          <div class="search-box">
              <div class="search">
                  <span><i class="iconfont icon-sousuo"></i>搜索</span>
              </div>
          </div>
        </div>
        <div class="slide" v-show="slideShow">
          <ul class="zhuangban setting">
            <li class="item"><span>个性装扮</span><span>春</span></li>
            <li class="item"><span>消息中心</span></li>
            <li class="item"><span>免流量服务</span><span>王卡听歌免流量</span></li>
          </ul>
          <ul class="zhuangban setting">
            <li class="item"><span>定时关闭</span><mt-switch v-model="value"></mt-switch>
              <div class="time" v-if="value">
                <ul class="time-zhou">
                  <li>
                    <div class="time-dian"></div>
                    <span class="time-title">15分钟</span>
                  </li>
                  <li>
                    <div class="time-dian"></div>
                    <span class="time-title">30分钟</span>
                  </li>
                  <li >
                    <div class="time-dian"></div>
                    <span class="time-title">45分钟</span>
                  </li>
                  <li>
                    <div class="time-dian"></div>
                    <span class="time-title">60分钟</span>
                  </li>
                  <li>
                    <div class="time-dian"></div>
                    <span class="time-title">自定义</span>
                  </li>
                </ul>
                <span>关闭方式</span>
                <span>计时结束立即关闭></span>
              </div>
            </li>
            <li class="item"><span>仅Wi-Fi联网</span><mt-switch></mt-switch></li>
            <li class="item"><span>流量提醒</span><mt-switch></mt-switch></li>
            <li class="item"><span>听歌偏好</span></li>
          </ul>
          <ul class="zhuangban setting">
            <li class="item"><span>微音乐网盘</span></li>
            <li class="item"><span>清理空间</span></li>
            <li class="item"><span>帮助与反馈</span></li>
            <li class="item"><span>关于QQ音乐</span></li>
          </ul>
          <div class="foot">
            <div class="foot-box">
              <div class="set-up"><i class="iconfont icon-shezhi"></i>设置</div>
              <div class="sign-out"><i class="iconfont icon-zuojiantou"></i>退出登录/关闭</div>
            </div>
          </div>
          <div class="mengban" @click="close()"></div>
        </div>
      </div>
</template>

<script>
  import {TabContainer,TabContainerItem,Cell,Switch} from 'mint-ui'
    export default {
        name: "czy-header",
      data(){
          return{
            value:false,
            slideShow:false
          }
      },
      components:{
          MtTabContainer:TabContainer,
          MtTabContainerItem:TabContainerItem,
          MtCell:Cell,
          MtSwitch:Switch
      },
      methods:{
        openSlide(){
          this.slideShow = true
        },
        close(){
          this.slideShow = false
        },
      },
    }
</script>

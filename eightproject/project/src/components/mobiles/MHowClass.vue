<template>
  <div class="hello">
      <div class="hello2">
           <!-- 菜单 -->
      <div class="menus" :style="{'display':menuclass ? 'block' : 'none'}">
        <div><router-link to='/' >首页</router-link> </div>
        <div><router-link to="/MJapaneseDistinction">日语考级</router-link></div>
        <div><router-link to="/Mexam">高考日语</router-link></div>
        <div><router-link to="/MChildrenJapanese">儿童日语</router-link></div>
        <div><router-link to="">企业培训</router-link></div>
        <div><router-link to="">全球师资</router-link></div>
        <div><router-link to="">教学理念</router-link></div>
        <div><router-link to="/MJapanAbroad">日本留学</router-link></div>
        <div><router-link to="/MPublicClass">公开课</router-link></div>
        <div style="background:#F3F3F3;color:#EF3434"><router-link style="color:#EF3434;" to="/MHowClass">如何上课</router-link></div>
        <div><router-link to="/MAboutUs">关于我们</router-link></div>
      </div>

    <div style=""  @click='opop'>
      <!-- 移動端 -->
      <div id="mobile">
      <!-- 头部 -->
      <div class="titleimg">
        <div class="title">
          <div class="icon1" @click.stop='ggsimida'>
            <img src="../../images/indeximg/icon1.png" alt style="height:100%;width:100%;" />
          </div>

          <div class="icon2">
            <img src="../../images/indeximg/youdariyu.png" alt style="height:100%;width:100%;" />
          </div>

          <div class="icon3">
            <img src="../../images/indeximg/gerenzhongxin.png" alt style="height:100%;width:100%;" />
          </div>
        </div>

        <div class="kaoshititle">
          <div>轻松进入</div>
          <div>随时随地的在线课堂</div>
          <div>申请免费试听课</div>
        </div>
       
      </div>
    
      <!-- 在线注册 -->
      <div class="df zhucebox pt80">
          <img class="zhuceicon" src="../../images/indeximg/shangkeicon1.png" alt="">
          <div class="zhuceneirong">
              <div class="zhucetext">在线注册</div>
              <div class="zhucetext">免费领取价值288元试听课</div>
              <div class="contrs">注册完成后我们会尽快与您</div>
              <div class="dianjilingqu"><div>点击领取</div></div>
          </div>
      </div>
      <div class="df zhucebox">
          <img class="zhuceicon" src="../../images/indeximg/shangkeicon2.png" alt="">
          <div class="zhuceneirong">
              <div class="zhucetext">预约试听课时间</div>
              <div class="contrs">您的专属课程老师将会联系您 为您安排合适课程一对一进行授课</div>
             <img class="eroimg" src="../../images/indeximg/errimg1.png" alt="">
          </div>
      </div>
       <div class="df zhucebox">
          <img class="zhuceicon" src="../../images/indeximg/shangkeicon3.png" alt="">
          <div class="zhuceneirong">
              <div class="zhucetext">进入在线教室开始上课 </div>
              <div class="contrs">下载上课软件 进入一对一教室在线学日语</div>
              <img class="eroimg" src="../../images/indeximg/errimg2.png" alt="">
          </div>
      </div>

      


     </div>
    </div>

      </div>
     
    <footers></footers>
  </div>
</template>

<script>
import footers from './footer/footer.vue';

export default {
  components: {footers },
  data() {
    const that = this;
    return {
      menuclass:false,
        
    };
  },

  created(){
    console.log(window.innerWidth)

    
  },
  mounted() { 
  },
  methods: {
    ggsimida () {
      this.menuclass = true;
    },
    opop () {
      this.menuclass = false;
    }
    
     
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>

  @import "../../style/Common_style.css";
    .hello2{
        font-size: .16rem;
    }
    .fd{
        display: flex;
        justify-content: space-between;
    }
    .df{
        display: flex; 
    }
    .pr{
        position: relative;
    }
    .pa{
        position: absolute;
    }
    #mobile{
      display: block !important;
    }
    #pcWeb{
      display: none !important;
    }
.menus{
    width: 3rem;
    font-size: .34rem;
    color: #333333;
    position: fixed;
    top: 0;
    background: #fff;
    padding-bottom: .2rem;
    padding-top: .2rem;
    box-sizing: border-box;
    z-index: 9999;
    div{
      padding: .2rem 0 ;
      padding-left: .6rem;
    }
    a{
        text-decoration:none;
        color: #333333;
    }
    
}
  
  .titleimg {
    width: 100%;
    height: 6.2rem;
    background: url("../../images/indeximg/mruheshangle.png") no-repeat 100% 100%;
    background-size: 100% auto;
    .title {
      width: 100%;
      height: 1.3rem;
      display: flex;
      justify-content: space-between;
      line-height: 1.5rem;
      
      div {
        font-size: 0.2rem;
      }
    }
    .icon1 {
      height: 0.5rem;
      width: 0.5rem;
      padding-left: 0.15rem;
    }
    .icon2 {
      height: 0.5rem;
      width: 2.1rem;
    }
    .icon3 {
      height: 0.5rem;
      width: 0.5rem;
      padding-right:  0.15rem;
    }
  }
  .kaoshititle{
    margin-left: .68rem;
  }
  .kaoshititle div:nth-child(1){
      color: #393939;
      font-size: .64rem;
      margin-top: .8rem;
      font-weight: bold;
  }

  .kaoshititle div:nth-child(2){
      color: #262626;
      font-size: .48rem;
      padding-top: .2rem;
  }
  .kaoshititle div:nth-child(3){
      color: #fff;
      font-size: .28rem;
      background: #FF4942;
      width: 2.5rem;
      height: .8rem;
      border-radius: .8rem;
      line-height: .8rem;
      text-align: center;
      margin-top: .36rem;
 }
 .zhucebox{
     margin-bottom: 1.11rem;
 }
 
 .zhuceicon{
     width: 1.9rem;
     height: 2.06rem;
     display: block;
     margin: 0 .45rem;
 }

 .contrs{
     color: #979797;
     font-size: .28rem;
     padding:.2rem 0;
 }
 .zhucetext{
     color: #2B2B2B;
     font-size: .34rem;
     font-weight: bold;
 }
 .dianjilingqu{
     width: 4.34rem;
     height: .7rem;
     border-radius: .7rem;
     border: #FF4942 solid 1px;
     position: relative;
     div{
        width: 1.76rem;
        height: .62rem;
        background: #FF4942;
        color: #fff;
        font-size: .22rem;
        line-height: .62rem;
        text-align: center;
        border-radius: .62rem;
        position: absolute;
        right: .06rem;
        top: .03rem;
     }
 }
 .eroimg{
     width: 4.12rem;
     height: 2.47rem;
     display: block;
 }
 .pt80{
     padding-top: .8rem;
 }







</style>



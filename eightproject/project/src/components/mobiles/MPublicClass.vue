<template>
  <div class="hello">
      <div class="hello2">
           <!-- 菜单 -->
      <div class="menus" :style="{'display':menuclass ? 'block' : 'none'}">
        <div><router-link to='/' >首页</router-link> </div>
        <div><router-link to="/MJapaneseDistinction">日语考级</router-link></div>
        <div><router-link to="/Mexam">高考日语</router-link></div>
        <div><router-link to="/MChildrenJapanese">儿童日语</router-link></div>
        <div><router-link to="/Enterprise">企业培训</router-link></div>
        <div><router-link to="/MTeachers">全球师资</router-link></div>
        <div><router-link to="/MTeachingConcept">教学理念</router-link></div>
        <div><router-link to="/MJapanAbroad">日本留学</router-link></div>
        <div style="background:#F3F3F3;color:#EF3434"><router-link style="color:#EF3434;" to="/MPublicClass">公开课</router-link></div>
        <div><router-link to="/MHowClass">如何上课</router-link></div>
        <div><router-link to="/MAboutUs">关于我们</router-link></div>
      </div>

    <div style=""  @click='opop'>
      <!-- 移動端 -->
      <div id="mobile">
      <!-- 头部 -->
      <div class="titleimg">
        <div class="title">
          <div class="icon1" @click.stop='ggsimida'>
            <img src="../../images/indeximg/目录备份 2.png" alt style="height:100%;width:100%;" />
          </div>

          <div class="icon2">
            <img src="../../images/indeximg/Group 42备份 3.png" alt style="height:100%;width:100%;" />
          </div>

          <div class="icon3">
            <img src="../../images/indeximg/个人中心 - 中备份 2.png" alt style="height:100%;width:100%;" />
          </div>
        </div>

        <div class="kaoshititle">
          <div>丰富多彩的</div>
          <div>免费公开课</div>
          <div>为您打开多彩多样的日语世界</div>
          <div>申请免费试听课</div>
        </div>
       
      </div>
    
    <!-- 公开课内容 -->
      <div class="neitongtitle" style="display:flex;">  
            <div class="kaishi">即将开始</div>
            <div class="wangqi">往期公开课</div>
      </div>

      <div class="content">
                <div class="fd">
                    <div class="contentimg"><img src="../../images/indeximg/mgongkaiketimg.png" alt=""></div>
                    <div>
                        <div class="time">
                            <img src="../../images/indeximg/mtime.png" alt="">
                            2018-12-25 20：00
                        </div>
                        <div class="htirle">日本传统美食大公开</div>
                        <div class="pr">
                            <img class="ohuoicon" src="../../images/indeximg/椭圆形.png" alt="">
                            <div class="name">杨子豪</div>
                        </div>
                    </div>
                </div>
                <div class="jitinerirong">
                    我的孩子一直在友达学习日语，日语能力得到了很大的提升。
                </div>
                <div class="fd">
                        <div class="redu"><img src="../../images/indeximg/mhuoyan.png" alt="">热度：2135</div>
                        <div class="lijiyuyue">立即预约</div>
                </div>
      </div>
      <div class="content">
                <div class="fd">
                    <div class="contentimg"><img src="../../images/indeximg/mgongkaiketimg.png" alt=""></div>
                    <div>
                        <div class="time">
                            <img src="../../images/indeximg/mtime.png" alt="">
                            2018-12-25 20：00
                        </div>
                        <div class="htirle">日本传统美食大公开</div>
                        <div class="pr">
                            <img class="ohuoicon" src="../../images/indeximg/椭圆形.png" alt="">
                            <div class="name">杨子豪</div>
                        </div>
                    </div>
                </div>
                <div class="jitinerirong">
                    我的孩子一直在友达学习日语，日语能力得到了很大的提升。
                </div>
                <div class="fd">
                        <div class="redu"><img src="../../images/indeximg/mhuoyan.png" alt="">热度：2135</div>
                        <div class="lijiyuyue">立即预约</div>
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
    background: url("../../images/indeximg/mgongkaikeimg.png") no-repeat 100% 100%;
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
      font-size: .48rem;
      margin-top: .8rem;
      font-weight: bold;
  }
  .kaoshititle div:nth-child(2){
      color: #393939;
      font-size: .48rem;
      font-weight: bold;
      margin-bottom: .24rem;
  }
  .kaoshititle div:nth-child(3){
      color: #262626;
      font-size: .3rem;
  }
  .kaoshititle div:nth-child(4){
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
.kaishi{
    background: #FF4942;
    text-align: center;
    color: #fff;
    font-size: .28rem;
    width: 1.7rem;
    height: .62rem;
    line-height: .62rem;
    border-radius: 8px  0px  0px  8px;
}
.wangqi{
    border: 1px solid #C7C7C7;
    text-align: center;
    color: #393939;
    font-size: .28rem;
    width: 1.7rem;
    height: .62rem;
    line-height: .62rem;
    border-radius: 0px  8px  8px  0px;
    border-left: none;
    box-sizing: border-box;
}
.neitongtitle{
    width: 3.4rem;
    height: .62rem;
    margin: .5rem auto;
}
.content{
    padding: .3rem .3rem .5rem .3rem;
    margin: 0 .2rem;
    margin-bottom: .3rem;
    box-shadow:0px 7px 29px 10px rgba(235,235,235,0.5);
    border-radius:.17rem;
}
.contentimg{
    width: 2.82rem;
    height: 1.92rem;
    img{
        height: 100%;
        width: 100%;
    }
}
.time{
    width: 3.3rem;
    height: .44rem;
    background: #F6F6F6;
    color: #393939;
    font-size: .26rem;
    line-height: .44rem;
    text-align: right;
    border-radius: .44rem;
    box-sizing: border-box;
    padding-right: .26rem;
    position: relative;
    img{
        height: .24rem;
        width: .24rem;
        position: absolute;
        top: .1rem;
        left: .3rem;
      
    }
}
.htirle{
    color: #393939;
    font-size: .34rem;
    font-weight: bold;
    padding-top: .16rem;
    padding-bottom: .5rem;
}
.name{
    color: #393939;
    font-size: .28rem;
    padding-left: .6rem;
}
.ohuoicon{
    height: .4rem;
    width: .4rem;
    position: absolute;
    left: 0;
}
.jitinerirong{
    color: #848484;
    font-size: .28rem;
    line-height: .42rem;
    padding-top: .2rem;
}
.lijiyuyue{
    width: 1.56rem;
    height: .7rem;
    background: #FF4444;
    border-radius: .7rem;
    color: #fff;
    line-height: .7rem;
    text-align: center;
    font-size: .28rem;

}
.redu{
    position: relative;
    line-height: .7rem;
    padding-left: .4rem;
    img{
        position: absolute;
        width:.22rem;
        height: .28rem;
        left: 0;
        top: .2rem;
    }
}





</style>



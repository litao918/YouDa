<template>
  <div class="hello">
      <div class="hello2">
           <!-- 菜单 -->
      <div class="menus" :style="{'display':menuclass ? 'block' : 'none'}">
        <div> <router-link  to='/' >首页</router-link> </div>
        <div><router-link  to="/MJapaneseDistinction">日语考级</router-link></div>
        <div ><router-link  to="/Mexam">高考日语</router-link></div>
        <div><router-link to="/MChildrenJapanese">儿童日语</router-link></div>
        <div><router-link to="/Enterprise">企业培训</router-link></div>
        <div><router-link to="/MTeachers">全球师资</router-link></div>
        <div><router-link to="/MTeachingConcept">教学理念</router-link></div>
        <div><router-link to="/MJapanAbroad">日本留学</router-link></div>
        <div><router-link to="/MPublicClass">公开课</router-link></div>
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

        <div class="zoule">
            <div class="jiandan">
                <div>十年专注于日语教育</div>
            </div>
            <div class="shuoshi">
                <div>联系我们</div>
            </div>
        </div>

       
      </div>

      <div class="neirong">
            <div class="fd ">
                <div class="ohuo2 ">
                    <img src="../../images/indeximg/mlianxiicon1.png" alt="">
                    <div class="text1">客服电话</div>
                    <div class="text2">400-860-0101</div>
                </div>

                <div class="ohuo2">
                    <img src="../../images/indeximg/mlianxiicon2.png" alt="">
                    <div class="text1">官方邮箱</div>
                    <div class="text2">ad@youda.com.cn</div>
                </div>

                <div class="ohuo2">
                    <img src="../../images/indeximg/mlianxiicon3.png" alt="">
                    <div class="text1">官方微博</div>
                    <div class="text2">友达日语</div>
                </div>
                
            </div>
            <div class="fd mt54">
                <div class="ohuo2">
                    <img src="../../images/indeximg/mlianxiicon4.png" alt="">
                    <div class="text1">官方QQ</div>
                    <div class="text2">1635838471</div>
                </div>

                <div class="ohuo2">
                    <img src="../../images/indeximg/mlianxiicon5.png" alt="">
                    <div class="text1">微信公众号</div>
                    <div class="text2">youdariyu</div>
                </div>

                <div class="ohuo2">
                    <img src="../../images/indeximg/mlianxiicon6.png" alt="">
                    <div class="text1">企业网站</div>
                    <div class="text2">youda.com.cn</div>
                </div>
                
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

<style lang='less' scoped>

  @import "../../style/Common_style.css";
    .hello2{
        font-size: .16rem;
    }
    #mobile{
      display: block !important;
    }
    .fd{
        display: flex;
        justify-content: space-between;
    }
    #pcWeb{
      display: none !important;
    }
  .titleimg {
    width: 100%;
    height: 6.2rem;
    background: url("../../images/indeximg/lianxiwomenimg.png") no-repeat 100% 100%;
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
  
.jiandan{
    color: #343434;
    font-size: .44rem;
    margin-top: 1rem;
}
.shuoshi{
    color: #2D2D2D;
    font-size: .59rem;
    margin-top: .3rem;
    margin-bottom: .6rem;
    font-weight: bold;
    
}
.zoule{
    padding-left:.56rem; 
}

.neirong{
    padding: 0 .3rem;
    background: #F8F8F8;
    padding-top: .77rem;
    padding-bottom: 3.08rem;
    
}
.ohuo2{
   
    text-align: center;
    img{
        width: 1.65rem;
        height: 1.65rem;
        
    }
}
.text1{
    caret-color: #343434;
    font-size: .28rem;
    line-height: .4rem;
    font-weight: bold;
    
}
.text2{
    caret-color: #343434;
    font-size: .28rem;
    line-height: .4rem;
}
.mt77{
    margin-top: .77rem;
}
.mt54{
    margin-top: .54rem;
}


</style>



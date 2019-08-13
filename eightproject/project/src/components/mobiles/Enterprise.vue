<template>
  <div class="hello">
      <div class="hello2">
           <!-- 菜单 -->
      <div class="menus" :style="{'display':menuclass ? 'block' : 'none'}">
        <div><router-link to='/' >首页</router-link> </div>
        <div><router-link to="/MJapaneseDistinction">日语考级</router-link></div>
        <div><router-link to="/Mexam">高考日语</router-link></div>
        <div><router-link to="/MChildrenJapanese">儿童日语</router-link></div>
        <div style="background:#F3F3F3;color:#EF3434"><router-link style="color:#EF3434;" to="/Enterprise">企业培训</router-link></div>
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

        <div class="kaoshititle">
          <div>东京教学中心管理</div>
          <div>专业管理团队</div>
          <div>申请免费试听课</div>
        </div>
       
      </div>

      <!-- 解决方案 -->
      <div class="qiyefangan">
          <div class="mintitle">
              <div>为企业提供专业化日语解决方案</div>
              <div>帮助企业实现更好的发展</div>
          </div>

          <div class="lunbo">

              
            <swiper
              :options="swiperOption"
              class="swiper-wrap"
            >

              <swiper-slide >
                  <div class="lunbocont2">
                        <div class="contbox">
                                <img src="../../images/indeximg/qiyepeixunlunbo1.png" alt="">
                                <div class="laoshi">绩效考核</div>
                                <div class="daxue">通过学习管理系统，随时了解员工学习动态、提供各项KPI数据分析和完整学习报告 </div>
                        </div>
                  </div>
              </swiper-slide>

              <swiper-slide >
                  <div class="lunbocont2">
                        <div class="contbox">
                                <img src="../../images/indeximg/qiyepeixunlunbo1.png" alt="">
                                <div class="laoshi">绩效考核</div>
                                <div class="daxue">通过学习管理系统，随时了解员工学习动态、提供各项KPI数据分析和完整学习报告 </div>
                        </div>
                  </div>
              </swiper-slide>

              <swiper-slide >
                  <div class="lunbocont2">
                        <div class="contbox">
                                <img src="../../images/indeximg/qiyepeixunlunbo1.png" alt="">
                                <div class="laoshi">绩效考核</div>
                                <div class="daxue">通过学习管理系统，随时了解员工学习动态、提供各项KPI数据分析和完整学习报告</div>
                    
                        </div>
                  </div>
              </swiper-slide>

              <!-- 常见的小圆点 -->
              <div
                class="swiper-pagination"
                slot="pagination"
              ></div>

            </swiper>


          </div>

      </div>

      <!-- 企业的期待 -->
      <div class="jiejuefangan">
          <div class="mintitle">
              <div>企业的期待 我们的行动</div>
              <div>助力企业发展</div>
          </div>

         <div class="zhuyaoneirong">
              <img src="../../images/indeximg/qiyepeixunimg1.png" alt="">
                <div class="qidaititle">提升日语能力， 强化专业技能 </div>
                <div class="qidaineirong">
                    <div>·拓展全球视野，了解异国文化</div>
                    <div>·专业词汇即学即用，贴合工作需求</div>
                    <div>·改善发音，告别哑巴日</div>
                </div>
         </div>
          <div class="zhuyaoneirong">
              <img src="../../images/indeximg/qiyepeixunimg2.png" alt="">
                <div class="qidaititle">关注子女教育，完善员工福利 </div>
                <div class="qidaineirong">
                    <div>·一节日语课是最好的睡前故事</div>
                    <div>·让孩子通过日语看见世界</div>
                    <div>·专业师资帮孩子玩转留学</div>
                </div>
         </div>
          <div class="zhuyaoneirong">
              <img src="../../images/indeximg/qiyepeixunimg3.png" alt="">
                <div class="qidaititle">全程追踪管理，掌握培训效果 </div>
                <div class="qidaineirong">
                    <div>·专属客服定期督导，激发学习动力</div>
                    <div>·员工学习动态、顾问评语及时知晓</div>
                    <div>·定期提供完整学习报告，效果评估不用愁</div>
                </div>
         </div>
         

      </div>

      <!-- 客户认可我们的骄傲 -->
      <div>
          <div class="kehutiele">客户认可我们的骄傲</div>
          <div class="jiaoaoimg jiaoaoimg1">
                <div></div>
                <div></div>
          </div>
           <div class="jiaoaoimg jiaoaoimg2">
                <div></div>
                <div></div>
          </div>
           <div class="jiaoaoimg jiaoaoimg3">
                <div></div>
                <div></div>
          </div> 
           <div class="jiaoaoimg jiaoaoimg4">
                <div></div>
                <div></div>
          </div>
      </div>
    
   

     </div>
    </div>

      </div>
     
    <footers></footers>
  </div>
</template>

<script>
import footers from "./footer/footer.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");

export default {
  components: {footers },
  data() {
    const that = this;
   return {
      menuclass: false,
      imgIndex: 1,
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
        //滑动速度
        speed: 800,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        grabCursor: true,
        on: {
          //滑动之后回调函数
          slideChangeTransitionStart: function() {
            /* realIndex为滚动到当前的slide索引值 */
            that.imgIndex= this.realIndex - 1;
          },
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        }
      }
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
    background: url("../../images/indeximg/qiyeimg.png") no-repeat 100% 100%;
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
  }

  .kaoshititle div:nth-child(2){
      color: #A6A6A6;
      font-size: .4rem;
      padding: .4rem 0;
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
.mintitle{
    text-align: center;
}
.mintitle div:nth-child(1){
    color: #2B2B2B;
    font-size: .4rem;
    font-weight: bold;
    padding-bottom: .2rem;
}
.mintitle div:nth-child(2){
    color: #959595;
    font-size: .28rem;
}
.qiyefangan{
    padding-top: .88rem;
    padding-bottom: 1rem;
}
.lunbo{

}
.jiejuefangan{
    background: #F8F8F8;
     padding: 0 .35rem;
    padding-top: 1.2rem;
    img{
        height: 3.76rem;
        width: 6.8rem;
        display: block;
    }
   
   
}
.qidaititle{
    color: #242424;
    font-size: .34rem;
    font-weight: bold;
    padding-top: .52rem;
    
}
.qidaineirong{
    padding-top: .16rem;
    color: #999999;
    font-size: .28rem;
    line-height: .48rem;
    padding-bottom: .77rem;
}
.zhuyaoneirong{
    padding-top: .52rem;
}
.kehutiele{
    color: #2B2B2B;
    font-size: .4rem;
    text-align: center;
    font-weight: bold;
    padding-top: .9rem;
    padding-bottom: .72rem;
}
.jiaoaoimg{
    display: flex;
    justify-content: space-between;
    margin-bottom:.9rem;
    padding: 0 .4rem;
 
}
.jiaoaoimg1 div:nth-child(1){
    background: url('../../images/indeximg/mqiyepeixun1.png') no-repeat center center;
    background-size: 100% 100%;
    height: .54rem;
    width: 2.97rem;
}
 .jiaoaoimg1 div:nth-child(2){
    background: url('../../images/indeximg/mqiyepeixun2.png') no-repeat center center;
    background-size: 100% 100%;
    height: .86rem;
    width: 2.46rem;
 }
 .jiaoaoimg2 div:nth-child(1){
    background: url('../../images/indeximg/mqiyepeixun3.png') no-repeat center center;
    background-size: 100% 100%;
    height: .91rem;
    width: 2.48rem;
 }
 .jiaoaoimg2 div:nth-child(2){
    background: url('../../images/indeximg/mqiyepeixun4.png') no-repeat center center;
    background-size: 100% 100%;
    height: .66rem;
    width: 2.64rem;
 }
  .jiaoaoimg3 div:nth-child(1){
    background: url('../../images/indeximg/mqiyepeixun5.png') no-repeat center center;
    background-size: 100% 100%;
    height: .75rem;
    width: 2.46rem;
 }
 .jiaoaoimg3 div:nth-child(2){
    background: url('../../images/indeximg/mqiyepeixun6.png') no-repeat center center;
    background-size: 100% 100%;
    height: .92rem;
    width: 2.67rem;
 }
  .jiaoaoimg4 div:nth-child(1){
    background: url('../../images/indeximg/mqiyepeixun7.png') no-repeat center center;
    background-size: 100% 100%;
    height: .62rem;
    width: 2.97rem;
 }
 .jiaoaoimg4 div:nth-child(2){
    background: url('../../images/indeximg/mqiyepeixun8.png') no-repeat center center;
    background-size: 100% 100%;
    height: .62rem;
    width: 2.99rem;
 }
.contbox{
    height: 6.1rem;
    width: 6.12rem;
    box-shadow:0px 2px 11px 2px rgba(211,211,211,0.5);
    border-radius:16px; 
    padding: 0 .42rem;
    margin-left: .7rem;
    padding-top: .74rem;
    box-sizing: border-box;
    text-align: center;
    
    
    img{
        width:  2.05rem;
        height: 2.05rem;
        display: block;
        margin: 0 auto;

    }
}

.laoshi{
    color: #2B2B2B;
    font-size: .34rem;
    padding-top: 1rem;
    padding-bottom: .5rem;
 
}
.daxue{
    color: #999999;
    font-size: .28rem;
  
    
}
.jingyan{
    color: #343434;
    font-size: .24rem;
}
.wenben{
    color: #949494;
    font-size: .28rem;
    line-height: .42rem;
    margin-top: .2rem;
}

.lunbocont2{
    padding: 1rem 0;
  
}

</style>



<template>
  <div class="hello">

      <!-- 菜单 -->
      <div class="menus" :style="{'display':menuclass ? 'block' : 'none'}">
        <div><router-link to='/' >首页</router-link> </div>
        <div><router-link to="/MJapaneseDistinction">日语考级</router-link></div>
        <div><router-link to="/Mexam">高考日语</router-link></div>
        <div><router-link to="/MChildrenJapanese">儿童日语</router-link></div>
        <div><router-link to="/Enterprise">企业培训</router-link></div>
        <div><router-link to="/MTeachers">全球师资</router-link></div>
        <div style="background:#F3F3F3;color:#EF3434"><router-link style="color:#EF3434;" to="/MTeachingConcept">教学理念</router-link></div>
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
            <img src="../../images/indeximg/icon1.png" alt style="height:100%;width:100%;" />
          </div>

          <div class="icon2">
            <img src="../../images/indeximg/youdariyu.png" alt style="height:100%;width:100%;" />
          </div>

          <div class="icon3">
            <img src="../../images/indeximg/gerenzhongxin.png" alt style="height:100%;width:100%;" />
          </div>
        </div>

        <div class="dingzhi1">定制专属于您的</div>
        <div class="dingzhi2">日语学习方案</div>
        <div class="dingzhibtn">申请免费试听课</div>

       
      </div>


        <div class="liniantitle">你喜欢怎样的授课方式</div>
        <div class="liniantext">针对最佳的学习方案 合理规划您的每一节课程</div>

      <!-- 轮播 -->
      <div class="lunbo">
                   <swiper
              :options="swiperOption"
              class="swiper-wrap"
            >

              <swiper-slide >
                    <div class="diyilunbo">
                        <div class="diyibox">
                        <img src="../../images/indeximg/huojiano1.png" alt="">
                         <div>专项课</div>
                        <div>1~4人小班课</div>
                        <div>同伴沟通学习更有趣</div>
                        </div>
                       
                    </div>
              </swiper-slide>
                <swiper-slide >
                    <div class="diyilunbo">
                        <div class="diyibox">
                        <img src="../../images/indeximg/huojiano1.png" alt="">
                         <div>专项课</div>
                        <div>1~4人小班课</div>
                        <div>同伴沟通学习更有趣</div>
                        </div>
                       
                    </div>
              </swiper-slide>
                <swiper-slide >
                    <div class="diyilunbo">
                        <div class="diyibox">
                        <img src="../../images/indeximg/huojiano1.png" alt="">
                         <div>专项课</div>
                        <div>1~4人小班课</div>
                        <div>同伴沟通学习更有趣</div>
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

      <!-- 主修课程 -->

      <div>
          <div class="trtitle"> <div>主修课</div> <div> 専攻コース</div> </div>
          <div class="kechengtext">学习日语的最核心知识点，课程内容涵盖了日语单词、语法、发音、写作、听力等所有日语知识要点，通过主修课学习基本可以掌握日语学习中最重要的知识点。</div>
          <div class="imgbtn pb77">
              <img src="../../images/indeximg/mjiaoxueimg1.png" alt="">
              <div class="mt47">了解更多内容</div>
          </div>

        <div class="fff1">
            <div class="trtitle"> <div>精选专项课</div> <div> 補助コース</div> </div>
          <div class="kechengtext">结合主修课课上的知识点，配合习题练习和讲解；还包括专项辅导课，包括LMW课程，对单词、文法、阅读等进行专项辅导。</div>
          <div class="imgbtn">
              <div class="ml47">了解更多内容</div>
               <img  class="mt47" src="../../images/indeximg/mjiaoxueimg2.png" alt="">
          </div>
        </div>

          <div class="trtitle"> <div>精选会话课</div> <div> 会話コース</div> </div>
          <div class="kechengtext">日本东京外教小班教学，让你领略纯正日语发音，另外还有MP大师发音课，让您学到最正宗的东京发音，以及其他各种专项定制课程.</div>
          <div class="imgbtn pb77">
              <img src="../../images/indeximg/mjiaoxueimg3.png" alt="">
              <div class="mt47">了解更多内容</div>
          </div>

          <div class="yunketang">
               <div class="trtitle"> <div>云课堂</div> <div> 日本文化コース</div> </div>
               <div class="kechengtext">云课堂定期开讲，主要由友达日语中日外教老师为学院介绍日本文化以及日本最新最热辣话题。.</div>
               <div class="lunbo2">
                    <swiper
              :options="swiperOption"
              class="swiper-wrap"
            >

              <swiper-slide >
                  <div class="lunbocont2">
                        <div class="contbox">
                              
                        </div>
                  </div>
              </swiper-slide>

                 <swiper-slide >
                  <div class="lunbocont2">
                        <div class="contbox">
                             
                        </div>
                  </div>
              </swiper-slide>

                 <swiper-slide >
                  <div class="lunbocont2">
                        <div class="contbox">
                               
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
               <div class="chakanbnt">查看更多云课堂</div>
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

    #mobile{
      display: block !important;
    }
    #pcWeb{
      display: none !important;
    }
  .titleimg {
    width: 100%;
    height: 6.2rem;
    background: url("../../images/indeximg/mjiaoxuelinian.png") no-repeat 100% 100%;
    background-size: 100% auto;
    position: relative;
    .title {
      width: 100%;
      height: 1.5rem;
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
  .liniantitle{
      text-align: center;
      color: #121212;
      font-size: .4rem;
      padding-top: .6rem;
      padding-bottom: .1rem;
  }
  .liniantext{
      text-align: center;
      color: #959595;
      font-size: .28rem;
      padding-bottom: .6rem;
  }
 
 .trtitle{
     display: flex;
     margin: 0 .47rem;
     border-bottom: 1px solid #EF3434;
     padding-bottom: .3rem;
     margin-bottom: .4rem;
     margin-top: .87rem;

 }
  .trtitle div:nth-child(1){
      color: #EF3434;
      font-size: .44rem;
      line-height: .62rem;
      padding-right: .2rem;
  }
  .trtitle div:nth-child(2){
      color: #D5D5D5;
      font-size: .36rem;
      line-height: .62rem;
  }
  .kechengtext{
      color: #737373;
      font-size: .28rem;
      line-height: .4rem;
      padding: 0 .47rem;
      padding-bottom: .2rem;
  }
  .imgbtn{
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;

      img{
          display: block;
          height: 2.79rem;
          width: 3.97rem;
      }
      div{
          background: #FF4942;
          height: .8rem;
          width: 2.3rem;
          border-radius: .8rem;
          color: #fff;
          line-height: .8rem;
          text-align: center;
          box-shadow:0px 2px 4px 0px rgba(255,73,66,0.86);
          font-size: .28rem;
          margin-top: 1.6rem;
      }
      .mt47{
          margin-right: .47rem;
      }
      .ml47{
          margin-left: .47rem;
      }
     
  }
   .pb77{
          padding-bottom: .77rem;
          
      }
  .fff1{
      background: #FFF1F1;
      padding-top: .70rem;
      padding-bottom: 1rem;

  }
  .yunketang{
      background: #F8F8F8;
      padding-top: .97rem;
    padding-bottom: 1.34rem;
      
  }
  .lunbo2{
      height: 5rem;
  }
  .chakanbnt{
      background: #FF4942;
          height: .8rem;
          width: 2.3rem;
          border-radius: .8rem;
          color: #fff;
          line-height: .8rem;
          text-align: center;
          box-shadow:0px 2px 4px 0px rgba(255,73,66,0.86);
          font-size: .28rem;
          margin: 0 auto;
          margin-top: 1rem;
         
  }
  .contbox{
    width: 6.5rem;
    height: 5rem;
    padding: 0 .42rem;
    margin-left: .5rem;
    padding-top: .74rem;
    box-sizing: border-box;
    text-align: center;
    background: url('../../images/indeximg/jiaoxuelinianlunboimg.png') no-repeat center center;
    background-size: 100% 100%;
    
    
    img{
       height: 100%;
       width: 100%;
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
padding-bottom: 1rem;
  
}
.lunbo{
  padding-bottom: .8rem;
  background: #e9e9e9;
}
.dingzhi1{
    color: #fff;
    font-size: .48rem;
    text-align: right;
    padding-right: .62rem;
    padding-top: 1rem;
    padding-bottom: .15rem;
}
.dingzhi2{
    color: #fff;
    font-size: .4rem;
    text-align: right;
    padding-right: .62rem;
    
}
.dingzhibtn{
    color: #fff;
    font-size: .28rem;
    text-align: center;
    height: .8rem;
    width: 2.5rem;
    line-height: .8rem;
    background: #EF3434;
    border-radius: .8rem;
    position: absolute;
    right: .62rem;
    bottom: 1rem;
}
  .diyilunbo{
  
    padding: 0 .42rem;
    margin-left: 1.4rem;
    padding-top: .74rem;
    padding-bottom: 1rem;
    box-sizing: border-box;
    text-align: center;
    img{
       height: 2rem;
       width: 2rem;
        display: block;
        margin: 0 auto;
        
       
       
    }
}
.diyibox{
    width: 3.98rem;
    height: 4.55rem;

    background: #fff;
    border-radius:32px;
    box-sizing: border-box;
    padding-top: .4rem;
}
.diyibox div:nth-child(2){
    color: #121212;
    font-size: .4rem;
    padding: .2rem 0;
}
.diyibox div:nth-child(3){
    color: #6A6A6A;
    font-size: .28rem;
}
.diyibox div:nth-child(4){
    color: #6A6A6A;
    font-size: .28rem;
}
</style>



<template>
  <div class="hello">
    <div class="hello2">
      <!-- 菜单 -->
      <div class="menus" :style="{'display':menuclass ? 'block' : 'none'}">
        <div>
          <router-link to="/">首页</router-link>
        </div>
        <div>
          <router-link to="/MJapaneseDistinction">日语考级</router-link>
        </div>
        <div>
          <router-link to="/Mexam">高考日语</router-link>
        </div>
        <div>
          <router-link to="/MChildrenJapanese">儿童日语</router-link>
        </div>
        <div>
          <router-link to="/Enterprise">企业培训</router-link>
        </div>
        <div style="background:#F3F3F3;color:#EF3434">
          <router-link style="color:#EF3434;" to="/MTeachers">全球师资</router-link>
        </div>
        <div>
          <router-link to="/MTeachingConcept">教学理念</router-link>
        </div>
        <div>
          <router-link to="/MJapanAbroad">日本留学</router-link>
        </div>
        <div>
          <router-link to="/MPublicClass">公开课</router-link>
        </div>
        <div>
          <router-link to="/MHowClass">如何上课</router-link>
        </div>
        <div>
          <router-link to="/MAboutUs">关于我们</router-link>
        </div>
      </div>

      <div style @click="opop">
        <!-- 移動端 -->
        <div id="mobile">
          <!-- 头部 -->
          <div class="titleimg">
            <div class="title">
              <div class="icon1" @click.stop="ggsimida">
                <img src="../../images/indeximg/目录备份 2.png" alt style="height:100%;width:100%;" />
              </div>

              <div class="icon2">
                <img
                  src="../../images/indeximg/Group 42备份 3.png"
                  alt
                  style="height:100%;width:100%;"
                />
              </div>

              <div class="icon3">
                <img
                  src="../../images/indeximg/个人中心 - 中备份 2.png"
                  alt
                  style="height:100%;width:100%;"
                />
              </div>
            </div>

            <div class="kaoshititle">
              <div>东京教学中心授课</div>
              <div>明星教学团队</div>
              <div>申请免费试听课</div>
            </div>
          </div>

          <!--  -->
          <div class="lunbobox">
            <div class="quanqiutitle">
              <div>我们的专业教师</div>
              <div>严格的教师招聘体系 为您的课程保驾护航</div>
            </div>

            <div class="lunbo">

                  <swiper
              :options="swiperOption"
              class="swiper-wrap"
            >

              <swiper-slide >
               <div class="h6">
                     <div class="lunbotent">
                     <div class="tiaose"></div>
                 </div>
               </div>
              </swiper-slide>

              <swiper-slide >
               <div class="h6">
                     <div class="lunbotent">
                     <div class="tiaose2"></div>
                 </div>
               </div>
              </swiper-slide>

              <swiper-slide >
               <div class="h6">
                     <div class="lunbotent">
                     <div class="tiaose3"></div>
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

          <!-- 内容 -->
          <div class="contentbox">
            <img class="miximg" src="../../images/indeximg/shadiaoimg1.png" alt />
            <div class="imgtext">课后学员可以对老师课堂表现分项评价，定期根据学员评价对老师进行考评，综合得分低的老师将被淘汰。</div>
            <div class="xingxing">
              <div class="xingxing1">
                <div>上课语速：</div>
                <div>
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                </div>
              </div>

              <div class="xingxing1">
                <div>教学技巧：</div>
                <div>
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                </div>
              </div>
            </div>
            <div class="xingxing">
              <div class="xingxing1">
                <div>时间分配：</div>
                <div>
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                </div>
              </div>

              <div class="xingxing1">
                <div>教学态度：</div>
                <div>
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                  <img src="../../images/indeximg/xiaoxingxing2.png" alt />
                </div>
              </div>
            </div>
          </div>
          <div class="contentbox mt70">
            <img class="miximg" src="../../images/indeximg/shadiaoimg2.png" alt />
            <div class="wenben">
              <div class="wenbenbox">
                <div>严格教师招聘体系</div>
                <div>6个流程筛选考评</div>
                <div>我们只要最优秀的</div>
              </div>

              <div class="wenbenbox">
                <div>适应中国教育特点</div>
                <div>专注融入式教学</div>
                <div>热情、有趣，是老师更是朋友</div>
              </div>
            </div>
            <div class="wenben">
              <div class="wenbenbox">
                <div>专业教师培训系统</div>
                <div>每名老师上岗前</div>
                <div>都至少经过100小时教学培训</div>
              </div>

              <div class="wenbenbox">
                <div>汇集日本各行精英</div>
                <div>在这里，您学到的</div>
                <div>绝对不止是日语</div>
              </div>
            </div>
          </div>

          <!--  -->
          <div class="lunbo2box">
            <div class="quanqiutitle">
              <div>我们的专业教师</div>
              <div>严格的教师招聘体系 为您的课程保驾护航</div>
            </div>

            <swiper
              :options="swiperOption"
              class="swiper-wrap"
            >

              <swiper-slide >
                  <div class="lunbocont2">
                        <div class="contbox">
                                <img src="../../images/indeximg/buzhidapo.png" alt="">
                                <div class="laoshi">美月老师</div>
                                <div class="daxue">西安交通大学</div>
                                <div class="jingyan">三年日语教学经验</div>
                                <div class="wenben">大家好,我是美月老师，我毕业于西安交通大学，已经获得了硕士学位。并且有日本奈良女子大学留学经验，我提倡寓教于乐，开心的，氛围轻松的教学方法，同时找到适合自己的学习日语的方式方法。</div>

                        </div>
                  </div>
              </swiper-slide>

              <swiper-slide >
                  <div class="lunbocont2">
                        <div class="contbox">
                                <img src="../../images/indeximg/buzhidapo2.png" alt="">
                                <div class="laoshi">亚由美老师</div>
                                <div class="daxue">大连大学</div>
                                <div class="jingyan">五年日语教学经验</div>
                                <div class="wenben">大家好,亜由美老师大家好，我是亚由美老师，我毕业于大连大学，已获得文学硕士学位。现在定居日本福冈，之前在日本从事翻译工作，研究生期间有做过二外学生教学工作。我觉得学语言培养兴趣是第一步，开心快乐的学习最重要。</div>

                        </div>
                  </div>
              </swiper-slide>

              <swiper-slide >
                  <div class="lunbocont2">
                        <div class="contbox">
                                <img src="../../images/indeximg/buzhidapo3.png" alt="">
                                <div class="laoshi">菜菜子老师</div>
                                <div class="daxue">北京第二外国语</div>
                                <div class="jingyan">三年日语教学经验</div>
                                <div class="wenben">大家好,大家好我是菜菜子老师毕业于北京第二外国语学院硕士日语口译专业，有在500强日企实习经验，我认为教学不仅仅是停留在理论上，更多是让学生去理解去实践运用。我期望让大家不仅仅学到日语，重要的是掌握一门语言的学习方法，体会一个国家的文化魅力。</div>

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
  components: { footers, swiper, swiperSlide },
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

  created() {
    console.log(window.innerWidth);
  },
  mounted() {},
  methods: {
    ggsimida() {
      this.menuclass = true;
    },
    opop() {
      this.menuclass = false;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@import "../../style/Common_style.css";
.hello2 {
  font-size: 0.16rem;
}
#mobile {
  display: block !important;
}
#pcWeb {
  display: none !important;
}
.titleimg {
  width: 100%;
  height: 6.2rem;
  background: url("../../images/indeximg/mquanqiushiziimg.png") no-repeat 100%
    100%;
  background-size: 100% auto;
  .title {
    width: 100%;
    height: 1.3rem;
    display: flex;
    justify-content: space-between;
    line-height: 1.5rem;
    background: #f2f2f2;
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
    padding-right: 0.15rem;
  }
}
.kaoshititle {
  margin-left: 0.68rem;
}
.kaoshititle div:nth-child(1) {
  color: #393939;
  font-size: 0.48rem;
  margin-bottom: 0.24rem;
  margin-top: 1rem;
}

.kaoshititle div:nth-child(2) {
  color: #262626;
  font-size: 0.4rem;
}
.kaoshititle div:nth-child(3) {
  color: #fff;
  font-size: 0.28rem;
  background: #ff4942;
  width: 2.5rem;
  height: 0.8rem;
  border-radius: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  margin-top: 0.36rem;
}
.menus {
  width: 3rem;
  font-size: 0.34rem;
  color: #333333;
  position: fixed;
  top: 0;
  background: #fff;
  padding-bottom: 0.2rem;
  padding-top: 0.2rem;
  box-sizing: border-box;
  z-index: 9999;
  div {
    padding: 0.2rem 0;
    padding-left: 0.6rem;
  }
  a {
    text-decoration: none;
    color: #333333;
  }
}
.quanqiutitle {
  text-align: center;
}
.quanqiutitle div:nth-child(1) {
  color: #2b2b2b;
  font-size: 0.4rem;
  padding-bottom: 0.1rem;
  font-weight: bold;
}
.quanqiutitle div:nth-child(2) {
  color: #959595;
  font-size: 0.28rem;
}
.lunbo {
  height: 5rem;
    margin-bottom: 1.5rem;
}
.lunbobox {
  padding-top: 0.92rem;
  padding-bottom: 1rem;
}
.miximg {
  height: 4.12rem;
  width: 6.67rem;
  display: block;
  margin: 0 auto;
}
.contentbox {
  padding: 0 0.37rem;
}
.imgtext {
  color: #2a2a2a;
  font-size: 0.28rem;
  line-height: 0.42rem;
  padding: 0.3rem 0;
}
.xingxing {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.1rem;
}
.xingxing1 {
  display: flex;
  color: #2a2a2a;
  font-size: 0.28rem;
  img {
    height: 0.22rem;
    width: 0.22rem;
    margin-left: 0.1rem;
  }
}
.mt70 {
  margin-top: 0.7rem;
}
.wenben {
  display: flex;
  justify-content: space-between;
  margin-top: 0.52rem;
  color: #c8c8c8;
  font-size: 0.24rem;
}
.wenbenbox div:nth-child(1) {
  color: #3d3d3d;
  font-size: 0.28rem;
  line-height: 0.48rem;
  width: 3.03rem;
}
.lunbo2box {
  padding-top: 1.64rem;
  padding-bottom: 1rem;

}
.lunbotent{
    margin-top: .78rem;
    width: 5.05rem;
    height: 4.56rem;
    box-shadow:0px 2px 20px 5px rgba(196,196,196,0.5);
    background: #ffffff;
    border-radius: 16px;
    margin-left: 1.2rem;
}
.tiaose{
    background: #FFC632;
    height: .16rem;
    border-radius: 16px 16px 0px 0px;
}
.tiaose2{
    background: #1989FA;
    height: .16rem;
    border-radius: 16px 16px 0px 0px;
}
.tiaose3{
    background: #EF3434;
    height: .16rem;
    border-radius: 16px 16px 0px 0px;
}
.h6{
    padding-bottom: 1rem;
}
.contbox{
    height: 6.1rem;
    width: 6.12rem;
    box-shadow:0px 2px 11px 2px rgba(211,211,211,0.5);
    border-radius:16px; 
    padding: 0 .42rem;
    margin-left: .7rem;
    padding-top: .36rem;
    box-sizing: border-box;
    text-align: center;
    
    
    img{
        width:  .92rem;
        height: .92rem;
        display: block;
        margin: 0 auto;

    }
}

.laoshi{
    color: #343434;
    font-size: .3rem;
    font-weight: bold;
    padding-top: .1rem;
}
.daxue{
    color: #010101;
    font-size: .22rem;
    height: .4rem;
    width: 1.68rem;
    line-height: .4rem;
    border-radius: .4rem;
    background: #FCD34D;
    margin: .2rem auto;
    
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



<template>
  <div class="hello">
      <div class="hello2">
           <!-- 菜单 -->
      <div class="menus" :style="{'display':menuclass ? 'block' : 'none'}">
        <div> <router-link  to='/' >首页</router-link> </div>
        <div><router-link  to="/MJapaneseDistinction">日语考级</router-link></div>
        <div style="background:#F3F3F3;color:#EF3434"><router-link style="color:#EF3434;" to="/Mexam">高考日语</router-link></div>
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
                <div>日语高考</div>
                <div>拿高分更简单</div>
            </div>
            <div class="shuoshi">
                <div>硕士学历以上中教</div>
                <div>东京丰富经验外教</div>
            </div>

            <div class="liaojiebtn">了解详情
                <div class="sanjiao"></div>
            </div>
        </div>

       
      </div>


      <!-- 高考大数据 -->
      <div class="titletext">
        <div>日语高考大数据</div>
        <div>日语高考VS英语高考</div>
      </div>
      <div class="fd prl30" >
            <div class="shujuimg"><img src="../../images/indeximg/pshuju.png" alt="">
                <div class="ziti1">较难</div>
                <div class="ziti2">80分</div>
                <div class="ziti3">8%</div>
            </div>
            <div >
                <div class='dashujutexte'>
                    <div>考试难度</div>
                    <div>参考全国高考大纲</div>
                </div>
                <div class='dashujutexte dashujutexte2'>
                    <div>平均分</div>
                    <div>全国卷150分</div>
                </div>
                <div class='dashujutexte'>
                    <div>高分段比例</div>
                    <div>成绩超过120分</div>
                </div>
            </div>
            <div class="shujuimg"><img src="../../images/indeximg/pshuju1.png" alt="">
                <div class="ziti4">中等</div>
                <div class="ziti5">105分</div>
                <div class="ziti6">30%</div>
            </div>

      </div>

       <!-- 高考方案 -->
      <div class="ptm10" style="background:#F8F8F8;position: relative;">
          <div class="titletext">
                <div>科学完善的日语高考方案 </div>
                <div>三个步骤决胜日语高考</div>
          </div>

          <div class="ptm10" style="display:flex;">
                <div class="kaogaofanganimg"><img src="../../images/indeximg/gaokaoicon1.png" alt=""></div>
                <div class="kaogaofangantext">
                    <div>STEP1</div>
                    <div>基础课程学习内容 </div>
                    <div>学习高考日语基础知识 学习基础五十音图等相关知识 </div>
                </div>
          </div>
          <div class="ptm10" style="display:flex;">
                <div class="kaogaofanganimg"><img src="../../images/indeximg/gaokaoicon2.png" alt=""></div>
                <div class="kaogaofangantext">
                    <div style="color:#FF6B6A;">STEP2</div>
                    <div>单项提分学习</div>
                    <div>结合高考题型，进行听力、语法、阅读和写作专项强化</div>
                </div>
          </div>
          <div class="ptm10" style="display:flex;">
                <div class="kaogaofanganimg"><img src="../../images/indeximg/gaokaoicon3.png" alt=""></div>
                <div class="kaogaofangantext">
                    <div style="color:#FFC533;">STEP3</div>
                    <div>全面冲刺复习 </div>
                    <div>历年真题讲解，查漏补缺，重要时刻冲刺高分</div>
                </div>
          </div>

          <div class="tiaozi1"></div>
          <div class="tiaozi2"></div>
      </div>

      <!-- 特色 -->
      <div class="kaoshitese">
           <div class="titletext" style="margin:0;padding:0;">
                <div style="color:#fff;">友达日语高考课程特色  </div>
                <div style="color:#fff;">强大的课程特色 祝您开启高考逆袭之路</div>
          </div>
          <div>
              <div class="kechengimg"><img src="../../images/indeximg/riyute1.png" alt=""></div>
              <div class="kechengtitle">1对1真人直播教学</div>
              <div class="kechengtext">根据每个学生定制学习计划，调整学习进度 提升学习效率。</div>
          </div>
          <div>
              <div class="kechengimg2"><img src="../../images/indeximg/riyute2.png" alt=""></div>
              <div class="kechengtitle">专属定制课程</div>
              <div class="kechengtext">友达日语研发专属日语教材</div>
          </div>
          <div class="dibubox">
              <div class="kechengimg3"><img src="../../images/indeximg/riyute3.png" alt=""></div>
              <div class="kechengtitle">中外教名师指导</div>
              <div class="kechengtext"> 精讲精练听说读写等各方面应试技巧</div>
          </div>
      </div>

    <!-- 独家教材 -->
      <div>
           <div class="titletext">
                <div>友达日语高考日语独家教材</div>
                <div>根据高考考纲研发定制教材</div>
           </div> 

           <div class="kaoti">高考日语历年真题</div>
           <div class="kaotitext">友达高考日语教研组，二十多位有着日语高考教学多年经验的教师组成，经过三年多的总结与研发，形成了“学习时间短、提分速度快"的友达高考日语教学特色。在推出的三年时间以来，帮助了非常多的英语学习成绩差的学员在短时间内顺利转换成日语高考，并取得了优秀的成绩。</div>
           <div class="fd xixi">
               <div class="dujiabook"><img src="../../images/indeximg/hhe.png" alt=""></div>
               <div><div class="anbtn">了解更多内容</div></div>
           </div>
      </div>
    

      <!-- 高考日语名师团 -->
      <div style="background:#F8F8F8;">
           <div class="titletext t9" >
            <div >高考日语名师团</div>
            <div >在友达日语他们变得更好</div>
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
         swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 100000,
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

        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        }
      },
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
    background: url("../../images/indeximg/gaokaoriyubck.png") no-repeat 100% 100%;
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
  
  .titletext {
    text-align: center;
    line-height: .54rem;
    padding-top: .56rem;
    margin-top: .2rem;
    margin-bottom: .44rem;
    div{
        padding: .08rem 0;
    }
  }
  .titletext1 {
    text-align: center;
    line-height: .54rem;
    padding-top: 1.1rem;
    margin-bottom: .44rem;
  }
  .titletext1 div:nth-child(1) {
    color: #2b2b2b;
    font-size: .4rem;
    font-weight: bold;
  }
  .titletext1 div:nth-child(2) {
    color: #959595;
    font-size: .28rem;
  }
  .titletext div:nth-child(1) {
    color: #2b2b2b;
    font-size: .4rem;
    font-weight: bold;
  }
  .titletext div:nth-child(2) {
    color: #959595;
    font-size: .28rem;
  }

  // 轮播
  .lunboimgbox {
    height: 4.5rem;
    width: 5.7rem;
    margin-left: 1rem;
    position: relative;
    z-index: 1;
    border-radius: .16rem;
    background: #fff;
    box-sizing: border-box;
    padding: 0 .34rem;

  }
  .swiper-wrap {
    height: 5.3rem;
  }
.lunboimg{
    width: 1.4rem;
    height: 1.4rem;
    margin: 0 auto;
    
    img{
      height: 100%;
      width: 100%;
      z-index: 99;
     
    }
   
    
   
  }
  .lunbotext{
    color: #727272;
    font-size: .28rem;
    line-height: .42rem;
    padding-top: .2rem;
  }

  .maohao1{
    width: .26rem;
    position: relative;
    height: .24rem;
    img{
      height: 100%;
      width: 100%;

    }
    .lasticon{
    display: block;
    position: absolute;
    right: -4.6rem;
  }
  }
.jiandan{
    color: #393939;
    font-size: .48rem;
    font-weight: bold;
    margin-top: .5rem;
}
.shuoshi{
    color: #393939;
    font-size: .24rem;
    margin-top: .3rem;
    margin-bottom: .6rem;
    
}
.liaojiebtn{
    height: .8rem;
    width: 2.5rem;
    background: #EF3434;
    border-radius: .8rem;
    color: #fff;
    line-height: .8rem;
    font-size: .28rem;
    padding-left: .9rem;
    box-sizing: border-box;
    position: relative;
}
.sanjiao{
    width: .35rem;
    height: .35rem;
    background: url('../../images/indeximg/xiaosanjiao.png') no-repeat center center;
    background-size: 100% 100%;
    position: absolute;
    top: .22rem;
    left: .4rem;
}
.zoule{
    padding-left:.56rem; 
}
.dashujutexte {
    text-align: center;
}
.dashujutexte div:nth-child(1){
    color: #3A3A3A;
    font-size: .28rem;
    font-weight: bold;
    padding-bottom: .1rem;
}
.dashujutexte div:nth-child(2){
    color: #A7A7A7;
    font-size: .24rem;
    

}
.shujuimg{
    width: 2.46rem;
    height: 3.45rem;
    color: #FFBA00;
    font-size: .28rem;
    position: relative;
    img{
        width: 100%;
        height: 100%;
    }
}
.ziti1{
    position: absolute;
    top: .55rem;
    left: .3rem;
}
.ziti2{
    position: absolute;
    top: 2.1rem;
    left: .9rem;
}
.ziti3{
    position: absolute;
    top: 3.5rem;
    right: .5rem;
}

.ziti4{
    position: absolute;
    top: .55rem;
    right: .3rem;
    color: #F15C5C;
}
.ziti5{
    position: absolute;
    top: 2.1rem;
    right: .9rem;
    color: #F15C5C;
}
.ziti6{
    position: absolute;
    top: 3.5rem;
    left: .5rem;
    color: #F15C5C;
}
.dashujutexte2{
    padding: .7rem 0;
}
.prl30{
    padding: 0 .3rem;
    padding-bottom:1.2rem;
}
.kaogaofanganimg{
    height: 1.8rem;
    width: 1.62rem;
    margin-right: .48rem;
    margin-left: .68rem;
    img{
        height: 100%;
        width: 100%;
    }
}
.kaogaofangantext div:nth-child(1){
    color: #FF9D1C;
    font-size: .34rem;
    font-weight: bold;
}
.kaogaofangantext div:nth-child(2){
    color: #2B2B2B;
    font-size: .34rem;
    font-weight: bold;
    padding: .2rem 0;
}
.kaogaofangantext div:nth-child(3){
    color: #979797;
    font-size: .28rem;
    width: 3.66rem;
}
.ptm10{
    padding-bottom: .4rem;
    
}
.tiaozi1{
    position: absolute;
    height: 1.68rem;
    width: .14rem;
    background: url('../../images/indeximg/d1.png') no-repeat center center;
    background-size: 100% 100%;

    top: 3.7rem;
    left: 1.4rem;
}
.tiaozi2{
    position: absolute;
    height: 1.68rem;
    width: .14rem;
    background: url('../../images/indeximg/d2.png') no-repeat center center;
    background-size: 100% 100%;
    top: 6.2rem;
    left: 1.4rem;
}
.kaoshitese{
    height: 11.8rem;
    width: 100%;
    background: red;
    box-sizing: border-box;
    padding: .8rem 1rem 1.2rem .8rem;
   
}
.kechengimg{
  width: .64rem;
  height: .58rem;
  margin: 0 auto;
  margin-top: .8rem;
  img{
    width: 100%;
    height: 100%;
  }
}
.kechengimg2{
  width: .48rem;
  height: .6rem;
  margin: 0 auto;
  margin-top: .8rem;
  img{
    width: 100%;
    height: 100%;
  }
}
.kechengimg3{
  width: .5rem;
  height: .58rem;
  margin: 0 auto;
  margin-top: .8rem;
  img{
    width: 100%;
    height: 100%;
  }
}
.kechengtitle{
  color: #FFDB1D;
  font-size: .34rem;
  font-weight: bold;
  text-align: center;
  padding: .2rem 0;
}
.kechengtext{
  color: #fff;
  font-size: .28rem;
  text-align: center;
}
.dibubox{
  padding-bottom: 1.2rem;
  
}
.kaoti{
    color: #EF3434;
    font-size: .34rem;
    border-bottom: 2px solid #EF3434;
    margin: 0 .45rem;
    padding-bottom: .25rem;
    font-weight: bold;
    margin-bottom: .25rem;

}
.kaotitext{
    color: #737373;
    font-size: .28rem;
    line-height: .42rem;
    margin: 0 .45rem;
    margin-bottom: .35rem;
}
.anbtn{
    height: .8rem;
    width: 2.5rem;
    background: #EF3434;
    border-radius: .8rem;
    color: #fff;
    line-height: .8rem;
    font-size: .28rem;
    text-align: center;
    box-sizing: border-box;
    margin-right: .45rem;
    margin-top: 2.5rem;
    
}
.dujiabook{
    width: 3.68rem;
    height: 4.04rem;
    img{
        width: 100%;
        height: 100%;
    }
}
.xixi{
    padding-bottom: .5rem;
}

</style>



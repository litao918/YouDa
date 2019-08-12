<template>
  <div class="hello">
      <div class="hello2">
           <!-- 菜单 -->
      <div class="menus" :style="{'display':menuclass ? 'block' : 'none'}">
        <div> <router-link  to='/' >首页</router-link> </div>
        <div><router-link  to="/MJapaneseDistinction">日语考级</router-link></div>
        <div ><router-link  to="/Mexam">高考日语</router-link></div>
        <div style="background:#F3F3F3;color:#EF3434"><router-link style="color:#EF3434;" to="/MChildrenJapanese">儿童日语</router-link></div>
        <div><router-link to="">企业培训</router-link></div>
        <div><router-link to="">全球师资</router-link></div>
        <div><router-link to="">教学理念</router-link></div>
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

        <div class="zoule">
            <div class="jiandan">
                <div>属于5-14岁孩子专属课堂</div>
            </div>
            <div class="shuoshi">
                <div>东京设立教研中心 </div>
                <div>研发更符合国内青少年的日语教材</div>
            </div>

            <div class="liaojiebtn">了解详情
                <div class="sanjiao"></div>
            </div>
        </div>

    
      </div>

      <!-- 教学目标 -->
        <div class="target">
                <div class="titletext">
                    <div>友达日语教学目标，为孩子赋予更多可能</div>
                    <div>个性化日语课程根据孩子兴趣点独家定制学习内容</div>
                </div>

                <div class="huxing">

                </div>
        </div>

        <!-- 快乐学习 -->
        <div class="yellobck">
              <div class="titletext pd50">
                    <div>个性化订制让孩子在不同阶段中快乐学习</div>
                    <div style="color:#202020;">针对最佳的学习方案 合理规划您的每一节课程</div>
                </div>
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="hoveu">
                        <div class="lunbobox">
                         
                        </div>
                         <div class="lunbotent">云课堂</div>
                         <div class="lunbotextbox">中外教老师以主题形式介绍 日本旅游、文化等趣味课程</div>
                        
                        
                    </div>
                </div>
                
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination" slot="pagination"></div>
              <!-- 如果需要导航按钮 -->
              <!-- <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div> -->
              <!-- 如果需要滚动条 -->
              <!-- <div class="swiper-scrollbar"></div> -->
         </div>
        </div>

        <!-- 日语课堂 -->
        <div class="riyuketangbox" style="background:#F8F8F8;">
               <div class="titletext">
                    <div style="color：#333;">让家长放心的日语课程课堂</div>
                    <div>选择孩子喜欢的老师，班主任7x12在线</div>
                </div>

                <div class="ketangimg"> 

                </div>
                <div class="tykbtn">领取体验课</div>
        </div>

        <!-- 是什么让家长决定在友达学习日语？ -->
        <div>
             <div class="titletext">
                    <div style="color：#333;">是什么让家长决定在友达学习日语？</div>
                    <div>四大特色保障孩子学习效果</div>
                </div> 

                <div class='mtm74' style="display:flex;">
                  <div class="whayimg"><img src="../../images/indeximg/mwhy1.png" alt=""></div>
                  <div class="whaytext">
                      <div>1对1直播互动</div>
                      <div>中外教一对一互动课堂，激发孩子 学习兴趣</div>
                  </div>
                </div>
                <div class='mtm74' style="display:flex;">
                  <div class="whayimg"><img src="../../images/indeximg/mwhy2.png" alt=""></div>
                  <div class="whaytext">
                      <div>视频免费回看</div>
                      <div>通过课程录像随时掌握孩子学习进度和课堂表现。</div>
                  </div>
                </div>
                <div class='mtm74' style="display:flex;">
                  <div class="whayimg"><img src="../../images/indeximg/mwhy3.png" alt=""></div>
                  <div class="whaytext">
                      <div>课后辅导</div>
                      <div>班主任老师7x12全程在线，定期 跟家长反映孩子学习情况。</div>
                  </div>
                </div>
                <div class='mtm74' style="display:flex;">
                  <div class="whayimg"><img src="../../images/indeximg/mwhy4.png" alt=""></div>
                  <div class="whaytext">
                      <div>师生互评</div>
                      <div>每堂课老师都会提供课程报告反馈学习情况，家长也可以对老师的课堂表现评分。</div>
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
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper';
import footers from './footer/footer.vue';
export default {
  components: { footers },
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
      new Swiper ('.swiper-container', {
        autoplay: true,
        speed:1000,
        pagination: '.swiper-pagination',// 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',// 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
        loop: true, // 循环模式选项
      })


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
    background: url("../../images/indeximg/shaoerriyu.png") no-repeat 100% 100%;
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
    font-size: .36rem;
    font-weight: bold;
  }
  .titletext div:nth-child(2) {
    color: #959595;
    font-size: .28rem;
  }
.jiandan{
    color: #393939;
    font-size: .42rem;
    margin-top: 1rem;
}
.shuoshi{
    color: #fff;
    font-size: .24rem;
    margin-top: .3rem;
    margin-bottom: .6rem;
    line-height: .45rem;
    
}
.liaojiebtn{
    height: .8rem;
    width: 2.5rem;
    background: #4A3729;
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
.huxing{
    height: 7.7rem;
    width: 100%;
    background: url('../../images/indeximg/jiayouo2.png') no-repeat center center;
    background-size: 100% 100%;
}
.yellobck{
    height: 5.62rem;
    width: 100%;
    background: url('../../images/indeximg/caib.png') no-repeat center center;
    background-size: 100% 100%;
    padding-bottom: 2.5rem;

}
.swiper-container {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .swiper-wrapper {
    height: 6.6rem;
  }

  .swiper-slide .hoveu {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0,0.0);
    .lunbobox{
        height: 3.56rem;
        width: 5.38rem;
        border: 1px solid red;
        box-sizing: border-box;
        margin: 0 auto;
      }
  }

  .swiper-slide {
    text-align: center;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

.pd50{
  margin-bottom:1rem; 
}
.lunbotextbox{
  width: 3.36rem;
  margin: 0 auto;
  text-align: left;
  color: #6A6A6A;
  font-size: .28rem;
  line-height: .46rem;
}
.lunbotent{
  color: #3D3D3D;
  font-size: .34rem;
  font-weight: bold;
  padding-bottom:.2rem;
  margin-top: .3rem;
}

.riyuketangbox{
  padding: 1.5rem .3rem 1rem .3rem;
}
.ketangimg{
  height: 7.15rem;
  width: 6.94rem;
  background: url('../../images/indeximg/shaoerimg.png') no-repeat center center;
  background-size: 100% 100%;
}
.tykbtn{
  height: .8rem;
  width: 2.5rem;
  background: #ff4942;
  line-height: .8rem;
  text-align: center;
  font-size: .28rem;
  color: #fff;
  box-shadow:0px 2px 8px 0px rgba(255,73,66,0.8);
  border-radius: .8rem;
  margin: 0 auto;
  margin-top: .6rem;
}
.whayimg{
  width: 1.27rem;
  height: 1.27rem;
  margin-left: .6rem;
  img{
    width: 100%;
    height: 100%;
  }
}
.whaytext{
  width: 4.5rem;
  margin-left: .3rem;
}
.whaytext div:nth-child(1){
  color: #2b2b2b;
  font-size: .34rem;
  font-weight: bold;
}
.whaytext div:nth-child(2){
  color: #A1A1A1;
  font-size: .28rem;
  line-height: .5rem;
}
.mtm74{
  margin-bottom: .74rem;
}


</style>



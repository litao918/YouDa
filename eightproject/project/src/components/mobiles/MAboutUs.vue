<template>
  <div class="hello">
      <div class="hello2">
           <!-- 菜单 -->
      <div class="menus" :style="{'display':menuclass ? 'block' : 'none'}">
        <div> <router-link  to='/' >首页</router-link> </div>
        <div><router-link  to="/MJapaneseDistinction">日语考级</router-link></div>
        <div><router-link to="/Mexam">高考日语</router-link></div>
        <div><router-link to="/MChildrenJapanese">儿童日语</router-link></div>
        <div><router-link to="/Enterprise">企业培训</router-link></div>
        <div><router-link to="/MTeachers">全球师资</router-link></div>
        <div><router-link to="/MTeachingConcept">教学理念</router-link></div>
        <div><router-link to="/MJapanAbroad">日本留学</router-link></div>
        <div><router-link to="/MPublicClass">公开课</router-link></div>
        <div><router-link to="/MHowClass">如何上课</router-link></div>
        <div style="background:#F3F3F3;color:#EF3434"><router-link style="color:#EF3434;" to="/MAboutUs">关于我们</router-link></div>
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
                <div>免费留学评估与咨询</div>
            </div>
            <div class="shuoshi">
                <div>定制留学指导</div>
            </div>

            <div class="liaojiebtn">了解详情
                <div class="sanjiao"></div>
            </div>
        </div>

       
      </div>

        <!-- 关于我们 -->
        <div class="p30">
            <div class="gguanyuwomen">
             <div class="titlemy">关于我们 ( 私たちについて）</div>
             <div class="textmy">友达日语是一家专注于一对一在线日语教育平台。友达在上海设有教研中心，提供真人在线互动日语学习，并于东京分公司招聘培训教师。通过一对一在线视频的方式，帮助学员有效学习和掌握日语。友达日语致力于利用互联网科技整合优质教育资源，采用360°全方位覆盖教学，为学员提供高效、便捷、轻松的在线日语学习体验。<br><br> 友达日语具体业务有：日语等级考试培训、成人日语培训、青少儿日语培训、动漫兴趣日语、高考日语、企业团体日语培训等。并且友达坚持在学习软件上不断投入。努力提高学员学习体验。<br><br> 友达借助于强大的师资力量、优质的日本特色教材、生动有趣的课堂体验，让学员在家就可以快乐，高效的提升日语水平，接触优质的日本教育，帮助学员轻松、自如的掌握一门全新的语言。<br><br></div>
            </div>

            <div class="gguanyuwomen">
             <div class="titlemy">梦想与展望 ( 夢と希望 )</div>
             <div class="mengxiangtext">
                 <div>学习依然有幸福感 | 更开阔的心灵和对世界的认知 </div>
                 <div>赋予学员未来更多可能 | 实现未来的想象同时成就我们的梦想</div>
             </div>
             <div class="fd">
                    <img class="mengxiaoimg" src="../../images/indeximg/guanu1.png" alt="">
                    <img class="mengxiaoimg" src="../../images/indeximg/guanu2.png" alt="">

             </div>
            </div>

                <!-- 一路历程 -->
            <div class="gguanyuwomen">
               <div class="titlemy">一路历程（すべての方法）</div>
                <div class="yilulichang">
                        <div>2018年09</div>
                        <div>友达课程系统2.0版正式上线，“有趣、高效”是2.0系统的核心关键词</div>

                </div>
                <div class="yilulichang">
                        <div>2018年03</div>
                        <div>友达日本留学事务所正式成立，超过100所日本学校直接合作 </div>

                </div>
                <div class="yilulichang">
                        <div> 2017年06月 </div>
                        <div>友达日本留学事务所正式成立，超过100所日本学校直接合作 </div>

                </div>
                <div class="yilulichang">
                        <div>2017年04月</div>
                        <div>友达日本留学事务所正式成立，超过100所日本学校直接合作 </div>

                </div>
                <div class="yilulichang">
                        <div>2016年12月 </div>
                        <div>友达日本留学事务所正式成立，超过100所日本学校直接合作 </div>

                </div>
                <div class="yilulichang">
                        <div>2016年11月</div>
                        <div>友达日本留学事务所正式成立，超过100所日本学校直接合作 </div>

                </div>
                <div class="yilulichang">
                        <div>2016年10月</div>
                        <div>友达日本留学事务所正式成立，超过100所日本学校直接合作 </div>

                </div>
                <div class="yilulichang">
                        <div>2015年05月</div>
                        <div>友达日本留学事务所正式成立，超过100所日本学校直接合作 </div>

                </div>
                <div class="yilulichang">
                        <div>2014年06月</div>
                        <div>友达日本留学事务所正式成立，超过100所日本学校直接合作 </div>

                </div>
                 <div class="yilulichang">
                        <div>2013年08月</div>
                        <div>友达日本留学事务所正式成立，超过100所日本学校直接合作 </div>

                </div>
                 <div class="yilulichang">
                        <div>2012年10月</div>
                        <div>友达日本留学事务所正式成立，超过100所日本学校直接合作 </div>

                </div>
                 <div class="yilulichang">
                        <div>2009年07</div>
                        <div>友达日本留学事务所正式成立，超过100所日本学校直接合作 </div>

                </div>
             
            </div>

            <!-- 媒体报道 -->
            <div class="gguanyuwomen">
             <div class="titlemy">媒体报道（メディアカバレッジ）</div>

                <div class="fenyedata fd">
                        <img src="../../images/indeximg/guanyuwomenfeyeimg.png" alt="">
                        <div>
                            <div class="fenyetitle">友达日语：巴别塔触碰不到的天堂</div>
                            <div class="fenyenner">影片中曾说：“人人心中都有个龙猫，童年就永远不会消失，爱是最美的拥有。”因为心中有爱，所</div>
                        </div>
                </div>
                <div class="fenyedata fd">
                        <img src="../../images/indeximg/guanyuwomenfeyeimg.png" alt="">
                        <div>
                            <div class="fenyetitle">友达日语：巴别塔触碰不到的天堂</div>
                            <div class="fenyenner">影片中曾说：“人人心中都有个龙猫，童年就永远不会消失，爱是最美的拥有。”因为心中有爱，所</div>
                        </div>
                </div>

                <div class="fenye">

                </div>
             
            </div>
            
            <!-- 品牌动向 -->
             <div class="gguanyuwomen">
             <div class="titlemy">品牌动向（ブランド動向）</div>

               <div class="lunbo">

              
            <swiper
              :options="swiperOption"
              class="swiper-wrap"
            >

              <swiper-slide >
                  <div class="lunbocont2">
                        <div class="contbox">
                                <img src="../../images/indeximg/dongxiaoimg.png" alt="">
                        </div>
                  </div>
              </swiper-slide>

                 <swiper-slide >
                  <div class="lunbocont2">
                        <div class="contbox">
                                <img src="../../images/indeximg/dongxiaoimg.png" alt="">
                        </div>
                  </div>
              </swiper-slide>

                 <swiper-slide >
                  <div class="lunbocont2">
                        <div class="contbox">
                                <img src="../../images/indeximg/dongxiaoimg.png" alt="">
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

.jiandan{
    color: #262626;
    font-size: .48rem;
    margin-top: .5rem;
}
.shuoshi{
    color: #838383;
    font-size: .4rem;
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
.titlemy{
    color: #EF3434;
    font-size: .4rem;
    padding: .5rem 0;
    padding-bottom: .3rem;
    font-weight: bold;
    border-bottom: 1px solid #DCDCDC;
    margin-bottom: .28rem;
}
.textmy{
    color: #000000;
    font-size: .28rem;
    line-height: .45rem;
}
.p30{
    padding:  0 .3rem;
}
.mengxiangtext{
    color: #000000;
    font-size: .25rem;
    line-height: .42rem;
    padding-bottom: .4rem;
}
.mengxiaoimg{
    height: 3.36rem;
    height: 2.11rem;
    display: block;
}
.yilulichang{
    display: flex;
    color: #000000;
    font-size: .25rem;
    line-height: .37rem;
    margin-bottom: .3rem;
}
.yilulichang div:nth-child(2){
    
    padding-left: .18rem;
}
.yilulichang div:nth-child(1){

    width: 1.82rem;
    
}
.fenyedata{
    margin-bottom: .48rem;
    padding-bottom: .5rem;
    border-bottom: 1px solid #E7E7E7;
    img{
        height: .87rem;
        width: 1.35rem;
        display: block;
         margin-right: .14rem;
    }
}
.fenyetitle{
    color: #EF3434;
    font-size: .24rem;
    line-height: .33rem;
    
}
.fenyenner{
    color: #808080;
    font-size: .21rem;
    line-height: .29rem;
   
}
.fenye{
    
}
.contbox{
    width: 6.74rem;
    height: 4.34rem;
    padding: 0 .42rem;
    margin-left: .1rem;
    padding-top: .74rem;
    box-sizing: border-box;
    text-align: center;
    
    
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
}

</style>



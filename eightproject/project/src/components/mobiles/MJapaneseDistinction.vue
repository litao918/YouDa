<template>
  <div class="hello">
      <div class="hello2">
           <!-- 菜单 -->
      <div class="menus" :style="{'display':menuclass ? 'block' : 'none'}">
        <div> <router-link  to='/' >首页</router-link> </div>
        <div style="background:#F3F3F3;color:#EF3434"><router-link style="color:#EF3434;" to="/MJapaneseDistinction">日语考级</router-link></div>
        <div><router-link to="/Mexam">高考日语</router-link></div>
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

        <div class="kaoshititle">
          <div>日语能力考试</div>
          <div>纯熟的备考方案</div>
          <div>一对一针对考点逐个击破</div>
          <div>申请免费试听课</div>
        </div>
       
      </div>

    

      <!-- 标题 -->
      <div class="titletext">
        <div>独家定制备考方案 全力冲刺能力考试</div>
        <div>轻松突破能力考试</div>
      </div>
      <!-- 备考方案 -->
      <div class="sb bxs ">
          <div class="fnbox1">
              <div class="fanganimg"><img src="../../images/indeximg/fnicon1.png" alt=""></div>
              <div>定制专属教材</div>
              <div>根据能力考知识点以及题型定制针对性教材。</div>

          </div>
          <div class="fnbox1">
              <div class="fanganimg"><img src="../../images/indeximg/fnicon2.png" alt=""></div>
              <div>课后专项辅导</div>
              <div>7x12辅导老师全程在线，随时解答您的日语问题</div>

          </div>
      </div>
      <div class="sb bxs mt50">
          <div class="fnbox1">
              <div class="fanganimg"><img src="../../images/indeximg/fnicon3.png" alt=""></div>
              <div>一对一真人直播</div>
              <div>一对一真人陪伴学习，互动课堂学习更高效。</div>

          </div>
          <div class="fnbox1">
              <div class="fanganimg"><img src="../../images/indeximg/fnicon4.png" alt=""></div>
              <div>资深中外教师资</div>
              <div>中外教拥有多年能力考教学经验，为您保驾护航。</div>

          </div>
      </div>
      <div class="sb bxs mt50 pdb100">
          <div class="fnbox1">
              <div class="fanganimg"><img src="../../images/indeximg/fnicon5.png" alt=""></div>
              <div>考前冲刺强化</div>
              <div>真题解析，查缺补漏，强化薄弱环节，确保高分通过。</div>

          </div>
          <div class="fnbox1">
              <div class="fanganimg"><img src="../../images/indeximg/fnicon6.png" alt=""></div>
              <div>视频免费回看</div>
              <div>多终端随时回看课程，复习巩固所学内容，保障每一节课的学习效果。</div>

          </div>
      </div>

      <!-- 定制个人方案 -->
      <div class="huisebe" style="background:#F8F8F8;">
          <!-- 标题 -->
        <div class="titletext">
            <div>友达日语独家定制个人学习方案</div>
            <div> 在友达日语他们变得更好</div>
        </div>

        <div class="bxs ztxdingzhi sb" >
                <div class="sb">
                    <div class="ztx"><img src="../../images/indeximg/kjtou1.png" alt=""></div>
                    <div class="ztxtexte">
                        <div style="font-weight: bold;">张同学</div>
                        <div>专属定制学习计划</div>
                    </div>
                </div>
                <div class="pingce">智能测评</div>
        </div>
        <div class="bxs ztxdingzhi" >
                <div class="sb xiahuaxian">
                    <div class="sb fanganicon">
                        <img src="../../images/indeximg/mkj1.png" alt="">
                        <div>学前评测</div>
                    </div>
                    <div class="diji">01</div>
                   
                    <div class="henfan"></div>
                </div>
                 <div class="pingcetexte">通过友达独家评测系统对张同学的日语基础和专项能力全方位评测，并结合学习需求给出评测报告。</div>
                
        </div>
         <div class="bxs ztxdingzhi" >
                <div class="sb xiahuaxian">
                    <div class="sb fanganicon">
                        <img src="../../images/indeximg/mkj2.png" alt="">
                        <div>方案规划</div>
                    </div>
                    <div class="diji">02</div>
                   
                    <div class="henfan"></div>
                </div>
                 <div class="pingcetexte">课程顾问根据评测报告做二次分析定制学习计划，结合张同学实际情况分析细化阶段目标，确保完成学习目标。</div>
                
        </div>
         <div class="bxs ztxdingzhi" >
                <div class="sb xiahuaxian">
                    <div class="sb fanganicon">
                        <img src="../../images/indeximg/mkj3.png" alt="">
                        <div>效果达标</div>
                    </div>
                    <div class="diji">03</div>
                   
                    <div class="henfan"></div>
                </div>
                 <div class="pingcetexte">定期追踪日语学习效果，对比阶段性目标调整下一培养阶段的目标和方案，充分发掘张同学的学习潜力。</div>
                
        </div>
         <div class="bxs ztxdingzhi" >
                <div class="sb xiahuaxian">
                    <div class="sb fanganicon">
                        <img src="../../images/indeximg/mkj4.png" alt="">
                        <div>学情反馈</div>
                    </div>
                    <div class="diji">04</div>
                   
                    <div class="henfan"></div>
                </div>
                 <div class="pingcetexte">课后、测后及时跟张同学反馈沟通，合理规划课程进度，全程保障张同学学习效果。</div>
                
        </div>

      </div>

      <!-- 特色 -->
      <div class="kaoshitese">
           <div class="titletext" style="padding:0;margin:0;">
            <div style="color:#fff;">友达日语能力考课程特色</div>
            <div style="color:#fff;"> 强大的课程体系 祝您能力提升</div>
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

      <!-- 高效学习体系 -->
      <div>
        <div class="titletext" >
            <div >高效学习体系</div>
            <div >五个阶段不短进阶教学</div>
        </div>

        <div class="gaoxiaotixi">
              <div class="n1">
                    <div>N1</div>
                    <div>模拟真题 实际联系 口语轮番轰炸 </div>
              </div>
              <div class="n2">
                    <div>N2</div>
                    <div>模强化听力，提升语感 习题答疑，专项训练</div>
              </div>
              <div class="n3">
                    <div>N3</div>
                    <div>了解基础日语结构与组成</div>
              </div>
              <div class="n4">
                    <div>N4</div>
                    <div>加强日语深化了解，随堂检测</div>
              </div>
              <div class="n5">
                    <div>N5</div>
                    <div>加强口语对练，实现口语交流无碍。</div>
              </div>
        </div>
        <div class="pingce2">领取体验课</div>

      
      
      </div>

      <!-- 看看他们怎么说 -->
      <div style="background:#F8F8F8;">
           <div class="titletext t9" >
            <div >看看他们怎么说</div>
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>

  @import "../../style/Common_style.css";
    .hello2{
        font-size: .16rem;
    }
    #mobile{
      display: block !important;
    }
    #pcWeb{
      display: none !important;
    }
  .titleimg {
    width: 100%;
    height: 6.2rem;
    background: url("../../images/indeximg/3223534534备份.png") no-repeat 100% 100%;
    background-size: 100% auto;
    .title {
      width: 100%;
      height: 1.3rem;
      display: flex;
      justify-content: space-between;
      line-height: 1.5rem;
      background: #F2F2F2;
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
      margin-bottom: .24rem;
      margin-top: 1rem;
  }
  .kaoshititle div:nth-child(2){
      color: #262626;
      font-size: .3rem;
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
    font-size: .4rem;
  }

  .bxs{
      margin: 0 .4rem
  }
  .fnbox1{
      width: 3.2rem;
      .fanganimg{
          img{
              height: .8rem;
              width: .8rem;
          }
      }
  }
  .fnbox1 div:nth-child(2){
      font-size: .34rem;
      color: #393939;
      margin-top: .20rem;
      margin-bottom: .06rem;
      font-weight: bold;
  }
  .fnbox1 div:nth-child(3){
      font-size: .28rem;
      color: #959595;
      line-height: .42rem;
  }
  .mt50{
    margin-top: .5rem;
}
.ztxdingzhi{
    background: #fff;
    box-sizing: border-box;
    padding: .2rem .27rem;
    border-radius:.16rem;
    margin-bottom: .17rem;
}
.ztx{
    height: .86rem;
    width: .86rem;
    margin-right:.25rem; 
    img{
        width: 100%;
        height: 100%;
    }
}
.ztxtexte div:nth-child(1){
    font-size: .36rem;
    color: #2B2B2B;
}
.ztxtexte div:nth-child(2){
    font-size: .24rem;
    color: #A3A3A3;
    
}
.pingce{
    width: 1.64rem;
    height: .68rem;
    background: #FF4942;
    border-radius: .68rem;
    line-height: .68rem;
    text-align: center;
    color: #fff;
    font-size: .28rem;
    margin: auto 0;
    box-shadow:0px .04rem .16rem 0px rgba(255,73,66,0.8)
}
.pdb100{
    margin-bottom: 1rem;
}
.fanganicon{
    img{
       width:.33rem;
       height: .33rem; 
       display: block;
       margin-top: .09rem;
       margin-right: .15rem;
       margin-bottom: .2rem;


    }
    div{
        color: #2B2B2B;
        font-size: .34rem;
        font-weight: bold;
    }
}
.diji{
    color: #A3A3A3;
    font-size: .34rem;
}
.xiahuaxian{
    border-bottom: 2px solid #E3E3E3;
    margin-bottom: .15rem;
    position: relative;
    .henfan{
        width: .2rem;
        height: 2px;
        background: #FF4942;
        position: absolute;
        top: .62rem;
        left: 0;
    }

}
.pingcetexte{
    color: #727272;
    font-size: .28rem;
    line-height: .42rem;
}
.huisebe{
    padding-bottom: 1.2rem;
}
.kaoshitese{
    height: 10.8rem;
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
.gaoxiaotixi{
  height: 3.64rem;
  width: 4.88rem;
  background: url('../../images/indeximg/chaoji1.png') no-repeat center center;
  background-size: 100% 100%;
  margin: 0 auto;
  margin-top: .8rem;
  position: relative;
}

.pingce2{
    width: 2.5rem;
    height: .8rem;
    background: #FF4942;
    border-radius: .8rem;
    line-height: .8rem;
    text-align: center;
    color: #fff;
    font-size: .28rem;
    margin: 1.2rem auto;
    box-shadow:0px .04rem .16rem 0px rgba(255,73,66,0.8)
}


.n1 div:nth-child(1){
  color: #212121;
  font-size: .24rem;
  font-weight: bold;
  line-height: .1rem;
  position: absolute;
  left: -.8rem;

}
.n1 div:nth-child(2){
  width: 1.4rem;
  height: 1.44rem;
  position: absolute;
  top: .3rem;
  right: .08rem;
  color: #959595;
  font-size: .25rem;
  font-weight: bold;
  line-height: .3rem;
  word-wrap:break-word; 
}
.n1{
  position: absolute;
  right: -1rem;
  top: .25rem;
}

.n2 div:nth-child(1){
  color: #212121;
  font-size: .24rem;
  font-weight: bold;
  line-height: .1rem;
  position: absolute;
  left: -.8rem;

}
.n2 div:nth-child(2){
  width: 1.9rem;
  height: 1.44rem;
  position: absolute;
  top: .3rem;
  right: -.5rem;
  color: #959595;
  font-size: .25rem;
  font-weight: bold;
  line-height: .3rem;
  word-wrap:break-word; 
}
.n2{
  position: absolute;
  right: -.4rem;
  top: 1.8rem;
}
.n3 div:nth-child(1){
  color: #212121;
  font-size: .24rem;
  font-weight: bold;
  line-height: .1rem;
  position: absolute;
  left: -.8rem;

}
.n3 div:nth-child(2){
  width: 1.9rem;
  height: 1.44rem;
  position: absolute;
  top: .3rem;
  right: -.5rem;
  color: #959595;
  font-size: .25rem;
  font-weight: bold;
  line-height: .3rem;
  word-wrap:break-word; 
}
.n3{
  position: absolute;
  right: .3rem;
  top: 3.36rem;
}

.n4 div:nth-child(1){
  color: #212121;
  font-size: .24rem;
  font-weight: bold;
  line-height: .1rem;
  position: absolute;
  left: -.8rem;

}
.n4 div:nth-child(2){
  width: 1.9rem;
  height: 1.44rem;
  position: absolute;
  top: .3rem;
  right: -.5rem;
  color: #959595;
  font-size: .25rem;
  font-weight: bold;
  line-height: .3rem;
  word-wrap:break-word; 
}
.n4{
  position: absolute;
  left: 1.15rem;
  top: 2.6rem;
}
.n5 div:nth-child(1){
  color: #212121;
  font-size: .24rem;
  font-weight: bold;
  line-height: .1rem;
  position: absolute;
  left: -.8rem;

}
.n5 div:nth-child(2){
  width: 1.9rem;
  height: 1.44rem;
  position: absolute;
  top: .3rem;
  right: -.5rem;
  color: #959595;
  font-size: .25rem;
  font-weight: bold;
  line-height: .3rem;
  word-wrap:break-word; 
}
.n5{
  position: absolute;
  left: .35rem;
  top: 1rem;
}

.t9{
  padding-bottom: 1.5rem;
  padding-top: 1rem;
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





</style>



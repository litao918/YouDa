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
        <div style="background:#F3F3F3;color:#EF3434"><router-link style="color:#EF3434;" to="/MJapanAbroad">日本留学</router-link></div>
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

      <!-- 全程护航你的留学梦 -->
      <div class="dream">
          <div class="Title">
            <div>全程护航你的留学梦</div>
            <div>专业导师全程陪伴进行留学流程 随时进行指导跟踪</div>
          </div>
          <div class="fd">
              <div class="dreamicon dreamicon2">
                  <div class="tianyi">
                      <img src="../../images/indeximg/mengicon1.png" alt="">
                        <div>留学方案定制</div>
                  </div>
                  <div class="tianyi">
                      <img src="../../images/indeximg/mengicon1.png" alt="">
                        <div>境外指导</div>
                  </div>
                  
              </div>
               <div class="dreamicon dreamicon3">
                  <div class="tianyi">
                      <img src="../../images/indeximg/mengicon3.png" alt="">
                        <div>申请材料准备</div>
                  </div>
                  <div class="tianyi">
                      <img src="../../images/indeximg/mengicon4.png" alt="">
                        <div>行前指导</div>
                  </div>
                  
              </div>
              <div class="dreamicon dreamicon2">
                  <div class="tianyi">
                      <img src="../../images/indeximg/mengicon5.png" alt="">
                        <div>全程留学申请</div>
                  </div>
                  <div class="tianyi">
                      <img src="../../images/indeximg/mengicon6.png" alt="">
                        <div>签证办理</div>
                  </div>
                  
              </div>

            
              

          </div>
      </div>

      <!-- 高效率留学申请 -->
      <div class="liuxueshenqing">
          <div class="Title">
            <div>全程护航你的留学梦</div>
            <div>专业导师全程陪伴进行留学流程 随时进行指导跟踪</div>
          </div>

          <div class="mb63 fd mt70" >
              <div style="display:flex;">
                  <img class="shenqingimg" src="../../images/indeximg/sqicon1.png" alt="">
                  <div class="shenqingbox">
                      <div>10万</div>
                      <div>10万份offer 积累留学方案 </div>
                  </div>
              </div>
              <div style="display:flex;">
                  <img class="shenqingimg" src="../../images/indeximg/sqicon2.png" alt="">
                  <div class="shenqingbox">
                      <div>24小时</div>
                      <div>最快24小时 递交材料申请</div>
                  </div>
              </div>
          </div>
          <div class="mb63 fd" >
              <div style="display:flex;">
                  <img class="shenqingimg" src="../../images/indeximg/sqicon3.png" alt="">
                  <div class="shenqingbox">
                      <div>3000+</div>
                      <div>数千所院校的 优先审核待遇</div>
                  </div>
              </div>
              <div style="display:flex;">
                  <img class="shenqingimg" src="../../images/indeximg/sqicon4.png" alt="">
                  <div class="shenqingbox">
                      <div>0秒</div>
                      <div>500名老师 实时解答 </div>
                  </div>
              </div>
          </div>
          <div class="mb63 fd" >
              <div style="display:flex;">
                  <img class="shenqingimg" src="../../images/indeximg/sqicon5.png" alt="">
                  <div class="shenqingbox">
                      <div>99.7%</div>
                      <div>从源头入手最大化提升录取几率 </div>
                  </div>
              </div>
              <div style="display:flex;">
                  <img class="shenqingimg" src="../../images/indeximg/sqicon6.png" alt="">
                  <div class="shenqingbox">
                      <div>8年</div>
                      <div>语言辅导到海外 生活的连续服务</div>
                  </div>
              </div>
          </div>

          <div class="liaojieanniu">了解更多内容</div>


      </div>

      <!-- 众多成功案例 -->
      <div class="anlie">
        <div class="Title" >
            <div style="color:#fff;">众多成功案例</div>
            <div style="color:#fff;">专业导师全程陪伴进行留学流程 随时进行指导跟踪</div>
          </div>

          <div class="anlieimg">
                <div class="fd mt72">
                        <img src="../../images/indeximg/anlieimg1.png" alt="">
                        <img src="../../images/indeximg/anlieiimg2.png" alt="">
                </div>
                 <div class="fd mt52">
                        <img src="../../images/indeximg/anlieimg3.png" alt="">
                        <img src="../../images/indeximg/anlieimg4.png" alt="">
                </div>
          </div>
      </div>

      <!-- 合作院校 -->
      <div class="hezuobox">
          <div class="hezuoyuanxiao">
              <div>合作院校</div>
          </div>
          <div class="fd mt52">
              <div class="yuanxiao">
                  <img src="../../images/indeximg/mdaxue1.png" alt="">
                  <div>奈良教育大学</div>
              </div>
              <div class="yuanxiao">
                  <img src="../../images/indeximg/mdaxue2.png" alt="">
                  <div>东京银星日本语学校</div>
              </div>
          </div>
           <div class="fd mt52">
              <div class="yuanxiao">
                  <img src="../../images/indeximg/mdaxue3.png" alt="">
                  <div>日本京门大学</div>
              </div>
              <div class="yuanxiao">
                  <img src="../../images/indeximg/mdaxue4.png" alt="">
                  <div>御茶水女子大学</div>
              </div>
          </div>
           <div class="fd mt52">
              <div class="yuanxiao">
                  <img src="../../images/indeximg/mdaxue5.png" alt="">
                  <div>横滨国立大学</div>
              </div>
              <div class="yuanxiao">
                  <img src="../../images/indeximg/mdaxue6.png" alt="">
                  <div>上智大学</div>
              </div>
          </div>
           <div class="fd mt52">
              <div class="yuanxiao">
                  <img src="../../images/indeximg/mdaxue7.png" alt="">
                  <div>福井大学</div>
              </div>
              <div class="yuanxiao">
                  <img src="../../images/indeximg/mdaxue8.png" alt="">
                  <div>秋田大学</div>
              </div>
          </div>

          <div class="hezuoyuanxiao mt122">
              <div>权威机构</div>
          </div>
          <div class="mt52">
              
                  <div class="jigou fd">
                      <img src="../../images/indeximg/jigouimg2.png" alt="">
                      <img src="../../images/indeximg/jigouimg3.png" alt="">
                  </div>
                  <div class="jigou mt52 fd">
                      <img src="../../images/indeximg/jigouimg1.png" alt="">
                      <img src="../../images/indeximg/jigouimg4.png" alt="">
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
    background: url("../../images/indeximg/mribenliuxuebnner.png") no-repeat 100% 100%;
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
.dream{
    padding: .76rem .2rem 1.1rem .2rem;
}
.Title{
    text-align: center;
}
.Title div:nth-child(1){
    color: #2B2B2B;
    font-size: .4rem;
    font-weight: bold;
    padding-bottom: .15rem;

}
.Title div:nth-child(2){
    color: #959595;
    font-size: .28rem;
}
.dreamicon{
    color: #2A2A2A;
    font-size: .28rem;
    text-align: center;
    img{
        width: 2.1rem;
        height: 2.1rem;
        display: block;
    }
    .tianyi{
        margin-bottom: .26rem;
    }
}
.dreamicon2{
    padding-top: 2rem;
}
.dreamicon3{
    margin-top:.6rem; 
}
.liuxueshenqing{
    padding: 1.06rem .34rem 1.27rem .34rem;
}
.shenqingimg{
    width: 1.32rem;
    height: 1.32rem;
    display: block;
}
.shenqingbox div:nth-child(1){
    color: #2B2B2B;
    font-size: 0.34rem;
    margin-bottom: .1rem;
}
.shenqingbox div:nth-child(2){
    color: #9A9A9A;
    font-size: 0.28rem;
    width: 1.7rem;
    line-height: .42rem;
}
.mb63{
    margin-bottom: .63rem;
}
.mt70{
    margin-top: .7rem;
}
.liaojieanniu{
    width: 2.5rem;
    height: .8rem;
    background: #EF3434;
    border-radius: .8rem;
    line-height: .8rem;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    margin-top: .75rem;
}

.anlie{
    width: 100%;
    height: 12rem;
    background: #262626;
    box-sizing: border-box;
    padding-top: 1.13rem 
}
.anlieimg{
    padding: 0 .88rem;
    img{
        display: block;
        height: 3.65rem;
        width: 2.67rem;
    }
}
.mt52{
    margin-top: .52rem;
}
.mt72{
    margin-top: .72rem;
}
.mt122{
    margin-top: 1.22rem;
}
.hezuoyuanxiao{
    border-bottom: 1px solid #D1D1D1;
    position: relative;
    div{
        color: #2B2B2B;
        font-size: .4rem;
        background: #fff;
        position: absolute;
        padding: 0 .3rem;
        left: 2rem;
        top: -.3rem;
    }
}
.hezuobox{
    padding: 1.13rem .5rem 1.78rem .5rem;
}
.yuanxiao{
    width: 3.06rem;
    color:#2B2B2B;
    font-size: .34rem;
    text-align: center; 
    img{
        width: 1.42rem;
        height: 1.07rem;
        display: block;
        margin: 0 auto;
    }
}
.jigou{
    img{
        width: 2.12rem;
        height: .83rem;
        display: block;
    }
}



</style>



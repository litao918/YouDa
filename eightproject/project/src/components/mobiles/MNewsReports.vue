<template>
  <div class="hello">
      <div class="hello2">
           <!-- 菜单 -->
      <div class="menus" :style="{'display':menuclass ? 'block' : 'none'}">
        <div> <router-link  to='/' >首页</router-link> </div>
        <div><router-link  to="/MJapaneseDistinction">日语考级</router-link></div>
        <div ><router-link  to="/Mexam">高考日语</router-link></div>
        <div><router-link to="/MChildrenJapanese">儿童日语</router-link></div>
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
            <img src="../../images/indeximg/目录备份 2.png" alt style="height:100%;width:100%;" />
          </div>

          <div class="icon2">
            <img src="../../images/indeximg/Group 42备份 3.png" alt style="height:100%;width:100%;" />
          </div>

          <div class="icon3">
            <img src="../../images/indeximg/个人中心 - 中备份 2.png" alt style="height:100%;width:100%;" />
          </div>
        </div>

      </div>

      <!-- 内容 -->
      <div class="content">
          <div class="xinwentitle">001JP日语在线更名友达日语在线 新锐势头依旧不可抵挡！</div>
          <div class="time">2017-01-11 20:42:17 来源: 网易</div>

          <div class="zhuyaoneirong">
              <div class="mb30">
                  2016年10月1日,除了是祖国母亲的生日,同时也是友达日语在线的“生日”!一直占据着日语在线教育市场半壁江山的001JP日语在线,已在2016年也就是今年的黄金周,正式更名为“友达日语在线”,此举引起了一小撮学员的疑虑,更名之后会不会意味着机构内的各项教学计划也会随着改变? 
              </div>
              <div class="mb30">完全不会!网站运营总监蒋山先生给予了肯定的答复,更名只是为了更好地促进本机构的发展,并不会涉及任何教学事项。也许更名会因为品牌效应的降低而造成部分潜在学员的流失,但是,不管是曾经的001JP日语在线还是今天的友达日语在线,它的服务宗旨都是始终如一的,它只会发展的越来越好,更名是综合了多方因素所下的决定</div>
              
              <div class="mb30"> 对于日语在线培训有所了解的人知道,001JP日语在线由TSJAPAN株式会社注资1500万人民币,它的注册资本和流动资本在同类机构中属于佼佼者,对于一个在线教育机构来说,这是得以实现深远发展的根基。而据《中国教育报》最新数据显示,教育机构注册资本在1000万以下的占90%以上,拥有了雄厚资本的001JP日语在线,让受众看到的才不是一个捉襟见肘而是大刀阔斧的教育先行者、实践者、领航者。 </div>
              <div class="mb30"> 正如业内人士熟知的那样,TSJAPAN是日本的一家注册公司,主要从事的是日语培训以及日本留学等相关事务,不仅能为世界各地的学员提供教学优质资源,最地道的日语以及最人性化的教授课程,同时拥有多种正规渠道,帮助学员尽快实现留学愿望。而这一切优势资源,都直接嫁接到了001JP日语在线上,更准确地说应该是嫁接到了友达日语在线身上。</div>
              <div class="mb30">友达日语在线作为001JP日语在线的接替者,用一个更准确的词来形容——继往开来者,在对于学员培训等常规教学活动中,会保持一贯的教学态度。更重要的是,将TSJAPAN得天独厚的条件发挥至极致。在友达日语在线的精心规划下,其一站式留学服务深受赴日留学者的追捧。不管是精英海归顾问团队、全程协助手续办理还是设日本办事处以解决赴日学生后顾之忧等特色,都为友达日语在线注入了无限活力,这也是每一位友达日语在线学员的先天优势,赢在留学起跑线上的真实写照。</div>
              

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
  .content{
      padding: 0 .21rem;
      padding-bottom: 2rem;
  }
  .xinwentitle{
      color:#EF3434;
      font-size: .4rem;
      line-height: .65rem;
      width: 6.06rem; 
      margin-top: .47rem;
  }
  .time{
      color: #A4A4A4;
      font-size: .24rem;
      padding-top: .27rem;
      padding-bottom: .45rem;
      border-bottom: 1px solid #F3F3F3;
      margin-bottom: .37rem;
  }
  .zhuyaoneirong{
      color: #000000;
      font-size: .28rem;
      line-height: .55rem;
  }
  .mb30{
      margin-bottom: .3rem;
  }


</style>



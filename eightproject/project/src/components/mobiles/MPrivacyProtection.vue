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
                <div>隐私保护</div>
            </div>
        </div>

       
      </div>

      <div class="neirong">
          <div class="xieyi">隐私保护</div>
          <div class="texte">您的个人资料档案 友达日语之所以要求会员个人资料，主要是要提供会员专属的数字学习服务。除非得到您的同意、对于会员个人的数据，我们绝对不会加以泄漏、转售或与其他机构进行交换。您可以随时利用更新个人资料档案来停止这些服务，并随时都可以到个人档案中变更或更新资料，您只要登入并单击「个人资料」即可。 友达日语需索取会员的某些个人资料（如姓名、电子邮件地址、实际地址等），我们需要这些数据以便快速便利为会员提供服务，并不断提升此服务内容以便更能符合使用需求。此外，我们如认为某些第三方能为我们的会员提升相关产品之服务性，则我们可能会让他们使用此类个人资料，第三方包括销售各式产品及服务的企业或公司。但友达日语绝不会提供第三方有关会员个人信用卡上之隐私资料。友达日语尊重使用会员的隐私权，若您不希望我们将个人资料提供他人使用，我们将会尊重您的决定。若您不希望我们让他人使用个人资料，只要寄电子邮件至ad@youda.com.cn即可。您亦可随时登入「会员中心」&#8594「个人资料」确认或变更您的个人资料。 除了索取个人资料外，友达日语还可能向使用者索取其个人简历（如职业、教育、年龄及性别等），以便提升我们的产品、服务、宣传及营销成效。友达日语可能会利用此类个人简历数据，来制作有关用户群的整体报告，此类个人简历资料及整体报告皆为不具名形式，不会包含能识别您个人资料的内容。 尽管如上所述，「友达日语」仍有权因下列需求或情况，而公开任何内容、记录或电子通讯等数据；(i)依法配合司法检调机关执行法律上或公务之需求(ii)为强制执行此「合约」、「许可协议」或「使用规定」而需要公开时，或者(iii)为保护「友达日语」或其使用者或合伙人的权利。 安全程度 在信用卡数据透过网络传送给我们之前，这些数据都经过我们的安全服务器予以加密处理。在登入时，我们也坚持使用密码认证，避免您的个人资料档案及学习纪录在未经授权的状况下被存取。经开启后之网页持续未使用时，经过一段时间我们会自动将其注销，以保护您数据使用之安全。 注册订阅 友达日语以具竞争力的价格提供在线学习课程。要使用其中任一项之服务时，您必须成为友达日语正式会员。如选择以信用卡方式给付费用，您必须要提供信用卡的数据给我们，以便您购买想要之服务产品。我们会将这些数据加密储存在一个安全的服务器中。 Cookies 我们将您的个人资料之细节储存在计算机的浏览器或硬盘的「cookies」中。我们使用cookies来制定您的国家及使用的语言。我们的cookies并不搜集您计算机浏览器或硬盘上的额外信息。大部分的浏览器都提供避免将您计算机上的数据储存到cookies的选项，不过此种行为将会使您在使用友达日语时少掉部份的便利性。 IP地址和浏览器版本 我们的网站会记录您计算机的IP地址与浏览器的类型，但我们并不会将这些数据与可以识别您身分的任何东西连结在一起。也就是说我们会追踪会员的使用状况，但使用会员仍然会保持在隐形的状态中。我们记录这些信息的原因，是为了要确认客户使用型态与网站的使用状况，以协助我们改善「友达日语」的设计与编排格式。 他网站的连结 这个网站包含了到其他网站的连结。请注意，www.youda.com.cn并不负责保护您在其他网站的隐私。我们建议使用者在离开我们的网站时应多加注意，并仔细阅读其他搜集可识别个人身分资料的网站，其有关于隐私权保护的声明。本隐私声明只适用于www.youda.com.cn网站所搜集的资料。 友达日语的隐私权政策，保护条款及其他相关之约定，将会视实际需要作适度修订。如果我们决定改变我们搜集、使用或分享数据的方式时，我们会采取适当的商业步骤，透过网站新闻通知会员并说明更动的原因，亦会让会员自由决定是否同意我们用新方法来使用他们的数据。如果您对这个部分的条款有任何问题，或是对「友达日语」其他条款或做法有任何问题时，请与我们联络。</div>
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
    background: url("../../images/indeximg/zuihouyige.png") no-repeat 100% 100%;
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
    padding: 0 .2rem;
    padding-bottom: 2rem;
}
.xieyi{
    color: #EF3434;
    font-size: .4rem;
    padding-top: .58rem;
    padding-bottom: .2rem;
    border-bottom: #DCDCDC 1px solid;
    margin-bottom: .64rem;
    font-weight: bold;
}
.texte{
    color: #000000;
    font-size: .26rem;
    line-height: .42rem;
}

</style>



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
                <div>用户协议</div>
            </div>
        </div>

       
      </div>

      <div class="neirong">
          <div class="xieyi">用户协议</div>
          <div class="texte">欢迎您加入友达日语免费会员（含正式会员适用）并使用友达日语所提供之各项会员服务（以下简称本服务） 友达日语网站（以下简称本网站）是由友达日语（以下简称本公司）所建置，当您注册完成或开始使用本服务时，即视为您已经阅读、了解并同意本公司之会员服务条款（以下简称本服务条款），关于本服务条款系为规范您与本公司间之契约。如果您不同意本服务条款的内容，或者您所属国家或地区排除本约定内容之全部或一部时，您应立即停止使用友达会员服务。 如您是未满十八岁之未成年人，则您必须在加入会员前将本服务条款请您的父母、法定代理人或监护人阅读并得到其同意，才可以注册及使用友达日语所提供之会员服务。当您使用友达日语所提供之服务时，则视为您的父母或监护人已经阅读、了解并同意本服务条款。 一、您的注册义务 （一）请依注册申请程序所提示之项目，登录您本人正确、真实及完整之个人资料。当您的个人资料有异动时，请立即予以更新，以维持您个人资料之正确、真实及完整。如因您登录资料不实或冒用他人名义，以致个人权利受有损害或有侵害他人之权利或有违反法令时，应自负相关之法律责任。 （二）如您所提供个人资料有误或个人资料异动但未予更新，以致于与原登录之数据不符时，本公司有权随时终止会员资格及各项会员服务。 二、会员服务 （一）您依注册程序登录并经本公司完成相关设定后，您即取得会员之资格，并可以开始使用本服务。 （二）当您成为友达日语会员后而得使用之各项会员服务时，其所有权或使用权利仍属本公司及其所约定之人，所有会员仅得依本服务条款之约定使用，不得随意出租、出借、移转或让予给其他第三人使用。 （三）本公司有权增加、变更或取消会员服务中相关系统或功能之全部或一部之权利，无须个别通知会员；且有关现行或尔后之各项服务均受本服务条款之规范。 三、友达日语隐私权保护政策 您的注册数据及其他相关数据，均受到友达日语隐私权保护政策所保护，有关友达日语隐私权保护，请详阅友达日语首页上「隐私保护」，以了解并保障您的权益。但会员于上课期间所纪录之影像、声音及教材等内容，同意无偿供本公司于相关产品之改善、宣传及营销时使用。 四、会员账号及密码之保管 （一）您注册完成后将会取得一组账号及密码，您有义务妥善保管您的账号及密码之机密与安全，不得泄漏给任何以外第三人。您必须为此组账号及密码之一切行为负责，此组账号及密码所做之一切行为即视为您本身之行为。 （二）本组账号及密码仅限于您个人使用，非经本公司之同意，您不得出租、出借、移转或让与给其他第三人使用。 （三）如您发现您的账号及密码遭盗用或其他不当使用，您必须立即通知友达日语，以利本公司采取相关措施。但不得将本公司所采取之措施解释为本公司对您有明示或默示担保或赔偿责任，对于您的账号及密码遭人非法使用，本公司亦无法负任何赔偿责任。 （四）每次使用完毕后，应确实注销并结束您账号及密码的使用，以防止被他人盗用。 五、会员之权利 友达日语为您提供了不可转让、非专利、有存取、使用与显示的权限限制的网站内容，您在开始使用这些内容时必须遵守这些相关的规定。此网站上的数据只供您做为私人与非商业的用途来使用。而此网站所提供的特定服务则只有友达日语的注册会员才能使用。在您注册购买友达日语所提供的服务或者免费试用服务时，也就表示您同意接受在本公司及友达日语网站上中所列示的各项条款与规定。 六、会员之义务 （一）会员不得利用友达日语会员服务，进行任何商业行为或以任何方式非法使用。 （二）会员同意接受友达日语会员中心寄发的会员电子报，或特别优惠、促销活动及其他相关信息。 （三）会员除应遵守本服务条款之约定外，并同意遵守本公司各项服务营业规章与会员所在当地国家法令及因特网之国际使用惯例与礼节，且不得有从事下列或有类似之行为： 1、有窃取、更改、破坏他人信息，或有擅自复制他人信息转售、转载情事者。 2、未经对方同意，擅自寄发电子广告信件至对方信箱者，或蓄意破坏他人信箱或其通信设备者。 3、于论坛区张贴与主题无关之讯息者。 4、散播计算机病毒者。 5、公布或传送任何诽谤、侮辱、具威胁性、攻击、不雅、猥亵、不实，或有违背公序良俗、字义、图片或任何形式的档案于001JP网站上。 6、撷取、转寄、播放非经所有人正式开放或授权之资源者。 7、有侵害他人名誉、隐私权、营业秘密、知识产权或其他相关之权利，或有侵害之虞者。 8、未经同意收集他人电子邮件地址及其他个人资料者。 9、传送、张贴广告，或发表或任何虚伪不实或引人错误及其他之表示或表征者。 10、其他有危害通信、违反相关法令或本公司规定之情事或之虞者。 （四）上述规定不代表本公司对会员传送、张贴或发表之内容做任何形式或实质之审查，会员必须对自己所做之行为负责。如经本公司察觉或经他人申诉会员有违反上述各款情事或之虞时，本公司除有权径行移除或删除该内容外，并有权终止或暂停该会员之资格及各项会员服务。本公司如因此产生损害时，并得依法向该会员请求赔偿。 （五）本公司有权自行判断是否经由会员账号所传送之电子广告信件，或其它未经同意之大宗电子邮件，如经本公司确定为会员账号所为时，本公司有权立即终止该账号之使用，并得向该账号之拥有者请求损害赔偿。 七、服务暂停或中断 （一） 本公司于下列情形之一时，得暂停或中断本服务之全部或一部，对于使用会员不负担任何赔偿责任： 1、对于本网站相关系统设备进行迁移、更换或维护时。 2、因地震、台风等天然灾害、战争、政府禁令等等不可归责于本公司所造成之服务停止或中断或网络之线路质量。 （二）如因本公司对于本网站相关系统设备进行迁移、更换或维护而必须暂停或中断该全部或一部之服务时，本公司于暂停或中断前将以电话短信通知或于本网站上公告。 （三）因使用者违反本服务条款或法令，或有不可归责本公司之事由，而造成本服务之全部或一部暂停或中断时，暂停或中断期间之费用仍须依正常标准计费及缴纳。 （四）对于本服务之暂停或中断，有可能造成您使用上的不便、数据遗失或其他经济及时间上之损失，您平时应采取适当的防护措施，以保障您的权益。 八、网络资源之使用 （一）因特网系开放性网络，并由各网络提供者负责维护，本公司无法就会员撷取信息资源之正确性、完整性、安全性、可靠性、合适性、线路中断及错误负责，亦无法保证用户与本公司间数据传输速率，会员如因传输速率或撷取使用网络数据而导致直接或间接之损害或损失时，本公司不负任何损害赔偿责任。 （二）本服务网络上可撷取之任何资源，皆属该数据所有者所拥有，使用会员应遵守各该网络信息所有者之授权或其他法律规定，否则不得使用该等资源，如因此导致任何责任皆由使用者自行负责，概与本公司无涉。 九、会员服务之措施及限制 （一）您同意本公司有权就本服务订定相关的措施及限制，包括但不限于：电子邮件信箱空间之容量、电子邮件讯息可收发之最大档案、同一电子邮件讯息可发送至不同地址之上限及特定时间内本服务使用次数及每次使用时间之上限。 （二）如本公司将会员传送之任何讯息及内容删除或未储存，本公司不负担任何损害赔偿责任，请应自行定期备份数据。 （三）本公司得因业务考虑，随时变更该措施及限制，对于前述所做之变更，将不对会员个别通知或公告。 十、信息或建议 本网站所出现的信息可能因为本公司、第三方及相关电信业者网络系统软硬件设备之故障或失灵，而全部或一部暂时无法使用、或造成数据传输错误、或遭黑客侵入系统窜改或伪造变造数据等；因此使用者在阅读或使用所有出现在本网站上的信息时，包括各种数据、建议、分析、评论和报导等，都应该特别谨慎，该等信息既不代表本公司的言论或意见，本公司也无法担保其真实性、完整性及可信度。本网站所有信息和链接，都只是为了提供给使用者自行研究参考，并非对使用者作任何有关专业建议或暗示，亦无法取代或补充专业顾问之个别分析建议，使用者在作成任何具体决定时，应该自行谨慎作成判断，或者另外洽询专业顾问。用户基于本网站上的任何信息所作成的任何决定，都必须自行负担风险，本公司不负任何之责。 十一、与第三人网站之连结 本网站如有提供搜索引擎之服务时，仅于提供使用者方便且迅速查询到用户想要的信息，您所查到的数据是使用搜索引擎之结果，不代表本公司与连结网站之业者有任何合作关系。如您因进入该网站而产生之纠纷或损害，请您径行与该网站之业者联系，本公司不负任何责任。 十二、广告 本网站如有传播或刊载之广告，关于其内容所展现的文字、图片、动画、声音、影像或以其他方式对商品或服务之说明，都是由广告主或广告代理商所提供。对于广告之内容，本公司基于尊重广告主或广告代理商权利，不对广告之内容进行审查，您应该自行判断该广告的正确性及可信度，本公司不对该广告做任何担保。 十三、商品或服务之交易 如果您透过本网站与网络上其他厂商或业者进行商品或服务之买卖或各种交易行为，此时仅该厂商或业者与您有契约关系存在，本公司并不介入或参与。如该商品或服务有任何瑕疵或纠纷时，请您径行与该厂商或业者联络解决，本公司对此不负任何担保责任。如果商品或服务系由本公司所提供，则相关权利义务依各会员服务所订定之规定办理。 十四、内容提供商 本网站之内容如由本公司有合作关系之业者或厂商所提供时，本公司基于尊重他人知识产权及其他权益，不对其所提供之内容做任何实质的审查，使用者对于内容之正确性及可靠性应审慎判断，本公司不对此作任何的担保。该内容如有不实或错误，您应该径行向该内容提供商反映。 十五、担保责任之免除 （一）本公司各项会员服务，依本公司既有之规划提供，对于特定使用者之特殊需求，本公司不担保本服务将符合您的所有需求。 （二）本公司不担保各项服务之正确、完整、安全、可靠、合适、时效、稳定、不会断线及出错。您同意对于您所传送之电子邮件、档案及其他数据做备份。关于因传送过程而造成电子邮件、档案及其他数据之遗失，本公司不负任何担保责任。 （三）对于您在本服务中所下载之电子邮件、档案及其他数据，您应该自行考虑其风险，如因下载而造成您计算机系统的损坏或计算机中数据的遗失，本公司不负任何担保责任。 十六、会员内容之保留或揭露 （一）本公司不对于会员所传送、张贴或发表之内容（包括但不限于文字、图片、音乐、影像、软件、信息及各种数据等）做任何形式或实质之审查，亦不担保其正确、完整、安全或可靠。会员对于使用由其他会员所提供之内容应自行考虑其风险。 （二）本公司基于下列理由会将会员所传送、张贴、发表或使用课程之内容保留或揭露： 1、司法或检调、警察机关侦查犯罪需要时。 2、政府机关依法律程序要求时。 3、因会员之行为违反法令或本公司相关服务条款之规定时。 4、基于维护公益或保护本公司或他人之权利。 十七、知识产权 本网站上所显示、使用或提供之软件、程序及内容（包括但不限于文字、说明、图画、图片、图形、档案、页面设计、网站规划与安排等）之专利权、著作权、商标权、营业秘密、专门技术及其他知识产权均属本公司或其他权利人所有，非经权利人事先书面授权同意，会员不得重制、公开传播、公开播送、公开上映、改作、编辑、出租、散布、进行还原工程、解编、反向组译、或其他方式之使用。如有违反时，除应自行负法律责任外，因而对本公司造成损害或损失，本公司得向该会员请求损害赔偿。 十八、特别规定 本服务条款系就本网站之各项服务所作之一般规定，如各该会员服务有特别规定时，则先依各该特别规定。 十九、服务条款之增订及修改 本服务条款如有增订或修改，您同意自该修订条款于本网站公告之日起受其约束，本网站将不对会员个别通知。如您于公告后继续使用本服务，则视为您已经同意该修订条款</div>
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
    background: url("../../images/indeximg/xiayibnner.png") no-repeat 100% 100%;
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
}
.texte{
    color: #000000;
    font-size: .26rem;
    line-height: .42rem;
}

</style>



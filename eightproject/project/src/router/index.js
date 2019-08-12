import Vue from 'vue'
import Router from 'vue-router'

// 首页
import index from '@/components/index'
// 教学理念
import Teaching_concept from '@/components/pcweb/Teaching_concept'
// 如何上课
import HowHave from '@/components/pcweb/HowHave'
//企业培训
import WorldTeachers from '@/components/pcweb/WorldTeachers'
//日本留学
import StudyAbroad from '@/components/pcweb/StudyAbroad'
//全球师资
import EnterpriseTraining from '@/components/pcweb/EnterpriseTraining' 
//下载中心
import DownloadCenter from '@/components/pcweb/DownloadCenter' 
//关于我们
import AboutUs from '@/components/pcweb/AboutUs' 
//公开课
import PublicClass from '@/components/pcweb/PublicClass' 
//日语能力考试
import AbilityTest from '@/components/pcweb/AbilityTest' 
//儿童日语
import ChildrenJapanese from '@/components/pcweb/ChildrenJapanese' 
//高考日语
import Exam from '@/components/pcweb/Exam' 
//用户协议
import UserAgreement from '@/components/pcweb/UserAgreement' 
//隐私保护
import PrivacyProtection from '@/components/pcweb/PrivacyProtection' 
//联系我们
import ContactUs from '@/components/pcweb/ContactUs' 
//新闻报道
import NewsReports from '@/components/pcweb/NewsReports' 


// --------------------移动端
//日语考级
import MJapaneseDistinction from '@/components/mobiles/MJapaneseDistinction' 
//高考日语
import Mexam from '@/components/mobiles/Mexam'   
//少儿日语
import MChildrenJapanese from '@/components/mobiles/MChildrenJapanese'  
//公开课
import MPublicClass from '@/components/mobiles/MPublicClass' 
//如何上课
import MHowClass from '@/components/mobiles/MHowClass'  
//日本留学
import MJapanAbroad from '@/components/mobiles/MJapanAbroad' 
//新闻报道
import MNewsReports from '@/components/mobiles/MNewsReports' 
//用户协议 
import MUserAgreement from '@/components/mobiles/MUserAgreement' 
//隐私保护 
import MPrivacyProtection from '@/components/mobiles/MPrivacyProtection' 
//联系我们 
import MContactUs from '@/components/mobiles/MContactUs' 
//关于我们 
import MAboutUs from '@/components/mobiles/MAboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/Teaching_concept',
      name: 'Teaching_concept',
      component: Teaching_concept
    },
    {
      path: '/HowHave',
      name: 'HowHave',
      component: HowHave
    },
    {
      path: '/WorldTeachers',
      name: 'WorldTeachers',
      component: WorldTeachers
    },
    {
      path: '/StudyAbroad',
      name: 'StudyAbroad',
      component: StudyAbroad   
    },
    {
      path: '/EnterpriseTraining',
      name: 'EnterpriseTraining',
      component: EnterpriseTraining   
    },
    {
      path: '/DownloadCenter',
      name: 'DownloadCenter',
      component: DownloadCenter   
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs 
    },
    {
      path: '/PublicClass',
      name: 'PublicClass',
      component: PublicClass  
    },
    {
      path: '/AbilityTest',
      name: 'AbilityTest',
      component: AbilityTest  
    },
    {
      path: '/ChildrenJapanese',
      name: 'ChildrenJapanese',
      component: ChildrenJapanese 
    },
    {
      path: '/Exam',
      name: 'Exam',
      component: Exam  
    },
    {
      path: '/UserAgreement',
      name: 'UserAgreement',
      component: UserAgreement  
    },
    {
      path: '/PrivacyProtection',
      name: 'PrivacyProtection',
      component: PrivacyProtection  
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs  
    },
    {
      path: '/NewsReports',
      name: 'NewsReports',
      component: NewsReports  
    },
    {
      path: '/MJapaneseDistinction',
      name: 'MJapaneseDistinction',
      component: MJapaneseDistinction  
    },
    {
      path: '/Mexam',
      name: 'Mexam',
      component: Mexam   
    },
    {
      path: '/MChildrenJapanese',
      name: 'MChildrenJapanese',
      component: MChildrenJapanese   
    },
    {
      path: '/MPublicClass',
      name: 'MPublicClass',
      component: MPublicClass 
    },
    {
      path: '/MHowClass',
      name: 'MHowClass',
      component: MHowClass  
    },
    {
      path: '/MJapanAbroad',
      name: 'MJapanAbroad',
      component: MJapanAbroad   
    },
    {
      path: '/MNewsReports',
      name: 'MNewsReports',
      component: MNewsReports   
    },
    {
      path: '/MUserAgreement',
      name: 'MUserAgreement',
      component: MUserAgreement   
    },
    {
      path: '/MPrivacyProtection',
      name: 'MPrivacyProtection',
      component: MPrivacyProtection   
    },
    {
      path: '/MContactUs',
      name: 'MContactUs',
      component: MContactUs   
    },
    {
      path: '/MAboutUs',
      name: 'MAboutUs',
      component: MAboutUs   
    },
    
    

    
  ]
})

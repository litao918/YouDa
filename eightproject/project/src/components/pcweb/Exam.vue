
<template>
<!-- 教学理念 -->
    <div>
        <!-- 导航nav -->
              <div class="sb" style="width:1080px;margin:0 auto;height:66px;font-size:14px;">
                <!-- logo -->
                <div class="logo mlrauto" style="width:133px;height:33px;">
                    
                </div>
                <!-- nav -->
                <div class="sb c573 caidan" >
                    <div style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;"  >
                        <div class='nvbox '><router-link   to='/'>首页</router-link></div>
                        <div  style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:none"></div>
                    </div>

                    <div class="xianshi" style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;"  >
                        <div class="nvbox">
                            <router-link style="color:#EF3434;"  to='/Exam'>高考日语</router-link>
                        </div>
                        <div class="dingwei">
                            <div><router-link   to=''>综合日语</router-link></div>
                            <div><router-link   to='/ChildrenJapanese'>少儿日语</router-link></div>
                            <div><router-link   to='/WorldTeachers'>企业培训</router-link></div>
                            <div><router-link   to='/AbilityTest'>日语课程</router-link></div>
                        </div>
                        <div  style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:block;"></div>
                    </div>

                    <div style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;"  >
                        <div class="nvbox"><router-link  to='/EnterpriseTraining'>全球师资</router-link></div>
                        <div style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:none;"></div>
                    </div>

                    <div style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;" >
                        <div class="nvbox"><router-link   to='/Teaching_concept'>教学理念</router-link></div>
                        <div   style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:none;"></div>
                    </div>

                    <div style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;" >
                        <div class="nvbox"><router-link     to='/StudyAbroad'>日本留学</router-link></div>
                        <div  style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:none;"></div>
                    </div>

                    <div style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;"  >
                        <div class="nvbox"><router-link   to='/PublicClass'>公开课</router-link></div>
                        <div  style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:none;"></div>
                    </div>

                    <div style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;" >
                        <div class="nvbox"><router-link     to='/HowHave'>如何上课</router-link></div>
                        <div style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:none;"></div>
                    </div>

                    <div style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;"  >
                        <div class="nvbox"><router-link   to='/DownloadCenter'>下载中心</router-link></div>
                        <div style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:none;"></div>
                    </div>

                    <div style="line-height:66px;font-size:14px;position: relative;margin:0 12.5px;"  >
                        <div class="nvbox"><router-link   to='/AboutUs'>关于我们</router-link></div>
                        <div  style="width:100%;background:#EF3434;height:2px;position: absolute;bottom:20px;display:none;"></div>
                    </div>
                   
                </div>
                <!-- 注册登录 -->
                <div class="zucedenglv mlrauto">
                    <div class="denglv" style="width:60px;height:30px;line-height: 30px;border: 1px solid #EF3434; border-radius:50px;color:#EF3434;margin-right:10px;">登录</div>
                    <div class="zhuce"  style="width:80px;height:30px;line-height: 30px; border-radius:50px;background:#EF3434;color:#fff;">申请试听</div>
                </div>
            </div>
        
            <!-- bnner -->
            <div class="banner" style="height:400px;width:100%;">
                    <div class="bx">
                            <div style="font-size:48px;color:#393939;line-height:90px;padding-top:54px;padding-bottom:10px;">日语高考拿高分更简单</div>
                            <div style="font-size:24px;color:#A6A6A6;line-height:33px;">硕士学历以上中教</div>
                            <div style="font-size:24px;color:#A6A6A6;line-height:33px;">东京丰富经验外教</div>

                            <div class="shiting" style="display:flex;">  
                                <div style="height:35px;width:35px;border-radius:100%;background:#fff;margin:auto 20px;position: relative;">
                                    <img style="height:20px;width:20px;position: absolute;top:7px;left:10px;" src="../../images/indeximg/sanjiaoxing.png" alt="">
                                </div>
                                <div>了解详情</div>
                            </div>
                    </div>
            </div>

            <!-- 高考大数据 -->
            <div class="bx tac" style="padding-bottom:80px;">
                        <div style="color:#2B2B2B;font-size:42px;line-height:54px;padding-top:98px;">日语高考大数据 </div>
                        <div style="color:#959595;font-size:24px;line-height:54px;padding-bottom:75px;">日语高考VS英语高考</div>

                        <div class="sb">

                            <div><img style="height:398px;width:417px;" src="../../images/indeximg/shuju1.png" alt=""></div>
                            <div>
                                <div>
                                    <div style="color:#3A3A3A;font-size:36px;line-height:50px;">考试难度</div>
                                    <div style="color:#A7A7A7;font-size:28px;line-height:40px;">参考全国高考大纲</div>
                                </div>
                                <div style="margin-top:50px;margin-bottom:58px;">
                                    <div style="color:#3A3A3A;font-size:36px;line-height:50px;">平均分</div>
                                    <div style="color:#A7A7A7;font-size:28px;line-height:40px;">全国卷150分</div>
                                </div>
                                <div>
                                    <div style="color:#3A3A3A;font-size:36px;line-height:50px;">高分段比例</div>
                                    <div style="color:#A7A7A7;font-size:28px;line-height:40px;">成绩超过120分</div>
                                </div>
                            </div>
                            <div><img style="height:398px;width:417px;" src="../../images/indeximg/shuju2.png" alt=""></div>
                        </div>
            </div>

             <!-- 高考大数据 -->
             <div style="background:#F8F8F8;">
                 <div class="bx tac" style="padding-bottom:80px;">
                        <div style="color:#2B2B2B;font-size:42px;line-height:54px;padding-top:98px;">科学完善的日语高考方案  </div>
                        <div style="color:#959595;font-size:24px;line-height:54px;padding-bottom:75px;">三个步骤决胜日语</div>

                        <div class="sb" style="position: relative;">
                                <div>
                                    <div><img style="height:137px;width:126px;margin-bottom:15px;" src="../../images/indeximg/wanshan1.png" alt=""></div>
                                    <div style="font-size:29px;color:#FF9D1C;font-weight:bold;">STEP1</div>
                                    <div style="font-size:24px;color:#2B2B2B;padding-top:10px;padding-bottom:10px;">基础课程学习内容</div>
                                    <div style="width:228px;font-size:14px;color:#979797;">根据考纲系统学习日语 考点知识</div>
                                </div>
                                <div>
                                    <div><img style="height:137px;width:126px;margin-bottom:15px;" src="../../images/indeximg/wanshan2.png" alt=""></div>
                                    <div style="font-size:29px;color:#FF6B6A;font-weight:bold;">STEP2</div>
                                    <div style="font-size:24px;color:#2B2B2B;padding-top:10px;padding-bottom:10px;">单项提分学习</div>
                                    <div style="width:228px;font-size:14px;color:#979797;">结合高考题型，进行听力、语法、阅读和写作专项强化</div>
                                </div>
                                <div>
                                    <div><img style="height:137px;width:126px;margin-bottom:15px;" src="../../images/indeximg/wanshan3.png" alt=""></div>
                                    <div style="font-size:29px;color:#FFC533;font-weight:bold;">STEP3</div>
                                    <div style="font-size:24px;color:#2B2B2B;padding-top:10px;padding-bottom:10px;">全面冲刺复习 </div>
                                    <div style="width:228px;font-size:14px;color:#979797;">历年真题讲解，查漏补缺，冲刺 高分</div>
                                </div>

                                <div class="shujut1"></div>
                                <div class="shujut2"></div>
                        </div>
                 </div>
             </div>

                <!-- bck -->
            <div class="tesebk">
                    <div style="margin:0 auto;">
                        <div class="tac" style="color:#fff;font-size:42px;padding-top:100px;">友达日语高考课程特色 </div>
                        <div class='tac' style="color:#fff;font-size:24px;padding-top:20px;">强大的课程特色 祝您开启高考逆袭之路</div>

                        <div class="sb bx" style="margin-top:120px;">
                                <div class="tac" >
                                    <div><img style="height:58px;width:64px;" src="../../images/indeximg/riyute1.png" alt=""></div>
                                    <div style="color:#FFDB1D;font-size:28px;lie-height:40px;margin-top:40px;margin-bottom:10px;">1对1真人直播教学</div>
                                    <div style="color:#FFFFFF;font-size:20px;lie-height:28px;width:308px;">根据每个学生定制学习计划，调整学习进度，提升学习效率。</div>
                                </div>

                                 <div class="tac">
                                    <div><img style="height:58px;width:47px;" src="../../images/indeximg/riyute2.png" alt=""></div>
                                    <div style="color:#FFDB1D;font-size:28px;lie-height:40px;margin-top:40px;margin-bottom:10px;">根据高考考纲定制教材</div>
                                    <div style="color:#FFFFFF;font-size:20px;lie-height:28px;width:308px;">友达日语研发专属日语教材</div>
                                </div>

                                 <div class="tac">
                                    <div><img style="height:58px;width:49px;" src="../../images/indeximg/riyute3.png" alt=""></div>
                                    <div style="color:#FFDB1D;font-size:28px;lie-height:40px;margin-top:40px;margin-bottom:10px;">高考名师指导</div>
                                    <div style="color:#FFFFFF;font-size:20px;lie-height:28px;width:308px;">精讲精练听说读写等各方面应试技巧</div>
                                </div>
                        </div>
                    </div>
            </div>

            <!-- 高考大数据 -->
            <div style="background:#F8F8F8;">
                <div class="bx tac" style="padding-bottom:80px;">
                        <div style="color:#2B2B2B;font-size:42px;line-height:54px;padding-top:98px;">友达日语高考日语独家教材 </div>
                        <div style="color:#959595;font-size:24px;line-height:54px;padding-bottom:75px;">根据高考考纲研发定制教材</div>

                        <div class="sb">
                                <div style="margin-right:107px;">  <img style="height:510px;width:486px;" src="../../images/indeximg/59f05a43e@2x.png" alt=""></div>
                                <div>
                                    <div class="zhenti">高考日语历年真题</div>
                                    <div style="color:#737373;font-size:18px;line-height:36px;">友达高考日语教研组，二十多位有着日语高考教学多年经验的教师组成，经过三年多的总结与研发，形成了“学习时间短、提分速度快"的友达高考日语教学特色。在推出的三年时间以来，帮助了非常多的英语学习成绩差的学员在短时间内顺利转换成日语高考，并取得了优秀的成绩。</div>
                                    <div style="position: relative;margin-top:40px;"> <div class="gengduoneit">了解更多内容</div> </div>
                                </div>
                                
                          
                        </div>
            </div>
            </div>
            

            <!-- 名师团 -->
            <div style="">
                <div class="bx tac" style="padding-bottom:80px;">
                        <div style="color:#2B2B2B;font-size:42px;line-height:54px;padding-top:98px;">高考日语名师团 </div>
                        <div style="color:#959595;font-size:24px;line-height:54px;padding-bottom:75px;">在友达日语他们变得更好</div>

                    <template>
                <el-carousel :interval="4000" type="card" height="500px" indicator-position='none' arrow='always'>
                  
                        <el-carousel-item >
                        <div class="lunbo2">
                            <div class="touxiang" ><img src="" alt=""></div>
                            <div style=" text-align: center;line-height:30px;color:#343434;font-size:22px;">美月老师</div>
                           
                            <div style="line-height:25px;color:#343434;font-size:18px; text-align: center;padding-bottom:16px;padding-top:16px;">三年日语教学经验</div>
                            <div style="line-height:24px;color:#3A3A3A;font-size:14px;">大家好,我是美月老师，我毕业于西安交通大学，已经获得了硕士学位。并且有日本奈良女子大学留学经验，我提倡寓教于乐，开心的，氛围轻松的教学方法，同时找到适合自己的学习日语的方式方法。</div>

                        </div>
                    </el-carousel-item>

                    <el-carousel-item >
                        <div class="lunbo2">
                            <div class="touxiang" ><img src="" alt=""></div>
                            <div style=" text-align: center;line-height:30px;color:#343434;font-size:22px;">美月老师</div>
                            
                            <div style="line-height:25px;color:#343434;font-size:18px; text-align: center;padding-bottom:16px;padding-top:16px;">三年日语教学经验</div>
                            <div style="line-height:24px;color:#3A3A3A;font-size:14px;">大家好,我是美月老师，我毕业于西安交通大学，已经获得了硕士学位。并且有日本奈良女子大学留学经验，我提倡寓教于乐，开心的，氛围轻松的教学方法，同时找到适合自己的学习日语的方式方法。</div>

                        </div>
                    </el-carousel-item>

                    <el-carousel-item >
                        <div class="lunbo2">
                            <div class="touxiang" ><img src="" alt=""></div>
                            <div style=" text-align: center;line-height:30px;color:#343434;font-size:22px;">美月老师</div>
                           
                            <div style="line-height:25px;color:#343434;font-size:18px; text-align: center;padding-bottom:16px;padding-top:16px;">三年日语教学经验</div>
                            <div style="line-height:24px;color:#3A3A3A;font-size:14px;">大家好,我是美月老师，我毕业于西安交通大学，已经获得了硕士学位。并且有日本奈良女子大学留学经验，我提倡寓教于乐，开心的，氛围轻松的教学方法，同时找到适合自己的学习日语的方式方法。</div>

                        </div>
                    </el-carousel-item>
                
                </el-carousel>
                </template>
                       
            </div>
            </div>
            

          
       <footers></footers>
    </div>
</template>


<script>
import titles from "../../widget_component/titles.vue";
import footers from "../../widget_component/footers.vue";
export default {
    components: { titles, footers },
    data() {
        return {
             
        }
    },
     methods: {
     
    },
    mounteds: {
      
    },
     
}
</script>

<style lang="less" scoped>
    @import "../../style/Common_style.css";
    .bx{
        width: 1080px;
        margin: 0 auto;
    }
    .logo{
        background: url('../../images/indeximg/pclogo.png') no-repeat center center;
        background-size: auto auto;
    }
    .zucedenglv{
        text-align:center;
        display: flex;
        justify-content: space-between; 
    }
   
    .caidan{
        a{
            color: #573E41;
            text-decoration:none;
        }
        a:hover{
            color: #EF3434;
        }
       
    }
    .opo{
        color: #EF3434 !important;
    }
    .dingwei{
        position: absolute;
        top: 60px;
        left: -21px;
        z-index: 999;
        background: #fff;
        border-radius:4px;
        width: 99px;
        text-align: center;
        display: none;
        div{
            height: 40px;
            line-height: 40px;

        }
        div:hover{
            background: #eee;
        }
        
    }
    .xianshi:hover{
        .dingwei{
            display: block;
        }
    }
    .banner{
        min-width: 1920px;
        background: url('../../images/indeximg/gaokaobanner.png') no-repeat;
        background-size: 100% 100%;
        
    }
    .shiting{
        width: 202px;
        height: 54px;
        line-height: 54px;
        text-align: center;
        border-radius: 30px;
        background: #EF3434;
        color: #fff;
        font-size: 24px;
        margin-top: 45px;
    }
    .btn{
        background:#EF3434;
        color: #fff;
        text-align: center;
        width: 176px;
        height: 62px;
        line-height: 62px;
        font-size: 21px;
        border-radius: 62px;
        position: absolute;
        right: 4px;
        top: 4px;
    }
    .shujut1{
        position: absolute;
        left: 140px;
        top: 58px;
        width: 368px;
        height: 14px;
        background: url('../../images/indeximg/hengjiantou1.png') no-repeat;
        background-size: 100% 100%;

    }
     .shujut2{
        position: absolute;
        right: 48px;
        top: 58px;
        width: 423px;
        height: 14px;
        background: url('../../images/indeximg/hengjiantou2.png') no-repeat;
        background-size: 100% 100%;

    }

    .tesebk{
        height: 635px;

        background: url('../../images/indeximg/tesebk.png') no-repeat center center;
        background-size: 100% 100%;
    }
    .zhenti{
        padding: 30px 0px;
        color: #EF3434;
        border-bottom: 1px solid #EF3434;
        margin-bottom: 28px;
        font-size: 48px;
        text-align: right;
    }
    .gengduoneit{
        position: absolute;
        right: 0;
        text-align: center;
        font-size: 20px;
        color: #EF3434;
        width:195px;
        height:52px;
        border-radius:10px;
        border:1px solid rgba(239,52,52,1);
        line-height: 52px;
    }
    
    .lunbo2{
        
        margin-left: 69px;
        width:342px;
        height:365px;
        background:rgba(255,255,255,1);
        box-shadow:0px 2px 11px 2px rgba(211,211,211,0.5);
        border-radius:8px;
        padding: 0 30px;
        padding-top: 45px;
       
     }

     .touxiang{
    border-radius: 100%;
    width: 92px;
    height: 92px;
    border: 1px solid red;
    margin: 0px auto;
    margin-bottom: 10px;

}
  
    
   
</style>

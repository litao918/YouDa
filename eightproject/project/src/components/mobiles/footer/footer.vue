<template>
    <div>
        <div class="baobei sb">
                <div class="ohuo" style="color:#FF4444;">
                    <div>免费领取</div>
                    <div>价值 <span style="color:#7E3E13;">300元</span>试听课</div>
                </div>
                <div class="baming">立即报名</div>
                <div class="xiaoloahu"><img src="../../../images/indeximg/xiaolaohu.png" alt=""></div>
        </div>
        <div class="xiaoyuanquan">
            <div><img  src="../../../images/indeximg/电话.png" alt=""></div>
            <div><img  src="../../../images/indeximg/信息.png" alt=""></div>
        </div>

        <div class="dibu" style="background:#333333;color:#fff;">
            <div class="sb" style="border-bottom:1px solid #5E5E5E;">
                <div class="rukou">
                        <div>老师入口</div>
                        <div>隐私保护</div>
                        <div>用户协议</div>
                        <div>联系我们</div>
                </div>

                <div>
                    <div class="r1 sb"><div ><img  src="../../../images/indeximg/电话 (1)备份.png" alt=""></div> <div>400-680-0101</div></div>
                    <div class="r2">周一到周日 9：00-22：00</div>
                    <div class="r3">立即咨询在线客服</div>
                </div>
            </div>
            <div class="dibutext">
                <div>Copyright &#169 2019 youda.com.cn All rights reserved.</div>
                <div>经营许可：沪ICP备16020300号</div>
                <div> 版权所有 (2016-2019) 翻印必究</div>
                <div>本网站隶属 上海相叶教育科技有限公司</div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scope>
    .sb{
        display: flex;
        justify-content: space-between;
    }
    .dibu{
        padding: .6rem .4rem .6rem .4rem;
    }
    .rukou{
        font-size: .34rem;
        color: #C0C0C0;
        div{
            margin-bottom: .44rem;
        }
    }
    .r1{
        font-size: .48rem;
  
        img{
            height: .42rem;
            width: .39rem;
            display: block;
            margin-top: .1rem;
            
        }
    }
    .r2{
        font-size: .26rem;
        text-align: right;
        margin-top: .4rem;
    }
    .r3{
        width: 4rem;
        height: 1rem;
        background: #EF3434;
        line-height: 1rem;
        border-radius: 1rem;
        font-size: .34rem;
        text-align: center;
        margin-top: .8rem;
    }
    .dibutext{
        color: #C0C0C0;
        font-size: .24rem;
        text-align: center;
        margin-top: .4rem;
        div{
            padding-bottom:.15rem;
        }
    }
    .xiaoyuanquan{
        position: fixed;
        right: .2rem;
        bottom: 1.2rem;
        div{
            width: 1.18rem;
            height: 1.18rem;
            background: #fff;
            border-radius: 100%;
            margin-bottom: 0.4rem;
      
            img{
                height: .5rem;
                width: .5rem;
                margin-left: .33rem;
                margin-bottom: .22rem;

            }
        }
    }
    .baobei{
        width: 100%;
        height: 1.36rem;
        background: #fff;
        position: fixed;
        bottom: 0;

        box-sizing: border-box;
    }
    .ohuo{
        font-size: .34rem;
        margin-top: .2rem;
        margin-left: 2rem;

    }
    .baming{
        font-size:.26rem;
        color: #fff;
        background: #EF3434;
        width: 1.78rem;
        height: .7rem;
        line-height: .7rem;
        text-align: center;
        border-radius: .7rem;
        margin: auto 0;
        margin-right: .32rem;
    }
    .xiaoloahu{
        position: absolute;
        left: .2rem;
        bottom: 0;
        height: 1.92rem;
        width: 1.6rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>

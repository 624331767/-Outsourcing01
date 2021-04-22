<template>
  <div class="arror">
    <div class="band left">
      <div class="dot" />
    </div>
    <div class="band right">
      <div class="dot" />
    </div>
    <div class="panel">
      <img class="title-img" :src="titleImg" />
      <img
        class="firewok left-firework animate__animated animate__infinite animate__fadeIn"
        :src="fireworkImg"
      />
      <img
        class="firewok right-firework animate__animated animate__infinite animate__fadeIn"
        :src="fireworkImg"
      />

      <div class="left">
        <img class="bg-img" :src="honorBgImg" />
        <img class="avatar" :src="student.avatar" />
        <img class="front-img" :src="honorFrontImg" />
        <span class="date">{{ student.date }}</span>
      </div>
      <div class="right">
        <div class="header">
          <img class="star-img" :src="starImg" />
          <span class="name">{{ student.name }}</span>
          <span class="class">{{ student.klass }}</span>
          <img class="star-img" :src="starImg" />
        </div>
        <div class="info">{{ student.info }}</div>
        <div class="award">
          <img class="award-bg" :src="awardBgImg" />
          <span>{{ student.award }}</span>
        </div>
      </div>
    </div>

    <div class="footer">
      <span class="name">{{ footer.name }}</span>
      <div class="right">
        <img class="qrcode" :src="footer.qrcode" />
        <span class="motto">{{ footer.motto }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
   data () {
    return {
      titleImg: require('@/assets/honor_ranking.png'),
      fireworkImg: require('@/assets/honor_Fireworks_colorful.png'),
      honorBgImg: require('@/assets/honor_image_vice.png'),
      honorFrontImg: require('@/assets/honor_image.png'),
      awardBgImg: require('@/assets/comment_option.png'),
      starImg: require('@/assets/honor_name.png'),
      student: {
        avatar: require('@/assets/1.jpg'),
        date: '2021-03-10',
        name: '张小六',
        klass: '一年级4班',
        info: '这位同学在【佛山市第三届红领巾文化节】交流活动优秀原创稿中荣获',
        award: '三等奖'
      },
      footer: {
        name: '桌成实验小学',
        qrcode: require('@/assets/1.jpg'),
        motto: '悦评越好·让成长更可见'
      },
      
    }
  },
  created () {
    this.postOP()
  },
 
  mounted () {
    console.log(this.arrorData)
  },
  beforeDestroy () {
  },
  methods: {
    async postOP(){
       const rs = await this.$http.post(
        `/openschool/schoolscreennew/queryScreenThemeList?schoolCode=${"98BD49108033A204"}`
      );
      
      let ar = rs.data.data;
      let arror = ar.filter(item=>item.screenSourceType.typeId === 801)[0]
      console.log(arror);
      this.student.date = arror.modifyTime
      this.student.name = arror.themeTitle.split(' ')[0]
      this.student.klass = arror.themeTitle.split(' ')[1]
      this.student.info = arror.remark
    }
  }
}
</script>

<style lang="less" scoped>
.arror {
  height: 100%;
  background-color: rgb(75, 170, 205);
  overflow: hidden;
  position: relative;
  .band {
    position: absolute;
    top: 0;
    width: 18px;
    height: 35px;
    background-color: rgb(248, 204, 83);
    display: flex;
    align-items: center;
    justify-content: center;
    &.left {
      left: 39%;
    }
    &.right {
      right: 39%;
    }
    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: rgb(203, 119, 49);
    }
  }
  .panel {
    width: calc(100% - 70px);
    height: calc(100% - 110px);
    margin: 35px auto 20px;
    border-radius: 40px;
    padding: 35px 15px;
    box-sizing: border-box;
    background-color: rgb(84, 186, 218);
    box-shadow: inset 0 0 10px 10px rgb(103, 210, 228);
    display: flex;
    position: relative;
    .title-img {
      width: 30%;
      position: absolute;
      left: 35%;
      top: 0;
    }
    .firewok {
      position: absolute;
      width: 5vw;
      height: 5vw;
    }
    .left-firework {
      left: 4vw;
      top: 5vw;
    }
    .right-firework {
      right: 5vw;
      top: 2vw;
      width: 8vw;
      height: 8vw;
    }
    .left {
      flex: 4;
      position: relative;
      img {
        width: 30vw;
        position: absolute;
        bottom: 8vw;
        left: 0;
      }
      .avatar {
        width: 13vw;
        height: 13vw;
        border-radius: 5vw;
        left: 9vw;
        bottom: 18vw;
      }
      .front-img {
        width: 15vw;
        left: 7.5vw;
        bottom: 16vw;
      }
      .date {
        position: absolute;
        font-size: 28px;
        color: yellow;
        font-weight: 600;
        left: 7vw;
        width: 11vw;
        bottom: 4.5vw;
        text-align: center;
      }
    }
    .right {
      flex: 6;
      position: relative;
      color: white;
      font-size: 40px;
      font-weight: 500;
      padding: 10vw 0;
      .header {
        text-align: center;
      }
      .star-img {
        width: 2vw;
        margin: 0 2vw;
      }
      .name {
        font-size: 50px;
        margin-right: 40px;
      }
      .info {
        width: 50vw;
        text-align: center;
        margin: auto;
        line-height: 2;
      }
      .award {
        width: 40vw;
        margin: auto;
        display: block;
        text-align: center;
        position: relative;
        img {
          width: 100%;
        }
        span {
          position: absolute;
          font-size: 50px;
          color: rgb(236, 84, 40);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -55%);
        }
      }
    }
  }
  .footer {
    width: calc(100% - 70px);
    margin: 0 35px;
    font-size: 30px;
    color: white;
    font-weight: 600;
    margin-top: -3px;
    .right {
      float: right;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: -9px;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 20px;
      }
    }
  }
}
</style>

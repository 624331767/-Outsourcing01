// 年级对比 周
<template>
  <div class="classes">
    <div class="panel">
      <img class="title-img" :src="titleImg" />
      <img
        class="space-ship animate__animated animate__infinite animate__shakeY"
        :src="spaceShipImg"
      />

      <div class="bottom">
        <div class="folder">
          <img class="folder-img" :src="folderImg" />
          <span>{{ title }}</span>
        </div>
        <div class="rank no1">
          <img class="mark-img" :src="mark1Img" />
          <img class="rank-img" :src="no1Img" />
          <div class="mark">{{ no1.mark }}分</div>
          <div class="class">{{ no1.class }}</div>
          <div class="head-teacher">班主任：{{ no1.headTeacher }}</div>
        </div>
        <div class="rank no2">
          <img class="mark-img" :src="mark2Img" />
          <img class="rank-img" :src="no2Img" />
          <div class="mark">{{ no2.mark }}分</div>
          <div class="class">{{ no2.class }}</div>
          <div class="head-teacher">班主任：{{ no2.headTeacher }}</div>
        </div>
        <div class="rank no3">
          <img class="mark-img" :src="mark3Img" />
          <img class="rank-img" :src="no3Img" />
          <div class="mark">{{ no3.mark }}分</div>
          <div class="class">{{ no3.class }}</div>
          <div class="head-teacher">班主任：{{ no3.headTeacher }}</div>
        </div>

        <div class="rankings">
          <el-carousel height="50vh">
            <el-carousel-item
              v-for="i in Math.ceil(rankings.length / 6)"
              :key="i"
            >
              <div
                v-for="(ranking, index) in rankings.slice((i - 1) * 6, i * 6)"
                :key="index"
                class="ranking"
              >
                <span>第{{ ranking.no }}名.</span>
                <span>{{ ranking.class }}</span>
                <span>{{ ranking.mark }}分</span>
              </div>
            </el-carousel-item>
          </el-carousel>
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
  data() {
    return {
      titleImg: require("@/assets/culture_title.png"),
      spaceShipImg: require("@/assets/culture_vicepic.png"),
      folderImg: require("@/assets/culture_month.png"),
      no1Img: require("@/assets/culture_rank_first.png"),
      no2Img: require("@/assets/culture_rank_second.png"),
      no3Img: require("@/assets/culture_rank_third.png"),
      mark1Img: require("@/assets/culture_grade_first.png"),
      mark2Img: require("@/assets/culture_grade_second.png"),
      mark3Img: require("@/assets/culture_grade_third.png"),
      title: "三年级 第七周",
      no1: {
        mark: 101,
        class: "101班",
        headTeacher: "陈大文"
      },
      no2: {
        mark: 106,
        class: "102班",
        headTeacher: "陈大文"
      },
      no3: {
        mark: 105,
        class: "103班",
        headTeacher: "陈大文"
      },
      rankings: [
        { no: 4, class: "104班", mark: 96 },
        { no: 4, class: "104班", mark: 96 },
        { no: 4, class: "104班", mark: 96 },
        { no: 4, class: "104班", mark: 96 },
        { no: 4, class: "104班", mark: 96 },
        { no: 4, class: "104班", mark: 96 },
        { no: 4, class: "105班", mark: 96 },
        { no: 4, class: "105班", mark: 96 },
        { no: 4, class: "105班", mark: 96 },
        { no: 4, class: "105班", mark: 96 },
        { no: 4, class: "105班", mark: 96 }
      ],
      footer: {
        name: "桌成实验小学",
        qrcode: require("@/assets/1.jpg"),
        motto: "悦评越好·让成长更可见"
      },
      id: [],
      ids: [],
      cheList: []
    };
  },
  created() {
    this.postOP();
    this.poosTOP();
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    async postOP() {
      const rs = await this.$http.post(
        `/openschool/schoolscreennew/queryScreenThemeList?schoolCode=${"98BD49108033A204"}`
      );

      let ar = rs.data.data;

      console.log(ar, "araaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

      let arror = ar.filter(item => item.screenSourceType.typeId === 211)[0];

      this.id = arror.id;
      console.log(this.id, "id===");
    },
    async poosTOP() {
      const rty = await this.$http.post(
        `/openschool/schoolscreennew/themeLoopDetail?schoolCode=${"98BD49108033A204"}&themeId=${165}`
      );
      console.log(rty, "rttttttttt");
      if (rty.data.code == 0) {
        this.cheList = rty.data.data;
        // console.log(rty.data.data, "班级评比内容");
      } else {
        return;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.classes {
  height: 100%;
  background-color: rgb(75, 170, 205);
  overflow: hidden;
  position: relative;
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
    .space-ship {
      position: absolute;
      right: -1vw;
      top: 0vw;
      width: 12vw;
      height: auto;
    }
    .bottom {
      height: 50vh;
      position: absolute;
      left: -2vw;
      bottom: 10vh;
      width: 100%;
      .folder {
        width: 4vw;
        height: 100%;
        color: orangered;
        display: inline-block;
        vertical-align: top;
        position: relative;
        top: -1vh;
        margin-right: 3vw;
        img {
          height: 110%;
        }
        font-size: 2.5vw;
        font-weight: 600;
        span {
          position: absolute;
          top: 4vw;
          left: 45%;
        }
      }
      .rank {
        width: 20vw;
        height: 100%;
        border-radius: 2vw;
        display: inline-block;
        margin: 0 0.8vw;
        font-size: 2vw;
        color: white;
        position: relative;
        .mark-img {
          width: 90%;
          position: absolute;
          left: 7%;
          top: 10%;
          z-index: 0;
        }
        .rank-img {
          position: relative;
          height: 36%;
          margin-left: 1vw;
        }
        .mark {
          font-weight: 600;
          color: yellow;
          font-size: 3.5vw;
          position: absolute;
          right: 2vw;
          top: 12%;
        }
        .class {
          text-align: center;
          font-size: 3.3vw;
          font-weight: 600;
          margin-top: 3vw;
        }
        .head-teacher {
          position: absolute;
          bottom: 2vw;
          left: 50%;
          width: 100%;
          font-weight: 500;
          transform: translateX(-50%);
          text-align: center;
        }
      }
      .no1 {
        background-color: rgb(102, 110, 236);
      }
      .no2 {
        background-color: rgb(236, 111, 89);
      }
      .no3 {
        background-color: rgb(235, 136, 57);
      }
      .rankings {
        width: 22.6vw;
        height: 100%;
        border-radius: 2vw;
        display: inline-block;
        vertical-align: top;
        margin-left: 0.8vw;
        font-size: 2vw;
        color: white;
        position: relative;
        background-color: rgba(255, 255, 255, 0.2);
        text-align: center;
        padding: 1vw 0.5vw;
        box-sizing: border-box;
        .ranking {
          display: flex;
          padding: 0.7vw 0;
          span {
            flex: 1;
          }
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

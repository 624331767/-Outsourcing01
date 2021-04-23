<template>
  <el-carousel
    arrow="never"
    height="100vh"
    :interval="1000"
    :initial-index="1"
    :autoplay="true"
  >
    <el-carousel-item>
      <div class="home">
        <div class="panel">
          <div class="left">
            <swiper
              ref="mySwiper"
              :options="swiperOptions"
              class="bg-img-container"
            >
              <swiper-slide v-for="(item, index) in getYlist" :key="index">
                <img :src="item.attachUrl" class="bg-img" />
              </swiper-slide>
              <!-- <div slot="button-prev"></div>
              <div slot="button-next"></div> -->
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="danmu-panel">
              <div
                v-for="(danmu, index) in danmuList"
                :key="index"
                class="danmu"
                :style="{
                  left: danmu.left + 'px',
                  top: danmu.top + 'px'
                }"
              >
                <!-- <span>{{ danmu.text }}</span> -->
                <span v-html="danmu.text" />
              </div>
            </div>
          </div>
          <div class="right">
            <div class="top">
              <div class="user">
                <img
                  class="shine-img animate__animated animate__infinite animate__fadeIn"
                  :src="shineImg"
                />
                <img class="user-bg-img" :src="userBgImg" />
                <img class="avatar" :src="this.imgst" />
                <div class="name">
                  <img class="name-bg-img" :src="nameBgImg" />
                  <span class="spantitle">{{ this.textname }}</span>
                </div>
              </div>
              <!-- <img class="earth-img" :src="earthImg" /> -->
              <div class="nav">
                <div class="class">
                  {{ this.className }}<br />
                  <!-- 一年级一班 -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <span class="name">{{ namePs.schoolName }}</span>
          <div class="right">
            <span class="motto">{{ footer.motto }}</span>
            <img class="qrcode" :src="footer.qrcode" />
          </div>
        </div>
        <div class="navename">
          <div class="imgse">
            <img src="../assets/23.png" class="img" />
            <div class="unamepass">{{ this.health }}</div>
          </div>

          <div
            class="buetton-nam"
            v-for="(item, index) in postName"
            :key="index"
          >
            <div class="content">{{ item.screenDesc }}</div>
            <div class="byr">
              <div class="line" />
              <span>—</span>
              <span v-for="(item, index) in postName" :key="index"
                >{{ item.teacherName }}老师</span
              >
            </div>
          </div>
        </div>
      </div>
    </el-carousel-item>

    <el-carousel-item>
      <arror></arror>
    </el-carousel-item>

    <el-carousel-item>
      <classes></classes>
    </el-carousel-item>

    <el-carousel-item>
      <posyt></posyt>
    </el-carousel-item>

    <el-carousel-item>
      <read></read>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import arror from "../views/arror";
import classes from "../views/classes";
import posyt from "../views/posyt";
import read from "../views/read";

export default {
  components: { arror, classes, posyt, read },
  name: "Home",
  data() {
    return {
      school: {},
      screenThemeList: [],
      imageList: [],
      arrorData: null, //第二屏的数据
      swiperOptions: {
        loop: true, // 循环模式选项
        autoplay: {
          // 自动切换
          delay: 10000, // 1秒切换一次
          waitForTransition: true
        },
        speed: 2000, // 切换速度
        effect: "coverflow"
      },
      bgImg: require("@/assets/1.jpg"),
      shineImg: require("@/assets/comment_image_launch.png"),
      userBgImg: require("@/assets/comment_image.png"),
      nameBgImg: require("@/assets/comment_name.png"),
      earthImg: require("@/assets/ys1.gif"),
      buttonImg: require("@/assets/comment_option.png"),
      heartImg: require("@/assets/comment_dynamic_heart.png"),

      student: {
        name: "司徒小六",
        image: require("@/assets/1.jpg")
      },
      klass: {
        name: "一年级1班",
        headTeacher: "李雯"
      },
      comment: {
        content:
          "坚持就是胜利，你在80咪长跑上不放弃的精神思考我们101班得全体同学学习榜样。",
        by: "陈大文老师"
      },
      buttonText: "积极参加运动会",
      footer: {
        name: "卓成实验小学",
        qrcode: require("@/assets/1.jpg"),
        motto: "悦评越好·让成长更可见"
      },
      danmuList: [],
      timer: null,
      getYlist: [
        {
          attachUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1785716284,4213703806&fm=26&gp=0.jpg" //测试图片
        }
      ],
      id: [],
      ids: [],
      postName: [],
      tApname: [],
      srr: [],
      tty: {},
      arr1: [],
      className: [], //年级班号
      textname: [], //名字
      health: [], //头部
      imgst: [], //头像
      namePs: {} //学校内容
    };
  },
  async created() {
    // await this.getSchoolInfo();
    // await this.queryScreenThemeList();
    // await this.getThemeLoopDetails();
  },
  mounted() {
    this.danmuList = [
      // '<img src="https://www.baidu.com/favicon.ico">真是太棒啦~',
      "真是太棒啦~",
      "加油呀~",
      "努力就有收获",
      "老师教育得好",
      "你的成长我们都能看见",
      "你是大家学习的好榜样"
    ].map((ele, index) => {
      return {
        text: ele,
        top: index * (30 + 15),
        left: 0
      };
    });
    this.timer = setInterval(this.updateDanmu, 50);

    this.postOp();
    // this.postOt();

    this.GETList();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    updateDanmu() {
      this.danmuList.forEach(danmu => {
        danmu.top = danmu.top - 2;
        if (danmu.top <= -30) {
          danmu.top = window.innerHeight * 0.6;
        }
      });
    },

    async postOp() {
      const rs = await this.$http.post(
        `/openschool/schoolscreennew/queryScreenThemeList?schoolCode=${"98BD49108033A204"}`
      );

      let ar = rs.data.data;
      ar.forEach((item, ar) => {
        this.id.push(item.id);
      });

      // 处理第一屏
      // 存储所有id
      ar.forEach(item => {
        this.ids.push(
          `/openschool/schoolscreennew/themeLoopDetail?schoolCode=${"98BD49108033A204"}&themeId=${
            item.id
          }`
        );
      });

      // 根据id并发请求所有数据信息
      Promise.all(
        this.ids.map(item => {
          return this.$http.post(item);
        })
      ).then(res => {
        // 选择一组有数据的放入首屏中(根据jsonData来筛选数据)
        let res_arr = res.filter(item => {
          let _data = item.data.data;
          let flag =
            _data &&
            Array.isArray(_data.items) &&
            _data.items.length &&
            _data.items[0].jsonData;
          return flag;
        });
        // 左侧轮播
        let _json = JSON.parse(res_arr[0].data.data.items[0].jsonData);

        console.log(_json, "json");
        this.className = _json.className;

        console.log(this.className, "this.className3333");
        this.getYlist = _json.attachList; //年级班数
        this.textname = _json.stuName; //学生名字
        this.health = _json.itemName; //身体素质
        this.imgst = _json.headTeacherPic; //头像
        // 右侧师生信息
        this.postName = res_arr[0].data.data.items;

        console.log(this.postName, "this.postName右侧师生信息");

        this.srr = res_arr[0].data.data.items;
        console.log(this.srr, "this.srr右侧师生信息");

        console.log(this.srr, "this.srr");
        console.log(this.postName, "this.postName");
      });

      console.log("大屏数据", ar);
      console.log("ids:", this.id);
    },

    async postOt() {
      const tp = await this.$http.post(
        `/openschool/schoolscreennew/themeLoopDetail?schoolCode=${"98BD49108033A204"}&themeId=${160}`
      );
      if (tp.data.code == 0) {
        this.postName = tp.data.data.items;

        this.srr = tp.data.data.items;
        this.jpg = tp.data.data;
        console.log(jpg, "jpg");

        this.srr.forEach((item, srr) => {
          this.tty = item.jsonData;
        });
      }
    },
    // 获取学校主页
    async GETList() {
      const hopupass = await this.$http.get(
        `/openschool/schoolscreennew/getSchoolInfo?schoolCode=${"98BD49108033A204"}`
      );
      if (hopupass.data.code == 0) {
        this.namePs = hopupass.data.data;
      }

      console.log(this.namePs, "学校主屏的内容");
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  background-color: rgb(75, 170, 205);
  overflow: hidden;
  .panel {
    width: calc(100% - 70px);
    height: calc(100% - 110px);
    margin: 35px auto 20px;
    border-radius: 40px;
    padding: 35px 15px;
    box-sizing: border-box;
    background-color: rgb(84, 186, 218);
    box-shadow: inset 0 0 5px 5px rgb(226, 242, 245);

    display: flex;
    align-items: center;
    justify-content: center;
    .left,
    .right {
      flex: 1;
      height: 100%;
      margin: 20px;
      .motto {
        padding-right: 5px;
      }
    }
    .left {
      position: relative;
      .bg-img-container {
        width: 40vw;
        height: 100%;
        border-radius: 40px;
        .bg-img {
          width: 100%;
          height: 100%;
        }
      }
      .danmu-panel {
        position: absolute;
        left: 50px;
        bottom: 20px;
        width: 40%;
        height: 30vh;
        overflow: hidden;
        color: white;
        z-index: 100;
        .danmu {
          position: absolute;
        }
        .danmu span {
          background-color: rgba(255, 255, 255, 0.3);
          height: 30px;
          line-height: 30px;
          border-radius: 15px;
          padding: 0 15px;
          font-weight: 500;
          font-size: 14px;
          margin: 7px 0;
          display: inline-block;
        }
      }
    }
    .right {
      position: relative;
      .top {
        padding-left: 10%;
        box-sizing: border-box;
        position: relative;
        .user {
          width: 45%;
          .shine-img {
            position: absolute;
            width: 25vw;
            left: 0.75vw;
            top: -4.5vw;
          }
          img {
            // width: 17.5vw;
            width: 10.5vw;
            z-index: 666;
          }
          .avatar {
            // width: 10vw;
            width: 7.8vw;
            // height: 10vw;
            height: 7vw;
            border-radius: 50%;
            position: absolute;
            // left: 8.1vw;
            // top: 1.2vw;
            left: 5.9vw;
            top: 1.9vw;
          }
          .name {
            position: relative;
            top: -5vh;
            left: -3vw;
            width: 14vw;
            margin: auto;
            text-align: center;
            font-size: 30px;
            img {
              width: 13vw;
              height: 8vh;
            }
            span {
              width: 100%;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -60%);
              font-weight: 600;
              color: rgb(146, 121, 44);
            }
          }
        }
        .earth-img {
          width: 15%;
          position: absolute;
          right: -3%;
          top: -5%;
          mix-blend-mode: soft-light;
        }
        .class {
          position: absolute;
          right: 15%;
          bottom: 35%;
          color: white;
          font-weight: 600;
        }
        position: relative;
      }
      .comment {
        color: white;
        font-weight: 600;
        .by {
          margin: 20px 0;
          text-align: right;
          font-size: 20px;
          .line {
            display: inline-block;
            width: 4vw;
            height: 4px;
            border-radius: 2px;
            margin-right: 20px;
            vertical-align: middle;
            background-color: white;
          }
        }
      }
      .button {
        width: 100%;
        position: absolute;
        bottom: -20px;
        left: 0;
        img {
          width: 98%;
          display: block;
          margin: auto;
        }
        .heart-img {
          width: 20px;
          position: absolute;
          right: 10%;
          top: -15px;
        }
        span {
          position: absolute;
          top: 50%;
          left: 50px;
          color: rgb(146, 121, 44);
          font-weight: 600;
          font-size: 30px;
          transform: translateY(-50%);
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

  .nav {
    position: absolute;
    width: 25%;
    height: 30%;
    top: 20%;
    right: 44%;

    font-size: 0.33333rem;
    background-color: red;
    border: solid #f4b52a 0.06667rem;
    border-radius: 0.25rem;
    border-left: none;
  }

  .content {
    font-size: 20px;
  }

  .navename {
    overflow: hidden;
    position: absolute;
    top: 32%;
    right: 17%;
    width: 35%;
    height: 45%;
    background-color: #ffdc49;
    border-radius: 0.5rem;
    border: solid #ffff7d 4px;
    box-sizing: border-box;

    .imgse {
      width: 90%;
      height: 30%;
      // background-color: #fff;
      transform: translate(6%, 20%);
      img {
        width: 100%;
        height: 100%;
      }
    }

    .unamepass {
      position: absolute;
      top: 25%;
      color: #8a6c0d;
      left: 30%;
      font-size: 30px;
      font-weight: 600;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
  }

  .buetton-nam {
    position: relative;
    padding: 0 5vh;

    margin-top: 5%;

    .content {
      flex: 1;
      font-size: 30px;
      color: #8a6c0d;
      font-weight: 600;
    }

    .byr {
      font-size: 30px;
      position: absolute;
      bottom: -40%;
      right: 5%;
      color: #8a6b0b;
      font-weight: 600;
    }
  }

  .name {
    z-index: 889;
  }

  .spantitle {
    color: #fff !important;
  }

  .qrcode {
    margin-left: 10px;
  }
}
</style>

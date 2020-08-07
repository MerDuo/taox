<template>
    <div class="find">
        <!-- 顶部导航 -->
        <van-sticky>
            <van-nav-bar ref="navbar" title="发现" />
        </van-sticky>
        <van-notice-bar
          left-icon="volume-o"
          text="禁止发布国家法律法规所禁止的其它内容，禁止发布一切危害公共利益和他人合法权益的内容。"
        />
        <!-- 选项卡 -->
        <van-tabs
            sticky
            animated
            swipeable
            color="FF5000"
            :offset-top="offsetTop"
            v-model="active"
            title-active-color="#FF5000"
            :swipe-threshold="6"
        >
            <van-tab title="全部">
                <panel-card v-for="item in 1" :key="item"></panel-card>
            </van-tab>
            <van-tab title="美妆"><empty></empty></van-tab>
            <van-tab title="食品"><empty></empty></van-tab>
            <van-tab title="运动"><empty></empty></van-tab>
            <van-tab title="户外"><empty></empty></van-tab>
            <van-tab title="母婴"><empty></empty></van-tab>
        </van-tabs>
        <!-- 底部导航 -->
        <menu-bar></menu-bar>
    </div>
</template>

<script>
import MenuBar from "../../components/MenuBar"
import PanelCard from "./base/PanelCard"
import Empty from "../../components/empty.vue"
export default {
    components: {
        MenuBar,
        PanelCard,
        Empty
    },
    data() {
        return {
            active: 0,
            offsetTop: null
        }
    },
    mounted() {
        this.offsetTop = this.$refs.navbar.offsetHeight
    },
    methods: {},
    created() {
      this.$store.commit('onChange', 2)
    }
}
</script>

<style lang="scss" scoped>
</style>

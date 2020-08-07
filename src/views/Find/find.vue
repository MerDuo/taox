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
            :offset-top="offsetTop"
            v-model="active"
            title-active-color="#ee0a24"
            :swipe-threshold="6"
        >
            <van-tab title="全部">
                <panel-card v-for="item in 3" :key="item"></panel-card>
            </van-tab>
            <van-tab title="美妆">美妆内容</van-tab>
            <van-tab title="新品">新品内容</van-tab>
            <van-tab title="晒单">晒单</van-tab>
            <van-tab title="晒单">晒单</van-tab>
            <van-tab title="晒单">晒单</van-tab>
        </van-tabs>
        <!-- 底部导航 -->
        <menu-bar></menu-bar>
    </div>
</template>

<script>
import MenuBar from "../../components/MenuBar"
import PanelCard from "./base/PanelCard"
export default {
    components: {
        MenuBar,
        PanelCard
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
    methods: {}
}
</script>

<style lang="scss" scoped>
</style>

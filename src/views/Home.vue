<template>
    <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
        <div 
            class="swiper-slide"
            v-for="banner in swiperData"
            :key="banner.id"
        >
            <img :src="banner.imageUrl" :alt="banner.title"/>
        </div>
        
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
</template>

<script>
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.min.css'

export default {
    data () {
        return {
            swiperData: []
        }
    },
    created () {
        console.log('home created')
        this.$http.getHome()
            .then(resp => {
                this.swiperData = resp.banners
                this.$nextTick(() => {
                    this.initSwiper()
                })
            })
    },
    methods: {
        initSwiper() {
            this.swiper = new Swiper(this.$refs.swiper, {
                loop: true,
                // 分页器
                pagination: {
                    el: '.swiper-pagination'
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.swiper-container {
    width: 100%;
    height: 0;
    padding-top: percentage(400 / 1080);

    .swiper-wrapper {
        position: absolute;
        left: 0;
        top: 0;
    }

    img {
        max-width: 100%;
    }
}  
</style>

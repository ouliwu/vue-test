<template>
    <ul class="sq-footer">
        <router-link
            v-for="nav in navs"
            :key="nav.name"
            :to="nav.path"
            tag="li"
            :event="$route.path.includes(nav.path) ? '' : 'click'"
        >
            <span class="icon" v-html="nav.meta.icon"></span>
            <span class="title">
                {{nav.meta.title}}
            </span>
        </router-link>
    </ul>
</template>

<script>
import routes from '@/router/routes'
export default {
    data () {
        return {
            navs: routes.filter(route => route.meta.isTabitem === true)
        }
    }
}
</script>

<style lang="scss" scoped>
    .sq-footer {
    height: 52px;
    border-top: 1px solid #dedede;
    display: flex;

    li {
        flex: 1;
        text-align: center;
        color: #787878;
        position: relative;

        span {
            display: block;

            &.icon {
            font-family: 'sqicon';
            font-size: 20px;
            height: 32px;
            line-height: 32px;
            }

            &.title {
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            }
        }

        &.router-link-exact-active,
        &.router-link-active {
            color: #2979ff;
        }
    }
        .badge {
        position: absolute;
        background-color: #f00;
        color: #fff;
        top: -9px;
        right: 0;
        padding: 2px 8px;
        height: 14px;
        line-height: 14px;
        border-radius: 9px;
        }
    }


</style>

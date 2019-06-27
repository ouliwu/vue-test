<template>
    <div class="sq-app-container">
        <div class="sq-app-footer">
            <router-view name='footer'></router-view>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
address,
em,
img,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
// HTML5 display-role reset for older browsers
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}
body {
    line-height: 1;
    font-size: 12px;
}
ol,
ul {
    list-style: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
html,
body {
    height: 100%;
    overflow: hidden;
}
.sq-app {
    &-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    &-main {
        flex: 1;
        overflow-x: hidden;
    }
}   

@font-face {
    font-family: 'sqicon';  /* project id 1169064 */
    src: url('//at.alicdn.com/t/font_1169064_c2nrugsecol.eot');
    src: url('//at.alicdn.com/t/font_1169064_c2nrugsecol.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1169064_c2nrugsecol.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1169064_c2nrugsecol.woff') format('woff'),
    url('//at.alicdn.com/t/font_1169064_c2nrugsecol.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1169064_c2nrugsecol.svg#iconfont') format('svg');
}
</style>

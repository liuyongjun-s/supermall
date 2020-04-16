<template>
    <div class="goods-item" @click="itemClick">
        <img @load="imgLoad" v-lazy="showImage" :key="showImage" alt="">
        <div class="goods-info">
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "GoodsListItem",
    props: {
        goodsItem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        showImage() {
            return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
        }
        },
        methods: {
            itemClick() {
                //1.获取iid
                const iid = this.goodsItem.iid;
                // 2.跳转到详情页面
                this.$router.push({path: '/detail', query: {iid}})
            },
            imgLoad() {
                this.$bus.$emit('imgLoad')
            }
        }
    }

</script>

<style scoped>

</style>
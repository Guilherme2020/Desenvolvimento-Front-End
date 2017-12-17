<template>
    <div class="gui-card"  v-bind:style="efeitoClick" v-on:click="clickEfeito()" v-on:mouseout="removeClickEfeito()">
        <div class="gui-card_media">
            <img class="gui-card__img" v-bind:src="imagem" alt="">
        </div>
        <div class="gui-card__details">
            <div class="gui-card__title">
                {{titulo}}
                
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props:['titulo','imagem'],
    data(){
        return{
            efeitoClick: null
        }
    },
    methods:{
        clickEfeito: function(){
            // console.log("Deu certo. clickEfeito()")
            this.efeitoClick = 'transform: scale(1.9); margin-right:110px;';
        },
        removeClickEfeito: function(){
            // console.log("Remove Click Efeito(): ")  
            this.efeitoClick = null;
        }
    }
}
</script>

<style lang="scss">

</style>

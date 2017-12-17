<template>
    <div class="slider">
      <!-- <h3>{{titulo}}</h3> -->
      <!-- <my-tes titulo="Categoria">
        </my-tes> -->
      <h1>{{titulo}}</h1>  
      <span  v-on:mouseover="scrollEsquerda()" v-on:mouseout="clearScroll()" class="handle handlePrev active">
        <i class="fa fa-caret-left" aria-hidden="true"></i>
      </span>

      <div ref="scroller" class="row">
          <div class="row__inner">
            <Filme titulo="Ação" imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></Filme>
            <Filme titulo="Ação" imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></Filme>
            <Filme titulo="Ação" imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></Filme>
            <Filme titulo="Ação" imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></Filme>
            <Filme titulo="Ação" imagem="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></Filme>
            
          </div>
          
      </div> 

      <span v-on:mouseover="scrollDireita()" v-on:mouseout="clearScroll()" class="handle handleNext">
          <i class="fa fa-caret-right" arial-hidden="true"></i>
      </span>

    </div>
</template>

<script>
import Filme from './Filme.vue';
export default {
    props:['titulo'],
    components: {
        Filme
    },

    data () {
        return {
            nomeProjeto: 'NetFlix Com Vue',
            intervalo:null

        }
    },
    methods:{
      scrollDireita(){
        this.intervalo = setInterval(() =>{
          this.$refs.scroller.scrollLeft += 1 
        }, 5);
      },
      scrollEsquerda(){
         this.intervalo = setInterval(() => {
            this.$refs.scroller.scrollLeft -= 1
         },5 ); 
      },
      clearScroll(){
          clearInterval(this.intervalo);
      }
    }

}
</script>

<style lang="scss">
     h1{
        color:red;
    }
</style>

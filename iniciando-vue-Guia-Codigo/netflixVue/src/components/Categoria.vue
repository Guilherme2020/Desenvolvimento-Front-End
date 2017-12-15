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
            <div class="gui-card">
              <div class="gui-card__media">
                <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
              </div>
              <div class="gui-card__details">
                <div class="gui-card__title">
                  Assassin’s Creed
                </div>
              </div>
            </div>
            <div class="gui-card">
              <div class="gui-card__media">
                <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
              </div>
              <div class="gui-card__details">
                <div class="gui-card__title">
                  Assassin’s Creed
                </div>
              </div>
            </div>
            <div class="gui-card">
              <div class="gui-card__media">
                <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
              </div>
              <div class="gui-card__details">
                <div class="gui-card__title">
                  Assassin’s Creed
                </div>
              </div>
            </div>
            <div class="gui-card">
              <div class="gui-card__media">
                <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
              </div>
              <div class="gui-card__details">
                <div class="gui-card__title">
                  Assassin’s Creed
                </div>
              </div>
            </div>
            <div class="gui-card">
              <div class="gui-card__media">
                <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
              </div>
              <div class="gui-card__details">
                <div class="gui-card__title">
                  Assassin’s Creed
                </div>
              </div>
            </div>
            <div class="gui-card">
              <div class="gui-card__media">
                <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
              </div>
              <div class="gui-card__details">
                <div class="gui-card__title">
                  Assassin’s Creed
                </div>
              </div>
            </div>
            <div class="gui-card">
              <div class="gui-card__media">
                <img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
              </div>
              <div class="gui-card__details">
                <div class="gui-card__title">
                  Assassin’s Creed
                </div>
              </div>
            </div>
          </div>
          
      </div> 

      <span v-on:mouseover="scrollDireita()" v-on:mouseout="clearScroll()" class="handle handleNext">
          <i class="fa fa-caret-right" arial-hidden="true"></i>
      </span>

    </div>
</template>

<script>

export default {
    props:['titulo'],
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

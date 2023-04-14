:<template>
    <div class="bg-dark jum">
            <div class="overflow-hidden cont-img">
                <img class="img-fluid" src="../assets/styles/loghi/jumbotron.jpg" alt="">
               
            </div>
            <div class="container position-relative px-3">
                 <button class="bg-primary text-white curr">Current Series</button>
                <div class="row row-cols-lg-6 mt-5 mb-2 px-5">
                    <CardComponents  v-for="(serie, index) in series" :key="index" :image="serie.thumb" :title="serie.series" />
                </div>
                <div class="text-center mb-4">
                    <button class="bg-primary text-white">Load more</button>
                </div>
                
            </div>
      
    </div>
</template>

<script>
import { comics } from '../data/data';
import CardComponents from './CardComponents.vue';

export default {
    name: "UnknownComponent",
    data() {
        return {
            series: [...comics],
        };
    },
    components: { 
        CardComponents,
     }
}
</script>

<style lang="scss" scoped>
   
  .cont-img {
    height: 320px;
   } 
    .curr {
        position: absolute;
        left : 10%;
        top: -12% ;
        padding: 10px 20px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 20px;
        border: none;
    }

    button {
        padding: 8px 50px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 10px;
        border: none;
    }
</style>
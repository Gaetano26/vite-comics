:<template>
   <main class="d-flex flex-column gap-0">
            <UnknownComponent />
            <div class="bg-primary">
                <div class="container py-4 ps-4">
                    <div class="row row-cols-12 row-cols-sm-2  row-cols-md-3 row-cols-lg-5">
                        <div class="col" v-for="(option, index) in options" :key="index">
                            <div class="d-flex align-items-center my-2">
                                <img :src="'public/images/' +option.image" alt="image">
                                <p class="pt-3 ps-3 text-white">{{ option.description }}</p>
                            </div>
                            
                        </div>
                    </div>
                   

                </div>

            </div>
          
   </main>
    
</template>

<script>

 import { info } from '../data/data.js';
 import UnknownComponent from './UnknownComponent.vue';
 
export default {
    name: 'MerchandiseComponent',
    components: {
        UnknownComponent,
    },
    data () {
        

        return {
            options: info,
        }
    }
}
</script>

<style lang="scss" scoped>
    img {
        width: 52px;
        height: 60px;
    }
    p {
        text-transform: uppercase;
    }

</style>
:<template>
   <main class="d-flex flex-column gap-0">
            <UnknownComponent />
            <div class="bg-primary">
                <div class="container d-flex justify-content-around px-5">
                    <div class="d-flex justify-content-center align-items-center py-4" v-for="(option, index) in options" :key="index">
                        <img :src="'public/images/' +option.image" alt="image">
                        <p class="pt-3 ps-3 text-white">{{ option.description }}</p>
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
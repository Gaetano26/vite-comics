:<template>
     <div class="py-4 sfondo overflow-hidden">
        <div class="container">
            <div class="row ps-5 position-relative">
                <div class="col">
                    <h2>{{ fooLinks[0].title}}</h2>
                    <ul class="list-unstyled">
                        <li v-for="link in fooLinks[0].links">{{ link.text }}</li>
                    </ul>
                    <h2>{{ fooLinks[1].title}}</h2>
                    <ul class="list-unstyled">
                        <li  v-for="link in fooLinks[1].links">{{ link.text }}</li>
                    </ul>
                </div>
                <div class="col">
                    <h2>{{ fooLinks[2].title}}</h2>
                    <ul class="list-unstyled">
                        <li  v-for="link in fooLinks[2].links">{{ link.text }}</li>
                    </ul>
                </div>
                <div class="col pr-3">
                    <h2>{{ fooLinks[3].title}}</h2>
                    <ul class="list-unstyled">
                        <li v-for="link in fooLinks[3].links">{{ link.text }}</li>
                    </ul>
                </div>
                <div class="col">
                    <img class="img-fluid logo" src="/images/dc-logo-bg.png" alt="">
                </div>
         </div>
        </div>
    </div>
</template>

<script>
import { footerLinks } from '../data/data';
export default {
    name: 'FooteTopComponent',

    data () {
        

        return {
            fooLinks: footerLinks,
        }
    }
}
</script>

<style lang="scss" scoped>
    .sfondo {
        background: url('/images/footer-bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    
    h2 {
        color: white;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 700;
        max-width: fit-content;
    }

    li {
      color: grey;
    }

    .col{
    max-width: 200px;
    }

    .logo{
        position: absolute;
        right: 0;
        top: -50%;
    }
    
</style>
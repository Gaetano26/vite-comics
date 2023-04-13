:<template>
  <div>
    <HeaderComponent />
    <MerchandiseComponent />
    <FooteTopComponent />
    <FooterComponent />


  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MerchandiseComponent from './components/MerchandiseComponent.vue';
import FooteTopComponent from './components/FooteTopComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MerchandiseComponent,
      FooteTopComponent,
      FooterComponent,

    }
  }
</script>

<style lang="scss" scoped>

</style>
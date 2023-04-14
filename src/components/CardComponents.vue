:<template>
    <div class="col">>
                <div class="text-center">
                    <img :src="image" :alt="title" class="img-fluid">
                </div>
                <div class=" mt-3 ps-4 text-white">
                    <p>{{ title }} </p>
                    
                </div>
          

    </div>
</template>

<script>

export default {
    name: 'CardComponents',
    props: ['image', 'title']
}
</script>

<style lang="scss" scoped>

img {
   min-width: 170px;
   min-height: 180px;
   max-width: 170px;
   max-height: 180px;
}

.card {
    background-color: transparent;
    border: none;
}
p {
    font-size: 13px;
}

</style>
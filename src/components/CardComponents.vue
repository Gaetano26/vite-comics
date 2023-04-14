:<template>
    <div class="col">>
                <div class=" cont-img text-center">
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
 .cont-img {
    width: 190px;
    height: 190px;
 } 
img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 100% 0%;
}

p {
    font-size: 13px;
}

</style>
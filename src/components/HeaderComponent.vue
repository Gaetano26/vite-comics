<template>
    <header>
        <div class="container">
            <div class="row">
                    <div class="col-lg-4">
                        <div class="py-3 ps-5">
                            <img class="img-fluid" src="../assets/styles/loghi/dc-logo.png" alt="dc-logo">
                        </div>
                        
                    </div>
                    
                    <div class="col-lg-8 ps-5">
                        <ul class="d-flex h-100 align-items-center gap-4 py-3">
                            <li class="ps-1" v-for="(link, index) in navbar" :key="index">
                                <a class="fw-bold" :href="link.url">{{ link.text }}</a>
                            </li>
                        </ul>
                    </div>
            </div>
                    
                
        </div>
        
       


    </header>
</template>

<script>
import { links } from '../data/data.js';
export default {
    name: 'HeaderComponent',
    data () {
         return {
           navbar: links,
        }
    }
}
</script>

<style lang="scss" scoped>
    img {
     width: 75px;
     height: 75px;
        
    }
    ul {
        li {
          list-style: none;  
          a {
            text-decoration: none;
            color: black;
           
          }
         
        }
    }
    a:hover {
        color: blue;
    }
</style>
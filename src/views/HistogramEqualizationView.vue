<template>
    <div>
    <nav class="navbar is-light">
      <div class="navbar-brand">
        <div class="navbar-item">
            <div class="title  is-4">Histogram Equalization</div>
        </div>
        <div class="navbar-item">
            <label class="file-label">
              <input ref="fileInput" class="file-input" type="file" name="image" @change="fileChange">
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                  Choose a file…
                </span>
              </span>
            </label>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item ">
            <div class="button is-info" @click="onUpload">Display result </div>
        </div>
      </div>
    </nav>

    <div v-if="this.selectedImage" class="title is-4 mt-5 has-text-centered">Input image</div>
    <div class="columns is-mobile is-multiline is-centered is-narrow">  
        <div class="column is-narrow">
            <figure class="image mb-6">
                <img v-bind:src= this.selectedImage>
            </figure>
        </div>
    </div>

    <div class="columns is-mobile is-multiline is-centered is-narrow">
        <div class="imageWrapper">    
            <div class="column is-half is-narrow">
                <figure class="image mb-6">
                    <div v-if="this.resultImages[0]" class="title is-4 has-text-centered">Equalized histogram</div>
                    <img v-bind:src= this.resultImages[0]>
                </figure>
            </div>
        </div>

        <div class="imageWrapper"> 
            <div class="column is-half is-narrow">
                <figure class="image mb-6">
                    <div v-if="this.resultImages[1]" class="title is-4 has-text-centered">Equalized image</div>
                    <img v-bind:src=this.resultImages[1]>
                </figure>
            </div>
        </div>
    </div>
</div>
</template>

<script> 
import axios from 'axios';

export default {
    data () {
        return {
            selectedImage: null,
            /////////////////////////////////////////////////////////
            ////////////////////////IMPORTANT////////////////////////
            ////////////////////////////////////////////////////////
            // the list below is where both the result images will be stored
            resultImages: [] // in the backend: at index 0 the histogram will be stored, and at index 1 the equalized image will be stored
        }
    },

    methods: {

        fileChange(e) {
        const file = e.target.files[0]
        this.selectedImage = URL.createObjectURL(file)
        },
        
        onUpload() {
            const image = this.selectedImage
            //axios.post(*function path from backend*, image) // passes the uploaded image to the histogram equalization function in the backend
            //.then(res => {
                this.resultImages = res.data // takes both histogram and equalized images from backend and stores them in a list where index 0 has histogram and index 1 has equalized image        
            //})
        }

    }
}

</script>

<style>

.image {
    padding-top: 10px;
    width: 600px;
    height: auto;
}

.imageWrapper {
    background-size: cover;
    margin: 0 auto 40%;
}
</style>
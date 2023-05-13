<template>
    <div>
    <nav class="navbar is-light">
      <div class="navbar-brand">
        <div class="navbar-item">
            <div class="title  is-4">Add salt & pepper noise</div>
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
        <div class="navbar-item">     
            <div class="control">
                <div class="h3 is-6">Noise percentage</div>
                <input type="text" class="input" v-model="noisePercentage">
            </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item ">
            <div class="button is-info" @click="onUpload">Display result</div>
        </div>
      </div>
    </nav>

    <div class="columns is-mobile is-multiline is-centered">
        <div class="imageWrapper">    
            <div class="column is-half">
                <figure class="image mb-6">
                    <div v-if="this.selectedImage" class="title is-4 mt-5 has-text-centered">Input image</div>
                    <img v-bind:src= this.selectedImage>
                </figure>
            </div>
        </div>

        <div class="imageWrapper"> 
            <div class="column is-half">
                <figure class="image mb-6">
                    <div v-if="this.resultImage" class="title is-4 mt-5 has-text-centered">Output image</div>
                    <img v-bind:src=this.resultImage>
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
            noisePercentage: null,
            resultImage: null
        }
    },

    methods: {
        fileChange(e) {
        const file = e.target.files[0]
        this.selectedImage = URL.createObjectURL(file)
        },
    
        onUpload() {
            const data = {
                   image: this.selectedImage,
                   noisePercentage: this.noisePercentage
            }
            //axios.post(*function path from backend*, data) // passes the uploaded image and noise percentage to the add salt and pepper function in the backend
            .then(res => {
                this.resultImage = res.data // takes result image from backend and stores it in a variable
            })
        }

    }
}

</script>

<style>

.image {
    width: 600px;
    height: auto;
}

.imageWrapper {
    background-size: cover;
    margin: 0 auto 40%;
}
</style>
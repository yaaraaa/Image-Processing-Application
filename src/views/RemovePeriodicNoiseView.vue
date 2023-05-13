<template>
    <div>
    <nav class="navbar is-light">
      <div class="navbar-brand">
        <div class="navbar-item">
            <div class="title  is-4">Remove periodic noise</div>
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
                <div class="h3 is-6">Method</div>
                <div class="select">
                    <select v-model="method">
                        <option value="notch">Notch/Band reject</option>
                        <option value="mask">Mask</option>
                    </select>
                </div>
            </div>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item ">
            <div class="button is-info" @click="onUpload">Display result </div>
        </div>
      </div>
    </nav>

    <div v-if="this.selectedImage" class="title is-4 is-centered mt-5 has-text-centered">Input image</div>
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
                    <div v-if="this.frequencyDomainImage" class="title  is-4">Frequency domain image</div>
                    <!-- TODO: USER SELECTS TWO PIXELS FROM IMAGE IF MASK IS CHOSEN -->
                    <img v-bind:src= this.frequencyDomainImage>
                </figure>
            </div>
        </div>

        <div class="imageWrapper"> 
            <div class="column is-half is-narrow">
                <figure class="image mb-6">
                    <div v-if="this.resultImage" class="title  is-4">Denoised image</div>
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
            method: "notch",
            frequencyDomainImage: null,
            resultImage: null
        }
    },

    methods: {

        fileChange(e) {
        const file = e.target.files[0]
        this.selectedImage = URL.createObjectURL(file)
        },
        
        onUpload() {
            const image = this.selectedImage
            if (this.method === "notch") {
                //axios.post(*function path from backend*, image) // passes the uploaded image to the notch noise removal function in the backend
                //.then(res => {
                    this.resultImage = res.data // takes result image from backend and stores it in a variable
                //})
            }
            else if(this.method === "mask") {
                //axios.post(*function path from backend*, image) // passes the uploaded image to the mask noise removal function in the backend
                //.then(res => {
                    this.resultImage = res.data // takes result image from backend and stores it in a variable
                //})
            }
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
    padding-top: 50px;
    background-size: cover;
    margin: 0 auto 40%;
}
</style>
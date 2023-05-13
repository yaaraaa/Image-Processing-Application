<template>
    <div>
    <nav class="navbar is-light">
      <div class="navbar-brand">
        <div class="navbar-item">
            <div class="title  is-4">Add Periodic Noise</div>
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
                <div class="h3 is-6">Amplitude (LUX)</div>
                <input type="text" class="input" v-model="amplitude">
            </div>
        </div>

        <div class="navbar-item">     
            <div class="control">
                <div class="h3 is-6">Frequency (HZ)</div>
                <input type="text" class="input" v-model="frequency">
            </div>
        </div>

      </div>
      <div class="navbar-end">
        <div class="navbar-item ">
            <div class="button is-info" @click="onUpload">Display result</div>
        </div>
      </div>
    </nav>

    <div class="columns is-mobile is-multiline is-centered is-narrow">
        <div class="imageWrapper">    
            <div class="column is-half is-narrow">
                <figure class="image mb-6">
                    <div v-if="this.selectedImage" class="title  is-4">Input image</div>
                    <img v-bind:src= this.selectedImage>
                </figure>
            </div>
        </div>

        <div class="imageWrapper"> 
            <div class="column is-half is-narrow">
                <figure class="image mb-6">
                    <div v-if="this.resultImage" class="title  is-4">Output image</div>
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
            amplitude: null,
            frequency: null,
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
                amplitude: this.amplitude,
                frequency: this.frequency
            }

            //axios.post(*function path from backend*, data) // passes the uploaded image, amplitude, and frequency to the add periodic noise function in the backend
            //.then(res => {
                this.resultImage = res.data
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
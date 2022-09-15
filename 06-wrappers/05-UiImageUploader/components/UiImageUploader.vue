<template>
  <div class="image-uploader">
    <label 
      class="image-uploader__preview" 
      :class="{ 'image-uploader__preview-loading': loading }"  
      :style="image && `--bg-url: url('${image}')`"
    >
      <span class="image-uploader__text">{{ uploaderText }}</span>
      <input 
        v-bind="$attrs"
        ref="file"
        type="file" 
        accept="image/*" 
        :disabled="loading"
        class="image-uploader__input"
        @change="selectFile"
        @click="removeFile" 
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'UiImageUploader',
  inheritAttrs: false,
  props: {
    preview: {
      type: String,
      default: null
    },
    uploader: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      loading: false,
      image: null
    }
  },
  emits: ['remove', 'upload', 'error', 'select'],
  created() {
    if (this.preview) {
      this.image = this.preview
    }
  },
  computed: {
    uploaderText() {
      if (this.image && !this.loading) {
        return 'Удалить изображение'
      } 

      if (this.loading) {
        return 'Загрузка...'
      }
      
      return 'Загрузить изображение'
    }
  },
  methods: {
    selectFile(event) {
      const file = event.target.files[0]
      if (file) {
        this.image = URL.createObjectURL(file)
        if (this.uploader) {
          this.loading = true
          this.uploader(file).then(
            res => {
              this.$emit('upload', res)
              this.loading = false
            },
            err => {
              this.$emit('error', err)
              this.removeFile()
              this.loading = false
            })
        } else {
          this.$emit('select', file)
        }
      }
    },
    removeFile() {
      this.$refs.file.value = null
      this.$emit('remove')
      this.image = null
    }
  }
};
</script>

<style scoped>
.image-uploader {
}

.image-uploader__input {
  opacity: 0;
  height: 0;
}

.image-uploader__preview {
  --bg-url: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--bg-url);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  transition: 0.2s border-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 512px;
  height: 228px;
}

.image-uploader__text {
  color: var(--white);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>

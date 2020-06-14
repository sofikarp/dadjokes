<template>
  <div class="joke">
    <div class="joke__body">
      <img class="joke__user" v-bind:src="`assets/img/${user}.png`" />
      <p class="joke__text">{{text}}</p>
    </div>
    <div class="joke__likes">
      <button id="btn-up" class="btn-like btn-like--up" v-on:click="upLikes++"></button>
      <span id="likes-up" class="likes-count likes-count--up">{{likes}}</span>
      <button id="btn-down" class="btn-like btn-like--down" v-on:click="downLikes++"></button>
      <span id="likes-down" class="likes-count likes-count--down">{{dislikes}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "joke",
  props: ["user", "text", "likes", "dislikes"]
};
</script>
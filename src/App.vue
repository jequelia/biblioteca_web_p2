<template>
  <div id="app">
    <div class="banner">
      <b-navbar type="dark" variant="info">
        <b-nav-form id="form">
          <h5>CadastreLivroS</h5>
          <!-- <router-link to="editora">Navigate to Page2</router-link> -->
        </b-nav-form>
      </b-navbar>
    </div>
    <h3>Loja de Livros</h3>
    <p id="buttom">Aproveite para ver nossos livros ou cadastrar outro</p>
    <biblioteca />
  </div>
</template>

<script>
import biblioteca from "./components/biblioteca.vue";

export default {
  name: "App",
  components: {
    biblioteca
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.banner {
  width: 100vw;
  height: 13vh;
  color: white;
  background-repeat: space;
  background-repeat: round;
  opacity: 0.7;
}
#buttom {
  margin-bottom: 5%;
}

#form{
  width: 10vw;
  margin-top: 1%;
}
</style>
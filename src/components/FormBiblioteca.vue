<template>
  <div class="form">
    <div>
      <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Cadastrar um livro</b-button>

      <b-modal id="bv-modal-example" hide-footer>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Titulo do livro"
            label-for="input-1"
            description="digite o nome do livro"
          >
            <b-form-input
              id="input-1"
              v-model="form.titulo"
              type="text"
              required
              placeholder="titulo"
            ></b-form-input>
          </b-form-group>

          <h6>Escolha uma editora</h6>
          <!-- seleciona editora -->
          <b-form-select
            class="select1"
            v-model="form.selected"
            required
            :options="options"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-select>

          <b-form-group id="input-group-3" label="Quantidade de paginas" label-for="input-3">
            <b-form-input id="input-3" type="number" v-model="form.quantidadePaginas" required></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">cadastrar</b-button>
        </b-form>
      </b-modal>
    </div>
  </div>
</template>



<script>
import axios from "axios";
export default {
  name: "FormBiblioteca",
  data() {
    return {
      form: {
        titulo: "",
        selected: "",
        quantidadePaginas: ""
      },
      show: true,
      selected: null,
      options: []
    };
  },

  methods: {
    //get do select de editoras
    get() {
      axios.get("http://localhost:8081/editoras").then(res => {
        this.options = res.data;
      });
    },
    //criação de um livro com editora
    onSubmit(evt) {
      evt.preventDefault();
      axios
        .post("http://localhost:8081/livros", this.form)
        .then(res => this.$emit("emit-comment", res));
    },

    onReset(evt) {
      evt.preventDefault();
      this.form.titulo = "";
      this.form.selected = "";
      this.form.quantidadePaginas = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style>
.form {
  width: 15vw;
  box-shadow: darkslategrey;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4%;
}
form {
  width: 24vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.select1 {
    margin-bottom: 1rem !important;
    width: 10vw !important;
}

h6{
      margin-left: -10%;
}
</style>
<template>
  <div class="form">
    <div>
      <b-button id="show-btn" @click="$bvModal.show('editoras')">Ver editoras</b-button>

      <b-modal size="lg" id="editoras" hide-footer>
        <b-form   id="cadastro" @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-2"
            description="digite a editora "
            label="Editora"
            label-for="input-2"
          >
            <b-form-input id="input-2" v-model="form.editora" required placeholder="Editora"></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">cadastrar</b-button>
        </b-form>

        <b-table :items="items" :fields="fields" striped responsive="sm"></b-table>
      </b-modal>
    </div>
  </div>
</template>



<script>
import axios from "axios";
export default {
  name: "Editora",
  data() {
    return {
      fields: ["editora"],
      items: [],
      form: {
        editora: ""
      },
      show: true
    };
  },
  methods: {
    //get para listar editoras
    get() {
      axios.get("http://localhost:8081/editoras").then(res => {
        this.items = res.data;
      });
    },

    //cadastrar editora apenas com o nome
    onSubmit(evt) {
      evt.preventDefault();
      axios
        .post("http://localhost:8081/livros", this.form)
        .then(res => this.$emit("emit-comment", res));
    },

    onReset(evt) {
      evt.preventDefault();
      this.form.editora = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  mounted() {
    this.get();
  }
};
</script>

<style>
.search {
  display: flex;
  width: 69vw;
  height: 19vh;
  align-items: center;
}
.flex {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.table {
  width: 37vw !important;
}

#cadastro{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
}
</style>
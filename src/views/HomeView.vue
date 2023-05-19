<script>
export default {
  name: 'HomeView',
  mounted() {
    // this.$store.dispatch('initMock')
  },
  methods: {
    _goStep(step) {
      this.$store.commit('setStep', step)
    },
    _clearAll() {
      this.$store.commit('clearAll')
    }
  }
}
</script>

<template>
  <main>
    <div class="jumbotron">
      <h1>Questionnaire</h1>
      <div class="quote">Calculez votre pourcentage de CHAD</div>
    </div>

    <div class="alerte" v-if="$store.state.message.length">
      <div class="alerte__title">Alerte</div>
      <div class="alerte__content" v-for="msg in $store.state.message" :key="msg">{{ msg }}</div>
    </div>

    <div class="loading" v-if="$store.state.loading">
      <!-- faire un loading en css -->
      <div class="loading__spinner"></div>
    </div>

    <!-- Premierement on demande à l'utilisateur de donnée ses infos firstname lastname -->
    <form class="form" v-else-if="$store.state.step === 0">
      <div class="group-label">
        <label for="firstname">Votre Prénom</label>
        <div class="group-input">
          <input type="text" id="firstname" v-model="$store.state.input.firstname" placeholder="Jean" />
        </div>
      </div>
      <div class="group-label">
        <label for="lastname">Votre Nom</label>
        <div class="group-input">
          <input type="text" id="lastname" v-model="$store.state.input.lastname" placeholder="Dupont" />
        </div>
      </div>
      <button type="button" @click="$store.dispatch('fetchQuestion')">Suivant</button>
    </form>

    <!-- Ensuite on affiche les questions -->
    <form class="form" v-else-if="$store.state.step === 1">
      <div class="group-label" v-for="input in $store.state.form.inputs" :key="input.id">
        <label>{{ input.question.title }}</label>
        <!-- proposer oui ou non -->
        <div class="group-input">
          <div class="input__radio">
            <input type="radio" :id="input.id" :name="input.id" :value="true" v-model="input.valueUser" />
            <label :for="input.id">Oui</label>
          </div>
          <div class="input__radio">
            <input type="radio" :id="input.id" :name="input.id" :value="false" v-model="input.valueUser" />
            <label :for="input.id">Non</label>
          </div>
        </div>
      </div>
      <div class="group-btn">
        <button type="button" @click="_goStep(0)">Précédent</button>
        <button type="button" @click="$store.dispatch('postQuestions')">Suivant</button>
      </div>
    </form>

    <!-- Enfin on affiche les résultats -->
    <div class="result" v-else>
      {{ $store.state.result }}
      <button type="button" @click="_clearAll()">Refaire un formulaire</button>
    </div>
  </main>
</template>

<style scoped>
.jumbotron {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  background-color: #3a3a3a;
  padding: 1rem;
}
.jumbotron h1 {
  color: #fff;
  font-size: 2rem;
}
.jumbotron .quote {
  color: #fff;
  font-size: 1rem;
  border-left: 2px solid #fff;
  padding-left: 0.8rem;
  margin: 1rem 0;
}
.alerte {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  background-color: rgb(199, 0, 0);
  padding: 1rem;
}
.alerte__title {
  color: #fff;
  font-size: 2rem;
}
.alerte__content {
  color: #fff;
  font-size: 1rem;
  border-left: 2px solid #fff;
  padding-left: 0.8rem;
  margin: 1rem 0;
}
.form {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.group-label {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.group-input {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.input__radio {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
}
.group-btn {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
input[type="text"] {
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid #ccc;
}
/* color du radio select #333 */
input[type="radio"] {
  appearance: none;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
input[type="radio"]:checked {
  background-color: #3a3a3a;
}
button {
  padding: 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
button:hover {
  background-color: #333;
  color: #fff;
}
.result {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}
.loading__spinner {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: #333;
  animation: spin 1s infinite linear;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

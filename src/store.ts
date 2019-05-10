import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hello: "Hello",
    professorSortList: [
      "Overall best",
      "Most reviews",
      "Highest rated",
      "Marking leniency",
      'Level of "fun"',
      "Amount of work"
    ],
    moduleSortList: [
      "Most number of reviews",
      "Most professors teaching",
      "Most classes",
      "Most vacancies",
    ],
    topProfessors: [
      {
        src: "",
        name: "Alice, ZHANG Lin",
        reviews: 440,
        rating: 4.9,
        school: "sob",
        liked: false
      },
      {
        src: "",
        name: "Udom Paowsong",
        reviews: 382,
        rating: 4.9,
        school: "sis",
        liked: false
      },
      {
        src: "",
        name: "Carl Wildner",
        reviews: 483,
        rating: 4.7,
        school: "socsc",
        liked: false
      }
    ],
    topModules: [
      {
        subjectArea: "LGST",
        moduleCode: "101",
        moduleName: "Ethics in Business",
        reviews: 102,
        professors: ["a", "b", "c"],
        classes: ["a", "b", "c"],
        vacancies: 20
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
});

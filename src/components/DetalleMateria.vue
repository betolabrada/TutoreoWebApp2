<template>
<div>
  <font-awesome-icon icon="arrow-left"></font-awesome-icon>
  <div class="animated slideInRight">
    <div class="about container">
      <h1>{{name}}</h1>
    </div>

  </div>

</div>
</template>

<script>
import db from "@/db.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name:'DetalleMateria',
  data(){
    return{
      id_curso:null,
      name:null,
    }
  },
  beforeRouteEnter(to, from, next){
        db.collection('cursos').where('id_curso', 
        '==', to.params.id_curso).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.id_curso = doc.data().id_curso
                    vm.name = doc.data().nombre
                })
            })
        })
    },
    watch: {
        '$route': 'fetchData'
    },
  methods:{
    
  },
  components: {
    FontAwesomeIcon
  }  
}
</script>
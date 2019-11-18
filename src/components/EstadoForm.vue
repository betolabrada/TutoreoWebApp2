<template>
  <section class="form-group row">
    <label for="area" class="col-sm-2 col-form-label">Estado de origen:</label>
    <div class="input-group col-sm-6">
      
    </div>
  </section>
</template>

<script>
export default {
  name: "States data form",
  data: function() {
    return {
      state: "",
      states: [
        "Aguascalientes",
        "Baja California",
        "Baja California Sur",
        "Campeche",
        "Chiapas",
        "Chihuahua",
        "Coahuila de Zaragoza",
        "Colima",
        "Durango",
        "Estado de México",
        "Guanajuato",
        "Guerrero",
        "Hidalgo",
        "Jalisco",
        "Michoacán de Ocampo",
        "Morelos",
        "Nayarit",
        "Nuevo León",
        "Oaxaca",
        "Puebla",
        "Querétaro",
        "Quintana Roo",
        "San Luis Potosí",
        "Sinaloa",
        "Sonora",
        "Tabasco",
        "Tamaulipas",
        "Tlaxcala",
        "Veracruz de Ignacio de la Llave",
        "Yucatán",
        "Zacatecas"
      ]
    };
  }
};
</script>
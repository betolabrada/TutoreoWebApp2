<template>
<div>
  <form class="md-layout md-alignment-center">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Inicia Sesión</div>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-large-size-100 md-small-size-100">
            <md-field>
              <label for="user-email">Email</label>
              <md-input v-model="email" type="email" name="user-email" id="user-email" />
            </md-field>
          </div>
          <div class="md-layout-item md-large-size-100 md-small-size-100">
            <md-field>
              <label for="user-password">Password</label>
              <md-input v-model="password" type="password" name="user-password" id="user-password" />
            </md-field>
          </div>
        </div>
      </md-card-content>
      <md-card-actions>
        <md-button @click="SignIn" type="button" class="md-primary">Iniciar Sesión</md-button>
      </md-card-actions>
    </md-card>
  </form>
</div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
<template>
  <div class="navbar">
    <Button
      v-if="!isAuthenticated"
      label="Login"
      severity="info"
      outlined
      @click="login"
    />
    <div v-else class="user-info">
      <span class="user-email">{{ user?.email }}</span>
      <Button
        label="Logout"
        severity="danger"
        raised
        @click="logoutUser"
      />
    </div>
  </div>
</template>
<script setup>
import { useAuth0 } from "@auth0/auth0-vue"
const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0()
function login() {
  loginWithRedirect()
} 
function logoutUser() {
  logout({ returnTo: window.location.origin })
}
</script>
<style scoped>
.navbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f5f5f5;
  gap: 1.5rem;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.user-email {
  font-size: 0.95rem;
  color: #333;
}
</style>

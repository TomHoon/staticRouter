<template>
  <div id="app">
	  <button @click="go">go index</button>
	  <router-link to="/">main</router-link>
	  <br/>
	  <router-link to="/index">layout</router-link>

	  <router-view/>
  </div>
</template>

<script>
export default {
	mounted() {
		console.log('...>>> test ');
		console.log('...>>> process.env.BASE_URL ', process.env.BASE_URL);
	},
	methods: {
		go(){
			this.$router.push('/index');
		}
	}

}
</script>
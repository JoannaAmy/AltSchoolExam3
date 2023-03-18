import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'
import "./App.css"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faUserSecret, facoffee } from '@fortawesome/free-solid-svg-icons'



// App.component ('font-awesome-icon', FontAwesomeIcon)

createApp(App).use(router).use(store).mount('#app')
// library.add(faUserSecret, facoffee)

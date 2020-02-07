import Vue from 'vue'
import App from './widgets/App.vue'
import Commons from './widgets/commons';

Commons.forEach(component => {
    Vue.component(component.name, component);
});

Vue.prototype.$hub = new Vue()
Vue.prototype.$content = require('./assets/content/content.js').default

// Vue.prototype.$mediaSrc = '/static/content/'
Vue.prototype.$mediaSrc = 'https://lori-maigne-media.s3.amazonaws.com/'

new Vue({
  el: '#app',
  router:  require('./router/index.js').default,
  render: h => h(App)
})

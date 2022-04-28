import { Router } from '@vaadin/router'

const outlet = document.getElementById('brewery-app')
const router = new Router(outlet)

router.setRoutes([
  {path: '/',     component: 'brewery-app'},
  {path: '/brewery/:id', component: 'brewery-detail'},
  {path: '/(.*)', component: 'not-found'},
])
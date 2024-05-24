import { createRouter, createWebHistory } from 'vue-router'
import Painel from '../views/Painel.vue'
import Projetos from '@/views/Projetos.vue'
import Contratos from '@/views/Contratos.vue'
import Vagas from '@/views/Vagas.vue'
import Usuarios from '@/views/Usuarios.vue'
import UsuariosDetalhado from '@/views/UsuariosDetalhado.vue'

const routes = [
  {
    path: '/',
    name: 'painel',
    component: Painel
  },
  {
    path: '/projetos',
    name: 'projetos',
    component: Projetos
  },
  {
    path: '/contratos',
    name: 'contratos',
    component:  Contratos
  },
  {
    path: '/vagas',
    name: 'vagas',
    component:  Vagas
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component:  Usuarios
  },
  {
    path: '/usuarios/:id',
    name: 'usuariosDetalhado',
    props: true,
    component:  UsuariosDetalhado
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

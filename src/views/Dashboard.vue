<script>
    import Nav from '../components/Nav.vue'
    import Top from '../components/Top.vue'
    import axios from 'axios';
    export default {
        components: {
            Nav,
            Top
        },
        data(){
            return{ 
                products:null,
                pagina: 1,
                selected: null}
      },
      mounted(){
        this.getProducts();
        this.toggle();
      }, 
      methods:{
        getProducts(){
          axios.get('http://localhost:3000/')
          .then(response => (
            this.products = response.data)
          );
        }, 
        isSelected(){
        return selected = false
        }
      }
    } 
</script>

<template>
    <Nav 
    
    />
    <section class="dashboard">
        <Top 
        @is_Selected="isSelected"
        />
        <div class="dash-content">

            <div class="overview">
                <!-- NAVBAR -->
                <div class="title">
                    <i class="ri-pie-chart-box-line icono-dash"></i>
                    <span class="text">Panel de control</span>
                </div>

                <!-- BOXES -->
                <div class="boxes">
                    <!-- BOX -->
                    <div class="box box1">
                        <i class="ri-store-2-line"></i>
                        <span class="text">Total tiendas</span>
                        <span class="number">508</span>
                    </div>
                    <!-- BOX -->
                    <div class="box box2">
                        <i class="ri-shopping-bag-2-line"></i>
                        <span class="text">Total ventas</span>
                        <span class="number">1,201,00$</span>
                    </div>
                    <!-- BOX -->
                    <div class="box box3">
                        <i class="ri-folder-user-line"></i>
                        <span class="text">Usuarios</span>
                        <span class="number">302</span>
                    </div>
                </div>
            </div>

            <div class="activity">

                <div class="datatable-container">
        <div class="header-tools">
            <div class="tools">
                <ul>
                    <li><span><input type="checkbox" id=""></span></li>
                    <li>
                        <button>
                            <i class="ri-add-box-line"></i>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i class="ri-edit-2-line"></i>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i class="ri-delete-bin-5-line"></i>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i class="ri-file-pdf-2-line"></i>
                        </button>
                    </li>
                </ul>
            </div>

            <div class="search">
                <input type="text" name="" class="search-input" placeholder="Filtrar">
            </div>
        </div>

        <table class="datatable">
            <thead>
                <tr>
                    <th></th>
                    <th>Status</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Password</th>
                    <th>Fecha ingreso</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="table-checkbox"><input type="checkbox" id=""></td>
                    <td><span class="available"></span></td>
                    <td>Dilan Marcano</td>
                    <td>Admin</td>
                    <td>Guigue</td>
                    <td>21</td>
                    <td>2023/10/02</td>
                </tr>
                <tr>
                    <td class="table-checkbox"><input type="checkbox" id=""></td>
                    <td><span class="away"></span></td>
                    <td>Miguelis Palacios</td>
                    <td>User</td>
                    <td>Carabobo</td>
                    <td>26</td>
                    <td>2023/01/02</td>
                </tr>
                <tr>
                    <td class="table-checkbox"><input type="checkbox" id=""></td>
                    <td><span class="offline"></span></td>
                    <td>Valeria Villavicencio</td>
                    <td>User</td>
                    <td>Naguanagua</td>
                    <td>26</td>
                    <td>2023/11/02</td>
                </tr>
                <tr>
                    <td class="table-checkbox"><input type="checkbox" id=""></td>
                    <td><span class="away"></span></td>
                    <td>Valeria Villavicencio</td>
                    <td>User</td>
                    <td>Naguanagua</td>
                    <td>26</td>
                    <td>2023/11/02</td>
                </tr>
                <tr>
                    <td class="table-checkbox"><input type="checkbox" id=""></td>
                    <td><span class="available"></span></td>
                    <td>Daniel Gonzalez</td>
                    <td>Admin</td>
                    <td>Carabobo</td>
                    <td>22</td>
                    <td>2023/05/02</td>
                </tr>
                <tr>
                    <td class="table-checkbox"><input type="checkbox" id=""></td>
                    <td><span class="away"></span></td>
                    <td>Zulja Pererira</td>
                    <td>USer</td>
                    <td>San diego</td>
                    <td>27</td>
                    <td>2023/05/02</td>
                </tr>
                <tr>
                    <td class="table-checkbox"><input type="checkbox" id=""></td>
                    <td><span class="offline"></span></td>
                    <td>Chritian Quintero</td>
                    <td>Developer y bi</td>
                    <td>Trigal</td>
                    <td>26</td>
                    <td>2023/05/02</td>
                </tr>
                <tr>
                    <td class="table-checkbox"><input type="checkbox" id=""></td>
                    <td><span class="away"></span></td>
                    <td>Daniel Gonzalez</td>
                    <td>Developer</td>
                    <td>Carabobo</td>
                    <td>22</td>
                    <td>2023/05/02</td>
                </tr>
            </tbody>
        </table>

        <div class="footer-tools">
            <div class="list-items">
                Mostrar
                <select name="n-entries" id="n-enties" class="n-enties">
                    <option value="15">5</option>
                    <option value="10">10</option>
                    <option value="5">15</option>
                </select>
                data
            </div>

            <div class="pages">
                <ul>
                    <li><button class="active">1</button></li>
                    <li><button>2</button></li>
                    <li><button>3</button></li>
                    <li><button>4</button></li>
                    <li><span>...</span></li>
                    <li><button>9</button></li>
                    <li><button>10</button></li>
                </ul>
            </div>
        </div>
                </div>
            </div>
        </div>
    </section>
</template>


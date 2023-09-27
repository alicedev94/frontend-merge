<script>
import Nav from '../components/Nav.vue'
import Top from '../components/Top.vue'
export default {
    components: {
        Nav,
        Top
    },
    }
</script>

<template>
    <Nav />
    <section class="dashboard">
        <Top />
        <div class="dash-content">

            <div class="overview">
                <!-- NAVBAR -->
                <div class="title">
                    <i class="ri-pie-chart-box-line icono-dash"></i>
                    <span class="text">Panel de control</span>
                </div>
            </div>

            <div class="activity">
            <section class="container_form1">
                <h1>Registro</h1>
                <form action="#" class="form">
                    <div class="input-box">
                        <label for="Nombres">Nombre de la tienda: </label>
                        <input type="text" placeholder="Tienda" required>
                    </div>
                    <div class="input-box">
                        <label for="Nombres">Producto: </label>
                        <input type="text" placeholder="Producto" required>
                    </div>

                    <div class="column">
                        <div class="input-box">
                            <label for="Nombres">Linea del producto: </label>
                            <input type="text" placeholder="Ej. linea blanca">
                        </div>
                        
                        <div class="input-box">
                            <label for="Nombres">Precio: </label>
                            <input type="text" placeholder="Ej. 20$">
                        </div>
                    </div>

                    <div class="gender-box">
                        <h3>Descuento</h3>
                        <div class="gender-option">

                            <div class="gender">
                                <input type="radio" id="check-male" name="gender" checked>
                                <label for="check-male">Si</label>
                            </div>
                            <div class="gender">
                                <input type="radio" id="check-female" name="gender">
                                <label for="check-female">No</label>
                            </div>

                        </div>
                    </div>

                    <div class="input-box addres">
                        <label for="Nombres">Informacion extra del producto: </label>
                        <input type="text" placeholder="Marca" required>

                        <input  type="text" placeholder="Observaciones" required>

                        <div class="column">
                            <div class="select-box">
                                <select name="" id="">
                                    <option hidden value="">Tienda</option>
                                    <option value="">Multimax</option>
                                    <option value="">Ivoo</option>
                                    <option value="">Damasco</option>
                                    <option value="">Traki</option>
                                    <option value="">Samsung</option>
                                </select>
                            </div>
                        </div>

                        <!-- <input type="text"  placeholder="Calle" required>
                        <input type="text" placeholder="Calle2" required>
                        <input type="text" placeholder="Calle3" required> -->
                    </div>
                    <div class="bunttons">
                        <button class="button_form" type="submit">Agregar</button>
                    </div>

                </form>
                </section>
            </div>
        </div>
        <br>
        <br>
    </section>
</template>

<style scoped>
 
.button_form{
  display: block;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #00bd7e;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  width: 50%;
  border-radius: 0.5rem;
  text-transform: uppercase;
  transition: 0.3s all ease;
  margin-top: 1rem;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  border: none;
}

.button_form:hover{
    background-color: #16a072; 
    cursor: pointer;
}
.container_form1{
    position: relative;
    max-width: 1100px;
    width: 100%;
    background: #3A3B3C;
    padding:  40px;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    color: #ccc8c8;
    margin: 0 auto;
}

.container h1{
    font-size: 1.5rem;
    color: #333;
    font-weight: 500;
    text-align: center;
}

.container .form{
   margin-top: 30px; 
}

.form .input-box{
    width: 100%;
    margin-top: 20px;
    background: #3A3B3C;
}

.input-box label{
    color: #b4b4b4;
}

.form input {
    color: #c4c4c4;
    
}

.form :where(.input-box input, .select-box) {
    position: relative;
    height: 50px;
    margin-top: 8px;
    width: 100%;
    outline: none;
    font-size: 1rem;
    color: #c4c4c4;
    border: 1px solid #ccc8c8;
    border-radius: 6px;
    padding-left: 10px;
    background: #454647;
  border: 1px solid #636363;
}

.form .column{
   display: flex;
   column-gap: 30px; 
}

.form :where(.gender-option, .gender){
    display: flex;
    align-items: center;
    column-gap: 50px;
    flex-wrap: wrap;
    color: #b4b4b4;
}

.form .gender{
    column-gap: 5px;
}

.form :where(.gender input, .gender label){
    cursor: pointer;
}

.addres :where(input, .select-box){
    margin-top: 20px;
}

.form .gender-box{
    margin-top: 20px;
    color: #c4c4c4;
    
}

.gender-box h3{
    color: #b4b4b4;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 8px;
}

.select-box select{
    height: 100%;
    width: 99%;
    outline: none;
    border: none;
    color: #c4c4c4;
    font-size: 1rem;
    background: #454647;
}
.input-box .column{
    width: 100%;
}

/* RESPONSIVE */

@media screen and (max-width: 500px){
    .form .column{
        flex-wrap: wrap;
    }

    .form :where(.gender-option, .gender){
        row-gap: 15px;
    }
}
</style>


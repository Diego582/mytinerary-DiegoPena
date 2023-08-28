import { createReducer } from "@reduxjs/toolkit";
import city_actions from "../actions/cities";

const { read_carousel } = city_actions;

const initial_state = {
  carousel: [],
};

console.log(initial_state);
const city_reducer = createReducer(
  initial_state, //estado incial
  (builder) =>
    builder.addCase(
      //callback contructora de estados globales (agrega (mín) un caso de reduccion para cada accion)
      read_carousel.fulfilled, //accion a reducir
      (state, action) => {
        //callback que depende del estado y la accion y es la encargada de reducir los estados
        let new_state = {
          ...state, //a la copia del estado tengo que "llenarle" la propiedad carousel con los datos que me envía la accion
          carousel: action.payload.carousel,
        };
        console.log(new_state, "new_state");
        console.log(initial_state, "IS 2do");
        return new_state; //retorno el nuevo estado para que se actualice la vista
      }
    )
);

export default city_reducer;

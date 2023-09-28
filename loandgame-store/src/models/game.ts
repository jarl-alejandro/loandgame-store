interface Game {
    name:{
        type:string,
        requiered:[true,'El campo "nombre" es requerido.']
        unique:true,
        trim:true
    }; 
    developed_by:{
        type:string,
        requiered:[true,'El campo "desarrollado por:" es requerido.']
        unique:true,
        trim:true
    }
    minimum_age:{
        type:number,
        requiered:[true,'El campo "edad minima" es requerida.']
    }
    timestamps:true
  }

  export default Game;
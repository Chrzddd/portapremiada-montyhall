import PortaModel from "../model/porta";

export function criarPortas(qtde:number, portaComPresente:number): PortaModel[]{
    return Array.from({length:qtde}, (_, i)=>{
        const numero = i + 1
        const temPresente = numero === portaComPresente
        return new PortaModel(numero, temPresente)
    })
}
export function atualizarPortas(portas:PortaModel[], modificada: PortaModel):PortaModel[]{
  return portas.map(portaAtual => {
      const igualAModificada = portaAtual.numero === modificada.numero
      if (igualAModificada){
          return modificada
      }else {
          return modificada.aberta ? portaAtual : portaAtual.desselecionar()
      }
  })
}
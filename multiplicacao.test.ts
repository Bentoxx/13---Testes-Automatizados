import expect from "expect";
import multiplicacao from "./multiplicacao";

describe ('Teste de multiplicação', ()=>{
    test('deve verificar o resultado de uma subtracao', ()=>{
        expect(multiplicacao(6.5, 2)).toBeCloseTo(13.0)
        expect(multiplicacao(6, 8)).toBeCloseTo(48)
        expect(multiplicacao(60, 2)).toBeCloseTo(120)
    })

    test('deve verificar o resultado incorreto de uma multiplicação', ()=>{
        expect(multiplicacao(6, 2)).not.toBeCloseTo(20)
    })
})
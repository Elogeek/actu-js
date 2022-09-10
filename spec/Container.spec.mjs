import {Container} from "../assets/js/components/Container.mjs";

describe("Test de la classe Container", function () {

    const x = new Container();
    let a;
    let b =["hello", 5];

    it('x doit être défini, a doit être indéfini', function (){
        expect(x).toBeDefined();
        expect(a).toBeUndefined();
    });

    it('la const x doit contenir la classe Container, la variable b doit contenir hello', function () {
        expect(x).toContain('Container');
        expect(b).toContain("hello");
    });

    it('la const x ne doit pas contenir 5, la variable b ne doit pas contenir test', function () {
        expect(x).toContain(5);
        expect(b).toContain("test");
    });

    it('Vérification, cela doit être vrai', function () {
        expect(true).toBe(true);
    });

});

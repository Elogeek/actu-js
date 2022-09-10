import {Container} from "../assets/js/components/Container.mjs";

describe("Test de la classe Container", function () {

    const container = new Container();
    let a;
    let b =["hello", 5];

    it('Container doit être défini, a doit être indéfini', function (){
        expect(container).toBeDefined();
        expect(a).toBeUndefined();
    });

    it('la const containerr doit contenir la classe Container, la variable b doit contenir hello', function () {
        expect(container).toContain('Container');
        expect(b).toContain("hello");
    });

    it('la const container ne doit pas contenir 5, la variable b ne doit pas contenir test', function () {
        expect(container).toContain(5);
        expect(b).toContain("test");
    });

    it('Vérification, cela doit être vrai', function () {
        expect(true).toBe(true);
    });

});

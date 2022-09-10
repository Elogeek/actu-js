import {Container} from "../../assets/js/components/Container.mjs";

describe("Test de la classe Container", function () {

    const container = new Container()

    it('Vérification, cela doit être vrai', function () {
        expect(container).toBe(true);
    });

});

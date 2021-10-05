describe('Probando Jest', () => {
    test('Prueba de objetos iguales', () => {

        const datone = {
            nombre: 'Francisco',
            edad: 23
        };
        const datwo = {
            nombre: 'Francisco',
            edad: 23
        };

        expect(datone).toEqual(datwo);
    });
});
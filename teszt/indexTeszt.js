QUnit.module('szam', (hook) => {


QUnit.test('Számmal végződő', assert=> {
    kapott = utolsoSzamjegy(215)
    vart = 5
    assert.equal(kapott, vart)
  });
QUnit.test('Nullával végződő', assert=> {
    kapott = utolsoSzamjegy(230)
    vart = 0
    assert.equal(kapott, vart)
  });
  QUnit.test('Több paraméter', assert=> {
    kapott = utolsoSzamjegy(230,1)
    vart = "Egynél több paraméter"
    assert.equal(kapott, vart)
  });
  QUnit.test('paraméter nélkül', assert=> {
    kapott = utolsoSzamjegy()
    vart = "Nincs paraméter"
    assert.equal(kapott, vart)
  });
  QUnit.test('Túlcsordulás', assert=> {
    kapott = utolsoSzamjegy(32e+333)
    vart = "Túlcsordulás"
    assert.equal(kapott, vart)
  });

  QUnit.test('Túlcsordulás', assert=> {
    kapott = utolsoSzamjegy("A")
    vart = "Nem szám a bemenet"
    assert.equal(kapott, vart)
  });
QUnit.test('Pozitiv egész számok', assert=> {
    kapott = sorozat([235, 215, 217])
    vart = "5, 5, 7"
    assert.equal(kapott, vart)
  });

})
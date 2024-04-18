test("Example", function(assert) {
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-1");
  assert.propEqual(convertRomanToInteger("33"), {value: 0, message: 'Please enter a valid roman', result:false}, "TC-2");
  assert.propEqual(convertRomanToInteger("@"), {value: 0, message: 'Please enter a valid roman', result:false}, "TC-3");
  assert.propEqual(convertRomanToInteger("XXXX"), {value: 0, message: 'Please enter a valid roman', result:false}, "TC-4");
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: '', result: true}, "TC-5");

  assert.propEqual(convertIntegerToRoman(2), {value: "II", message: '', result: true}, "TC-6");
  assert.propEqual(convertIntegerToRoman("I"), {value:0, message: 'Please enter a valid integer', result:false}, "TC-7");
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: '', result: true}, "TC-8");
  assert.propEqual(convertIntegerToRoman(4000), {value:0, message: 'Please enter a valid integer', result:false}, "TC-9");
  assert.propEqual(convertIntegerToRoman(0), {value:0, message: 'Please enter a valid integer', result:false}, "TC-10");
  assert.propEqual(convertIntegerToRoman(-7), {value:0, message: 'Please enter a valid integer', result:false}, "TC-11");
  assert.propEqual(convertIntegerToRoman(4/22), {value:0, message: 'Please enter a valid integer', result:false} , "TC-12");
  assert.propEqual(convertIntegerToRoman("#"), {value:0, message: 'Please enter a valid integer', result:false} , "TC-13");
});

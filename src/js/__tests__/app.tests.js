import Validator from '../app';

test.each([
  ['ann', true],
  ['123john', false],
  ['_john', false],
  ['joe--doe', false],
  ['john_doe', true],
  ['anne-', false],
  ['Kr259kr', true],
  ['jane123', true],
   
])(('Проверка метода validateUsername'), (obj, exp) => {
  expect(Validator.validateUsername(obj)).toBe(exp);
});
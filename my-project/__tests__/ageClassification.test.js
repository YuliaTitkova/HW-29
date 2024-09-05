const ageClassification = require('./ageClassification');

test('should return null for negative ages', () => {
    expect(ageClassification(-1)).toBe(null);
});

test('should return null for age 0', () => {
    expect(ageClassification(0)).toBe(null);
});

test('should return "Дитинство" for ages from 1 to 24', () => {
    expect(ageClassification(1)).toBe('Дитинство');
    expect(ageClassification(24)).toBe('Дитинство');
    expect(ageClassification(24.01)).toBe('Молодість');
});

test('should return "Молодість" for ages from 25 to 44', () => {
    expect(ageClassification(25)).toBe('Молодість');
    expect(ageClassification(44)).toBe('Молодість');
    expect(ageClassification(44.01)).toBe('Зрілість');
});

test('should return "Зрілість" for ages from 45 to 65', () => {
    expect(ageClassification(45)).toBe('Зрілість');
    expect(ageClassification(65)).toBe('Зрілість');
    expect(ageClassification(65.01)).toBe('Старість');
});

test('should return "Старість" for ages from 66 to 75', () => {
    expect(ageClassification(66)).toBe('Старість');
    expect(ageClassification(75)).toBe('Старість');
    expect(ageClassification(75.01)).toBe('Довголіття');
});

test('should return "Довголіття" for ages from 76 to 90', () => {
    expect(ageClassification(76)).toBe('Довголіття');
    expect(ageClassification(90)).toBe('Довголіття');
    expect(ageClassification(90.01)).toBe('Рекорд');
});

test('should return "Рекорд" for ages from 91 to 122', () => {
    expect(ageClassification(91)).toBe('Рекорд');
    expect(ageClassification(122)).toBe('Рекорд');
    expect(ageClassification(122.01)).toBe(null);
});

test('should return null for ages above 122', () => {
    expect(ageClassification(150)).toBe(null);
});

import { classNames } from './classNames';

describe('name', () => {
  test('with only first param', () => {
    expect(classNames('cls')).toBe('cls');
  });

  test('with additional class', () => {
    const expected = 'cls add_class_1 add_class_2';
    expect(classNames('cls', {}, ['add_class_1', 'add_class_2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'cls add_class_1 add_class_2 hovered scrollable';
    expect(classNames(
      'cls',
      { hovered: true, scrollable: true },
      ['add_class_1', 'add_class_2'],
    )).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'cls add_class_1 add_class_2 hovered';
    expect(classNames(
      'cls',
      { hovered: true, scrollable: false },
      ['add_class_1', 'add_class_2'],
    )).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'cls add_class_1 add_class_2 hovered';
    expect(classNames(
      'cls',
      { hovered: true, scrollable: undefined },
      ['add_class_1', 'add_class_2'],
    )).toBe(expected);
  });
});

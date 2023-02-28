import { Emp } from './emp';

describe('Emp', () => {
  it('should create an instance', () => {
    expect(new Emp('','','','','',new Date,'','')).toBeTruthy();
  });
});

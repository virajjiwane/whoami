import { IntersectionDirective } from './intersection';

describe('IntersectionDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: {} } as any;
    const directive = new IntersectionDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});

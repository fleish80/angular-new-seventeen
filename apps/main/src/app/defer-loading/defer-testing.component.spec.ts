import {ComponentFixture, DeferBlockState, TestBed} from '@angular/core/testing';
import { DeferTestingComponent } from './defer-testing.component';

describe('DeferTestingComponent', () => {
  let component: DeferTestingComponent;
  let fixture: ComponentFixture<DeferTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferTestingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeferTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a defer block in different states', async () => {

    // Retrieve the list of all defer block fixtures and get the first block.
    const deferBlockFixture = (await fixture.getDeferBlocks())[0];

    // Renders placeholder state by default.
    expect(fixture.nativeElement.innerHTML).toContain('Placeholder');

    // Render loading state and verify rendered output.
    await deferBlockFixture.render(DeferBlockState.Loading);
    expect(fixture.nativeElement.innerHTML).toContain('Loading');

    // Render final state and verify the output.
    await deferBlockFixture.render(DeferBlockState.Complete);
    expect(fixture.nativeElement.innerHTML).toContain('<df-defer-child');
  });
});

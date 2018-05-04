import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnoteComponent } from './editnote.component';
import { MatDialogModule, MatDialogRef, MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('EditnoteComponent', () => {
  let component: EditnoteComponent;
  let fixture: ComponentFixture<EditnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditnoteComponent ],
      imports: [MatFormFieldModule,
                MatDialogModule,
                MatDialogRef,
                FormsModule
              ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

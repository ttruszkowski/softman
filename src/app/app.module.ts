import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { CustomMaterialModule } from './custom-material/custom-material.module';

import { InvoiceComponent } from './invoice/invoice.component';
import { NipFormComponent } from './shared/components/nip-form/nip-form.component';
import { CurrencyFormComponent } from './shared/components/currency-form/currency-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerFormComponent } from './shared/components/datepicker-form/datepicker-form.component';
import { InvoiceDetailsComponent } from './invoice/invoice-details/invoice-details.component';
import { InvoiceSummaryComponent } from './invoice/invoice-summary/invoice-summary.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    NipFormComponent,
    CurrencyFormComponent,
    DatepickerFormComponent,
    InvoiceDetailsComponent,
    InvoiceSummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

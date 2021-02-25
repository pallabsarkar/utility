import { NgModule } from "@angular/core";

import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
    imports: [
        InputTextModule,
        CardModule,
        InputTextareaModule,
        TableModule,
        ButtonModule,
        PanelMenuModule
    ],
    exports: [
        InputTextModule,
        CardModule,
        InputTextareaModule,
        TableModule,
        ButtonModule,
        PanelMenuModule
    ]
})
export class CustomPrimeNgModule {

}
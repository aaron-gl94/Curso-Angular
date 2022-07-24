import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";


@NgModule({
    declarations: [
        // Modulo
        ContadorComponent
    ],
    exports: [
        // componentes visibles (publicos)
        ContadorComponent        
    ],
    imports: [
        CommonModule
    ],
})
export class ContadorModule {}
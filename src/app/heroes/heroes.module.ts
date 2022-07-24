import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [
        // Modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        // componentes visibles (publicos)
        ListadoComponent
    ],
    imports: [
        CommonModule
    ],
})
export class HeroesModule { }
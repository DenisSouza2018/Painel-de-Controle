import {Routes} from '@angular/router'
import { LoginComponent } from './login/login.component'
import { PainelComponent } from './painel/painel.component'
import { AddComponent } from './add/add.component'



export const ROUTES: Routes =[

    {path: '',component: LoginComponent},
    {path: 'painel',component: PainelComponent},
    {path: 'add',component: AddComponent}
    

]

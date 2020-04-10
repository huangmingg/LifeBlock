import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewGivenInteractionsPage } from './viewGivenInteractions.page';
import { ExploreContainerComponentModule } from '../../0_explore-container/explore-container.module';
import { SearchUserButtonComponentModule } from '../../6_search-user-button/search-user-button.module'


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SearchUserButtonComponentModule,
    RouterModule.forChild([{ path: '', component: ViewGivenInteractionsPage }])
  ],
  declarations: [ViewGivenInteractionsPage]
})
export class ViewGivenInteractionsPageModule {}
